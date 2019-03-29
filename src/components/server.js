import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Dns from '@material-ui/icons/Dns';


class Server extends Component {
    state = {
        servers: []   
    }
    
    componentDidMount() {
        this.getServers();
    }

    getServers() {
        const servers = [
            {
                name: 'Lepus',
                state: 'Crashed'
            }
        ]

        this.setState({servers})
    }

    mountServers() {
        const { servers } = this.state;

        if (servers.length === 0 ){
            return <span>
                        Nenhum servidor encontrado
                    </span>
        } else {
            return servers.map(server => {
                return <ListItem>                            
                            <Avatar>
                                <Dns/>
                            </Avatar>
                        <ListItemText primary={server.name} secondary={server.state} /></ListItem>
            })
        }
    }

    render() {        

        return (
        <div>
            <List>     
                {this.mountServers()}
            </List>             
        </div>
    );
  }
}

export default Server;
