import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {
  JobTypeEnum
} from '../../data';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

function JobTypePicker() {
  return (
    <FormControl
      style={{
        minWidth: 230
      }}
    >
      <InputLabel id="demo-simple-select-label">工作類型 Job Category</InputLabel>
      <Select
        label="工作類型 Job Category"
        autoWidth
      >
        <MenuItem value={JobTypeEnum.fulltime}>全職 Fulltime</MenuItem>
        <MenuItem value={JobTypeEnum.parttime}>兼職 Parttime</MenuItem>
      </Select>
    </FormControl>
  )
}

export default JobTypePicker;