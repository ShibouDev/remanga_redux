import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import {FormGroup, Paper, IconButton} from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FlareIcon from '@mui/icons-material/Flare';
import { darkTheme, lightTheme } from '../theme/theme';
import { toggleTheme } from '../theme/themeSlice';
import {ButtonPrimary, ButtonBlue} from "../Button/Button"
export const Header = () => {
const theme = useSelector((state) => state.theme);
const dispatch = useDispatch();
const ToggleSwitch  = () => {
    if(theme.darkTheme == false){
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
          padding: "8px 0",
          boxShadow: "none",
        }}>
            <ButtonPrimary text="Каталог"/>
            <ButtonPrimary text="Что почитать"/>
            <ButtonBlue text="Новеллы"></ButtonBlue>
        <ToggleSwitch />
        </Paper>
        </ThemeProvider>

    )
}
export default Header

