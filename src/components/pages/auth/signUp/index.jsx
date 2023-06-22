import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { ROUTE_DEFINATION } from "../../../../utils/routesConstant";
import TextFiledatom from "../../../atoms/textFiled";
import SignupBack from "../../../../asstes/images/signup.png";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { CreateUserAsyncThunk } from "../../../../redux/asyncThunk/authAsyncThunk";
import { toast } from "react-hot-toast";
import * as Yup from "yup"
const SignUp = () => {
const dispatch = useDispatch()
const signupSchema = Yup.object().shape({
  name: Yup.string().email("Invalid name").required("Enter your name"),

  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${SignupBack})`,
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              width: "100%",
              p: 5,
              borderRadius: "20px",
              boxShadow: "10px 10px 10px rgba(30,30,30,0.5)",
              backdropFilter: "blur(10px)",
              backgroundImage:
                " linear-gradient(to bottom right, rgb(238 232 232 / 20%), rgb(212 226 226 / 41%))",
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={signupSchema}
              onSubmit={(values,{resetForm}) => {
                values.avatar= "https://api.lorem.space/image/face?w=640&h=480&r=867"
 dispatch(CreateUserAsyncThunk(values))
 toast.success("User Create Succesfully ")
resetForm()
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
                  <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <TextFiledatom
                          autoComplete="given-name"
                          name="name"
                          onChange={handleChange}
                          value={values.name}
                          fullWidth
                          onBlur={handleBlur}

                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name}
                          id="name"
                          label="name"
                          autoFocus
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextFiledatom
                          
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                          onBlur={handleBlur}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextFiledatom
                          fullWidth
                          name="password"
                          onChange={handleChange}
                          value={values.password}
                          label="Password"
                          type="password"
                          id="password"
                          onBlur={handleBlur}

                          error={touched.password && Boolean(errors.password)}
                          helperText={touched.password && errors.password}
                          autoComplete="new-password"
                        />
                      </Grid>
                      {/* <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="allowExtraEmails"
                              color="primary"
                            />
                          }
                          label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                      </Grid> */}
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href={ROUTE_DEFINATION.BASE} variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SignUp;
