import React from "react";
import "../styles/login.css";
import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Giriş işlemi burada gerçekleştirilecek
    console.log("Kullanıcı adı:", username);
    console.log("Şifre:", password);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Giriş Yap
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Kullanıcı Adı veya E-posta"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Şifre"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Giriş Yap
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link href="#" variant="body2">
              Şifremi Unuttum
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Hesabınız yok mu?{" "}
              <Link href="#" variant="body2">
                Hesap Oluşturun
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
