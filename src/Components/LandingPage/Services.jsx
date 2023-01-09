import { Link } from "@chakra-ui/react";
import Carousel from "better-react-carousel";
import "./Style.css";
const Services = ()=>{
    return(
        <div className="margin">
            <div id="carousel">
                <Carousel cols={4} rows={1} gap={20} loop>
                    <Carousel.Item>
                        <Link href="https://www.urbancompany.com/cart?city=city_delhi_v2&category=professional_cleaning_services" isExternal>
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670236808636-f1d72e.jpeg" alt="" />
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link href="#">
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670833924412-eb2825.jpeg" alt="" />
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link href="#">
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670236804067-9a707d.jpeg" alt="" />
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link href="#">
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670833903513-3409ad.jpeg" alt="" />
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link href="#">
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670236785661-0598c2.jpeg" alt="" />
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link href="#">
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670236836216-f4b990.jpeg" alt="" />
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link href="#">
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670833924412-eb2825.jpeg" alt="" />
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link href="#">
                        <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1670236804067-9a707d.jpeg" alt="" />
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Services;