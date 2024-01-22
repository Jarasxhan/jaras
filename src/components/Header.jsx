import { Avatar, Box, Button, Flex, Heading, HStack, Icon, useColorMode, Wrap, WrapItem, useColorModeValue } from '@chakra-ui/react'
import { LuArrowUpRightFromCircle, LuMoon, LuSun } from "react-icons/lu";
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const { colorMode, setColorMode } = useColorMode()
  return (
    <Box borderBottom={'1px'} borderBottomColor={useColorModeValue('gray.400', 'gray.800')} bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.900')} pos={'sticky'} top={0} zIndex={'9999'}>
      <Flex w={{
        base: '90%',
        md: '90%'
      }} mx={'auto'} alignItems={'center'} justifyContent={'space-between'}  p={5}>
        <Heading fontSize={'22px'} display={'flex'} alignItems={'center'} gap={2}><Icon as={LuArrowUpRightFromCircle}/>Example IT Solutions</Heading>
        <Flex alignItems={'center'} gap={5}>
          <HStack gap={3} display={{
            base: 'none',
            md: 'flex',
          }}>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>Services</Link>
            <Link to={'/'}>Pricing</Link>
          </HStack>
          <HStack>
            <Button onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')} variant={'outline'}><Icon as={colorMode === 'dark' ? LuSun : LuMoon}/></Button>
            <Wrap>
              <WrapItem>
                <Avatar size={'sm'} name='Eshnaarov Akhmad' src='https://picsum.photos/200'/>
              </WrapItem>
            </Wrap>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header