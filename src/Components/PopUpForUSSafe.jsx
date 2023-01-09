import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Stack,
    Radio,
    RadioGroup,
    Button,
    Box,
    Img,
    Divider,
    Spacer,
    StackDivider,
  } from '@chakra-ui/react'
import { ProductItems } from './ProductItems'

export function PopUpForUSsafe(el) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  
    const btnRef = React.useRef(null)
    return (
      <>
        {
          <Box onClick={onOpen}>
            
            <Button my="4" background={"white"} w="8rem" border={"1px solid silver"} color={"black"}>US Safe</Button>
             {/* <ProductItems  {...el} />
            <Divider borderColor='gray.400' /> */}
          
        
        </Box>
        }
       
         
  
        <Modal
            
            size="xl"
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay 
          // border={0}
          backdropFilter="auto" 
        backdropBrightness="28%"
        />
          <ModalContent    >
            <ModalCloseButton />
            <ModalBody p="0.2" m="0" >
                <Box>
                    <img width={"100%"} src={el.img} alt="" />
            <ModalHeader>{el.title}</ModalHeader>
                <ProductItems  {...el} />
                   
                   
                    
                </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  

