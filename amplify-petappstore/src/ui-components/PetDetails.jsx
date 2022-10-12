/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Divider, Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function PetDetails(props) {
  const { pet, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="960px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PetDetails")}
    >
      <Image
        width="320px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        src={pet?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        width="640px"
        grow="1"
        basis="640px"
        height="306px"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <View
          width="315px"
          height="25px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 423")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="454px"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={pet?.name}
            {...getOverrideProps(overrides, "Kitty Cat")}
          ></Text>
          <Flex
            gap="10px"
            position="absolute"
            top="49px"
            left="0px"
            width="34px"
            justifyContent="flex-end"
            alignItems="flex-start"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 422")}
          ></Flex>
          <MyIcon
            width="24px"
            height="24px"
            position="absolute"
            top="-18px"
            left="570px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "Close")}
          ></MyIcon>
        </View>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="16px"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Tags")}
        >
          <Badge
            display="flex"
            gap="10px"
            width="fit-content"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            height="24px"
            position="relative"
            borderRadius="32px"
            backgroundColor="rgba(239,240,240,1)"
            fontSize="12px"
            lineHeight="12px"
            fontFamily="Inter"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            textAlign="left"
            direction="column"
            size="small"
            variation="default"
            children={`${"Breed: "}${pet?.breed}`}
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age:"}${pet?.age}`}
          {...getOverrideProps(overrides, "Age")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"About: "}${pet?.about}`}
          {...getOverrideProps(overrides, "About")}
        ></Text>
        <Flex
          gap="16px"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Quote")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            width="576px"
            grow="1"
            basis="576px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Color: "}${pet?.color}`}
            {...getOverrideProps(overrides, "Color:")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
