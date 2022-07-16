import React, { useEffect, useState } from "react";

// MUI
import {
  Box,
  Grid,
  Paper,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  IconButton,
  styled,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

// apiCalls
import { getTopScorers } from "../../apiServices/apiCalls";

// UI
import Loader from "../ui";
import { Typography } from "@mui/material";

export default function TopScorers() {
  const [topScorers, setTopScorers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = { season: "2019", league: "39" };

    getTopScorers(
      params,
      (response) => {
        // console.log(response.response);
        setTopScorers(response.response);
      },
      (err) => {
        console.log(err);
      },
      (loading) => setLoading(loading)
    );
  }, []);

  const spacing = 2;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={1}>
      {loading && <Loader />}
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {loading === false &&
            topScorers.length > 0 &&
            topScorers.map((each, index) => {
              const { player, statistics } = each;
              console.log("player" + index, player.photo);

              return (
                <Grid key={player.id} item className="zoom">
                  <Paper
                    sx={{
                      height: 250,
                      width: 200,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%",
                      }}
                      src={`${player.photo}?w=248&fit=crop&auto=format`}
                      // srcSet={`${player.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={player.name}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={player.name}
                      subtitle={player.nationality}
                      position="below"
                      style={{ textAlign: "center" }}
                    />
                  </Paper>
                </Grid>
              );
            })}

          {loading === false && topScorers.length === 0 && (
            <Typography paragraph>No Data Found</Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
