import React from "react";
import { Link } from "react-router-dom";
import { FlexColumn, FlexRow } from "../shared/Flex";
import bgImage from '../../assets/bgImage.jpeg' ;
import styles from '../../styles/styles.module.css';
import insta from '../../assets/insta.jpg';
import fb from '../../assets/fb.jpg';
import linkedin from '../../assets/linkedin.jpg';
import arrow from '../../assets/arrow.jpg';
import { ScrollTopContextProvider, ScrollPoint, Link as LinkToScroll } from "react-use-scroll-to";


export const Landing = () => {
  return (
    <ScrollTopContextProvider>
    <FlexColumn width="100%">
      <div className={styles.header}>
        
        <div className={styles.navigation}>

          <div className={styles.leftnav}><Link className={styles.underlined} to="/login">Login</Link></div>  
          
           <div className={styles.rightnav}>
                  <LinkToScroll elementTag="mainSection"><a>About Us</a></LinkToScroll> 
                  <LinkToScroll elementTag="toursSection"><a>Tours</a></LinkToScroll>
                  <LinkToScroll elementTag="contactsSection"><a>Contacts</a></LinkToScroll>
                  </div>
          </div>

          <div className={styles.headermain}>
            <h1>Montenegro</h1>
            <h2>Welcome to magical Montenegro: where the blue Adriatic waves lap the mountain peaks and cultural treasures have long beckoned travelers. Go on an unforgettable journey with us!</h2>
            <button className={styles.letsgobtn}>Let's go!</button>
          </div>
   
      </div>
      
      <div className={styles.main}>
        

        

        <div className={styles.mainleft}>
          
          <div className={styles.item1}>

          <ScrollPoint tag="mainSection">
           <h3>What we offer</h3>
           </ScrollPoint>

           <p>The incredable landscapes of Montenegro are a fairy-tale world of natural beauty.</p>
           
           
<div className={styles.mainimage1}></div>

           </div>


           <div className={styles.item2}>
           
           <p>Delicious local cuisine Montenegro is famous for its unique quisine. Try dishes made from local products and enjoy authentic flavors. </p>
           
           
<div className={styles.mainimage2}></div>

           </div>
           

           </div>

          




        <div className={styles.mainright}> 
        
        <div className={styles.item3}>
        <div className={styles.mainimage3}></div>

        
           
           <p>Mountain lakes, waterfalls, green valleys and clean beaches - all this awaits you. Feel the harmony with nature. </p>

</div>


<div className={styles.item4}>
        <div className={styles.mainimage4}></div>

        
           
           <p>Historical assets Ancient cities, castles and fortresses will tell you the history of Montenegro. You will immerse yourself in the feeling of the past and discover the secrets of this unique country</p>

</div>


        </div>

        </div>

       

<div className={styles.sectionheader}><h4>Reviews</h4><a href="/"><img src={arrow}></img></a></div>

<div className={styles.sectionrewievs}> 

<div className={styles.sectionleft}>
        <div className={styles.sectionimage1}></div>
</div>

<div className={styles.sectionright}>
        <div className={styles.sectionimage2}></div>
</div>



</div>
<ScrollPoint tag="toursSection"> </ScrollPoint>
<div className={styles.downsection}>

<div className={styles.dsleft}>

        <p>Don't waste time - choose the best for your trip to Montenegro with us. Plan your adventure today</p>
        
</div>

<div className={styles.dsright}>
<div className={styles.form}>

<select id="SelectTour" name="SelectTour">
  <option value="selectTour">Select Tour</option>
  <option value="tour1">Tour 1</option>
  <option value="tour2">Tour 2</option>
  <option value="tour3">Tour 3</option>
  </select>

  <select id="SelectDate" name="SelectDate">
  <option value="selectDate">Select Date</option>
  <option value="date">Date 1</option>
  <option value="date2">Date 2</option>
  <option value="date3">Date 3</option>
  </select>

  <select id="NumberOfGuests" name="NumberOfGuests">
  <option value="NumberOfGuests">Number Of Guests</option>
  <option value="date">1 guest</option>
  <option value="date2">2 guests</option>
  <option value="date3">3 guests</option>

  </select>

  <button className={styles.formbtn}>BOOK TOUR</button>
</div>

</div>

</div>

<div className={styles.footer}>


  <div className={styles.footerleft}><a href="/">SeeUp</a></div>
  <div className={styles.footercenter}>
  <ScrollPoint tag="contactsSection">
    <h4>Contacts</h4>
    </ScrollPoint>
  <p>montenegrotour@gmail.com</p>
  <p>+7 897 897 897 99</p></div>
  <div className={styles.footerright}>
    
    <div className={styles.footerlinks}>
      <a href="https://www.instagram.com/"><img src={insta}></img></a>
      <a href="https://www.facebook.com/"><img src={fb}></img></a>
      <a href="https://linkedin.com/"><img src={linkedin}></img></a>
      
      </div>

  </div>
</div>

        



      
    </FlexColumn>
    </ScrollTopContextProvider>

    
  );
};
