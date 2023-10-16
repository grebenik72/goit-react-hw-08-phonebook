import { Box, Container, Typography } from '@mui/material';
import { boxFooterStyle } from './StyleFooter';

const Footer = () => {
  return (
    <Box component="footer" sx={boxFooterStyle}>
      <Container maxWidth="sm">
        <Typography
          variant="body2"
          color="inherit"
          align="center"
          sx={{ mt: 2, mb: 2 }}
        >
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
