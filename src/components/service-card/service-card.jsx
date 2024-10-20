import { Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../config/colors'

export const ServiceCard = ({id, img, title, text}) => {
  return (
    <Stack sx={{pt: '50px', pr: '38px', pb: '19px', pl: '35px'}} bgcolor='#fff' textAlign={'center'} borderRadius={'30px'}>
        <Stack width={'95px'} mr={'auto'} ml={'auto'}>
            <img src={img} alt="img" />
        </Stack>
        <Typography mt={'15px'} color={colors.primary} variant='h6'>{title}</Typography>
        <Typography mt={'12px'} width={'184px'} color={colors.primary} variant='body1'>{text}</Typography>
    </Stack>
)
}
