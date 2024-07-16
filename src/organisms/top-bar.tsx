import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  TopBar as TopBarMolecule
} from '../molecules'

function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <TopBarMolecule/>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;