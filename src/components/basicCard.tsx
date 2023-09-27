import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

type basicCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function BasicCard({ title, children }: basicCardProps) {
  return (
    <Card sx={{ width: "100%", height: 210 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16, textAlign: "center" }} color="orange" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ mt: 2 }}>{children}</Box>
      </CardContent>
      {/* <CardActions>
        <Button variant="contained" size="small">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
