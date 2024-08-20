import {
  ReactNode
} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

type CriteriaProps = {
  children: ReactNode;
  title: string;
};


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '60px',
}));

function Criteria(prop: CriteriaProps) {
  return (
    <Grid 
      container
      padding={2}
    >
      <Grid
        item
        xs={10}
      >
        {prop.title}
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: 'background.default',
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gap: 2,
          }}
        >
          <Item>
            {prop.children}
          </Item>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Criteria;