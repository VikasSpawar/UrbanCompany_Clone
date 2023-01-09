import { Flex , Box , Link, Text} from "@chakra-ui/react";
import "./Style.css";
import carpenter from "./images/carpenter.png";

const NewCategory = ()=>{
    return(
        <div className="margin">
            <h1>New Category Launches</h1>
            <Flex id="category_image">
                <Link className="link" href="https://www.urbancompany.com/cart?city=city_delhi_v2&category=free_dc" isExternal>
                    <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg" alt="" />
                        <Text>Expert Counselling</Text>
                        <Text>Advanced Skin Treatments</Text>
                    </Box>
                </Link>
                <Link className="link" href="#">
                    <Box>
                        <img src={carpenter} alt="" />
                        <Text>Furniture Making, Upholstery & Polish</Text>
                    </Box>
                </Link>
                <Link className="link" href="#">
                    <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg" alt="" />
                        <Text>Air Purifier</Text>
                        <Text>Flat ₹100 off</Text>
                    </Box>
                </Link>
                <Link className="link" href="#">
                    <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg" alt="" />
                        <Text>RO Water Purifier</Text>
                    </Box>
                </Link>
            </Flex>
        </div>
    );
}

export default NewCategory;