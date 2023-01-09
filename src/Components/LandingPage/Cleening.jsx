import { Text  , Link, Box} from "@chakra-ui/react";
import Carousel from "better-react-carousel";

const Cleening = ()=>{
    return(
        <div className="margin">
            <h1>Cleaning & Pest Control</h1>            
            <div id="Cleening_image">
                <Carousel cols={4} rows={1} gap={20} loop>
                    <Carousel.Item>
                        <Link className="link" href="" isExternal>
                        <Box>
                            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg" alt="" />
                            <Text>Bathroom and Kitchen Cleaning</Text>                            
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                            <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg" alt="" />
                        <Text>Full Home Cleaning</Text>                        
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                            <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg" alt="" />
                        <Text>SSofa & Carpet Cleaning</Text>                        
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                        <Box>                        
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg" alt="" />
                        <Text>Cockroach, Ant & General Pest Control</Text>                        
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                            <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490257439-ef28d2.jpeg" alt="" />
                        <Text>Bed Bugs Control</Text>
                        </Box>
                        </Link>
                    </Carousel.Item>  
                    <Carousel.Item>
                        <Link className="link" href="#" isExternal>
                        <Box>
                            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632474326407-0aae21.jpeg" alt="" />
                            <Text>Termite Control</Text>                            
                        </Box>
                        </Link>
                    </Carousel.Item>      
                    <Carousel.Item>
                        <Link className="link" href="" isExternal>
                        <Box>
                            <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg" alt="" />
                            <Text>Bathroom and Kitchen Cleaning</Text>                            
                        </Box>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link className="link" href="#">
                            <Box>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg" alt="" />
                        <Text>Full Home Cleaning</Text>                        
                        </Box>
                        </Link>
                    </Carousel.Item>              
                </Carousel>
            </div>
        </div>
    );
}

export default Cleening;