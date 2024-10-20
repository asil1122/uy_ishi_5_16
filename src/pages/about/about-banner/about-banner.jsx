import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import banner from "../../../assets/about_banner.png"
import { colors } from '../../../config/colors'

export const AboutBanner = () => {
  return (
    <Box py={'184px'} sx={{backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Container maxWidth="xl">
            <Stack textAlign={'center'}>
                <Typography color={colors.primary} variant='h1'>About Us</Typography>
            </Stack>
        </Container>
    </Box>
)
}
