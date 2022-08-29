import Button from '@mui/material/Button';

export const ButtonPrimary = (props) => {
    return (
    <Button variant='primary' sx={{
        padding: "0.775rem",
    }}>{props.text}</Button>
    )
}
export const ButtonBlue = (props) => {
    return(
        <Button variant='primary' sx={{
            background: "#1976d2",
            color: '#fff',
            padding: '6px 12px',
            marginLeft: "8px",
        }}>{props.text}</Button>
    )
}
export default ButtonPrimary