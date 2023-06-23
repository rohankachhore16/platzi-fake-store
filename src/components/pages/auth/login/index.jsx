import React, { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import {
  LockOutlined,
  RemoveRedEye,
  Visibility,
  VisibilityOff,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import TextFiledatom from "../../../atoms/textFiled";
import LoginBackground from "../../../../asstes/images/login.gif";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import {
  LoginAsyncThunk,
  ProfileAsyncThunk,
} from "../../../../redux/asyncThunk/authAsyncThunk";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { ROUTE_DEFINATION } from "../../../../utils/routesConstant";
import AlertDialog from "../alertShow";

const Login = () => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const dispatch = useDispatch();
  //   const handleAlertDilog=()=>{
  // setAlertOpen(true)  }
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${LoginBackground})`,
            backgroundRepeat: "no-repeat",
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        //  sx={{
        //   background: { xs: "red" },
        // }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
                remember: false,
              }}
              validationSchema={LoginSchema}
              onSubmit={(values, { resetForm }) => {
                // handleAlertDilog();
                if (values.remember === true) {
                  localStorage.setItem("email", values.email);
                  localStorage.setItem("password", values.password);
                }

                resetForm();

                dispatch(LoginAsyncThunk(values))
                  .unwrap()
                  .then((res) => {
                    dispatch(ProfileAsyncThunk()).
                      unwrap().then((res) => {
                        console.log(res, "_____________Responseu");
                      });

                    toast.success("Successfully created!");
                  })
                  .catch((err) => {
                    console.log(err, "_______error");
                    toast.error("unauthorized created!");
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box sx={{ mt: 1 }}>
                    <TextFiledatom
                      margin="normal"
                      fullWidth
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Email Address"
                      name="email"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      autoComplete="email"
                      autoFocus
                    />
                    <TextFiledatom
                      margin="normal"
                      fullWidth
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {showPassword ? (
                              <VisibilityOff
                                sx={{ cursor: "pointer" }}
                                onClick={() => setShowPassword(false)}
                              />
                            ) : (
                              <Visibility
                                sx={{ cursor: "pointer" }}
                                onClick={() => setShowPassword(true)}
                              />
                            )}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="remember"
                          id="remember"
                          value={values.remember}
                          onChange={handleChange}
                          color="primary"
                        />
                      }
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      // onClick={handleAlertDilog}
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                    {/* <AlertDialog alertOpen={alertOpen} setAlertOpen={setAlertOpen} /> */}
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href={ROUTE_DEFINATION.SIGNUP} variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
