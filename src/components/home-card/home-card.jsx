import { Box, Button, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../config/colors'

export const Homecard = ({id, img, badge, title, OldPrice, NewPrice, rating}) => {
  return (
    <Box borderRadius={"30px"} bgcolor={colors.white} sx={{pt: '29px', pr: '26px', pb: '17px', pl: '30px'}}>
        <Button sx={{pt: '5px', pr: '12px', pb: '5px', pl: '12px'}} variant='contained'>
            <Typography fontWeight={600} fontSize={'15px'}>{badge}</Typography>
        </Button>
        <Stack sx={{width: '300px'}}>
            <img width={"100%"} src={img} alt="img" />
        </Stack>
        <Stack>
            <Typography mb={'13px'} color={colors.primary} variant='body2'>{title}</Typography>
            <Stack borderTop={'2px solid #E0E0E0'} pt={'6px'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
                    <Typography color={colors.text} sx={{textDecoration: 'line-through'}} fontSize={'15px'} variant='body1'>{OldPrice}</Typography>
                    <Typography color={colors.primary} fontWeight={700} variant='body1'>{NewPrice}</Typography>
                </Stack>
                <Rating value={rating} readOnly precision={0.5}/>
            </Stack>
        </Stack>
    </Box>
  )
}

