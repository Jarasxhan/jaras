import { Box, Button, Checkbox, Heading, HStack, Icon, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { LuArrowUpRightFromCircle } from 'react-icons/lu'

const Login = () => {
  return (
    <Box w={'full'} h={'100vh'} bg={'blackAlpha.400'} display={'flex'}  justifyContent={'center'} >
      <Box w={'400px'} h={'32vh'} pos={'absolute'} rounded={'md'} top={100} border={'1px'} borderColor={'gray.800'} p={4}>
        <Heading  fontSize={'22px'} textAlign={'center'} mt={3} mb={6}><Icon as={LuArrowUpRightFromCircle}/>Example IT Solutions</Heading>
        <Input type={'password'} placeholder='Enter Password:'/>
        <HStack mt={1}>
          <Checkbox/>
          <Text>Show password?</Text>
        </HStack>
        <Button mt={6} w={'full'} mb={4}>Login</Button>
      </Box>
    </Box>
  )
}

export default Login