import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Typography,
  Modal,
  Avatar,
  IconButton,
  InputAdornment,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import EditIcon from "@mui/icons-material/Edit";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "********",
    role: "Student", // or 'Teacher'
    photo: null, // Fotoğraf için yer
  });

  const [open, setOpen] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState("");
  const [newValue, setNewValue] = useState("");
  const [hover, setHover] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpen = (field) => {
    setFieldToEdit(field);
    setNewValue(profile[field]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setProfile({ ...profile, [fieldToEdit]: newValue });
    handleClose();
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setProfile({ ...profile, photo: null });
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "500px",
          padding: "20px",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h6">Profile Page</Typography>

        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
            marginBottom: "10px",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Avatar sx={{ width: 100, height: 100 }} src={profile.photo} />
          {hover && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              {profile.photo ? (
                <>
                  <label htmlFor="photo-upload" style={{ cursor: "pointer" }}>
                    <Input
                      accept="image/*"
                      id="photo-upload"
                      type="file"
                      onChange={handlePhotoUpload}
                    />
                    Change Photo
                  </label>
                  <Button onClick={handleRemovePhoto} color="inherit">
                    Remove Photo
                  </Button>
                </>
              ) : (
                <label htmlFor="photo-upload" style={{ cursor: "pointer" }}>
                  <Input
                    accept="image/*"
                    id="photo-upload"
                    type="file"
                    onChange={handlePhotoUpload}
                  />
                  Upload Photo
                </label>
              )}
            </Box>
          )}
        </Box>

        <TextField
          label="First Name"
          value={profile.firstName}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleOpen("firstName")} edge="end">
                  <EditIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          label="Last Name"
          value={profile.lastName}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleOpen("lastName")} edge="end">
                  <EditIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          label="Email"
          value={profile.email}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleOpen("email")} edge="end">
                  <EditIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          label="Password"
          value={profile.password}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => handleOpen("password")} edge="end">
                  <EditIcon color="primary" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          label="Role"
          value={profile.role}
          InputProps={{ readOnly: true }}
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Edit {fieldToEdit}
          </Typography>
          <TextField
            label={fieldToEdit}
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          İşlem başarıyla gerçekleştirildi!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProfilePage;
