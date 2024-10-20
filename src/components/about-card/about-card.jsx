import { Stack, Typography } from '@mui/material'
import React from 'react'

export const AboutCard = ({id,img, title}) => {
  return (
    <Stack textAlign={'center'}>
        <Stack maxWidth={'334px'}>
            <img src={img} alt="img" />
        </Stack>
        <Typography color='#fff' mt={'24px'} fontWeight={500} variant='h6'>{title}</Typography>
    </Stack>
  )
}
