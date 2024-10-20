import { Box, Container, Stack, Typography } from '@mui/material'
import banner from '../../../assets/shop-banner.png'
import React from 'react'
import { colors } from '../../../config/colors'

export const ShopBanner = () => {
  return (
    <Box py={'184px'} sx={{backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Container maxWidth="xl">
            <Stack direction={'row'} justifyContent={'center'} >
                <Typography color={colors.primary} variant='h1'>Shop</Typography>
            </Stack>
        </Container>
    </Box>
  )
}
