import { Slider as SliderMui } from '@mui/material';

type SliderProp = {
  min: number,
  max: number,
  step: number
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
    />
  )
}

export default Slider;