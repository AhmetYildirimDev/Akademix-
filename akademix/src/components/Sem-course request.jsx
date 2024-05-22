import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

export default function RequestForm() {
  const { handleSubmit, control, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Eğitim Talep Formu
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: 'Ad zorunludur' }}
            render={({ field }) => 
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Ad"
                autoFocus
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ''}
              />
            }
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: 'Soyad zorunludur' }}
            render={({ field }) => 
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Soyad"
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ''}
              />
            }
          />
          <Controller
            name="requestedTraining"
            control={control}
            defaultValue=""
            rules={{ required: 'Talep edilen eğitim zorunludur' }}
            render={({ field }) => 
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Açılmasını Talep Ettiğiniz Eğitim"
                error={!!errors.requestedTraining}
                helperText={errors.requestedTraining ? errors.requestedTraining.message : ''}
              />
            }
          />
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{ required: 'Telefon zorunludur' }}
            render={({ field }) => 
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Telefon"
                type="tel"
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ''}
              />
            }
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ 
              required: 'E-posta zorunludur',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Geçerli bir e-posta adresi giriniz'
              }
            }}
            render={({ field }) => 
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="E-posta"
                type="email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Gönder
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
