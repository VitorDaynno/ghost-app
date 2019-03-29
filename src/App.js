import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Server from './components/server'
import './App.css';



class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Serviços"/>
              <CardContent>
                Nenhum serviço encontrado.
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Servidores"/>
                
                  <Server/>
                
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Bancos"/>
              <CardContent>
                Nenhum banco encontrado.
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
