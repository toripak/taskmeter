import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant='h6' component='h1' color='inherit' noWrap>
          .taskmeter
        </Typography>
        <Typography variant='subtitle2' marginLeft='auto'>
          {new Date().toLocaleDateString('en-gb', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}
        </Typography>
      </Toolbar>
    </React.Fragment>
  )
}

