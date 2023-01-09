import { Text  , Link, Box} from "@chakra-ui/react";
import Carousel from "better-react-carousel";

const Salon = ()=>{
    return(
        <div className="margin">
            <h1>Salon, Spa and Massage services</h1>
            <Text>Hygienic & Single use products | Low-contact services</Text>
            <div id="carousel">
                <Carousel cols={4} rows={1} gap={20} loop>
                    <Carousel.Item>
                        <Link className="link" href="https://www.urbancompany.com/cart?city=city_delhi_v2&category=salon_at_home" isExternal>
                        <Box>
                            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg" alt="" />
                            <Text>Salon Prime</Text>
                            <Text>Free Waxing</Text>
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                            <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg" alt="" />
                        <Text>Salon for Men</Text>
                        <Text>Flat ₹100 off</Text>
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                            <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png" alt="" />
                        <Text>Spa for Women</Text>
                        <Text>Free head massage</Text>
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                        <Box>                        
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg" alt="" />
                        <Text>Massage for Men</Text>
                        <Text>Starts at ₹499</Text>
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                            <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_9b68f7b0.jpeg" alt="" />
                        <Text>Makeup & Styling Studio</Text>
                        <Text>Artists trained by Chandni Singh Studio</Text>
                        </Box>
                        </Link>
                    </Carousel.Item>  
                    <Carousel.Item>
                        <Link className="link" href="https://www.urbancompany.com/cart?city=city_delhi_v2&category=salon_at_home" isExternal>
                        <Box>
                            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg" alt="" />
                            <Text>Salon Prime</Text>
                            <Text>Free Waxing</Text>
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                            <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg" alt="" />
                        <Text>Salon for Men</Text>
                        <Text>Flat ₹100 off</Text>
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                            <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png" alt="" />
                        <Text>Spa for Women</Text>
                        <Text>Free head massage</Text>
                        </Box>
                        </Link>
                    </Carousel.Item>                  
                </Carousel>
            </div>
        </div>
    );
}

export default Salon;