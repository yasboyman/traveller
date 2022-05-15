import { Spinner, VStack } from '@chakra-ui/react'
import { Children } from '../types'

export const Loader = ({ props }: Children) => {
  return (
    <VStack textAlign="center">
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      <span>{props && props}</span>
    </VStack>
  )
}
