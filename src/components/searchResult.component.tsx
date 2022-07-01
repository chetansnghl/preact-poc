import { h, JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { BookingResponse } from '../types/booking'
import Hotel from "./hotel.component"
import Filter from './filter.component';
import * as styles from '../less/searchResult.module.less';

export default function SearchResultComponent(props): JSX.Element {
  const holidays = props?.holidays;
  const [filteredHolidays, setFilteredHolidays] = useState<BookingResponse[]>(holidays)
  const [selectedPrice, setSelectedPrice] = useState<number[][]>([])
  const [selectedRating, setSelectedRating] = useState<number[]>([])
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([])
  const [render, setRender] = useState(false)
  
  const handlePriceFilter = (e: MouseEvent) => {
      const currentTarget = e.target as HTMLInputElement
      const stringRangeArr = (currentTarget.value).split(',')
      const numberRangeArr = stringRangeArr.map(item => parseInt(item))
      const check = currentTarget.checked
      if(check) setSelectedPrice(prevState => [...prevState, numberRangeArr])
      if(!check) setSelectedPrice(prevState => prevState.filter(item => item[0]!==numberRangeArr[0] && item[1] !== numberRangeArr[1]))
  }
  
  const handleRatingFilter = (e: MouseEvent) => {
      const currentTarget = e.target as HTMLInputElement
      const check = currentTarget.checked;
      const value = parseInt(currentTarget.value);
      if(check) setSelectedRating(prevState => [...prevState, value])
      if(!check) setSelectedRating(prevState => prevState.filter(item => item!=value)) 
  }

  const handleFacilityFilter = (e: MouseEvent) => {
      const currentTarget = e.target as HTMLInputElement
      const check = currentTarget.checked
      if(check) setSelectedFacilities(prevState => [...prevState, currentTarget.value])
      if(!check) setSelectedFacilities(prevState => prevState.filter(item => item!=currentTarget.value))   
  }

  const handleRemoveFilter = (e: MouseEvent) => {
      setSelectedFacilities([])
      setSelectedPrice([])
      setSelectedRating([])
      setRender(true)
      setTimeout(()=>{setRender(false)}, 50)
  }

  useEffect(()=> {
    setFilteredHolidays(holidays);
  }, [holidays]);

  useEffect(()=>selectedFilter(), [selectedPrice, selectedRating, selectedFacilities])

  const selectedFilter = () => {
    let filteredResult = holidays;
    if(selectedRating.length > 0){
        filteredResult = filteredResult.filter(holiday => selectedRating.indexOf(parseInt(holiday["hotel"]["content"]["vRating"])) > -1 )
    }
    if(selectedPrice.length > 0) {
       let filterHoliday : any[] = []
       selectedPrice.forEach(range => {
           filterHoliday.push(filteredResult.filter(holiday => holiday["pricePerPerson"] >= range[0] && holiday["pricePerPerson"] <= range[1]))
        })
        filteredResult = [].concat(...filterHoliday)
    }    
    if(selectedFacilities) {
        filteredResult =  filteredResult.filter(holiday => selectedFacilities.every((requiredFacilities => holiday["hotel"]["content"]["hotelFacilities"].includes(requiredFacilities))))
    }
    setFilteredHolidays(filteredResult);
  }

  return (
    <section className={`full-bleed mt-4 ${styles['holiday-box']}`}>
      <div className={`wrapper ${styles['holiday-list-box']}`}>
        <div className='row'>
          <div className='col-md-3'>
            {!render && <div className={`${styles["filters"]}`}>
                <Filter handlePriceFilter={handlePriceFilter} handleRatingFilter={handleRatingFilter}  handleFacilityFilter={handleFacilityFilter} handleRemoveFilter={handleRemoveFilter}/>
            </div>}

          </div>
          <div className='col-md-9'>
            <div className='row'>
                {filteredHolidays.length > 0 && 
                  <div className={`${styles["hotels-grid"]}`}>
                    {filteredHolidays.map(holiday => {
                        return <Hotel hotel={holiday["hotel"]} pricePP={holiday["pricePerPerson"]}/>
                    })}
                  </div>}
                  {filteredHolidays.length === 0 && 
                      <h1>No Hotels Found!!</h1>
                  }
              </div>
          </div> 
        </div> 
      </div>
    </section>
  )
}