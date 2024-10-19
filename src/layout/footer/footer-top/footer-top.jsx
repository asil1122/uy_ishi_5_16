import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import footer from "../../../assets/footer_top_bg.png"
import { CustomInput } from '../../../style/style'

export const FooterTop = () => {
    return (
        <Container maxWidth="xl">
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} py={'105px'} px={'71px'} sx={{ backgroundImage: `url(${footer})`, backgroundRepeat: 'no-repeat' }}>
                <Typography maxWidth={'403px'} color='#fff' variant='h2'>Subscribe to our Newsletter
                </Typography>
                <Stack alignItems={'center'} direction={'row'} gap={'6px'}>
                    <CustomInput  placeholder='Your Email Address'/>
                    <Button sx={{px: '64px', py: '23px'}} variant='contained'>Subscribe</Button>
                </Stack>
            </Stack>
        </Container>
    )
}
