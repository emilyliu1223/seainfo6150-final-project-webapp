import React from 'react'
import Album from "./Album.jsx"
import "./Gallery.css"


function Gallery(props) {
   
    
    return (
        <div >
            <div className="slogan"> 
            Your happiness. <br/>Our pleasure. 
            </div>
           <div className="gallery_container"> 
           <div className="home_section1">
           <p className="share_name">
            Stephanie</p>
           <p>So for me, jewellery's so much more than just an ornament. Wearing a fab piece of jewellery not only 
           gives me confidence, but also helps me connect me with my memory and loved ones.</p>
        <p className="share_time">Nov, 12, 2019</p>         
       </div>
           <Album />
           </div>
           {/* //////////////////////////////////////////////////// */}
           <div className="contact_us">
           <div className="social_container">
           <div className="contactus_div">
               <div> 
                    <p>We love to see your story and picture. <br /><br />Share To: joliescommunity@gmail.com</p>
               </div>
               </div>
               </div>
               <div className="social_container">
               <div className="social">
               <div> <a href="http://www.facebook.com"><i className="fab fa-facebook-square"></i></a></div>
              <div> <a href="http://www.instagram.com"><i className="fab fa-instagram-square"></i></a></div>
              <div> <a href="http://www.pinterest.com"><i className="fab fa-pinterest"></i></a></div>
              <div> <a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a></div>
              <div> <a href="http://www.youtube.com"><i className="fab fa-youtube"></i></a></div>
               </div>
              </div>
              
           </div>
          
           <div className="home_section2">
            <h2>Article Selection</h2>
           </div>

    {/* //////////////////////////////////////////////////// */}

           <div className="magazine">
              <div>
              <a href="https://gemgossip.com/must-have-keep-safe-co-charm-holder-by-jessie-v-e/"><img src="https://gemgossip.com/wp-content/uploads/2020/11/50566392207_e3df404140_k.jpg" alt="https://gemgossip.com/wp-content/uploads/2020/11/50566392207_e3df404140_k.jpg"/></a>
              </div>
              <div>
              <a className="article_title" href="https://gemgossip.com/must-have-keep-safe-co-charm-holder-by-jessie-v-e/"><h2>Must-Have — Keep Safe Co Charm Holder by Jessie V E</h2></a>
                  <p>Nov 4, 2020</p>
                  <p>Although the long term side effects from COVID are still unknown, 
                      a major impact from quarantine for jewelry lovers has definitely been CHARM OVERLOAD. 
                      Collecting charms for most of 2020 has been the only activity that has given me some happiness and I’ve built up quite the…
                </p>
                <a href="https://gemgossip.com/must-have-keep-safe-co-charm-holder-by-jessie-v-e/"><p>read more ...</p></a>
              </div>
           </div>

           <div className="magazine">
              
              <div>
              <a className="article_title" href="https://gemgossip.com/q-a-with-lauren-newton-jewelry/"><h2>Q & A with Lauren Newton Jewelry</h2></a>
                  <p>Oct 28, 2020</p>
                  <p>
                  Lauren Newton deeply infuses her eponymous jewelry line with her fascination for wildlife. Her latest collection, available on her website and on NEWTWIST, boasts cuffs casted from the pincers of a crab found in Hawaii, and earrings that share the pebbled texture of a sting ray’s…
                </p>
                <a className="article_title" href="https://gemgossip.com/q-a-with-lauren-newton-jewelry/"><p>read more ...</p></a>
              </div>
              <div>
              <a href="https://gemgossip.com/q-a-with-lauren-newton-jewelry/"><img src="https://gemgossip.com/wp-content/uploads/2020/10/50541887186_37291ef1e9_o.jpg" alt="https://gemgossip.com/wp-content/uploads/2020/10/50541887186_37291ef1e9_o.jpg"/></a>
              </div>
           </div>

           <div className="magazine">
              <div>
              <a href="https://gemgossip.com/opal-obsession-the-newest-parle-gems-x-gem-gossip-collaboration/"><img src="https://gemgossip.com/wp-content/uploads/2020/10/50489480372_648a1d5d7b_k.jpg" alt="https://gemgossip.com/wp-content/uploads/2020/10/50489480372_648a1d5d7b_k.jpg"/></a>
              </div>
              <div>
              <a href="https://gemgossip.com/opal-obsession-the-newest-parle-gems-x-gem-gossip-collaboration/"><h2>Opal Obsession — The Newest Parle Gems x Gem Gossip Collaboration</h2></a>
                  <p>Oct 16, 2020</p>
                  <p>
                  Exactly one year ago I launched my first collaboration with gemstone experts Parle Gems. 
                  Our focus was on Intarsia because of my obsession with this intricate gemstone inlay artistry and they 
                  had a bunch sitting in their vault, waiting to come to life! Now we’re…
                </p>
                <a href="https://gemgossip.com/opal-obsession-the-newest-parle-gems-x-gem-gossip-collaboration/"><p>read more ...</p></a>
              </div>
           </div>
            
        </div>
    )
}

export default Gallery
