import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {
  PassportTypeEnum,
} from '../../data'
function PassportType() {
  const [passportType, setPassportType] = React.useState('');
  const [errorPassport, setErrorPassport] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange');
    setPassportType(event.target.value);
  };

  React.useEffect(() => {
    setErrorPassport(passportType === PassportTypeEnum.OTHER)
  }, [passportType])

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">護照類型 Passport Type</FormLabel>
      <RadioGroup
        row
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          value={PassportTypeEnum.HKSAR} 
          control={<Radio />} 
          label="香港特區護照 Hong Kong Special Administrative Region of the People’s Republic of China" 
        />
        <FormControlLabel
          value={PassportTypeEnum.BNO}
          control={<Radio />} 
          label="BNO British National (Overseas)" 
        />
        <FormControlLabel
          value={PassportTypeEnum.OTHER}
          control={<Radio />} 
          label="Other" 
        />
      </RadioGroup>
      {errorPassport}
    </FormControl>
  )
}

export default PassportType;