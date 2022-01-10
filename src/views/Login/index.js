import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, Box, Container, TextField, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from "../../assets/logo_chimu.png";
import background from "../../assets/background.png"


const validationSchema = Yup.object({
    email: Yup
      .string('Enter your username or email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formik = useFormik({
        initialValues: {
          email: email,
          password: password,
        },

        validationSchema: validationSchema,
        onSubmit: (values) => {
            localStorage.setItem('user', JSON.stringify(values, null, 2));
            alert("You're log in!");
        },
      });
    
      useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
          setEmail(storedUser.email);
          setPassword(storedUser.password)
        }
      }, []);

    const useStyles = makeStyles((theme) => ({
        login: {
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: "flex",
            alignItems: "center",
            height: '100vh',
            width: '100vw'

        },

        boxLogin: {
            backgroundColor: '#eceff1',
            width: '100%',
            height: 600,
            borderRadius: 8,
            marginRight: '5%'
        },

        inputBox: {
            marginTop: '5%',
        },

        logoImage: {
            [theme.breakpoints.down('sm')]: {
                marginLeft: '15%',
              },
        }
    }));
    const classes = useStyles()

    return (
        <div className={classes.login}>
            <Container fixed >
                <Grid container justifyContent="center" alignItems="center">

                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <Box className={classes.boxLogin}>

                            <form onSubmit={formik.handleSubmit}>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>


                                    <Grid item xs={11} sm={6} md={6} lg={6} sx={{marginTop: '54px'}} >
                                        <img src={logo} alt="Chimu Escape" className={classes.logoImage} />
                                    </Grid>

                                    <Grid item xs={9} sx={{marginTop: '54px'}}>

                                        
                                        <Typography  variant="caption"
                                            sx={{
                                                fontSize: '16px',
                                                display: 'block'
                                            }}>
                                            Username or Email
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            id="email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                            placeholder="nome@email.com"
                                            variant="outlined"/>
                                    
                                    </Grid>

                                    <Grid item xs={9}>
                                        <Typography  variant="caption"
                                            sx={{
                                                fontSize: '16px',
                                                display: 'block'
                                            }}>
                                            Password
                                        </Typography>

                                        <TextField
                                            fullWidth
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            helperText={formik.touched.password && formik.errors.password}
                                            placeholder="topsecret"
                                            variant="outlined"/>
                                    </Grid>

                                    <Grid item xs={8} sm={6} md={4} lg={4} >
                                        <Button color="primary" variant="contained" type="submit" 
                                            sx={{padding: '12px 0', width:'100%', marginTop: '54px'}}>
                                            Log in
                                        </Button>
                                    </Grid>

                                </Grid>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Login;