import { Slider as SliderMui } from '@mui/material';

type SliderProp = {
  min: number,
  max: number,
  step: number,
  value: number,
  error: boolean,
  onChange: Function,
}
function Slider(props: SliderProp) {
  console.log(props);
  const marks = [
    {
      value: props.min,
      label: props.min
    },
    {
      value: props.max,
      label: props.max
    },
  ]
  return (
    <SliderMui 
      orientation="vertical"
      min={props.min}
      max={props.max}
      step={props.step}
      marks={marks}
      valueLabelDisplay="auto"
      color={props.error ? "error" : "primary"}
      onChange={(event, newValue) => {props.onChange(newValue)}}
    />
  )
}

export default Slider;