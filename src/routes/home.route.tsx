/** @jsx h */
import { h, JSX } from 'preact'
import {HOME_PAGE_HEADING_TEXT, HOME_PAGE_DESC_1, HOME_PAGE_DESC_2} from '../consts/search';
import SearchComponent from '../components/search.component'

export default function HomeRoute(): JSX.Element {
    return (
        <section>
            <SearchComponent />
            <h1>{HOME_PAGE_HEADING_TEXT}</h1>
            <p>{HOME_PAGE_DESC_1}</p>
            <p>{HOME_PAGE_DESC_2}</p>
        </section>
    )
}