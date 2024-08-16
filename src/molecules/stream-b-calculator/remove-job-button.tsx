import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type RemoveJobButtonProps = {
  onClick: Function
}

function RemoveJobButton(props: RemoveJobButtonProps) {
  return (
    <IconButton 
      onClick={() => props.onClick()}
    >
      <DeleteIcon />
    </IconButton>
  )
}

export default RemoveJobButton;