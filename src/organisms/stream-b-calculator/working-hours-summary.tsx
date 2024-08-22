import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  year: number,
  week_no: number,
  working_hours: number,
  effective_working_hours: number,
  equivalent_week_no: number,
) {
  return { year, week_no, working_hours, effective_working_hours, equivalent_week_no };
}

const rows = [
  createData(2022, 5, 45, 30, 1),
  createData(2022, 4, 28, 28, 0.93333),
  createData(2022, 4, 14, 14, 0.46666),
];

function WorkingHoursSummary() {

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
          {rows.map((row) => (
            <TableRow
              key={row.year}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.year}
              </TableCell>
              <TableCell align="right">{row.week_no}</TableCell>
              <TableCell align="right">{row.working_hours}</TableCell>
              <TableCell align="right">{row.effective_working_hours}</TableCell>
              <TableCell align="right">{row.equivalent_week_no}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default WorkingHoursSummary;