import BasicInformation from "./basic-information";
import Language from "./language";
import WorkingHours from "./working-hours";
import Grid from '@mui/material/Grid';

function StreamBCalculator() {
  return (
    <Grid
      container
      item
    >
      <BasicInformation />
      <Language />
      <WorkingHours />
    </Grid>
  )
}

export default StreamBCalculator;