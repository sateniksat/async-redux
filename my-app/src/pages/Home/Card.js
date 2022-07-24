import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {Link} from "react-router-dom";

function CardPro(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.product.image}
          alt={props.product.title}
        />
        <CardContent>
          <Link to={`/product/${props.product.id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {props.product.title.length > 12
              ? props.product.title.slice(0, 11) + "..."
              : props.product.title}
          </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {props.product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.product.category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// function Card() {
//   return <div>Card</div>;
// }

export default CardPro;
