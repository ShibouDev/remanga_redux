import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import {FormGroup, Paper, IconButton} from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FlareIcon from '@mui/icons-material/Flare';
import { darkTheme, lightTheme } from '../theme/theme';
import { toggleTheme } from '../theme/themeSlice';
import ButtonPrimary from "../Button/Button"
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
            width: '100%',
            display: 'flex',
            borderRadius: '0',
            padding: 8,
        }}>
            <ButtonPrimary text="Читать мангу"/>
        <ToggleSwitch />
        </Paper>
        </ThemeProvider>
    )
}
export default Header

