/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Pet } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function AddPet(props) {
  const { pet, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFiveFiveTwoSixEightThreeValue,
    setTextFieldThreeFourFiveFiveTwoSixEightThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFiveFiveTwoSixNineSevenValue,
    setTextFieldThreeFourFiveFiveTwoSixNineSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFiveFiveTwoSixNineZeroValue,
    setTextFieldThreeFourFiveFiveTwoSixNineZeroValue,
  ] = useStateMutationAction("");
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      age: textFieldTwoNineSevenSixSixNineTwoThreeValue,
      breed: textFieldTwoNineSevenSixSixNineTwoFourValue,
      about: textFieldThreeFourFiveFiveTwoSixEightThreeValue,
      image: textFieldThreeFourFiveFiveTwoSixNineSevenValue,
      color: textFieldThreeFourFiveFiveTwoSixNineZeroValue,
    },
    model: Pet,
    schema: schema,
  });
  const buttonThreeFourFiveFiveTwoSevenZeroFiveOnClick =
    useDataStoreUpdateAction({
      fields: {
        name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
        age: textFieldTwoNineSevenSixSixNineTwoThreeValue,
        breed: textFieldTwoNineSevenSixSixNineTwoFourValue,
        about: textFieldThreeFourFiveFiveTwoSixEightThreeValue,
        image: textFieldThreeFourFiveFiveTwoSixNineSevenValue,
        color: textFieldThreeFourFiveFiveTwoSixNineZeroValue,
      },
      id: pet?.id,
      model: Pet,
      schema: schema,
    });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      borderRadius="35px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AddPet")}
    >
      <Flex
        gap="10px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="10px"
          width="563px"
          height="59px"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 83px 12px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <View
            width="46px"
            height="46px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 420")}
          >
            <Image
              width="46px"
              height="46px"
              position="absolute"
              top="0px"
              left="0px"
              borderRadius="160px"
              padding="0px 0px 0px 0px"
              src="https://img.icons8.com/color/50/000000/dog"
              {...getOverrideProps(overrides, "image")}
            ></Image>
          </View>
          <View
            width="495px"
            height="58px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Frame 421")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="center"
              width="62px"
              position="absolute"
              top="3px"
              left="392px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Add Pet"
              {...getOverrideProps(overrides, "Add Pet")}
            ></Text>
            <View
              width="24px"
              height="24px"
              position="absolute"
              top="calc(50% - 12px - 17px)"
              left="calc(50% - 12px - -235.5px)"
              borderRadius="3px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(149,4,149,1)"
              {...getOverrideProps(overrides, "Icon")}
            >
              <Icon
                width="14px"
                height="14px"
                viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
                paths={[
                  {
                    d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                    fill: "rgba(255,255,255,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="20.83%"
                bottom="20.83%"
                left="20.83%"
                right="20.83%"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Name"
            placeholder="Art"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            display="flex"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Age"
            placeholder="12"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            display="flex"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Breed"
            placeholder="Labrador"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            display="flex"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="About"
            placeholder="Cute, funny"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourFiveFiveTwoSixEightThreeValue}
            onChange={(event) => {
              setTextFieldThreeFourFiveFiveTwoSixEightThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34552683")}
          ></TextField>
          <TextField
            display="flex"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Color"
            placeholder="blue"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourFiveFiveTwoSixNineZeroValue}
            onChange={(event) => {
              setTextFieldThreeFourFiveFiveTwoSixNineZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34552690")}
          ></TextField>
          <TextField
            display="flex"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Image"
            placeholder="Image URL"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeFourFiveFiveTwoSixNineSevenValue}
            onChange={(event) => {
              setTextFieldThreeFourFiveFiveTwoSixNineSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34552697")}
          ></TextField>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Flex
          gap="40px"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Button
            display="flex"
            gap="0"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="40px"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
          <Button
            display="flex"
            gap="0"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="40px"
            position="relative"
            padding="8px 16px 8px 16px"
            size="default"
            isDisabled={true}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeFourFiveFiveTwoSevenZeroFiveOnClick();
            }}
            {...getOverrideProps(overrides, "Button34552705")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
