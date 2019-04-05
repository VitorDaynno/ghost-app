import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Server from './components/server'
import './App.css';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Paper className="columns">
              <Typography variant="h5" className='type-title'>
                Serviços
              </Typography> 
              <Typography  className='no-item'>
                Não existem serviços cadastrados
              </Typography>                         
            </Paper>
          </Grid>
          <Grid item  xs={4}>
            <Paper className="columns">
              <Typography variant="h5" className='type-title'>
                Servidores
              </Typography>
              <Server/>              
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="columns">
              <Typography variant="h5" className='type-title'>
                Bancos
              </Typography>
              <Typography  className='no-item'>
                Não existem bancos cadastrados
              </Typography>               
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
