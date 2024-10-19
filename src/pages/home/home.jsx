import { Box, Button, Container, Grid2, IconButton, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import fruit from "../../assets/fruit.png"
import vega from "../../assets/vega.png"
import { Banner } from './banner'
import { colors } from '../../config/colors'
import { Organic } from '../../assets/icons/organic'
import { Qualty } from '../../assets/icons/qualty'
import farm from "../../assets/farm_img.png"
import { Next } from '../../assets/icons/next'
import { Customers, Data1, offerData } from '../../data/data'
import { Homecard } from '../../components/home-card'
import costumer from "../../assets/costumer_bg.png"
import woman from "../../assets/woman.png"
import { CustomersCard } from '../../components/customers-card'
import { CustomBox, CustomButton } from '../../style/style'
import { OfferCard } from '../../components/offer-card'
import econis from "../../assets/econis.png"
import catagory_img1 from "../../assets/catagory_img1.png"
import catagory_img2 from "../../assets/catagory_img2.png"
import catagory_img3 from "../../assets/catagory_img3.png"
import content_img1 from "../../assets/content_img1.png"
import content_img2 from "../../assets/content_img2.png"
import { Profile } from '../../assets/icons/profile'

export const Home = () => {
    return (
        <>
            <Banner />
            <Box>
                <Container sx={{ pt: '154px', pb: '190px' }} maxWidth="xl">
                    <Stack direction={'row'} gap={'36px'}>
                        <Box padding={'109px 0 127px 54px'} width={'682px'} sx={{ backgroundImage: `url(${fruit})`, backgroundRepeat: 'no-repeat' }}>
                            <Typography mb={'5px'} fontWeight={400} color='#fff' fontFamily={'Yellowtail'} variant='h4'>Natural!!</Typography>
                            <Typography maxWidth={'277px'} color='#fff' variant='h3'>Get Garden Fresh Fruits</Typography>
                        </Box>
                        <Box padding={'109px 0 127px 54px'} width={'682px'} sx={{ backgroundImage: `url(${vega})`, backgroundRepeat: 'no-repeat' }}>
                            <Typography mb={'5px'} fontWeight={400} color={colors.secondary} fontFamily={'Yellowtail'} variant='h4'>Offer!!</Typography>
                            <Typography maxWidth={'313px'} color={colors.primary} variant='h3'>Get 10% off on Vegetables</Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box bgcolor={colors.white} py={"140px"}>
                <Container maxWidth="xl">
                    <Stack direction={"row"}>
                        <Box maxWidth={"702px"}>
                            <img width={"100%"} src={farm} alt="#" />
                        </Box>
                        <Box width={"702px"}>
                            <Typography
                                mb={"8px"}
                                color={colors.secondary}
                                fontFamily={"Yellowtail"}
                                variant="h6"
                            >
                                About Us
                            </Typography>
                            <Typography mb={"14px"} variant="h2">
                                We Believe in Working Accredited Farmers
                            </Typography>
                            <Typography mb={"46px"} variant="body1">
                                Simply dummy text of the printing and typesetting industry.
                                Lorem had ceased to been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley.
                            </Typography>
                            <Stack direction={"row"} gap={'19px'} mb={"30px"} alignItems={"center"}>
                                <Box>
                                    <Organic />
                                </Box>
                                <Box>
                                    <Typography mb={"7px"} variant="h6">
                                        Organic Foods Only
                                    </Typography>
                                    <Typography variant="body1">
                                        Simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum
                                    </Typography>
                                </Box>
                            </Stack>
                            <Stack mb={'49px'} direction={"row"} gap={'19px'} alignItems={"center"}>
                                <Box>
                                    <Qualty />
                                </Box>
                                <Box>
                                    <Typography mb={"7px"} variant="h6">
                                        Quality Standards
                                    </Typography>
                                    <Typography variant="body1">
                                        Simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum
                                    </Typography>
                                </Box>
                            </Stack>
                            <Button endIcon={<Next />} variant='contained' >Shop Now</Button>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box>
                <Container sx={{ pt: '176px', pb: '200px' }} maxWidth="xl">
                    <Stack>
                        <Typography mb={'8px'} textAlign={'center'} fontWeight={400} color={colors.secondary} fontFamily={'Yellowtail'} variant='h4'>Categories</Typography>
                        <Typography mb={'40px'} textAlign={'center'} color={colors.primary} variant='h2'>Our Products</Typography>
                        <Grid2 container spacing={'20px'}>
                            {Data1.map((item) => (
                                <Grid2 size={3} key={item.id} >
                                    <Homecard {...item} />
                                </Grid2>
                            ))}
                        </Grid2>
                        <Stack mt={'122px'} direction={'row'} justifyContent={'center'}>
                            <Button endIcon={<Next />} sx={{ maxWidth: '230px' }} variant='contained'> Load More</Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{ backgroundImage: `url(${costumer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', pt: '164px', pb: '164px' }}>
                <Container maxWidth="lg">
                    <Stack>
                        <Stack mb={'102px'} textAlign={'center'}>
                            <Typography mb={'8px'} color={colors.secondary} fontWeight={400} fontFamily={'Yellowtail'} variant='h4'>Testimonial</Typography>
                            <Typography mb={'60px'} color={colors.primary} variant='h2'>What Our Customer Saying?</Typography>
                            <Stack mb={'20px'} direction={'row'} justifyContent={'center'}>
                                <img width={'115px'} src={woman} alt="woman" />
                            </Stack>
                            <Stack mb={'25px'} direction={'row'} justifyContent={'center'}>
                                <Rating value={5} readOnly precision={0.5} />
                            </Stack>
                            <Typography ml={'auto'} mr={'auto'} maxWidth={'720px'} mb={'20px'} variant='body1'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</Typography>
                            <Typography color={colors.primary} variant='h6'>Sara Taylor</Typography>
                            <Typography variant='body1'>Consumer</Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"} gap={'62px'}>
                            {Customers.map((item) => (
                                <Stack key={item.id}>
                                    <CustomersCard {...item} />
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{ bgcolor: colors.primary, py: '200px' }}>
                <Container maxWidth="xl">
                    <Stack>
                        <Stack mb={'50px'} direction={"row"} justifyContent={"space-between"} alignItems={'end'}>
                            <Box>
                                <Typography mb={'8px'} color={colors.secondary} fontFamily={'Yellowtail'} fontWeight={400} variant='h4'>Offer</Typography>
                                <Typography color='#fff' variant='h2'>We Offer Organic For You</Typography>
                            </Box>
                            <Box>
                                <CustomButton endIcon={<Next />} variant='contained'>View All Product</CustomButton>
                            </Box>
                        </Stack>
                        <Grid2 container spacing={'20px'}>
                            {offerData.map((item) => (
                                <Grid2 size={3} key={item.id}>
                                    <OfferCard {...item} />
                                </Grid2>
                            ))}
                        </Grid2>
                    </Stack>
                </Container>
            </Box>
            <Box>
                <Stack position={"relative"} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Stack width={"50%"}>
                        <img  width={'958px'} src={econis} alt="img" />
                    </Stack>
                    <Stack position={'relative'} width={"50%"}>
                        <Stack position={'absolute'} bottom={'-360px'} left={'-20px'} maxWidth={'789px'} sx={{ pl: '65px', pt: '78px', pb: '77px', pr: '89px' }} borderRadius={'30px'} bgcolor='#fff'>
                            <Typography color={colors.secondary} fontFamily={"Yellowtail"} fontWeight={700} variant='body1'>Eco Friendly</Typography>
                            <Typography color={colors.primary} mb={'35px'} variant='h2'>Econis is a Friendly
                                Organic Store</Typography>
                            <Box>
                                <Stack mb={'35px'}>
                                    <Typography mb={'7px'} color={colors.primary} fontWeight={500} variant='h6'>Start with Our Company First</Typography>
                                    <Typography variant='body1'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Typography>
                                </Stack>
                                <Stack mb={'35px'}>
                                    <Typography mb={'7px'} color={colors.primary} fontWeight={500} variant='h6'>Start with Our Company First</Typography>
                                    <Typography variant='body1'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Typography>
                                </Stack>
                                <Stack>
                                    <Typography mb={'7px'} color={colors.primary} fontWeight={500} variant='h6'>Start with Our Company First</Typography>
                                    <Typography variant='body1'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            <Box bgcolor='#f1f8f4' py={'187px'}>
                <Stack direction={'row'} gap={'42px'} justifyContent={'center'} alignItems={'center'}>
                    <Box maxWidth={'512px'} sx={{py:'200px', px: '113px', backgroundImage: `url(${catagory_img1})`, backgroundRepeat: 'no-repeat', }}>
                        <Button sx={{border: 'none'}} variant='outlined'>Organic Juice</Button>
                    </Box>
                    <Box maxWidth={'512px'} sx={{py:'200px', px: '113px', backgroundImage: `url(${catagory_img2})`, backgroundRepeat: 'no-repeat', }}>
                        <Button sx={{border: 'none'}} variant='outlined'>Organic Food</Button>
                    </Box>
                    <Box maxWidth={'512px'} sx={{py:'200px', px: '113px', backgroundImage: `url(${catagory_img3})`, backgroundRepeat: 'no-repeat', }}>
                        <Button sx={{border: 'none'}} variant='outlined'>Nuts Cookis</Button>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{pt: '177px' , pb: '185px'}}>
                <Container maxWidth={'xl'}>
                    <Stack>
                        <Stack mb={'48px'} direction={'row'} justifyContent={'space-between'} alignItems={'end'}>
                            <Stack>
                                <Typography mb={'8px'} color={colors.secondary} fontFamily={'Yellowtail'} fontWeight={400} variant='h4'>News</Typography>
                                <Typography maxWidth={'836px'} color={colors.primary} variant='h2'>Discover weekly content about organic food, & more</Typography>
                            </Stack>
                            <Stack>
                                <Button endIcon={<Next />} variant='outlined'>More News</Button>
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} gap={'46px'}>
                            <Box position={'relative'}>
                                <img src={content_img1} alt="img" />
                                <CustomBox>
                                    <Stack mb={'15px'} direction={'row'} gap={'8px'} alignItems={'center'}>
                                        <Profile/>
                                        <Typography variant='body1'>By Rachi Card</Typography>
                                    </Stack>
                                    <Typography mb={'2px'} fontSize={'21px'} color={colors.primary} variant='h6'>The Benefits of Vitamin D & How to Get It</Typography>
                                    <Typography mb={'15px'} maxWidth={'444px'} variant='body1'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
                                    <CustomButton endIcon={<Next />} variant='contained'>Read More</CustomButton>
                                </CustomBox>
                            </Box>
                            <Box position={'relative'}>
                                <img src={content_img2} alt="img" />
                                <CustomBox>
                                    <Stack mb={'15px'} direction={'row'} gap={'8px'} alignItems={'center'}>
                                        <Profile/>
                                        <Typography variant='body1'>By Rachi Card</Typography>
                                    </Stack>
                                    <Typography mb={'2px'} fontSize={'21px'} color={colors.primary} variant='h6'>Our Favourite Summertime Tommeto</Typography>
                                    <Typography mb={'15px'} maxWidth={'444px'} variant='body1'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</Typography>
                                    <CustomButton endIcon={<Next />} variant='contained'>Read More</CustomButton>
                                </CustomBox>
                            </Box>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
