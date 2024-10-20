import React, { useEffect } from 'react'
import { DetailBanner } from './deatil-banner'
import { Box, Button, Container, Grid2, Rating, Stack, Typography } from '@mui/material'
import { Data1 } from '../../data/data';
import { useParams } from 'react-router-dom';
import { colors } from '../../config/colors';
import { Next } from '../../assets/icons/next';
import { Homecard } from '../../components/home-card';
import { LinkBtn } from '../../style/style';

export const Detail = () => {
    
    const { id } = useParams();
    useEffect(() => {
        window.scrollTo(0, 700);
      }, [id]);
    const data = Data1.find((item) => item.id == parseInt(id));
    
  return (
    <>
        <DetailBanner/>
        <Box pt={'133px'} pb={'140px'}>
            <Container maxWidth="xl">
                <Stack>
                    <Stack direction={'row'} gap={'88px'} alignItems={'center'}>
                        <Box py={'38px'} px={'35px'} borderRadius={'30px'} bgcolor={colors.white} sx={{width: '600px', flexShrink: '0'}}>
                            <Button sx={{pt: '5px', pr: '12px', pb: '5px', pl: '12px'}} variant='contained'>{data.badge}</Button>
                            <Stack>
                                <img src={data.img} alt="img" />
                            </Stack>
                        </Box>
                        <Box>
                            <Typography mb={'9px'} color={colors.primary} fontWeight={600} variant='h3'>{data.title}</Typography>
                            <Rating  value={data.rating} readOnly precision={0.5}/>
                            <Stack mt={'9px'} mb={'27px'} direction={'row'} gap={'9px'} alignItems={'center'}>
                                <Typography color={colors.text} sx={{textDecoration: 'line-through'}} fontWeight={600} variant='body2'>{data.OldPrice}</Typography>
                                <Typography color={colors.primary} fontWeight={700} variant='h6'>{data.NewPrice}</Typography>
                            </Stack>
                            <Typography color={colors.primary} variant='body1'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Typography>
                            <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                                <Typography color={colors.primary} variant='body2'>Quantity :</Typography>
                                <Button sx={{px: '61px'}} maxWidth={'134px'} variant='outlined'>1</Button>
                                <Button maxWidth={'220px'} endIcon={<Next />} variant='contained'>Add To Cart</Button>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack mt={'90px'}>
                        <Stack mb={'27px'} direction={'row'} gap={'20px'} justifyContent={'center'}>
                            <Button maxWidth={'363px'} variant='contained'>Product Description</Button>
                            <Button maxWidth={'309px'} variant='outlined'>Additional Info</Button>
                        </Stack>
                        <Typography mr={'auto'} ml={'auto'} textAlign={'center'} maxWidth={'1137px'} color={colors.primary} variant='body1'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
        <Box pb={'140px'}>
            <Container maxWidth="xl">
                <Stack>
                    <Typography mb={'40px'} textAlign={'center'} color={colors.primary} variant='h2'>Related Products</Typography>
                    <Grid2 container spacing='20px'>
                        {Data1.slice(0,4).map((item)=>(
                            <Grid2 size={3} key={item.id}>
                                <LinkBtn to={`/detail/${item.id}`}>
                                    <Homecard {...item} />
                                </LinkBtn>
                            </Grid2>           
                        ))}
                    </Grid2>
                </Stack>
            </Container>
        </Box>
    </>
  )
}
