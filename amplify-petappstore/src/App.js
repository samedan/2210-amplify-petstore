import { useState } from "react";
import "./App.css";
import { PetProfile, Pets } from "./ui-components";
import { Footer } from "./ui-components";
import { NavBar } from "./ui-components";
import { AddPet } from "./ui-components";
import { PetDetails } from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Storage } from "@aws-amplify/storage";

function App({ user, signOut }) {
  // user & signOut comes from 'withAuthentificator'
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();
  const [updatePet, setUpdatePet] = useState();
  // Update fields state on Edit
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  async function saveFile() {
    await Storage.put("test.txt", "Hello");
  }

  const closeOverride = {
    Close: {
      onClick: () => showDetails(false),
    },
  };

  const formOverride = {
    TextField29766922: {
      placeholder: name,
    },
    TextField29766923: {
      placeholder: age,
    },
    TextField29766924: {
      placeholder: breed,
    },
    TextField34552683: {
      placeholder: about,
    },
    TextField34552690: {
      placeholder: color,
    },
    TextField34552697: {
      placeholder: image,
    },
    image: {
      src:
        updatePet == null
          ? "https://img.icons8.com/color/50/000000/dog"
          : updatePet.image,
    },
    // Update Button
    Button34552705: {
      isDisabled: !updatePet ? true : false,
    },
    // Save button
    Button29766926: {
      isDisabled: updatePet ? true : false,
    },
    // closes the AddPet form
    Icon: {
      onClick: () => {
        setShowForm(false);
        setUpdatePet(false);
      },
    },
    style: {
      cursor: "pointer",
    },
  };

  const navbarOverrides = {
    Button: {
      // Signout Button
      onClick: signOut,
    },
    image: {
      // src: "https://img.icons8.com/plasticine/2x/dog.png"
      src: user?.attributes?.profile,
    },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm);
        setUpdatePet(false);
        saveFile();
      },
    },
  };
  return (
    <div className="App">
      <NavBar overrides={navbarOverrides} width={"100%"} />
      <header className="App-header">
        {showDetails && (
          <PetDetails
            pet={pet}
            style={{ textAlign: "left", margin: "1rem" }}
            overrides={{
              Close: {
                onClick: () => {
                  setShowDetails(false);
                },
                style: { cursor: "pointer" },
              },
            }}
          />
        )}
        {showForm && (
          <AddPet
            style={{ textAlign: "left", margin: "1rem" }}
            overrides={formOverride}
            pet={updatePet}
          />
        )}

        <Pets
          // itemsPerPage={1}
          // currentPage={2}
          // isPaginated={false}
          overrideItems={({ item, index }) => ({
            overrides: {
              Breed: { color: "blue" },
              Button29766907: {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item);
                },
              },
              // Update button
              Button34512701: {
                onClick: () => {
                  if (!showForm) setShowForm(true);
                  setUpdatePet(item);
                  setName(item.name);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setColor(item.color);
                  setImage(item.image);
                },
              },
            },
          })}
        />
      </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default withAuthenticator(App);
