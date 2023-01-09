import {
  Box,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import woman from "../Navbar/Image/Banner.png";
import { Cities } from "./Cities";
import { Link, useNavigate } from "react-router-dom";
import "./BodyPage.css";
import Im from "../Navbar/Image/mid.png";
import mobile from "../Navbar/Image/mobile.png";
import Navbar from "../Navbar/Navbar";
const Body_1 = () => {
  console.log(Cities);

  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleChange = (value) => {
    setCity(value);
    localStorage.setItem("location", value);
    navigate(`/${value}`);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Box className="hero" pos={"relative"}>
        <Box>
          <Image w={"45%"} src={woman} />
        </Box>
        <Box>
          <Box
            width={"100%"}
            height={"100%"}
            // border={"1px solid yellow"}
            className="text"
            fontWeight={"bold"}
            pos={"absolute"}
            right="0.5"
            top={"0.5"}
          >
            {/* <Text border={"1px solid yellow"}>Sample Text</Text> */}
            <Box
              className="box2"
              // border={"1px solid blue"}
              width={"44%"}
              marginLeft={"55%"}
              h={"100%"}
            >
              <Box gap={5}>
                <Text className="heading">URBAN COMPANY</Text>
                <Text className="subHeading">
                  Quality home services, on demand
                </Text>
                <br />
                <Text className="exp" w={"24rem"} textAlign={"left"}>
                  Experienced, hand-picked Professionals to serve you at your
                  doorstep
                </Text>
                <br />
                <Box
                  bg={"whiteAlpha.900"}
                  borderRadius={"8"}
                  w="400px"
                  padding={"3"}
                  color={"blackAlpha.900"}
                  textAlign="left"
                >
                  <Text>Where do you need a service?</Text>
                  <Select
                    textAlign={"center"}
                    cursor={"pointer"}
                    placeholder="Select City"
                    value={city}
                    width={"20em"}
                    onChange={(e) => handleChange(e.target.value)}
                  >
                    {Cities.map((item, index) =>
                      item.city ? (
                        <option
                          key={index}
                          style={{ cursor: "pointer" }}
                          value={item.city}
                        >
                          {item.city}
                        </option>
                      ) : (
                        <option key={index} disabled value={item.country}>
                          {item.country}
                        </option>
                      )
                    )}
                  </Select>
                  {/* <br /> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Stack>
        <Image src={Im} />
      </Stack>
      <Stack>
        <Image src={mobile} />
      </Stack>
    </div>
  );
};

export default Body_1;
