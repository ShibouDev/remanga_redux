import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import {Button} from '@mui/material/Button';
import { darkTheme, lightTheme } from "../theme/theme";
import { toggleTheme } from "../theme/themeSlice";

export const Button = (props) => {
    <Button >{props.text}</Button>
}