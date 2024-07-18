import {
  TargetApplicationDate,
  WPExpriyDate
} from '../../molecules';
import Stack from '@mui/material/Stack';

function EffectiveTime() {
  
  return (
    <Stack
      spacing={2}
    >
      <TargetApplicationDate />
      <WPExpriyDate />
      
    </Stack>
  )
}

export default EffectiveTime;
