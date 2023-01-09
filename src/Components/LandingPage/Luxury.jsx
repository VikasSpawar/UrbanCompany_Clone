import { Flex , Box , Link, Text} from "@chakra-ui/react";
import "./Style.css";

const Luxury = ()=>{
    return(
        <div className="margin">
            <h1>UC Luxury Experience</h1>
            <Text>Top Professionals | Best Brands | Premium Experience</Text>
            <Flex id="category_image">
                <Link className="link" href="" isExternal>
                    <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883165804-025664.png" alt="" />
                        <Text>Salon Luxe</Text>                        
                    </Box>
                </Link>
                <Link className="link" href="#">
                    <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164057-dd5910.png" alt="" />
                        <Text>Salon for Men Royale</Text>
                    </Box>
                </Link>
                <Link className="link" href="#">
                    <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164904-165c1e.png" alt="" />
                        <Text>Spa Luxe</Text>                        
                    </Box>
                </Link>
                <Link className="link" href="#">
                    <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1631883164502-08f9f6.png" alt="" />
                        <Text>Massage Therapy for Men Royale</Text>
                    </Box>
                </Link>
            </Flex>
        </div>
    );
}

export default Luxury;