import React from 'react'
import { FooterTop } from './footer-top'
import { Box, Container, IconButton, Link, Stack, Typography } from '@mui/material'
import { colors } from '../../config/colors'
import logo from "../../assets/logo.svg"
import { Inst } from '../../assets/icons/inst'
import { Fecbook } from '../../assets/icons/fecbook'
import { Tiv } from '../../assets/icons/tiv'
import { FooterIcon } from '../../assets/icons/footer-icon'

export const Footer = () => {
  return (
    <>
      <FooterTop />
      <Box pt={'117px'} pb={'102px'}>
        <Container maxWidth="xl">
          <Stack direction={'row'} justifyContent={'center'}>
            <Box textAlign={'right'} pr={'50px'} borderRight={`1px solid ${colors.grey}`}>
              <Typography mb={'32px'} color={colors.primary} fontWeight={700} variant='h5'>Contact Us</Typography>
              <Box mb={'45px'}>
                <Typography color={colors.primary} fontWeight={700} variant='body1'>Email</Typography>
                <Link href='#' sx={{ textDecoration: 'none' }}>
                  <Typography color={colors.primary} variant='body1'>needhelp@Organia.com</Typography>
                </Link>
              </Box>
              <Box mb={'45px'}>
                <Typography color={colors.primary} fontWeight={700} variant='body1'>Phone</Typography>
                <Link href='#' sx={{ textDecoration: 'none' }}>
                  <Typography color={colors.primary} variant='body1'>666 888 888</Typography>
                </Link>
              </Box>
              <Box mb={'45px'}>
                <Typography color={colors.primary} fontWeight={700} variant='body1'>Address</Typography>
                <Link href='#' sx={{ textDecoration: 'none' }}>
                  <Typography color={colors.primary} variant='body1'>88 road, borklyn street, USA</Typography>
                </Link>
              </Box>
            </Box>
            <Box px={'50px'} textAlign={'center'}>
              <img src={logo} alt="logo" />
              <Typography maxWidth={'543px'} mt={'23px'} variant='body1'>Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing </Typography>
              <Stack mt={'49px'} direction={'row'} justifyContent={'center'} >
                <IconButton>
                    <Inst/>
                </IconButton>
                <IconButton>
                    <Fecbook/>
                </IconButton>
                <IconButton>
                    <Tiv/>
                </IconButton>
                <IconButton>
                    <FooterIcon/>
                </IconButton>
              </Stack>
            </Box>
            <Box pl={'50px'} textAlign={'left'} borderLeft={`1px solid ${colors.grey}`}>
              <Typography mb={'24px'} color={colors.primary} fontWeight={700} variant='h5'>Utility Pages</Typography>
              <Box>
                <Typography mb={'30px'} color={colors.primary} variant='body1'>Style Guide</Typography>
                <Typography mb={'30px'} color={colors.primary} variant='body1'>404 Not Found</Typography>
                <Typography mb={'30px'} color={colors.primary} variant='body1'>Password Protected</Typography>
                <Typography mb={'30px'} color={colors.primary} variant='body1'>Licences</Typography>
                <Typography mb={'30px'} color={colors.primary} variant='body1'>Changelog</Typography>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box py={'17px'} borderTop={`1px solid ${colors.grey}`}>
        <Container maxWidth="xl">
          <Stack direction={'row'} justifyContent={'center'}>
                <Typography color={colors.primary} variant='body1'>Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow</Typography>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
