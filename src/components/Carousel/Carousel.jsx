import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../theme/theme';
import {isDesktop} from "../Core/Breakpoints/Breakpoints"
import Slider from 'react-slick';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
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
    slidesToShow: w > isDesktop ? 
}
    return(

    )
}
export default Carousel