import React from "react";
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "./PopularCommunity.css";

// Reusable card component to populate the "Popular Communities" section
const PopularCommunity = (props) => {
    const {name,alt,image}=props
  
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Grid container spacing={1} direction='column'>
            <Grid item>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt={alt}
              />
            </Grid>
            <Grid item>
              <Typography variant="body">
                <div className="prTitle">{name}</div>
              </Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </CardActionArea>
      </Card>
    );
  };
  
  export default PopularCommunity;