import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function AddJobButton() {
  return (
    <Button variant="outlined" startIcon={<AddIcon />}>
      新增 Add
    </Button>
  )
}

export default AddJobButton;