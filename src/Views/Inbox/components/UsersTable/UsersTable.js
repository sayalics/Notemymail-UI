import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

// import { GetInitials } from '../../../../Helpers/index';

const styles = theme => ({
  root: {},
  content: {
    padding: '0px',
    
  },
  // inner: {
  //   minWidth: 200,
  // },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  
  actions: {
    justifyContent: 'flex-end'
  }
});

class UsersTable extends React.Component{
  constructor(){
    super();
    this.state = {
      selectedUsers : [],
      rowsPerPage : 10,
      page : 0,
    }
  };
  handleSelectAll = event => {
    const { users } = this.props;
    let selectedUsers = [];

    if (event.target.checked) {
      this.setState(selectedUsers = users.map(user => user.id));
    } else {
      this.setState({selectedUsers});
    }

    this.setState({selectedUsers});
  };

   handleSelectOne = (event, id) => {
    const selectedIndex = this.state.selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(this.state.selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(this.state.selectedUsers.slice(1));
    } else if (selectedIndex === this.state.selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(this.state.selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        this.state.selectedUsers.slice(0, selectedIndex),
        this.state.selectedUsers.slice(selectedIndex + 1)
      );
    }

    this.setState({newSelectedUsers});
  };

   handlePageChange = (event, page) => {
    this.setState({page});
  };

   handleRowsPerPageChange = event => {
    this.setState({RowsPerPage : event.target.value});
  };
  render(){
  const { className,classes, users, ...rest } = this.props;
  
  const  {
    selectedUsers,
    rowsPerPage,
    page,
  } = this.state;
 

  
  
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedUsers.length === users.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < users.length
                      }
                      onChange={this.handleSelectAll}
                    />
                  </TableCell>
                  {/* <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Date</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user.id}
                    selected={selectedUsers.indexOf(user.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.indexOf(user.id) !== -1}
                        color="primary"
                        onChange={event => this.handleSelectOne(event, user.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        
                          {/* {GetInitials(user.name)}  */}
                        
                        <Typography variant="body1">{user.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.subject}</TableCell>
                    <TableCell>
                      {moment(user.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={this.handlePageChange}
          onChangeRowsPerPage={this.handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
  }
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default withStyles(styles) (UsersTable);
