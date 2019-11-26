import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import {  UsersTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: '0px',
    
  },
  
}));

const DraftMail = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default DraftMail;
