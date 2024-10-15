import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const PricingPage = () => {

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Button>
          <Link to="/marketing/landing">Return Landing Page</Link>
        </Button>
        <Typography
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing Plans
        </Typography>
      </Box>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Choose a plan that fits your needs. Our plans are flexible and easy to
        upgrade.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {pricingPlans.map((plan) => (
          <Box
            key={plan.title}
            sx={{
              flex: "1 1 calc(33.333% - 32px)",
              maxWidth: "calc(33.333% - 32px)",
              minWidth: "280px",
              display: "flex",
            }}
          >
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography component="h2" variant="h5" align="center">
                  {plan.title}
                </Typography>
                <Typography variant="h4" align="center" color="text.primary">
                  ${plan.price}/mo
                </Typography>
                <ul>
                  {plan.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <Box sx={{ textAlign: "center", pb: 2 }}>
                {false ? (
                  <Button variant="contained" color="primary">
                    Upgrade
                  </Button>
                ) : (
                  <Link to={plan.to}>
                    <Button variant={plan.buttonVariant} color="primary">
                      {plan.buttonText}
                    </Button>
                  </Link>
                )}
              </Box>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default PricingPage;

type Plan = {
  title: string;
  to: string;
  price: string;
  description: string[];
  buttonText: string;
  buttonVariant: "contained" | "outlined" | "text";
};

const pricingPlans: Plan[] = [
  {
    title: "Free",
    to: "/auth/signup",
    price: "0",
    description: [
      "1 user",
      "5 GB storage",
      "Email support",
      "Help center access",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    to: "/auth/signup",
    price: "15",
    description: [
      "10 users",
      "50 GB storage",
      "Priority email support",
      "Help center access",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    to: "/auth/signup",
    price: "30",
    description: [
      "Unlimited users",
      "150 GB storage",
      "Phone & email support",
      "Help center access",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];
