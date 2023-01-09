import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CategoryItems } from "../Components/CategoryItems";
import useTimeout from "../Components/DelayLoading";
import { PopUpForUSsafe } from "../Components/PopUpForUSSafe";
import { ScrollingExample } from "../Components/PopUpModel";

import { getProductData } from "../Redux/App/action";
import { getCartData } from "../Redux/Cart/action";

const Product = () => {
  const Ready = useTimeout(1500);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.CartReducer.cart);
  const ProductData = useSelector((store) => store.AppReducer.ProductData);
  const [totalCartValue, setTotalCartValue] = useState(cart);

  const CountCartValue = () => {
    let Sum = 0;
    cart.forEach((el) => {
      Sum += +el.price;
    });

    setTotalCartValue(Sum);
  };

  useEffect(() => {
    if (cart && cart.length > 0) {
      CountCartValue();
    }
  }, [cart]);

  useEffect(() => {
    CountCartValue();
    dispatch(getCartData());
    dispatch(getProductData(id));
  }, [id]);

  return (
    <Box p="10" margin={"auto"} width={"85%"}>
      {/* Video Div */}
      <Box
        flexDir={["column", "column", "row", "row"]}
        my={"10"}
        py={"10"}
        style={{
          // width: "100%",
          // border: "1px solid red",
          display: "flex",
          justifyContent: "space-evenly",
          // flexWrap: "wrap"
        }}
      >
        <Box margin={"auto"} p="5" w={"100%"} textAlign={"left"}>
          {!Ready && (
            <Box my={5} width={"450px"}>
              {" "}
              <Skeleton rounded={10} w="30%" height={10} size="10" />
              <SkeletonText
                mt="4"
                noOfLines={1}
                spacing="4"
                w={"70%"}
                skeletonHeight="20"
              />
            </Box>
          )}
          {Ready && ProductData.head ? (
            <Box width={"100%"}>
              <PopUpForUSsafe />
              <Heading>{ProductData.head}</Heading>
            </Box>
          ) : (
            <Box width={"100%"}>
              {" "}
              <Skeleton rounded={10} w="30%" height={10} size="10" />
              <SkeletonText
                mt="4"
                noOfLines={1}
                spacing="4"
                w={"70%"}
                skeletonHeight="20"
              />
            </Box>
          )}
        </Box>

        {/* Front Video */}
        <Box margin="auto" w={"100%"}>
          {ProductData.video ? (
            <Box width={"fit-content"} m="auto">
              <iframe
                loop="0"
                style={{ borderRadius: "10px" }}
                title="naruto"
                width={["595px", "300px"]}
                height={["335px", "180px"]}
                controls="0"
                modestbranding="1"
                src={`https://www.youtube.com/embed/${ProductData?.video}?playlist=${ProductData?.video}&autoplay=1&mute=1&controls=0&modestbranding=1&autoplay=1&loop=1`}
              />
            </Box>
          ) : (
            <Box w={"100%"}>
              <Skeleton rounded={10} w="595px" h={"335px"} size="20" />
            </Box>
          )}
        </Box>
      </Box>

      {/* Navbar */}
      <Box my={"10"} w={"100%"} bg="gray.200" h={"4px"}></Box>
      <Box position={"sticky"} top="0" zIndex="1">
        <Flex
          p="4"
          margin={"auto"}
          display={"flex"}
          justifyContent="space-evenly"
          // wrap={"wrap"}

          bg={"white"}

          // borderBottom={"0.1px solid gray"}
        >
          {/* {!ProductData.categories&&<Skeleton display={"flex"} h="20" width="full"/>} */}

          {Ready &&
            ProductData?.categories?.map((el, i) => (
              <CategoryItems key={i} {...el} />
            ))}
        </Flex>

        <Divider borderColor="gray.400" />
      </Box>

      {/* Listing All Products */}
      <Box flexDirection={["column", " ", "row", "row"]} display={"flex"}>
        <Box w={"full"}>
          {!Ready && (
            <Box marginTop={5}>
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          )}

          {
            // products[currentPage].productList.map((el, i) => <ProductItems key={i} {...el} />)
            ProductData?.productList?.map((el, i) => (
              <ScrollingExample key={i} {...el} />
            ))
          }
        </Box>

        {/* Product and Offer Divider */}

        <Box mx={"60px"}>
          <Divider orientation="vertical" borderColor="gray.400" />
        </Box>

        <Box
          className="offers"
          // width="60%"
          width={["100%", "", "60%"]}
          pos={["relative", "relative", "sticky", "sticky"]}
          flexDirection={"column"}
        >
          <VStack
            className="H"
            overflow={"auto"}
            p={10}
            // className="offers"
            flexDirection={"column"}
          >
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Save 15% on every order </Heading>
              <p>GET Plus Now</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Assured cashback on Paytm </Heading>
              <p>Upto 500 off</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Mobikwik | Zip (Pay Later) </Heading>
              <p>Get 5% assured cashback</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>5% Simple cashback up to 750</Heading>
              <p>Get upto 750 cashback</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>15% off on Kotak cards</Heading>
              <p>15% off upto INR250</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Upto 200 cashback</Heading>
              <p>on Amazon Pay</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Assured cashback on Paytm </Heading>
              <p>Upto 500 off</p>
            </Box>

            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}>Assured cashback on Paytm </Heading>
              <p>Upto 500 off</p>
            </Box>
            <Box width={"full"} p="2" rounded={5} bg={"gray.400"}>
              <Heading size={"sm"}> </Heading>
              <p>Upto 500 off</p>
            </Box>
          </VStack>
          {totalCartValue && (
            <Box
              textAlign={"left"}
              zIndex={0}
              p="4"
              m="4"
              bg={"white"}
              position={"sticky"}
              bottom="0"
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Box w={"full"}>
                <Heading>₹{totalCartValue}</Heading>
              </Box>
              <Box w={"full"}>
                <Link to="/cart">
                  <Button
                    rounded={8}
                    h={"50px"}
                    width={"full"}
                    color="white"
                    bg={"rgb(111,67,229)"}
                  >
                    View Cart
                  </Button>
                </Link>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Product);
