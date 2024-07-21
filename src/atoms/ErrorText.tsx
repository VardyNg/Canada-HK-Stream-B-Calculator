import { Typography } from "@mui/material";

type ErrorTextProb = {
  text: string
}
function ErrorText(props: ErrorTextProb) {
  return (
    <Typography
      color='error'
    >
      {props.text}
    </Typography>
  )
}

export default ErrorText;