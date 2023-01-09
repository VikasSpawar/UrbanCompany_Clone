import { Box, Button, Divider, Heading, HStack, Img, Spacer } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCartData } from "../Redux/Cart/action"


//products data structure
//               "id": "1",
//               "title": "Full chocolate | chocolate roll-on wacxing",
//               "price": "₹849",
//               "time": "1 hr 5 mins",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "Eyebrow threading"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Chocolate full arms, underarms, full legs"
//                 },
//                 {
//                   "id": "3",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },



//               "id": "1",
//               "img": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1657100967218-f08380.png",
//               "title": "Full body",
//               "price": "₹1399",
//               "para": [
//                 {
//                   "id": "1",
//                   "para": "O3+ shine & glow facial"
//                 },
//                 {
//                   "id": "2",
//                   "para": "Upper lip threading"
//                 }
//               ]
//             },

export const ProductItems = ({id, title, price, time, para, type, guide_Img, img }) => {

  const cart=useSelector((store)=>store.CartReducer.cart)


  const dispatch=useDispatch()

  // const handleAddToCart=()=>{
  //       let Check=false
  //       cart.forEach((el)=>{
  //       // console.log(el.id,id)
  //       if(el.id==id){
  //         console.log(el.id,id)
  //         Check=true
  //         return 
  //       }
  //     })

  //     // console.log(Check)

  //    if(Check){

  //      alert("Product is already added")
  //       return
  //    }else{
  //      let newCartData={
  //     id:id,
  //     title:title,
  //     price:price,
  //     time:time,
  //     para:para,
  //     img:img
  //   }

  //   dispatch(addCartData(newCartData))
  //   alert("Product added successfully")

  //    }

   
    

    

  // }


  useEffect(()=>{


  },[])

  if (type == "guide") {
    // console.log(type)
    return (
      <Box id={id} textAlign={"left"} >
        <Box my={"4"}>

        <Heading>{title}</Heading>
        </Box>
        <br />
        
        <Img rounded={10} width="95%" src={guide_Img} alt="pic" />
        <br />
      </Box>
    )
  }

  if (time&&!img) {
    return (
      <Box   display={"flex"} p="10" justifyContent="space-around"  >
        <Box textAlign={"left"}  width="80%" >

          <Heading size={"l"} >{title}</Heading>
          <HStack> <Heading size={"l"}>
          ₹ {price}
            </Heading>  <li>{time}</li></HStack>
          {/* <hr /> */}
          <Box my={2} >

          <Divider  borderColor='blackAlpha' />
          </Box>
          {para?.map((el) => <li key={el.id}>{el.para}</li>)}
          <Button>Edit your package</Button>
        </Box>
        <Box width={"15%"}  >
          <Box display={"flex"} justifyContent="end" >
            <Button 
            
            // onClick={handleAddToCart}
            
            textColor={"violet"} >Add</Button>
          </Box>

        </Box>
        {/* <Divider  borderColor='black.200' /> */}
     
      </Box>
      



    )
  }

  // Products With Image
  if (!time) {
    // console.log(type)
    return (
      <Box display={"flex"} p="10" justifyContent="space-around"  >
        <Box flexDirection={"column"} display={"flex"} justifyContent={"space-between"} textAlign={"left"}  width="80%" >
          <Heading size="l">{title}</Heading>
          <p>star</p>
          <Heading size={"l"}>Starts at ₹ {price}</Heading>
          {/* <hr /> */}
          <Box my={2} >

          <Divider  borderColor='black.200' />
          </Box>
          {para?.map((el) => <li key={el.id}>{el.para}</li>)}
          <Box>

          <Button textColor="violet" variant={"ghost"} >View details</Button>
          </Box>
        </Box>
        <Box margin={"auto"} width={"15%"}  >
          <Box  >
            <Box >
              <Img rounded={"10"} width={"100%"} src={img} alt="img" />

            </Box>
          </Box>

          <Button 
          
          // onClick={handleAddToCart}
          
          position={"relative"} top="-15px">Add</Button>
        </Box>

      </Box>



    )
  }

}