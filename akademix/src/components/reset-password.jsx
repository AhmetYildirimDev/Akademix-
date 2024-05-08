import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Şifre sıfırlama işlemi burada gerçekleştirilecek
    console.log('E-posta:', email);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Şifre Sıfırla
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" align="center" gutterBottom>
              Şifrenizi sıfırlamak için e-posta adresinizi girin.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="E-posta Adresi"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={handleResetPassword}>
              Şifre Sıfırla
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Geri dönmek için <Link href="#" variant="body2">giriş ekranına</Link> gidin.
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ResetPassword;
