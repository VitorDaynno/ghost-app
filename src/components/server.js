import React, { Component } from 'react';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Dns from '@material-ui/icons/Dns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Server extends Component {
    state = {
        servers: []   
    }
    
    componentDidMount() {
        setInterval(() => { this.getServers() }, 5000);        
    }

    getServers() {
        var token = localStorage.getItem('token');

        axios.get(`/v1/resources`,{ headers: { Authorization: "Bearer " + token } } )
            .then(res => {
                console.log(res.data)
                this.setState({servers: res.data})               
            })
            .catch(error => {
                console.log(error);

                if(error.response && error.response.status && error.response.status === 403) {
                    
                }               
               
            }) 
    }

    mountServers() {
        const { servers } = this.state;

        if (servers.length === 0 ){
            return <Typography  className='no-item'>
                        Não existem bancos cadastrados
                    </Typography> 
        } else {
            return servers.map(server => {
                return <Grid item xs={6}>
                        <ListItem>                            
                            <Avatar style={server.status === 'on'? {backgroundColor: 'green'}: {backgroundColor: 'red'} }>
                                <Dns/>
                            </Avatar>
                        <ListItemText primary={server.name} secondary={server.modificationDate } /></ListItem>
                        </Grid>
            })
        }
    }

    render() {        

        return (
        <div>
            <List>  
            <Grid container spacing={5}>   
                {this.mountServers()}
                </Grid>
            </List>             
        </div>
    );
  }
}

export default Server;
