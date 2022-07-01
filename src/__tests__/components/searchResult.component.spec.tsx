import { h } from 'preact';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import SearchResultComponent from './../../components/searchResult.component';
import holidayJson from '../../../__mocks__/hotels.json';

configure({ adapter: new Adapter })

describe('SelectComponent', () => {
    it('should render properly without holidays', async () => {
        const search_result_component = mount(<SearchResultComponent holidays={[]} />)
        expect(search_result_component).toMatchSnapshot();
    })

    it('should render properly', async () => {
        const search_result_component = mount(<SearchResultComponent holidays={holidayJson.holidays} />)
        expect(search_result_component).toMatchSnapshot();
    })    
})