import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { useAuth, useIsAuthenticated } from "../contexts/auth/hooks";

const Header = () => {
  const isAuthenticated = useIsAuthenticated();
  const { logout } = useAuth();

  const handleSignOut = () => {
    logout();
  };

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

        {isAuthenticated ? (
          <Button variant="contained" color="warning" onClick={handleSignOut}>
            Sign Out
          </Button>
        ) : (
          <Link href="/auth">
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
