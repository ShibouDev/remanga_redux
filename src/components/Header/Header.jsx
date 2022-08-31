import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider} from '@mui/material/styles';
import {FormGroup, Paper, IconButton, Stack, Container, Avatar, TextField, Menu, MenuItem,ListItemIcon,ListItemText } from "@mui/material"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FlareIcon from '@mui/icons-material/Flare';
import { darkTheme, lightTheme } from '../theme/theme';
import { toggleTheme } from '../theme/themeSlice';
import {ButtonPrimary, ButtonBlue} from "../Button/Button"
import {isDesktop} from "../Core/Breakpoints/Breakpoints"
import black_avatar from "../../assets/images/avatar_black.jpg"
import white_avatar from "../../assets/images/avatar_white.jpg"
export const Header = () => {
  const [menu, setMenu] = useState(null);
  const open = menu;
  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };
const [w, setW] = useState(window.innerWidth)
useEffect(() => {
  window.addEventListener('resize', () => {
  setW(window.innerWidth)
  })
}, [])
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
            {w >= isDesktop ?
            <><Stack direction="row" spacing={1}>
                <ButtonPrimary text="Каталог" />
                <ButtonPrimary text="Что почитать" />
                <ButtonBlue text="Новеллы"></ButtonBlue>
              </Stack><Stack direction="row" spacing={1}>
                  <ToggleSwitch />
                  <ButtonPrimary text="Войти" />
                </Stack></>
           : 
             <Container maxWidth="xl" sx={{
              justifyContent: 'space-between',
             }}>
           <Stack direction="row" justifyContent="space-between" alignItems="center">
          <ToggleSwitch />
          <TextField
            label="Что ищем, солнышко ♡"
            size="small"
           sx={{
            '& .MuiInputBase-root': { borderRadius: "15px" },
           }}
          />
          {theme.darkTheme === false ?
          <Avatar src={black_avatar} onClick={handleClick}/>
           : 
           <Avatar src={white_avatar} onClick={handleClick}/>
           }
        </Stack>
        </Container>
           }
              </Container>
         
         </Paper>
         <Menu
        id="basic-menu"
        anchorEl={menu}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <InsertEmoticonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Профиль</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <FolderOpenIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Каталог</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <AutoStoriesIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Что почитать</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{
          backgroundColor: "#4e6baf"
        }}> <ListItemIcon>
        <MenuBookIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Новеллы</ListItemText>
      </MenuItem>
      </Menu>
        </ThemeProvider>
    )
}
export default Header

