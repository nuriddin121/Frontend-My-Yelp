import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../firebase/firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./yelp.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongMsg, setWrongMsg] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => setWrongMsg(false))
      .catch(() => setWrongMsg(true));
  };
  return (
    <div className="yelpPages">
      <Box height={"100vh"}>
        <Container >
          <Stack >
            <Stack className="stack-login">
              <Box mb={2}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "900",
                    fontSize: "25px",
                  }}
                >
                  Welcome to My Yelp
                </Typography>
                <Typography fontSize={25} sx={{ textAlign: "center" }}>
                  Sign in for Yelp.
                </Typography>
              </Box>
              <form onSubmit={loginHandler}>
                <Box mb={2}>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </Box>
                <Box>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </Box>
                {wrongMsg && (
                  <Typography mt={1} mb={3} fontSize={13} color={"red"}>
                    Your email or password is Wrong
                  </Typography>
                )}

                <Typography mb={2} mt={2} color={"black"}>
                  Don't have an account? <Link to={"/register"}> <span>Register</span>  </Link>
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: "10px", mb: "10px", width: "100%" }}
                >
                  Sign in
                </Button>
              </form>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Login;
