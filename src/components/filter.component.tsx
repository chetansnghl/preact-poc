/** @jsx h */
import { h, JSX } from "preact";
import { FACILITIES } from '../consts/search'
import * as style from "../less/filter.module.less";

/* istanbul ignore next */
const starIcon = require("../assets/images/star.png") as string;

interface FilterProps {
  handlePriceFilter: (e: MouseEvent) => void;
  handleRatingFilter: (e: MouseEvent) => void;
  handleFacilityFilter: (e: MouseEvent) => void;
  handleRemoveFilter: (e:MouseEvent) => void;
}

export default function Filter({handlePriceFilter,handleRatingFilter,handleFacilityFilter, handleRemoveFilter}: FilterProps) {
    
    const priceFilter = (arr: any[]): JSX.Element => {
        return (
        <div className={style["filter-input"]}>
            <input
            type="checkbox"
            id={arr[0].toString()}
            onClick={handlePriceFilter}
            value={arr}
            />
            <label
            className="form-check-label"
            htmlFor={arr[0].toString()}
            >{`From ${arr[0]} to ${arr[1]}`}</label>
        </div>
        );
    };

    const ratingFilter = (stars: number): JSX.Element => {
        return (
            <div className={style["filter-input"]}>
                <input
                type="checkbox"
                id={stars.toString()}
                onClick={handleRatingFilter}
                value={stars}
                />
                <label
                className="form-check-label"
                htmlFor={stars.toString()}
                >
                {stars}
                <img src={starIcon} width="15" />
                +
                </label>
            </div>
        );
    };

    return (
        <div>
            <div>
            <h2>Filters</h2>
            <div className="d-flex flex-row-reverse">
                <a className="btn btn-xs btn-danger" onClick={handleRemoveFilter}>Reset All</a>           
            </div>
            </div>
            <hr />
            <div className="rating-filter">
                <h4>Ratings</h4>
                {ratingFilter(1)}
                {ratingFilter(2)}
                {ratingFilter(3)}
                {ratingFilter(4)}
                {ratingFilter(5)}
            </div>
            <hr />
            <div className="price-filter">
                <h4>Price PP</h4>
                {priceFilter([0, 500])}
                {priceFilter([500, 1500])}
                {priceFilter([1500, 3000])}
                {priceFilter([3000, 5000])}
            </div>
            <div className="facility-filter">
                <hr />
                <div className="rating-filter">
                <h4>Facilities</h4>
                {FACILITIES.map((facility) => {
                    return (
                    <div className={style["filter-input"]} key={facility}>
                        <input type="checkbox" value={facility} id={facility} onClick={handleFacilityFilter}/>
                        <label className="form-check-label" htmlFor={facility}>
                        {facility}
                        </label>
                    </div>
                    );
                })}
                </div>
            </div>
        </div>
    );
}
