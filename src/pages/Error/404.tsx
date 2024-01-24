import React from 'react';

import { Box, Typography, Button } from '@mui/material';
import Footer from "../../components/Footer/Footer";

const NotFoundPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',  // 전체 뷰포트 높이
        textAlign: 'center'
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404 Not Found
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        죄송합니다. 찾으시는 페이지를 찾을 수 없습니다.
      </Typography>
      <Button variant="contained" color="primary" href="/">
        홈으로 돌아가기
      </Button>
      <Footer/>
    </Box>
  );
};

export default NotFoundPage;
