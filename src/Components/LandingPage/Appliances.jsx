import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Appliances = ()=>{
    return(
        <div className="margin">
            <h1>Appliances</h1>
            <Text>Servicing, Repair, Installation & Uninstallation</Text>
            <Flex id="appliance_image">
                <Link className="link" href="https://www.urbancompany.com/cart?city=city_delhi_v2&category=geyser_reapir">
                    <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png" alt="" />
                        <Text>Geyser</Text>
                        <p>Starts at ₹249</p>
                    </Box>
                </Link>
                <Link className="link" href="#">
                    <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png" alt="" />
                        <Text>Water Purifier Service</Text>
                        <p>Up to 45% Off</p>
                    </Box>
                </Link>
                <Link className="link" href="#">
                    <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg" alt="" />
                        <Text>Air Purifier</Text>
                        <p>Flat ₹100 off</p>
                    </Box>
                </Link>
            </Flex>
        </div>
    );
}

export default Appliances;