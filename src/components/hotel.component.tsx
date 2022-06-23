import { h, JSX } from "preact";
import { Hotel, Image } from "../types/booking";
import * as styles from "./hotel.component.module.less";
import StarRating from "react-svg-star-rating";

type HotelProps = {
  hotel: Hotel;
  pricePP: number;
};

export default function Hotel({ hotel, pricePP }: HotelProps) {
  const hotelName: string = hotel["content"]["name"];
  const hotelDescription: string = hotel["content"]["hotelDescription"];
  const hotelFacilities: Array<string> = hotel["content"]["hotelFacilities"];
  const hotelRating: string | number = hotel.content.vRating;

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
        <h4 className={`"card-title" ${styles["header"]}`}>{hotelName}</h4>
        <hr />
        <p className={styles["cardText"]}>
          {hotelRating}
          <StarRating
            count={1}
            size={15}
            unit={"full"}
            initialRating={1}
            isReadOnly={true}
          />
        </p>
        <p className={`card-text ${styles["cardText"]}`}>
         <b> <span>&#8364;</span> {pricePP} <sub>PP</sub> </b>
        </p>
        <p className={`${styles["hotel-facilities"]}`}>          
          {hotelFacilities.toString()}
        </p>
        <br/>
        <p className={`${styles["hotel-desc"]}`}>          
          {hotelDescription}
        </p>
        <a href="#" className={`btn btn-primary btn-block ${styles["hotel-link"]}`}>
          Hotel Details
        </a>
        
      </div>
    </div>
  );
}
