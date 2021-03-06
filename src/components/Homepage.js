import React from "react";
import { Link } from "react-router-dom";
import photoChamada from "../photo-chamada.png";
import photoCard from "../photo-card.jpg";
import photoManifesto from "../photo-manifesto.jpg";
import book from "../../src/capa-de-livro.jpg";
import ceramica from "../../src/ceramica.jpg";
import tela from "../../src/tela.jpg";

import CardsHomepage from "./CardsHomepage";

//------ Material Ui -------

import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  gridChamada:{
    height: '90vh',
   
  },
  paddingPhotoChamada: {
    paddingLeft: '50px',
    paddingRight: '50px'
  }
});

function Homepage() {
  const classes = useStyles();

  return (
    <div className="homepage-container container-fluid p-0">
     <Box height='90vh' >

        <Grid container display="flex" justify="center"  alignItems="center"   style={{ minHeight: '90vh' }}  >
          <img src={photoChamada} className={classes.paddingPhotoChamada}/>
        </Grid>

     </Box>

      <Grid container spacing={4} className={classes.gridContainer} align-items-center="center">
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CardsHomepage />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CardsHomepage />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CardsHomepage />
        </Grid>
      </Grid>
      {/* <div className="homepage-destaques container-fluid">
        
  <div className="homepage-destaques-two row align-items-center">
          <div className="col-1">
            <p className='destaques-p-left'>Destaques da semana</p>
              <hr className='hr-destaques-left'/>
          </div>

          <div className="col-10 d-flex justify-content-around">

          <div className="card ">
            <img className="card-img-top" src={book} alt="Card  cap" />
            <div className="card-body">
              <h5 className="card-title">Livro</h5>
              <p className="card-text card-home ">
                Livro de poesias produzido de forma independente e artesanal.
              </p>
              <div className="btn-container-homepage">
              <Link to="/product-all" className="btn-homepage btn">Veja mais</Link>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={ceramica} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Escultura</h5>
              <p className="card-text card-home">
                Escultura feita em cerâmica feita manualmente a partir de bases de argila.
              </p>
              <div className="btn-container-homepage">
              <Link to="/product-all" className="btn-homepage btn">Veja mais</Link>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={tela} alt="Card  cap" />
            <div className="card-body">
              <h5 className="card-title">Pintura em tela</h5>
              <p className="card-text card-home">
               Pintura a mão feita com tinta a óleo sobre tela de pano.
              </p>
              <div className="btn-container-homepage">
              <Link to="/product-all" className="btn-homepage btn">Veja mais</Link>
              </div>
            </div>
          </div>
        

          </div>
        <div className="col-1">
        <hr className='hr-destaques-right'/>
            <p className='destaques-p-right'>Destaques da semana</p>
          </div>
        </div>
      </div> */}
      <div className="homepage-manifest">
        <h1>Manifesto</h1>
        <hr className="hr-manifesto" />

        <div className="div-manifesto container-fluid d-flex justify-content-center align-items-center  ">
          <div className="p-manifesto ">
            <p>
              Somos uma plataforma que não
              <br /> só valoriza os artistas
              <br /> independentes mas que também
              <br /> possibilita a divulgação e venda
              <br /> de suas artes.
              <br />
              Se você é alguém que valoriza
              <br /> esse tipo de conteúdo, ou alguém
              <br /> que já teve coragem o suficiente
              <br /> para mostrar ao sistema que você
              <br /> consegue
              <br />
              criar e produzir algo fora dele, aqui
              <br /> é seu lugar! Junte-se a nós e faça
              <br /> parte desse movimento
              <br /> <span className="destaque-amarelo">Contra Fluxo</span>{" "}
            </p>
          </div>

          <img className="photo-manifesto" src={photoManifesto} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
