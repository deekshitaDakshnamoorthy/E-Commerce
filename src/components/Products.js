import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid } from '@mui/material';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
export default function Products() {
  return (
    
      <div 
      className="Card" 
      style={{ 
      paddingTop: '300px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '50px', 
      }} 
      > 
      <Grid container spacing={3}> 
      {/* First Row */} 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginBottom:'80px' ,marginRight:'30px'}}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='data:image/jpeg;base64,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' 
      alt="Tv " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Televisions
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions>
      <a href="/Tv"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='data:image/jpeg;base64,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'
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Washing Machine
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/Wash"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product
      </Button></a> 
      </CardActions>
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345 ,borderRadius:'30px',marginBottom:'80px',marginRight:'30px' }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://rukminim2.flixcart.com/image/850/1000/kevpwnk0/keyboard/desktop-keyboard/n/s/h/tvs-champ-hd-original-imafvgwswuhnwnu6.jpeg?q=90&crop=false' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Charger
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/php"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://www.kindpng.com/picc/m/137-1373313_computer-mouse-hd-png-download.png' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Mouse 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/bootstrap"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid>
      
      <Grid container spacing={3}> 
      {/* First Row */} 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginBottom:'80px' ,marginRight:'30px'}}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://m.media-amazon.com/images/I/51ZlTi5UKgL._AC_UF1000,1000_QL80_.jpg' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Tablet
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions>
      <a href="/Tablet"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://5.imimg.com/data5/YR/DY/FR/SELLER-18983365/hp-15-intel-core-i5-full-hd-laptop-500x500.jpg' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      HP Laptop
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/java"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product
      </Button></a> 
      </CardActions>
      </Card> 
      </Grid> 
      
      {/* Second Row */} 
      
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345 ,borderRadius:'30px' ,marginRight:'30px'}}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://m.media-amazon.com/images/I/61CorIpO46S.jpg' 
      alt="C " 
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
       Speaker 
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/python"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      <Grid item xs={6} sm={3}> 
      <Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
      <CardActionArea> 
      <CardMedia 
      component="img" 
      height="200" 
      image='https://5.imimg.com/data5/WE/IU/MY-2995572/compaq-18-5-inch-hd-desktop-computer-500x500.jpg' 
      alt="C "
      /> 
      <CardContent> 
      <Typography gutterBottom variant="h5" component="div"> 
      Computer
      </Typography> 
      </CardContent> 
      </CardActionArea> 
      <CardActions> 
      <a href="/react"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
      View Product 
      </Button></a> 
      </CardActions> 
      </Card> 
      </Grid> 
      {/* Third Row */} 
      
      
      
      </Grid>
      
    
      </Grid> 
      </div> 
      ); 
      }