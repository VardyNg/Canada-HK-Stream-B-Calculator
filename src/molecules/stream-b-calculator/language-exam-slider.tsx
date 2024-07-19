import {
  LanguageTestTypeEnum
} from '../../data';
import Stack from '@mui/material/Stack';
import {
  Slider
} from '../../atoms';
import {
  LanguageTestSpec,
} from '../../data';
type LanguageExamSliderProp = {
  type: LanguageTestTypeEnum
}

function LanguageExamSlider(props: LanguageExamSliderProp) {
  const spec = LanguageTestSpec[props.type];
  return (
    <>  
    {props.type}
    <Stack
      direction='row'
    >
      Reading
      <Slider 
        min={spec.min}
        max={spec.max}
        step={spec.step}
      />
      Writing
      <Slider 
        min={spec.min}
        max={spec.max}
        step={spec.step}
      />
      Listening
      <Slider 
        min={spec.min}
        max={spec.max}
        step={spec.step}
      />
      Speaking
      <Slider 
        min={spec.min}
        max={spec.max}
        step={spec.step}
      />
    </Stack>
    </>
  )
}

export default LanguageExamSlider;