// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Link,
//   FormLabel,
//   FormControl,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
// } from "@mui/material";

// export default function SignUp() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState(""); // özel ders almak veya vermek rolünü tutar

//   const handleSignUp = () => {
//     // Hesap oluşturma işlemi burada gerçekleştirilecek
//     console.log("Ad:", firstName);
//     console.log("Soyad:", lastName);
//     console.log("E-posta:", email);
//     console.log("Şifre:", password);
//     console.log("Rol:", role);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" align="center" gutterBottom>
//         Hesap Oluştur
//       </Typography>
//       <form>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               variant="outlined"
//               fullWidth
//               label="Ad"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               variant="outlined"
//               fullWidth
//               label="Soyad"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               variant="outlined"
//               fullWidth
//               label="E-posta"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               variant="outlined"
//               fullWidth
//               label="Şifre"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControl>
//               <FormLabel id="demo-row-radio-buttons-group-label">
//                 Özel Ders Tercihi
//               </FormLabel>
//               <RadioGroup
//                 row
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 name="row-radio-buttons-group"
//               >
//                 <FormControlLabel
//                   value="al"
//                   control={<Radio />}
//                   label="Özel Ders Almak"
//                   onChange={() => setRole("al")}
//                 />
//                 <FormControlLabel
//                   value="ver"
//                   control={<Radio />}
//                   label="Özel Ders Vermek"
//                   onChange={() => setRole("ver")}
//                 />
//               </RadioGroup>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               onClick={handleSignUp}
//             >
//               Hesap Oluştur
//             </Button>
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant="body2">
//               Zaten bir hesabınız var mı?{" "}
//               <Link href="#" variant="body2">
//                 Giriş Yapın
//               </Link>
//             </Typography>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// }



import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState(""); // Yeni eklendi
  const [role, setRole] = useState(""); 

  const handleSignUp = (e) => {
    e.preventDefault(); // Form submit işlemini engeller

    if (!firstName || !lastName || !email || !password || !passwordRepeat) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }

    if (password !== passwordRepeat) {
      alert("Şifreler uyuşmuyor. Lütfen tekrar kontrol ediniz.");
      return;
    }

    console.log("Ad:", firstName);
    console.log("Soyad:", lastName);
    console.log("E-posta:", email);
    console.log("Şifre:", password);
    console.log("Rol:", role);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Hesap Oluştur
      </Typography>
      <form onSubmit={handleSignUp}> {/* onSubmit olayı eklendi */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Ad"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Soyad"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <TextField
              variant="outlined"
              fullWidth
              label="Şifre Tekrar"
              type="password"
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Özel Ders Tercihi
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="al"
                  control={<Radio />}
                  label="Özel Ders Almak"
                  onChange={() => setRole("al")}
                />
                <FormControlLabel
                  value="ver"
                  control={<Radio />}
                  label="Özel Ders Vermek"
                  onChange={() => setRole("ver")}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit" 
              variant="contained"
              color="primary"
              fullWidth
            >
              Hesap Oluştur
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Zaten bir hesabınız var mı?{" "}
              <Link href="#" variant="body2">
                Giriş Yapın
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
