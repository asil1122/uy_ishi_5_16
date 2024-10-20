import React from 'react'
import { AboutBanner } from './about-banner'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Creative from "../../assets/creative_img.png"
import { colors } from '../../config/colors'
import { Tractor } from '../../assets/icons/tractor'
import { Factory } from '../../assets/icons/factory'
import { Next } from '../../assets/icons/next'
import { MarketIcon } from '../../assets/icons/market-icon'
import service_img from '../../assets/service_img.png'
import { AboutData, serviceData } from '../../data/data'
import { ServiceCard } from '../../components/service-card/service-card'
import team_img1 from "../../assets/team_img1.png"
import team_img2 from "../../assets/team_img2.png"
import team_img3 from "../../assets/team_img3.png"
import { Instagram } from '../../assets/icons/instagram'
import { Fecbk } from "../../assets/icons/fecbk"
import { Twitter } from '../../assets/icons/twitter'
import { AboutCard } from '../../components/about-card'

export const About = () => {

    return (
        <>
            <AboutBanner />
            <Box pt={'209px'} pb={'143px'}>
                <Container maxWidth="xl">
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Stack>
                            <img width={'724px'} src={Creative} alt="img" />
                        </Stack>
                        <Stack>
                            <Typography mb={'8px'} color={colors.secondary} fontFamily={'Yellowtail'} fontWeight={400} variant='h4'>About Us</Typography>
                            <Typography maxWidth={'516px'} mb={'14px'} color={colors.primary} variant='h2'>We do Creative Things for Success</Typography>
                            <Typography maxHeight={'662px'} mb={'65px'} color={colors.primary} variant='body1'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                            <Typography maxWidth={'662px'} mb={'48px'} color={colors.primary} variant='body1'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                            <Stack mb={'58px'} direction={'row'} gap={'65px'}>
                                <Stack direction={'row'} gap={'15px'} alignItems={'center'}>
                                    <Tractor />
                                    <Typography color={colors.primary} fontWeight={500} variant='h6'>Modern Agriculture Equipment</Typography>
                                </Stack>
                                <Stack direction={'row'} gap={'15px'} alignItems={'center'}>
                                    <Factory />
                                    <Typography color={colors.primary} fontWeight={500} variant='h6'>No growth hormones are used</Typography>
                                </Stack>
                            </Stack>
                            <Button endIcon={<Next />} sx={{ maxWidth: '269px' }} variant='contained'>Explore More</Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box bgcolor={colors.white} py={'190px'}>
                <Container maxWidth="xl">
                    <Stack>
                        <Stack direction={'row'} gap={'71px'} alignItems={'center'}>
                            <Stack>
                                <Typography color={colors.secondary} fontFamily={'Yellowtail'} fontWeight={400} variant='h4'>Why Choose us?</Typography>
                                <Typography mb={'25px'} color={colors.primary} variant='h2'>We do not buy from the open market & traders.</Typography>
                                <Typography mb={'36px'} color={colors.primary} variant='body1'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</Typography>
                                <Box mb={'24px'}>
                                    <Stack direction={'row'} gap={'7px'} alignItems={'center'} maxWidth={'344px'} bgcolor='#ececec' sx={{ borderRadius: '49px', padding: '29px 91px 29px 27px' }}>
                                        <MarketIcon />
                                        <Typography color={colors.primary} fontWeight={500} variant='body2'>100% Natural Product</Typography>
                                    </Stack>
                                    <Typography mt={'12px'} maxWidth={'462px'} pl={'60px'} color={colors.primary} variant='body1'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</Typography>
                                </Box>
                                <Box>
                                    <Stack direction={'row'} gap={'7px'} alignItems={'center'} maxWidth={'344px'} bgcolor='#ececec' sx={{ borderRadius: '49px', padding: '29px 91px 29px 27px' }}>
                                        <MarketIcon />
                                        <Typography color={colors.primary} fontWeight={500} variant='body2'> Increases resistance</Typography>
                                    </Stack>
                                    <Typography mt={'12px'} maxWidth={'462px'} pl={'60px'} color={colors.primary} variant='body1'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</Typography>
                                </Box>
                            </Stack>
                            <Stack width={'678px'}>
                                <img src={service_img} alt="img" />
                            </Stack>
                        </Stack>
                        <Stack mt={'91px'} direction={'row'} justifyContent={'center'} gap={'30px'}>
                            {serviceData.map((item) => (
                                <ServiceCard key={item.id} {...item} />
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box pt={'177px'} pb={'202px'}>
                <Container maxWidth="xl">
                    <Stack>
                        <Stack textAlign={'center'}>
                            <Typography color={colors.secondary} fontWeight={400} fontFamily={'Yellowtail'} variant='h4'>Team</Typography>
                            <Typography mb={'16px'} color={colors.primary} variant='h2'>Our Organic Experts</Typography>
                            <Typography maxWidth={'852px'} mr={'auto'} ml={'auto'} mb={'42px'} color={colors.primary} variant='body1'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                        </Stack>
                        <Stack direction={'row'} gap={'27px'}>
                            <Box maxWidth={'449px'} bgcolor={colors.white} sx={{ transition: 'all 0.3s ease',borderRadius: '25px', boxShadow: `0px 29px 44px 0px rgba(150, 150, 150, 0.25)`,"&:hover": {transform: "translateY(20px)",bgcolor: `#fff`,}}} >
                                <Box maxHeight={'485px'}>
                                    <img src={team_img1} alt="img" />
                                </Box>
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'end'} py={'35px'} px={'28px'}  >
                                    <Box>
                                        <Typography color={colors.primary} variant='h6'>Giovani Bacardo</Typography>
                                        <Typography color={colors.secondary} fontFamily={'Yellowtail'} fontSize={'22px'} variant='body1'>Farmer</Typography>
                                    </Box>
                                    <Stack direction={'row'} gap={'17px'}>
                                        <Fecbk />  
                                        <Twitter />                    
                                    </Stack>
                                </Stack>

                            </Box>
                            <Box maxWidth={'449px'} bgcolor={colors.white} sx={{ transition: 'all 0.3s ease',borderRadius: '25px', boxShadow: `0px 29px 44px 0px rgba(150, 150, 150, 0.25)`,"&:hover": {transform: "translateY(20px)",bgcolor: `#fff`,}}} >
                                <Box maxHeight={'485px'}>
                                    <img src={team_img2} alt="img" />
                                </Box>
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'end'} py={'35px'} px={'28px'}  >
                                    <Box>
                                        <Typography color={colors.primary} variant='h6'>Marianne Loreno</Typography>
                                        <Typography color={colors.secondary} fontFamily={'Yellowtail'} fontSize={'22px'} variant='body1'>Designer</Typography>
                                    </Box>
                                    <Stack direction={'row'} gap={'17px'}>
                                        <Instagram />
                                        <Fecbk />  
                                        <Twitter />                    
                                    </Stack>
                                </Stack>
                            </Box>
                            <Box maxWidth={'449px'} bgcolor={colors.white} sx={{ transition: 'all 0.3s ease',borderRadius: '25px', boxShadow: `0px 29px 44px 0px rgba(150, 150, 150, 0.25)`,"&:hover": {transform: "translateY(20px)",bgcolor: `#fff`,}}} >
                                <Box maxHeight={'485px'}>
                                    <img src={team_img3} alt="img" />
                                </Box>
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'end'} py={'35px'} px={'28px'}  >
                                    <Box>
                                        <Typography color={colors.primary} variant='h6'>Riga Pelore</Typography>
                                        <Typography color={colors.secondary} fontFamily={'Yellowtail'} fontSize={'22px'} variant='body1'>Farmer</Typography>
                                    </Box>
                                    <Stack direction={'row'} gap={'17px'}>
                                        <Instagram/>
                                        <Fecbk />  
                                        <Twitter />                    
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box pb={'141px'}>
                <Box py={'188px'} bgcolor={colors.primary}>
                    <Container maxWidth="xl">
                        <Stack>
                            <Stack textAlign={'center'}>
                                <Typography mb={'8px'} fontWeight={400} color={colors.secondary} fontFamily={'Yellowtail'} variant='h4'>About Us</Typography>
                                <Typography mb={'33px'} color='#fff' variant='h2'>What We Offer for You</Typography>
                            </Stack>
                            <Stack direction={'row'} gap={'21px'}>
                                {AboutData.map((item)=> (
                                    <AboutCard key={item.id} {...item} />
                                ))}
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
