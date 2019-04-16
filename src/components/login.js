import React, { Component } from 'react';
import '../assets/css/login.css';
import { Grid, Card, CardContent, TextField, Button } from '@material-ui/core';

class Login extends Component {
    

    render() {
        return (
            <div>
                <Card className="ghost-container-login">
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-name"
                                    label="Email"                
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Senha"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained">
                                    Logar
                                </Button>
                            </Grid>
                        </Grid>                   
                    </CardContent>
                </Card>
            </div>
        ) 
    }
}

export default Login;