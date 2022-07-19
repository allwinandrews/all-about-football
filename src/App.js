import { Fragment, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from "react-router-dom";

// mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";

// Pages
import TopScorers from "./components/Pages/TopScorers";

// UI
import { drawerWidth, Main, AppBar, DrawerHeader } from "./components/ui";

// actions
import { getCapitalizedLabelAndRemoveSymbols } from "./actions";

export default function App() {
  const theme = useTheme();
  const { pathname } = useLocation();

  // const getHeader = useCallback(
  //   () => getCapitalizedLabelAndRemoveSymbols(pathname),
  //   [pathname]
  // );

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Box sx={{ display: "flex" }}>
        <Main open={open}>
          <DrawerHeader />
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                {getCapitalizedLabelAndRemoveSymbols(pathname)}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {[{ path: "top-scorers", icon: <StarIcon /> }].map(
                (item, index) => (
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton>
                      <Link to={`/${item.path}`}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                          primary={getCapitalizedLabelAndRemoveSymbols(
                            item.path
                          )}
                        />
                      </Link>
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            {/* <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
          </Drawer>
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate to="/top-scorers" replace />}
            />
            <Route
              exact
              path="/allaboutfootball"
              element={<Navigate to="/top-scorers" replace />}
            />
            <Route exact path="/top-scorers" element={<TopScorers />} />
            {/* <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />}/> */}
          </Routes>
        </Main>
      </Box>
    </Fragment>
  );
}
