import React, { useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";
import Suggestion from "./Suggestion";
import { GrLocation } from "react-icons/gr";
import { ChevronDownIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { GoLocation } from "react-icons/go";
import { ShowLocation, StyledInput } from "./Styles";
import { Box, Input, Text } from "@chakra-ui/react";

const initAddress = {
//   houseNumber: "",
//   houseName: "",
//   poi: "",
//   poi_dist: "",
//   street: "",
//   street_dist: "",
//   subSubLocality: "",
//   subLocality: "",
//   locality: "",
  village: "",
  district: "",
  subDistrict: "",
  city: "",
  state: "",
  pincode: "",
//   lat: "",
//   lng: "",
//   area: "",
  formatted_address: "",
};
export default function SearchBar() {
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
      <StyledInput>
        <div
        
          className="locationContainer"
          style={{
            position: "relative",
           // background:"black"
          }}
        >
            <Box width='250px'>
            <GrLocation style={{ color: "black",backgorund:"black" ,width:'20px',marginLeft:'-10px',top:'5px'}}  />
          <Input
          width={'200px'}
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
         
          <ChevronDownIcon className="arrow" style={{ color: "#555" }} />
          {showLocationDiv && (
            <ShowLocation>
             
              {address.formatted_address === "" && (
                <Box className="head">
                  {/* <GoLocation style={{ color: "#555" }} /> */}
                  <Text>Current Location</Text>
                  <Text className="blueText" onClick={handleLocation}>
                    Detect Using GPS{" "}
                  </Text>
                  
                </Box>
              )}
              <Box marginTop={'-15px'}>
              <Text>{address.formatted_address}</Text>
              </Box>
            </ShowLocation>
          )}
          </Box>
        </div>
       
      </StyledInput>
    )
              }