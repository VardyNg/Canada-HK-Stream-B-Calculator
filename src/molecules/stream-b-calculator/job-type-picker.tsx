import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {
  JobTypeEnum
} from '../../data';

function JobTypePicker() {
  return (
    <Select
      label="工作類型 Job Category"
    >
      <MenuItem value={JobTypeEnum.fulltime}>全職 Fulltime</MenuItem>
      <MenuItem value={JobTypeEnum.parttime}>兼職 Parttime</MenuItem>
    </Select>
  )
}

export default JobTypePicker;