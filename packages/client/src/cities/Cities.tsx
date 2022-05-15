import React, { useEffect, useState } from 'react'
import { Wrap, WrapItem, Center, Button, Stack, VStack } from '@chakra-ui/react'
import { updateData } from './Utilities/updateData'
import type { CityProps } from './types'

const Cities = ({ name, id, visited, wishlist, route }: CityProps) => {
  const [cityID, setCityID] = useState(false)
  const [state, setState] = useState({ visited: visited, wishlist: wishlist })

  const handleClick = (e, callback: string) => {
    setCityID(e.currentTarget.id)
    setState(prevState => ({
      ...prevState,
      [callback]: state[callback] != true,
    }))
  }

  useEffect(() => {
    console.log('rendered State')
    setState({ visited: visited, wishlist: wishlist })
  }, [visited || wishlist])

  useEffect(() => {
    console.log('rendered')
    cityID && updateData(state, cityID)
  }, [state])

  return (
    <Stack spacing={4}>
      <VStack spacing="8" align="center">
        <Wrap spacing="10px">
          <WrapItem>
            <Center w="120px" h="80px" bg="red.200">
              {name}
            </Center>
          </WrapItem>
        </Wrap>
        {!route && (
          <Stack spacing={4} direction="row" align="center">
            <Button
              id={id}
              onClick={e => handleClick(e, 'visited')}
              colorScheme={state.visited ? 'grey' : 'teal'}
              variant={state.visited ? 'outline' : 'solid'}
              size="sm"
            >
              visited
            </Button>
            <Button
              id={id}
              onClick={e => handleClick(e, 'wishlist')}
              colorScheme={state.wishlist ? 'grey' : 'teal'}
              variant={state.wishlist ? 'outline' : 'solid'}
              size="sm"
            >
              wishlist
            </Button>
          </Stack>
        )}
      </VStack>
    </Stack>
  )
}

export default Cities
