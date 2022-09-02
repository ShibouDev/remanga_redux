import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from '../theme/theme';
import {FormGroup, Paper, IconButton, Stack, Container, Avatar, TextField, Menu, MenuItem,ListItemIcon,ListItemText } from "@mui/material"
import {isDesktop} from "../Core/Breakpoints/Breakpoints"
import titles from '../Data/titles';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
export const Carousel = () => {
const [w, setW] = useState(window.innerWidth)
useEffect(() => {
  window.addEventListener('resize', () => {
  setW(window.innerWidth)
  })
}, [])
const theme = useSelector((state) => state.theme);
const settingSlider = {
    dots: false,
    infinity: false,
    speed: 500,
    slidesToShow: w > isDesktop ? 8 : 3,
    slidesToScrill: w > isDesktop ? 4 : 2,
    infinity: false,
}
    return(
      <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
        <Paper sx={{
            maxWidth: 'xl',
            borderRadius: '0', 
            boxShadow: "none",
        }}>
        <Slider {...settingSlider}>
            {titles.map((el) => 
            <Container>
                <img src={require('../../assets/images/' + el.imgname + '.jpg')}></img>
                <p>{el.name}</p>
            </Container>)}
        </Slider>
        </Paper>
      </ThemeProvider>
    )
}
export default Carousel