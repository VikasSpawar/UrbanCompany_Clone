import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import Services from "../Services/Services";
import styles from "./TopHeading.module.css";

// ************************************************
import { Link } from "react-router-dom";

import axios from "axios";
import { ShowLocation, StyledInput } from "../SearchBar/Styles";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Suggestion from "../SearchBar/Suggestion";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer/Footer";

//************************************************* */
function TopHeading() {
  const [location, setLocation] = useState("");
  const [textInput, setTextInput] = useState("");
  const [showLocationDiv, setShowLocationDiv] = useState(false);
  const [address, setAddress] = useState(initAddress);
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  //console.log(location)

  const handleSearch = (e) => {
    setTextInput(e.target.value);
  };

  const getCoordinates = (position) => {
    const { longitude, latitude } = position.coords;
    axios
      .get(
        `https://apis.mapmyindia.com/advancedmaps/v1/6hm1qanekr738vwho6stcqgyo47wrt4w/rev_geocode?lat=${latitude}&lng=${longitude}`
      )
      .then((res) => {
        setAddress(res.data.results[0]);
      })
      .catch(console.error);
  };
  return (
    <div>
      <Navbar />
      <Box className="homeTopBox">
        <Box className={styles.homeTopBox}>
          <Container color="whitesmoke" fontSize={"12px"}>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                {/* <BreadcrumbLink href="#">{selectedCity}</BreadcrumbLink> */}
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>

          <Heading
            as={"h1"}
            fontSize="48px"
            fontWeight="500"
            color="white"
            lineHeight={"72px"}
          >
            Home services, on demand.
          </Heading>
          <br />
          <br />

          <Container
            maxW="3xl"
            lineHeight={"24px"}
            h="300px"
            mt="20%"
            position="absolute"
            className="search"
          >
            <Flex h="60px" justifyContent={"space-between"}>
              <Flex
                alignItems={"center"}
                bgColor={"whitesmoke"}
                borderRadius="5px"
                w="25%"
              >
                <Image
                  w="35px"
                  src="https://images.urbanclap.com/image/upload//q_auto,f_auto,fl_progressive:steep/t_medium_res_template/v1514444369/Flag_of_India_28Dec2017-1.png"
                  alt="flag"
                  m="5%"
                />
                {/* <Text>{selectedCity}</Text> */}
                <Popover isLazy>
                  <PopoverTrigger>
                    <Button bg="whitesmoke">
                      <GoTriangleDown />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent mt="3%" w="50vh" h="150px">
                    <PopoverHeader fontWeight="semibold"></PopoverHeader>
                    <PopoverArrow ml="-8rem" />
                    <PopoverCloseButton />
                    <PopoverBody mt="3%" h="40%">
                      {/* ***************************************************************** */}
                      <Box>
                        <StyledInput>
                          <Box
                            className="locationContainer"
                            style={{
                              position: "relative",
                              // background:"black"
                            }}
                          >
                            <Box width="250px">
                              <GrLocation
                                style={{
                                  color: "black",
                                  backgorund: "black",
                                  width: "20px",
                                  marginLeft: "-10px",
                                  top: "5px",
                                }}
                              />
                              <Input
                                x-webkit-speech
                                width={"200px"}
                                className="locationInput"
                                placeholder={
                                  address.formatted_address.length > 0
                                    ? address.formatted_address
                                        .split("")
                                        .map((a, i) => (i <= 9 ? a : ""))
                                        .join("") + "..."
                                    : "India"
                                }
                                readOnly
                                type="text"
                                onClick={() => setShowLocationDiv(true)}
                              />

                              <ChevronDownIcon
                                className="arrow"
                                style={{ color: "#555" }}
                              />
                              {showLocationDiv && (
                                <ShowLocation>
                                  {address.formatted_address === "" && (
                                    <Box className="head">
                                      {/* <GoLocation style={{ color: "#555" }} /> */}
                                      <Text>Current Location</Text>
                                      <Text
                                        className="blueText"
                                        onClick={handleLocation}
                                      >
                                        Detect Using GPS{" "}
                                      </Text>
                                    </Box>
                                  )}
                                  <Box marginTop={"-15px"}>
                                    <Text>{address.formatted_address}</Text>
                                  </Box>
                                </ShowLocation>
                              )}
                            </Box>
                          </Box>
                        </StyledInput>
                      </Box>
                      {/* ************************************************************************** */}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              <Flex w="70%" h="100%">
                <Button
                  borderRadius={"5px 0 0 5px"}
                  h="100%"
                  bg="whitesmoke"
                  fontSize={"30px"}
                  pb="5%"
                >
                  <AiOutlineSearch />
                </Button>
                <Input
                  // value={inputText}
                  // onChange={handleInputChange}
                  w="100%"
                  borderRadius={"0 5px 5px 0"}
                  h="100%"
                  bg="whitesmoke"
                  focusBorderColor="none"
                  placeholder="Search for services"
                />
              </Flex>
            </Flex>
          </Container>

          <br />
          <Container color="white" marginLeft="37%">
            <Breadcrumb separator=",">
              <BreadcrumbItem>
                <BreadcrumbLink>Women's Therapies</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink>Salon for Men</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>Men's Therapies</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </Box>
        {/* <ServicesCategory data={cardData} /> */}
      </Box>
      <HStack
        // boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        width={"100%"}
        margin={"auto"}
        justifyContent={"center"}
        position="absolute"
        top={"580px"}
        bg="white"
        // border="2px solid red"
      >
        <Services />
      </HStack>

      <LandingPage />
      <Box w={"100%"} border="2px solid red" margin={"auto"} bg="black">
        <Footer />
      </Box>
    </div>
  );
}

export default TopHeading;

const initAddress = {
  houseNumber: "",
  houseName: "",
  poi: "",
  poi_dist: "",
  street: "",
  street_dist: "",
  subSubLocality: "",
  subLocality: "",
  locality: "",
  village: "",
  district: "",
  subDistrict: "",
  city: "",
  state: "",
  pincode: "",
  lat: "",
  lng: "",
  area: "",
  formatted_address: "",
};
