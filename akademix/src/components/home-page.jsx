
// App.js
import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Avatar, Pagination } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';

const ilanlar = [
  { id: 1, ders: 'Direksiyon Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 1803, puan: 4.9, yorum: 20664 },
  { id: 2, ders: 'Yüzme Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 1815, puan: 4.9, yorum: 4221 },
  { id: 3, ders: 'Piyano Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 1220, puan: 4.9, yorum: 2639 },
  { id: 4, ders: 'Ortaokul Matematik Özel Ders', resim: 'https://via.placeholder.com/300x200', profesyonel: 3955, puan: 4.9, yorum: 4508 },
  { id: 5, ders: 'Gitar Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 1400, puan: 4.8, yorum: 3100 },
  { id: 6, ders: 'Satranç Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 950, puan: 4.7, yorum: 1500 },
  { id: 7, ders: 'Resim Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 700, puan: 4.8, yorum: 1100 },
  { id: 8, ders: 'Fen Bilgisi Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 1700, puan: 4.9, yorum: 2200 },
  { id: 9, ders: 'Müzik Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 800, puan: 4.7, yorum: 1400 },
  { id: 10, ders: 'Kimya Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 1300, puan: 4.8, yorum: 2100 },
  { id: 11, ders: 'Fizik Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 1200, puan: 4.9, yorum: 2000 },
  { id: 12, ders: 'Biyoloji Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 1100, puan: 4.8, yorum: 1900 },
  { id: 13, ders: 'Coğrafya Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 900, puan: 4.7, yorum: 1700 },
  { id: 14, ders: 'Tarih Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 800, puan: 4.8, yorum: 1600 },
  { id: 15, ders: 'İngilizce Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 2000, puan: 4.9, yorum: 3000 },
  { id: 16, ders: 'Almanca Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 700, puan: 4.7, yorum: 1500 },
  { id: 17, ders: 'Fransızca Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 600, puan: 4.6, yorum: 1300 },
  { id: 18, ders: 'İspanyolca Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 500, puan: 4.5, yorum: 1200 },
  { id: 19, ders: 'İtalyanca Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 400, puan: 4.4, yorum: 1000 },
  { id: 20, ders: 'Japonca Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 300, puan: 4.3, yorum: 900 },
  { id: 21, ders: 'Mandarin Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 200, puan: 4.2, yorum: 800 },
  { id: 22, ders: 'Rusça Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 100, puan: 4.1, yorum: 700 },
  { id: 23, ders: 'Arapça Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 500, puan: 4.5, yorum: 1200 },
  { id: 24, ders: 'Türk Dili ve Edebiyatı Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 800, puan: 4.8, yorum: 1600 },
  { id: 25, ders: 'Geometri Dersi', resim: 'https://via.placeholder.com/300x200', profesyonel: 700, puan: 4.7, yorum: 1500 },
];

const ITEMS_PER_PAGE = 20;

const HomePage = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedIlanlar = ilanlar.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  const pageCount = Math.ceil(ilanlar.length / ITEMS_PER_PAGE);

  return (
    <Container>
      <Grid container spacing={4}>
        {displayedIlanlar.map((ilan) => (
          <Grid item xs={12} sm={6} md={4} key={ilan.id}>
            <Card>
              <img src={ilan.resim} alt={ilan.ders} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h6">{ilan.ders}</Typography>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <GroupIcon fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{`${ilan.profesyonel} profesyonel`}</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <StarIcon fontSize="small" style={{ color: '#FFD700' }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{`${ilan.puan} (${ilan.yorum} onaylı yorum)`}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Pagination count={pageCount} page={page} onChange={handleChange} color="primary" />
      </Grid>
    </Container>
  );
};

export default HomePage;


// // App.js
// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Card, CardContent, Typography, Pagination, CircularProgress } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
// import GroupIcon from '@mui/icons-material/Group';

// const ITEMS_PER_PAGE = 20;

// const HomePage = () => {
//   const [ilanlar, setIlanlar] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Veri çekme işlemi
//     const fetchIlanlar = async () => {
//       try {
//         const response = await fetch('https://api.example.com/ilanlar'); // API endpoint
//         if (!response.ok) {
//           throw new Error('Veri çekme işlemi başarısız oldu');
//         }
//         const data = await response.json();
//         setIlanlar(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchIlanlar();
//   }, []);

//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   const displayedIlanlar = ilanlar.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
//   const pageCount = Math.ceil(ilanlar.length / ITEMS_PER_PAGE);

//   if (loading) {
//     return (
//       <Container>
//         <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
//           <CircularProgress />
//         </Grid>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container>
//         <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
//           <Typography variant="h6" color="error">{error}</Typography>
//         </Grid>
//       </Container>
//     );
//   }

//   return (
//     <Container>
//       <Grid container spacing={4}>
//         {displayedIlanlar.map((ilan) => (
//           <Grid item xs={12} sm={6} md={4} key={ilan.id}>
//             <Card>
//               <img src={ilan.resim} alt={ilan.ders} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
//               <CardContent>
//                 <Typography variant="h6">{ilan.ders}</Typography>
//                 <Grid container spacing={1} alignItems="center">
//                   <Grid item>
//                     <GroupIcon fontSize="small" />
//                   </Grid>
//                   <Grid item>
//                     <Typography variant="body2">{`${ilan.profesyonel} profesyonel`}</Typography>
//                   </Grid>
//                 </Grid>
//                 <Grid container spacing={1} alignItems="center">
//                   <Grid item>
//                     <StarIcon fontSize="small" style={{ color: '#FFD700' }} />
//                   </Grid>
//                   <Grid item>
//                     <Typography variant="body2">{`${ilan.puan} (${ilan.yorum} onaylı yorum)`}</Typography>
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
//         <Pagination count={pageCount} page={page} onChange={handleChange} color="primary" />
//       </Grid>
//     </Container>
//   );
// };

// export default HomePage;

