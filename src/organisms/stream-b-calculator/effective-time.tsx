import {
  useState,
  useEffect
} from 'react';
import {
  TargetApplicationDate,
  WPExpriyDate
} from '../../molecules';
import Stack from '@mui/material/Stack';
import moment from 'moment';

function EffectiveTime() {
  const [targetApplicationDate, setTargetApplicationDate] = useState('');
  const [wpExpiryDate, setWPExpiryDate] = useState('');
  const [deadline, setDeadline] = useState('');

  const onTargetApplicationDateChange = (newValue: string) => {
    setTargetApplicationDate(newValue);
    console.log(newValue);
  }

  const onWPExpiryDateChange = (newValue: string) => {
    setWPExpiryDate(newValue);
    console.log(newValue);
  }

  useEffect(() => {
    // use the earliest time between targetApplicationDate and wpExpiryDate as deadline 
    if (moment(targetApplicationDate).isBefore(moment(wpExpiryDate))) {
      setDeadline(targetApplicationDate)
    } else {
      setDeadline(wpExpiryDate)
    }
  }, [
    targetApplicationDate,
    wpExpiryDate,
  ])

  return (
    <Stack
      spacing={2}
    >
      <TargetApplicationDate
        onChange={onTargetApplicationDateChange}
      />
      <WPExpriyDate
        onChange={onWPExpiryDateChange}
      />
      {JSON.stringify(deadline)}
    </Stack>
  )
}

export default EffectiveTime;
