import { useEffect, useState } from 'react'
import type { FC } from 'react'
import {
  Container,
  InputRightElement,
  Input,
  Heading,
  InputGroup,
  IconButton,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import Cities from './Cities'
import { fetchData } from './Utilities/fetchData'
import { Loader } from './Utilities/Loader'
import { LoadingState } from './enums'
import type { City } from './types'

export const Home: FC = () => {
  const [value, setValue] = useState('')
  const [input, setInput] = useState('')
  const [cityData, setCityData] = useState<City[]>([])

  useEffect(() => {
    fetchData(input, setCityData)
  }, [input])

  return (
    <>
      <VStack spacing="8">
        <Heading as="h1">Smart traveller</Heading>
        <Container maxW="container.md">
          <InputGroup>
            <Input placeholder={'Enter city here bitch'} onChange={e => setValue(e.target.value)} />
            <InputRightElement
              children={<IconButton aria-label="submit" onClick={() => setInput(value)} icon={<Search2Icon />} />}
            />
          </InputGroup>
        </Container>
      </VStack>

      <SimpleGrid minChildWidth="120px" spacing="40px" w="500px" margin="30px auto" justifyItems="center">
        {!cityData.length ? (
          <Loader props={LoadingState.LOADING} />
        ) : (
          cityData.map(city => {
            return <Cities name={city.name} id={city.id} visited={city.visited} wishlist={city.wishlist} />
          })
        )}
      </SimpleGrid>
    </>
  )
}
