import { Box, Img } from "@chakra-ui/react"

export const CategoryItems = ({id, img, para }) => {

    return <Box  width={"100%"} filter='auto' brightness='90%'>
       
      <Box display={"flex"}  p={"4"} justifyContent={"center"} width={"100%"} >
        <a href={`#${id}`}>
        <Img  rounded={10} width={"74px"} src={img} /> 

        </a>
      </Box>
      <Box lineHeight={1}>
        <p color="black" >{para}</p>

      </Box>
  
    </Box>
  }