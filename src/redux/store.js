import { configureStore } from "@reduxjs/toolkit";
import theme from "../components/theme/themeSlice"

export default configureStore({
    reducer: {
        theme,
    },
});
