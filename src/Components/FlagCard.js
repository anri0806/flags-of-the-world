import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

function FlagCard({ flag }) {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "inline-block",
        margin: "1px",
        padding: "1px",
        backgroundColor: "rgba(0, 6, 3, 0.5)",
        height: "175px",
        width: "230px",
        textAlign: "center",
      }}
    >
      <CardContent>
        <img
          src={flag.flag}
          alt={flag.name}
          style={{ width: "190px", height: "110px" }}
        />
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          {flag.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FlagCard;
