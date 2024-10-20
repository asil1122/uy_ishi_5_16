import React from 'react'
import { ShopBanner } from './shop-banner'
import { Box, Container, Grid2, Stack } from '@mui/material'
import { Data1 } from '../../data/data'
import { Homecard } from '../../components/home-card'
import { Link } from 'react-router-dom'
import { LinkBtn } from '../../style/style'

export const Shop = () => {
  return (
    <>
        <ShopBanner />
        <Box pt={'90px'} pb={'140px'}>
            <Container maxWidth="xl">
                <Stack>
                    <Grid2 container spacing='20px'>
                        {Data1.slice(0,12).map((item)=>(
                            <Grid2 size={3} key={item.id}>
                                <LinkBtn to={`/detail/${item.id}`}>
                                    <Homecard {...item} />
                                </LinkBtn>
                            </Grid2>
                        ))}
                    </Grid2>
                </Stack>
            </Container>
        </Box>
    </>
  )
}
