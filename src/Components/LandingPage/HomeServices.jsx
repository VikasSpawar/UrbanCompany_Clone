import { Box, Flex, Link, Text } from "@chakra-ui/react";
import "./Style.css";

const HomeServices = ()=>{
    return(
        <div className="margin">
            <h1>Home Services</h1>
            <Flex id="homeFlex">
                <Box className="homeBox">
                    <Link className="link" href="#" isExternal>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" alt=""  width={"30%"} height={"35%"}/>
                        <Text>Appliance Repair</Text>
                    </Link>
                </Box>
                <Box className="homeBox">
                    <Link className="link" href="#" isExternal>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" alt="" width={"30%"} height={"35%"}/>
                        <Text>Home Painting</Text>
                    </Link>
                </Box>
                <Box className="homeBox">
                    <Link className="link" href="#" isExternal>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" alt="" width={"30%"} height={"35%"}/>
                        <Text>Cleaning & Pest</Text>
                    </Link>
                </Box>
                <Box className="homeBox">
                    <Link className="link" href="#" isExternal>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png" alt="" width={"30%"} height={"35%"}/>
                        <Text>Disinfection</Text>
                    </Link>
                </Box>
                <Box className="homeBox">
                    <Link className="link" href="#" isExternal>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" alt="" width={"30%"} height={"35%"}/>
                        <Text>Home Repairs</Text>
                    </Link>
                </Box>
            </Flex>
        </div>
    );
}

export default HomeServices;