import { Box, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../config/colors'

export const CustomersCard = ({id, Num, text}) => {
  return (
    <Box border={`8px solid ${colors.secondary}`} borderRadius={'50%'}>
        <Box  border={'5px solid #fff'} borderRadius={'50%'}>
            <Box textAlign={'center'} bgcolor={colors.white} borderRadius={'50%'} sx={{py: '53px', px: '33px'}}>
                <Typography color={colors.primary} variant='h2'>{Num}</Typography>
                <Typography color={colors.primary}>{text}</Typography>
            </Box>
        </Box>
    </Box>
)
}
