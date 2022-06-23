import { h } from 'preact';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-preact-pure';
import SearchResultComponent from './../../components/searchResult.component';

configure({ adapter: new Adapter })
3
describe('SelectComponent', () => {
    it('should display default value', async () => {
        const search_result_component = mount(<SearchResultComponent />)
        expect(search_result_component).toMatchSnapshot();
    })
})