import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { TableHead } from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';
//import { withStyles} from '@material-ui/core/styles';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    //marginTop: theme.spacing.unit * 2,
    marginTop: theme.spacing(2),
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)


  }
});



class App extends Component {

  state = {
    customers: "",
    completed: 0
  }

  // 모든 컴포턴트가 마운트 되었을때
  componentDidMount(){

    // this.timer = setInterval(this.progress, 20);

    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState( {completed: completed >= 100 ? 0 : completed + 1 })
  }

  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {  
                this.state.customers ? this.state.customers.map(c => {
                  return (
                          <Customer
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}
                          />
                  )
                })
                : <TableRow colSpan="6" align="center">
                  <CircularProgress className={classes.progress}  variant="determinate" value={this.state.completed} />
                </TableRow>
              }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);

