import { Flex, Box, Link, Text } from "@chakra-ui/react";
import "./Style.css";
import carpenter from "./images/carpenter.png";

const HomeRepair = () => {
  return (
    <div className="margin">
      <h1>Home Repairs</h1>
      <Flex id="Repair_image">
        <Link className="link" href="" isExternal>
          <Box>
            <img src={carpenter} alt="" />
            <Text>Furniture Making, Upholstery & Polish</Text>
          </Box>
        </Link>
        <Link className="link" href="#">
          <Box>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg"
              alt=""
            />
            <Text>Carpenters</Text>
          </Box>
        </Link>
        <Link className="link" href="#">
          <Box>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg"
              alt=""
            />
            <Text>Electricians</Text>
          </Box>
        </Link>
        <Link className="link" href="#">
          <Box>
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg"
              alt=""
            />
            <Text>Plumbers</Text>
          </Box>
        </Link>
      </Flex>
    </div>
  );
};

export default HomeRepair;
