import react, { useEffect, useState } from 'react';
import {
  JobTypePicker,
  JobNameTextField,
  JobStartTimePicker,
  JobEndTimePicker,
  RemoveJobButton,
} from "../../molecules";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';

function generateWeeklyArray(startDate: Date, endDate: Date) {
  const result = [];
  const current = new Date(startDate);

  // Ensure we start at the beginning of the week (Monday)
  current.setDate(current.getDate() - current.getDay() + 1);

  while (current <= endDate) {
      result.push(new Date(current));
      // Move to the next week
      current.setDate(current.getDate() + 7);
  }

  return result;
}

function NewJobFields() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [weeklyArray, setWeeklyArray] = useState(Array<Date>);
  
  useEffect(() => {
    console.log(startDate);
    console.log(endDate);
    const newWeeklyArray = generateWeeklyArray(startDate, endDate);
    setWeeklyArray(newWeeklyArray);
  }, [
    startDate,
    endDate
  ])
  const JobFields = () => {

    return (
      <>
        <JobTypePicker />
        <JobNameTextField />
        <JobStartTimePicker 
          onChange={(newValue: any) => {
            setStartDate(moment(newValue).toDate())
          }}
        />
        <JobEndTimePicker 
          onChange={(newValue: any) => {
            setEndDate(moment(newValue).toDate())
          }}
        />
        <RemoveJobButton 
          onClick={() => {}}
        />
      </>
    )
  }

  const WorkingHoursTable = () => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>年 Year</TableCell>
              <TableCell align="right">周 week</TableCell>
              <TableCell align="right">工作時數 Working Hours</TableCell>
              <TableCell align="right">有效工作時數 Effective Working Hours</TableCell>
              <TableCell align="right">對應週數 Equivalent No. of Week</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {weeklyArray.map((row) => (
              <TableRow
                // key={row.year}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {JSON.stringify(row)}
                {/* <TableCell component="th" scope="row">
                  {row.year}
                </TableCell>
                <TableCell align="right">{row.week_no}</TableCell>
                <TableCell align="right">{row.working_hours}</TableCell>
                <TableCell align="right">{row.effective_working_hours}</TableCell>
                <TableCell align="right">{row.equivalent_week_no}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
  return (
    <Grid
      container
    >
      <Grid
        item
        xs={12}
      >
        <JobFields />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <WorkingHoursTable />
      </Grid>
    </Grid>
  )
}

export default NewJobFields;