/** @jsx h */
import { h } from "preact";
import { Hotel } from "../types/booking";
import * as styles from "../less/hotel.module.less";
const starIcon = require("../assets/images/star.png") as string;

type HotelProps = {
  hotel: Hotel;
  pricePP: number;
};

export default function Hotel({ hotel, pricePP }: HotelProps) {
  const name: string = hotel["content"]["name"];
  const description: string = hotel["content"]["hotelDescription"];
  const facilities: Array<string> = hotel["content"]["hotelFacilities"];
  const rating: string | number = hotel.content.vRating;

  const getImageSlider = (images) => {
    const timestamp = Math.floor(Math.random() * 100);
    return (
      <div id={`carouselExampleControls${timestamp}`} className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            {images?.map(function(img, i){
                return (
                  <div className={`carousel-item ${i == 0 ? "active":""}`}>
                    <img className="d-block w-100 card-img-top" src={img.RESULTS_CAROUSEL.url} />
                  </div>
                )
              }       
            )}
        </div>
      </div>
    );
  }

  return (
    <div className={`"card" ${styles["card-box"]}`}>
      {getImageSlider(hotel["content"]["images"])}
      <div className="card-body">
        <h4 className={`"card-title" ${styles["header"]}`}>{name}</h4>
        <hr />
        <div className={styles["cardText"]}>
          {rating}
          <img src={starIcon} width="15" />
        </div>
        <div className={`card-text ${styles["cardText"]}`}>
         <b> <span>&#8364;</span> {pricePP} <sub>PP</sub> </b>
        </div>
        <div className={`${styles["hotel-desc"]}`}>          
          {description}
        </div>        
      </div>
    </div>
  );
}
