import React from "react";
import { Link } from "react-router-dom";
import photoCard from "../photo-card.jpg";
import photoManifesto from "../photo-manifesto.jpg"
import book from "../../src/capa-de-livro.jpg";
import ceramica from '../../src/ceramica.jpg';
import tela from '../../src/tela.jpg';

//------ material ui -------

import { makeStyles } from "@material-ui/core/styles"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    
  },
  media: {
    height: 240,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (

    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ceramica}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    
  );
}

