
import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Grid, Image, Input } from  'semantic-ui-react';
import img from "../../img/Ellipse-5.png";
import img1 from "../../img/showcase.jpg";
import { Link } from "react-router-dom";

const  homepage  = () => {
  
  const user=true;
	let  elements  = [
		{
			render:()=>{
				return  <Image src={img} size='small' centered/>
			}
		},
		{
			render:()=>{
				return <Image src={img1} size='small' centered/>
			}
	    },
	]
	return (
		<div style={{marginTop:"40px"}}>
      
			<Carousel
        
				elements  =  {  elements  }
				duration  ={3000}
				animation  ='slide left'
				showNextPrev  =  {false}
				showIndicators  ={true}
			/>
        <Grid centered columns='three' divided>
   
      <Grid.Column>
         <Link to="/product"><Image src={img1} size='large' floated='left'/>
        <h1>Title</h1>
        <p>Description</p></Link> 
        {/* <Input
        size='mini'
    placeholder='Quantity'
    type='number'
    defaultValue='1'
    action={ user ? {
      color: 'teal',
      icon: 'plus cart',
      content: 'Add to cart',
    } : {
      color : 'blue',
      content: "Sign Up to Purchase",
      icon : "Signup",
    } }
  /> */}
      </Grid.Column>
      <Grid.Column>
        <Image src={img1} size='large'/>
      </Grid.Column>
      <Grid.Column>
        <Image src={img1} size='large' />
      </Grid.Column>
    

    
      <Grid.Column>
      <Image src={img} size='small'/>
      </Grid.Column>
      <Grid.Column>
        <Image src={img} size='small'/>
      </Grid.Column>
      <Grid.Column>
        <Image src={img} size='small'/>
      </Grid.Column>
   
  </Grid> 
		</div>
    
	)

}
export  default  homepage;

