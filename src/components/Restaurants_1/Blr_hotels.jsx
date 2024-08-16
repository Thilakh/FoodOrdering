import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Birk_blr from '../Restaurants_1/Img/Birk_blr.jpg'
import Corner_blr from '../Restaurants_1/Img/Corner_blr.avif'
import Fat_blr from '../Restaurants_1/Img/Fat_blr.avif'
import Glen_blr from '../Restaurants_1/Img/Glen_blr.avif'
import Leon_blr from '../Restaurants_1/Img/Leon_blr.avif'
import Louis_blr from '../Restaurants_1/Img/Louis_blr.jpeg'
import MagnoliaBakery_blr from '../Restaurants_1/Img/MagnoliaBakery_Blr.webp'
import Meghana_blr from '../Restaurants_1/Img/Meghana_blr.avif'
import Pasta_blr from '../Restaurants_1/Img/Pasta_blr.avif'
import Sharief_blr from '../Restaurants_1/Img/Sharief_blr.avif'
import Social_blr from '../Restaurants_1/Img/Social_blr.avif'
import Toit_blr from '../Restaurants_1/Img/Toit_blr.avif'
import './Rest.css'
import { maxHeight } from '@mui/system';
import { Link } from 'react-router-dom';
const Blr_hotels = () => {
  return (
    <>
    <div className='menu-spacing'>
      
      <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Birk_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Birk Oven
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Birk Oven Pizza Restaurant offers artisanal wood-fired pizzas with fresh, locally sourced ingredients. 
          Enjoy a cozy,atmosphere paired with delicious, authentic flavors.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <Link to="/bangalore/restaurants/menu/Toit">
    <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Toit_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Toit 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Toit is a vibrant brewery and pub offering a diverse range of craft beers and delectable pub fare. 
          Experience a lively atmosphere with unique brews and delicious bites.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </Link>
    <div className='menu'>
     <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Corner_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Corner House
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Serves a delightful variety of creamy, handcrafted ice creams in a cozy setting.
          Indulge in classic favorites and innovative flavors that satisfy every sweet tooth.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Fat_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Fat Chef Cafe
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fat Chef serves generous portions of comfort food with a gourmet twist in a relaxed, inviting ambiance. Savor hearty, flavorful dishes that cater to every craving.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Glen_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Glens BakeHouse
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Offers a charming retreat with a selection of freshly baked pastries, cakes, and artisanal coffee. Enjoy a cozy ambiance perfect for relaxing or catching up with friends.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Leon_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Leon Grill
          </Typography>
          <Typography variant="body2" color="text.secondary">
Serves a diverse array of grilled dishes, blending bold flavors and fresh ingredients. Enjoy a casual dining experience with a menu that caters to every palate.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Louis_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Louis Burger
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Offers a gourmet twist on classic burgers, featuring high-quality ingredients and innovative flavors. Enjoy a relaxed dining experience with delicious, handcrafted burgers.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={MagnoliaBakery_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Magnolia Bakery
          </Typography>
          <Typography variant="body2" color="text.secondary">
          is a beloved bakery known for its classic American desserts, including cupcakes, cakes, and cookies. Enjoy a nostalgic treat in a charming, vintage-inspired setting.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <Link to="/bangalore/restaurants/menu/meghanafoods">
    <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Meghana_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Meghana Foods
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Specializes in flavorful, authentic South Indian cuisine, renowned for its delicious biryanis. Experience rich, traditional dishes in a warm, welcoming atmosphere.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </Link>
    <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Pasta_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pasta Street
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Offers a taste of Italy with its authentic pasta dishes and delightful Italian cuisine. Enjoy a cozy dining experience with a menu full of classic and contemporary flavors.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Sharief_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sharief Bhai Briyani
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Serves up aromatic, richly spiced biryanis that capture the essence of traditional flavors. Delight in a culinary experience that combines authentic taste.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='menu'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Social_blr}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Social Kitchen
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Offers a dynamic dining experience with a menu that blends global flavors and innovative cocktails. Enjoy a lively atmosphere perfect for socializing.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    </>
  );
}

export default Blr_hotels;