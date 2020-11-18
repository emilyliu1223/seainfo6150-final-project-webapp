import React, { useState,useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Product from "./Product/Product.jsx";
import Contact from "./Contact/Contact.jsx"
import Error from "./Error/Error.jsx";
import Category from "./Category/Category.jsx";
import Collection from "./Collection/Collection.jsx"
import Footer from "./Footer/Footer.jsx"
import Order from "./Order/Order.jsx"
import Detail from "./Form/Detail.jsx"
import All from "./All/All.jsx"
import { isEmpty } from "lodash";
import Question from "./Contact/Question.jsx"
import Discount from "./Contact/Discount.jsx"


// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  company: "Jolie's",
  founder: "Audrey Hepburn",
  location: "London",
  establisheddate:"12/23/1995",
  email:"joliesltd@gmail.com",
  designer:[
    {
      name:"Sheryl Lowe",
      img:"https://iconiclife.com/wp-content/uploads/2018/07/Style-0718-Sheryl_Lowe-Studio_Nancy_Neil_Photography-880x960.jpg",
      article:"https://www.latimes.com/fashion/la-ig-sheryl-lowe-20181129-story.html",
      quote:"“I decided to follow my love for gemstones, beads and spirituality and create something around that,” Lowe said recently, sitting in her West Los Angeles office. She made 55 unisex necklaces of ebony beads with a pave diamond head inspired by Minerva, the goddess of wisdom. The necklaces were tucked into goodie bags for speakers that included Martha Stewart and Suze Orman."
  },
  {
    name:"Anna Sheffield",
    img:"https://www.jckonline.com/wp-content/uploads/2018/05/anna-sheffield.jpg",
    article:"https://www.documentjournal.com/2019/03/anna-sheffield-the-fashion-sets-new-favorite-jewelry-designer/",
    quote:"“Everybody was starting to streamline and make things more simple, but I love the concept of how they worked between artist and artisan, in that design and art were counted as the same thing,” said Sheffield. “I feel like they’re mutually inclusive. They’re very much the creative process of how people arrive there, and how I arrived at making jewelry is through art. Obviously it’s a product, but it’s very sculptural.”"
},
    {
      name:"Brent Neale",
      img:"https://static01.nyt.com/images/2019/08/08/t-magazine/05tmag-neale-slide-TIM5-copy/05tmag-neale-slide-TIM5-copy-superJumbo-v2.jpg",
      article:"http://www.theenglishroom.biz/2018/05/16/artist-spotlight-series-brent-neale/",
      quote:"I am a jewelry addict. It brings such joy and beauty through the quality and craftsmanship. The art and creation of this creative field has always fascinated me. My recent OBSESSION in jewelry is today’s feature.  I literally want everything and am blown away by the unusual designs featuring whimsical motifs in colorful stones. Fine jewelry can be fun! "
  }
  ],
  service:"301-293-0122",
  time:"10a.m - 7p.m",
  share:"jolies.jewellery@gmail.com"
};

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchedData1, setFetchedData1] = useState([]);
  const [fetchedData2, setFetchedData2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://demo3130502.mockable.io/joliesjewelry"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
      
    };
    const fetchData1 = async () => {
      const response = await fetch(
        " https://demo3130502.mockable.io/joliescommunity"
      );
      const responseJson = await response.json();
      setFetchedData1(responseJson);
      
    };

    const fetchData2 = async () => {
      const response = await fetch(
        "https://demo3130502.mockable.io/joliesquestion"
      );
      const responseJson = await response.json();
      setFetchedData2(responseJson);
      
    };

   
    if(isEmpty(fetchedData)){
      fetchData();
    }
    if(isEmpty(fetchedData1)){
      fetchData1();
    }
    if(isEmpty(fetchedData2)){
      fetchData2();
    }

  }, [fetchedData,fetchedData1,fetchedData2]);
   
  return (
    <>
   
      <header>
     
        <nav>
         <h1 className="brand">Jolie's</h1>
        
          <ul>       
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link"  to="/gallery">Gallery</Link>
            </li>
            <li>
              <div className="dropdown">
                <p>Category</p>
              <div className="dropdown-content">
              <Link className="link" to="/category/all">All</Link>
              <Link className="link" to="/category/earrings">Earrings</Link>
              <Link  className="link" to="/category/rings">Rings</Link>
              <Link  className="link" to="/category/necklaces">Necklaces</Link>
              </div >
               </div>
            </li>
            <li>
            <div className="dropdown">
                <p>About Us</p>
              <div className="dropdown-content">
              <Link className="link"  to="/contact">Contact Us</Link>
              <Link className="link" to="/question">Frequently asked</Link>
              <Link  className="link" to="/discount">Discount</Link>
              </div >
               </div>
             
            </li>
          </ul>
        </nav>
       
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact render={()=>(
              <Home item={fetchedData}
              content={externalContent}
              /> 
              )}
             />
              <Route path="/discount" exact render={()=>(
              <Discount item={fetchedData1}
              /> 
              )}
             />
              <Route path="/question" exact render={()=>(
              <Question item={fetchedData2}
              /> 
              )}
             />
        <Route path="/gallery" exact render={()=>(
              <Gallery
              /> 
        )} />
        <Route path="/category/all" exact render={()=>(
              <All item={fetchedData}
              /> 
        )} />
        <Route path="/category/:cateId" 
              exact 
              render={({match})=>(
              <Category cateId={match.params.cateId} 
                        item={fetchedData}
              /> 
              )}
              />
              <Route path="/collection/:collectionId" 
              exact 
              render={({match})=>(
              <Collection collectionId={match.params.collectionId} 
              item={fetchedData}
              /> 
              )}
              />

            <Route path="/bar/:categoryId/:productId/:orderId/confirmation" 
              exact 
              render={({match})=>(
              <Detail categoryId={match.params.categoryId}
                      productId={match.params.productId}
                      orderId={match.params.orderId}     
                      item={fetchedData}
              /> 
              )}
              />  
        {/* passing parameters via a route path */}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Product
              categoryId={match.params.categoryId}
              productId={match.params.productId}
              item={fetchedData}
            />
          )}
        />
          <Route
          path="/bar/:categoryId/:productId/:orderId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Order
              categoryId={match.params.categoryId}
              productId={match.params.productId}
              orderId={match.params.orderId}
              item={fetchedData}
            />
          )}
        />         
        <Route
          path="/contact"
          exact
          render={() => <Contact content={externalContent} />}
        />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
