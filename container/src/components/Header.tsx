import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" style={{ marginBottom: 10 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">
            <Button variant="contained" color="primary">
              App
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="contained" color="primary">
              Dashboard
            </Button>
          </Link>
          <Link href="/marketing">
            <Button variant="contained" color="primary">
              Marketing
            </Button>
          </Link>
        </Typography>

        <Link href="/auth/signin">
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
