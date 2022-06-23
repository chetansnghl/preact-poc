import { h, JSX } from 'preact'
import { useRouter } from "preact-router";
import { useState, useEffect } from 'preact/hooks';
import Spinner from "react-bootstrap/Spinner";
import SearchComponent from '../components/search.component';
import SearchResultComponent from '../components/searchResult.component';
import { doRequest } from '../services/http.service';
import { BookingRequest, BookingResponse } from '../types/booking';
import { DateTime } from 'luxon';

export default function ResultsRoute(): JSX.Element {
    const [searchParams] = useRouter();
    const [isLoading, setLoading ] = useState(true);
    const [holidays, setHolidays] = useState<BookingResponse[]>([])

    useEffect(() => {
        setLoading(true);
        const departureDate = DateTime.fromFormat(searchParams?.matches?.departureDate, "yyyy-MM-dd").toFormat("dd-MM-yyyy");
        const requestBody: BookingRequest = {
            "bookingType": "holiday",
            "location": searchParams?.matches?.location,
            "departureDate": departureDate,
            "duration": searchParams?.matches?.duration as unknown as number,
            "gateway": "LHR",
            "partyCompositions": [
                {
                    "adults": searchParams?.matches?.adults as unknown as number,
                    "childAges": [],
                    "infants": 0
                }
            ]
        }

        doRequest('POST', '/cjs-search-api/search', requestBody)
            .then((response: unknown | BookingResponse) => {
                setHolidays(response["holidays"]);
                setLoading(false);
            })
    }, [searchParams])


    return (
        <section>
            <div className='container'>
                <SearchComponent />
            </div>
            <div className='row'>
            {isLoading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" />
                    </div>  
                ) : <SearchResultComponent holidays={holidays} setLoading={setLoading} /> } 
                
            </div>
        </section>
    )
}