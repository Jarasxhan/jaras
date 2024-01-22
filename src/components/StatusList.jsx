import { Box, Checkbox, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue, Icon, Flex, Text, HStack, Button } from '@chakra-ui/react'
import { PiDotsThreeBold } from "react-icons/pi";
import { userStatusList } from '../constants/constants'
import React from 'react'

const StatusList = () => {
  return (
    <>
      <Box border={'1px'} rounded={'md'} mt={3} borderColor={useColorModeValue('gray.400', 'gray.800')}>
        <Table overflowX={{
          base: 'auto',
          md: 'hidden',
        }}>
          <Thead py={100}>
            <Tr>
              <Th py={5}><Checkbox/></Th>
              <Th>Status</Th>
              <Th>Email</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              userStatusList.map(item => (
                <Tr>
                  <Td py={5}><Checkbox/></Td>
                  <Td>{item.status}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.amount} <Icon ml={5} as={PiDotsThreeBold}/></Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Box>
      <Flex my={4} alignItems={'center'} justifyContent={'space-between'}>
        <Text>0 of 5 rows selected.</Text>
        <HStack>
          <Button variant={'outline'}>Previous</Button>
          <Button variant={'outline'}>Next</Button>
        </HStack>
      </Flex>
    </>
  )
}

export default StatusList