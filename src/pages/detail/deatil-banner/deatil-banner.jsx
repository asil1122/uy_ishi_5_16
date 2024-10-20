import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../../config/colors'
import banner from '../../../assets/detail-banner.png'

export const DetailBanner = () => {
  return (
    <Box py={'184px'} sx={{backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Container maxWidth="xl">
            <Stack direction={'row'} justifyContent={'center'}>
                <Typography color={colors.primary} variant='h1'>Shop Single</Typography>
            </Stack>
        </Container>
    </Box>
  )
}
