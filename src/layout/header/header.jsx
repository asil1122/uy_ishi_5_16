import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Search } from './search'
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'
import { LinkBtn } from '../../style/style'

export const Header = () => {
    return (
        <Container sx={{ pt: '69px', pb: '69px' }} maxWidth="xs">
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Stack direction={"row"} gap={'150px'} alignItems={"center"}>
                    <Stack>
                        <img src={logo} alt="logo" />
                    </Stack>
                    <Stack direction={'row'} gap={'40px'}>
                        <LinkBtn to="/">
                            <Typography variant='body2'>Home</Typography>
                        </LinkBtn>
                        <LinkBtn >
                            <Typography variant='body2'>About</Typography>
                        </LinkBtn>
                        <LinkBtn>
                            <Typography variant='body2'>Pages</Typography>
                        </LinkBtn>
                        <LinkBtn >
                            <Typography variant='body2'>Shop</Typography>
                        </LinkBtn>
                        <LinkBtn>
                            <Typography variant='body2'>Projects</Typography>
                        </LinkBtn>
                        <LinkBtn>
                            <Typography variant='body2'>News</Typography>
                        </LinkBtn>
                    </Stack>
                </Stack>
                <Stack>
                    <Search />
                </Stack>
            </Stack>
        </Container>
    )
}
