import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import {FormGroup, Paper, IconButton, Stack, Container} from "@mui/material"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FlareIcon from '@mui/icons-material/Flare';
import { darkTheme, lightTheme } from '../theme/theme';
import { toggleTheme } from '../theme/themeSlice';
import {ButtonPrimary, ButtonBlue} from "../Button/Button"
export const Header = () => {
const theme = useSelector((state) => state.theme);
const dispatch = useDispatch();
const ToggleSwitch  = () => {
    if(theme.darkTheme === false){
        return(
            <FormGroup>
              <IconButton aria-label='theme'
              onClick={() => dispatch(toggleTheme())}>
                <DarkModeIcon/>
              </IconButton>
            </FormGroup>
        )
    }
   else{
    return(
        <FormGroup>
          <IconButton aria-label='theme'
          onClick={() => dispatch(toggleTheme())}>
            <FlareIcon/>
          </IconButton>
        </FormGroup>
    )
   }
};
    return(
      <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
        <Paper style={{
          maxWidth: 'xl',
          display: 'flex',
          borderRadius: '0',
          padding: "16px 0",
          boxShadow: "none",
        }}>
          <Container maxWidth="xl" sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            {BrowserView ? 
            <><Stack direction="row" spacing={1}>
                <ButtonPrimary text="Каталог" />
                <ButtonPrimary text="Что почитать" />
                <ButtonBlue text="Новеллы"></ButtonBlue>
              </Stack>
              <Stack direction="row" spacing={1}>
                  <ToggleSwitch />
                  <ButtonPrimary text="Войти" />
                </Stack></> : <ButtonPrimary text="Войти" />}
         
            </Container>

        </Paper>
        </ThemeProvider>

    )
}
export default Header

