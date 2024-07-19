import { Slider as SliderMui } from '@mui/material';

type SliderProp = {
  min: number,
  max: number,
  step: number
}
function Slider(props: SliderProp) {
  return (
    <SliderMui 
      orientation="vertical"
      min={props.min}
      max={props.max}
      step={props.step}
    />
  )
}

export default Slider;