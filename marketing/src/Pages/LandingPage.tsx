import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Typography
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Home Page
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={5}
        >
          <Link to="/marketing/pricing" style={{ marginInlineEnd: 25 }}>
            <Button variant="contained">Pricing</Button>
          </Link>
          <Link to="/marketing/pricing">
            <Button variant="contained">Pricing</Button>
          </Link>
        </Box>
      </Container>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={4}
        paddingY={5}
        sx={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 calc(33.333% - 32px)",
              maxWidth: "calc(33.333% - 32px)",
              minWidth: "280px",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
      <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          mt: "auto",
          backgroundColor: "primary.main",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h6" component="p">
            My Website
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            &copy; {new Date().getFullYear()} My Website. All rights reserved.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link to="/">Privacy Policy</Link>
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link to="/">Terms of Service</Link>
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              <Link to="/">Contact Us</Link>
            </Button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default LandingPage;
