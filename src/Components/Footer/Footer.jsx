import { Box, Button, Container, Divider, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { StyledFooter } from './FooterStyle'

function Footer() {
  return (
    <div style={{width:"80%",margin:'auto'}}>
   <Stack color={'white'} bg={'black'} width={'100%'}   margin={'auto'}>
    <Box display={'flex'} gap='20px' w={'100%'}>
       <Link> <Text>About</Text></Link>
       
       <Link><Text>UC Impact</Text></Link>
       <Link><Text>Terms & Condition</Text></Link>
       <Link><Text>Privacy Policy</Text></Link>
       <Link><Text>Intrest-Based Advertising</Text></Link>
       <Link><Text>Anti Discrimination Policy</Text></Link>
       <Link><Text>Partner Welfare Policy</Text></Link>
    </Box>
    <Box display={'flex'} gap='30px' >
       <Link> <Text>Information Security Policy Statement & Objective</Text></Link>
       
       <Link><Text>Blog</Text></Link>
       <Link><Text>Reviews</Text></Link>
       <Link><Text>Near Me</Text></Link>
       <Link><Text>Careers</Text></Link>
       <Link><Text>Gift Cards</Text></Link>
       <Link><Text>Contact Us</Text></Link>
       <Link><Text>Quick Links</Text></Link>
    </Box>

    <Divider />
    <Box textAlign={'left'} >
       <Text fontWeight={'bold'} fontSize={'1xl'} marginTop='20px'>Serving In</Text> 
    </Box>
    <Box textAlign={'left'} fontWeight={'bold'}>
       <Text marginTop='20px'>USA</Text> 
    </Box>

    <Box display={'flex'} gap='30px'>
       
       <Link><Text>Austin</Text></Link>
       <Link><Text>Dallas</Text></Link>
       <Link><Text>New York City</Text></Link>
       
    </Box>
    <Box><Text textAlign={'left'} fontWeight={'bold'} marginTop='20px' >IND</Text></Box>
    <Box display={'flex'} gap='30px'>
       
       <Link><Text>Agra</Text></Link>
       <Link><Text>Ahmedabad</Text></Link>
       <Link><Text>Bhubaneshwar</Text></Link>

       <Link><Text>Alwar</Text></Link>
       <Link><Text>Amirtsar</Text></Link>
       <Link><Text>Aurangabad</Text></Link>
       <Link><Text>Bangalore</Text></Link>
       <Link><Text>Bhopal</Text></Link>
       <Link><Text>Bhubaneshwar</Text></Link>
       <Link><Text>Guntur</Text></Link>
       <Link><Text>Meerut</Text></Link>
       
    </Box>
    <Box display={'flex'} gap='30px'>
       
       <Link><Text>Chandigrah Tricity</Text></Link>
       <Link><Text>Chennai</Text></Link>
       <Link><Text>Coimbatore</Text></Link>
       <Link><Text>Bhubaneshwar</Text></Link>
       <Link><Text>Coimbatore</Text></Link>
      <Link><Text>Cuttack</Text></Link>
       <Link><Text>Dehadun</Text></Link>
       <Link><Text>Delhi NCR</Text></Link>
       <Link><Text>Guntur</Text></Link>
       
    </Box>

    <Box display={'flex'} gap='30px'>
       <Link> <Text> Guwahati</Text></Link>
        <Link><Text>Gwalior</Text></Link>
       <Link><Text>Hyderabad</Text></Link>
       <Link><Text>Indore</Text></Link>
       <Link><Text>Jabalpur</Text></Link>
       <Link><Text>Hyderabad</Text></Link>

       <Link><Text>Jaipur</Text></Link>
       <Link><Text>Jamshedpur</Text></Link>
       <Link><Text>Jodhpur</Text></Link>
       <Link><Text>Kakinada</Text></Link>
       <Link><Text>Meerut</Text></Link>

  
      
       
    </Box>

    <Box display={'flex'} gap='30px'>
       <Link> <Text> Kanpur</Text></Link>
        <Link><Text>Karnal</Text></Link>
       <Link><Text>Kochi</Text></Link>
       <Link><Text>Kolkata</Text></Link>
       <Link><Text>Kota</Text></Link>
       <Link><Text>Hyderabad</Text></Link>
       <Link><Text>Lucknow</Text></Link>
       <Link><Text>Ludhiana</Text></Link>
       <Link><Text>Madhurai</Text></Link>
       <Link><Text>Meerut</Text></Link>
       <Link><Text>Warangal</Text></Link>
       
    </Box>

    <Box display={'flex'} gap='30px'>
       <Link> <Text> Mumbai</Text></Link>
        <Link><Text>Mysore</Text></Link>
       <Link><Text>Nagpur</Text></Link>
       <Link><Text>Nashik</Text></Link>
       <Link><Text>Panipat</Text></Link>
       <Link><Text>Patna</Text></Link>
       <Link><Text>Jamshedpur</Text></Link>
       <Link><Text>Jodhpur</Text></Link>
       <Link><Text>Kakinada</Text></Link>
       <Link><Text>Visakhapatnam</Text></Link>

       
    </Box>


    <Box  display={'flex'} gap='30px'>
    <Link><Text>Rajamundry</Text></Link>
       <Link><Text>Ranchi</Text></Link>
       <Link><Text>Rohtak</Text></Link>
       <Link><Text>Sonipat</Text></Link>
       <Link><Text>Surat</Text></Link>
       <Link><Text>Thirvananthapuram</Text></Link>
       <Link><Text>Udaipur</Text></Link>
       <Link><Text>Vadodara</Text></Link>
       <Link><Text>Varanasi</Text></Link>
       <Link><Text>Vijayawada</Text></Link>
    </Box>

    <Box><Text textAlign={'left'} fontWeight={'bold'} marginTop='20px'>UAE</Text></Box>
    <Box  display={'flex'} gap='30px'>
    <Link><Text>Abu Dhabi</Text></Link>
       <Link><Text>Dubai</Text></Link>
       <Link><Text>Sharjah</Text></Link>
      
    </Box>


    <Box><Text textAlign={'left'} fontWeight={'bold'} marginTop='20px'>SGP</Text></Box>
    <Box  display={'flex'} gap='30px'>
    <Link><Text>Singapore</Text></Link>
   </Box>


   <Box><Text textAlign={'left'} fontWeight={'bold'} marginTop='20px'>KSA</Text></Box>
    <Box  display={'flex'} gap='30px'>
    <Link><Text>Jeddah</Text></Link>
    <Link><Text>Riyadh</Text></Link>
   </Box>
<Divider />
  
  <StyledFooter>
      <div className="copyRightContainer">
            <div className="copyRight">
              <img
              style={{marginBottom:"30px"}}
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_425cd8c0.png"
                alt=""
              />
              <span >© 2014-20 UrbanClap Technologies India Pvt. Ltd.</span>
            </div>
            <div className="iconContainer" style={{display:"flex"}}>
            <AiFillFacebook />
              <AiFillTwitterCircle />
              <AiFillInstagram />
              <AiFillYoutube />
              
              <AiFillLinkedin />
            </div>
          </div>
          </StyledFooter>
   </Stack>

  
    </div>
  )
}

export default Footer
