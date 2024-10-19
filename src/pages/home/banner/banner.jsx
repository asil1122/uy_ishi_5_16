import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import banner from "../../../assets/banner.png"
import { CustomButton } from '../../../style/style'
import { colors } from '../../../config/colors'
import { Next } from '../../../assets/icons/next'

export const Banner = () => {
    return (
        <Box pt={'287px'} pb={'257px'} sx={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
        >
            <Container maxWidth="xl">
                <Stack maxWidth={'610px'}>
                    <Typography mb={'8px'} color='#68a47f' fontFamily={'Yellowtail'} fontWeight={400} variant='h4'>100% Natural Food</Typography>
                    <Typography mb={'23px'} color={colors.primary} variant='h1'>Choose the best
                        healthier way <br/> 
                        of life
                    </Typography>
                    <CustomButton endIcon={<Next />} sx={{width: '260px'}} variant='contained'>Explore Now</CustomButton>
                </Stack>
            </Container>
        </Box>
    )
}
