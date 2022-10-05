import {
  Avatar,
  Grid,
  Skeleton,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { PercentageCircle } from "../Card/style";
import React from "react";

const CardSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          // maxWidth: ,
          width: "100%",
          height: 290,
          position: "relative",
          borderRadius: "8px",
          maxWidth: "300px",
        }}>
        <CardMedia>
          <Skeleton width="100%" height={180}></Skeleton>
        </CardMedia>

        <Typography>
          <Skeleton variant="circle"></Skeleton>
        </Typography>

        <CardContent>
          <Typography>
            <Skeleton />
          </Typography>

          <Typography>
            <Skeleton />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardSkeleton;
