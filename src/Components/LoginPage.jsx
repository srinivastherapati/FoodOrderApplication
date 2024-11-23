import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

function LoginPage({ setLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { name, email, phoneNumber, password };

    if (storedUsers.some((user) => user.email === email)) {
      alert("User already exists. Please log in.");
      setIsLogin(true);
    } else {
      localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));
      alert("Signup successful! Please log in.");
      setIsLogin(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: "url('/background.png')", // Path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        "&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Fading effect
          zIndex: 1,
        },
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: "30px",
          width: "400px",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {isLogin ? "Login" : "Sign Up"}
        </Typography>
        <form onSubmit={isLogin ? handleLogin : handleSignup}>
          {!isLogin && (
            <>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                label="Phone Number"
                fullWidth
                margin="normal"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </>
          )}
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            fullWidth
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
        <Button variant="text" onClick={togglePage}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </Button>
      </Paper>
    </Box>
  );
}

export default LoginPage;
