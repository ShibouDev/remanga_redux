import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from '../theme/theme';
import {Paper,Container} from "@mui/material"
import {isDesktop} from "../Core/Breakpoints/Breakpoints"
import titles from '../Data/titles';
import "./carousel.css"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
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
              borderRadius: '0',
              padding: "16px 0",
              boxShadow: "none",
        }}>
         <CarouselProvider
         className='carouselOverflow'
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={12}
        visibleSlides={w > isDesktop ? 20 : 10}
        >
          <Slider style={{
            display: "flex",
          }}>
            {titles.map((el, index) => 
          <Slide index={index} style={{
            flex: "0 0 160px",
            width: "160px",
            maxWidth: "160px",
            paddingBottom: "330px",
          }}>
            <img style={{backgroundSize: 'cover'}} src={require('../../assets/images/' + el.imgname + '.jpg')}></img>
            <p>{el.name}</p>
          </Slide>
          )}
        </Slider>
        </CarouselProvider>
            {/* <Container>
                <img style={{backgroundSize: 'cover'}} src={require('../../assets/images/' + el.imgname + '.jpg')}></img>
                <p>{el.name}</p>
            </Container>)} */}
        {/* </Slider> */}
        </Paper>
      </ThemeProvider>
    )
}
export default Carousel