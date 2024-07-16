import Typography from "@mui/material/Typography";

type TitleProps = {
  text: string
}

function Title(props: TitleProps) {
  return (
    <Typography>
      {props.text}
    </Typography>
  )
}

export default Title;