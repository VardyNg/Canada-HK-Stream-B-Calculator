import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

type AddJobButtonProps = {
  onClick: Function
}

function AddJobButton(props: AddJobButtonProps) {
  return (
    <Button 
      variant="outlined"
      startIcon={<AddIcon />}
      onClick={() => props.onClick()}
    >
      新增 Add
    </Button>
  )
}

export default AddJobButton;