import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import {FormGroup, FormControlLabel, Switch, CardHeader, Paper} from "@mui/material"
import { darkTheme, lightTheme } from '../theme/theme';
import { toggleTheme } from '../theme/themeSlice';
export const Header = () => {
const theme = useSelector((state) => state.theme);
const dispatch = useDispatch();
const ToggleSwitch  = () => {
    return(
             <div
        style={{
         
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme.darkTheme}
                onChange={() => dispatch(toggleTheme())}
              />
            }
            label="Toggle Theme"
          />
        </FormGroup>
      </div>
    )
};
    return(
        <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
        <Paper style={{
            width: '100%',
            display: 'flex',
            borderRadius: '0',
        }}>
        <ToggleSwitch />
        </Paper>
        </ThemeProvider>
    )
}
export default Header

