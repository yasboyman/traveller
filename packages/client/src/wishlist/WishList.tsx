import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Heading, SimpleGrid } from '@chakra-ui/react'
import Cities from './Cities'
import { fetchData } from './Utilities/fetchData'
import { Loader } from './Utilities/Loader'
import { LoadingState, Title } from './enums'
import type { City } from './types'

export const WishList: FC = () => {
  const [cityData, setCityData] = useState<City[]>([])

  useEffect(() => {
    fetchData('', setCityData)
  }, [])

  return (
    <>
      <Heading as="h1"> {Title.WISHLIST} </Heading>
      <SimpleGrid minChildWidth="120px" spacing="40px" w="500px" margin="30px auto" justifyItems="center">
        {!cityData.length ? (
          <Loader props={LoadingState.LOADING} />
        ) : (
          cityData
            .filter(city => city.wishlist)
            .map(city => {
              return (
                <Cities
                  key={city.id}
                  name={city.name}
                  id={city.id}
                  visited={city.visited}
                  wishlist={city.wishlist}
                  route
                />
              )
            })
        )}
      </SimpleGrid>
    </>
  )
}
