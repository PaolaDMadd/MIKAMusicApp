
import Home from '.';

describe('Home', () => {
    let component;
    
    beforeEach(() => {
        component = shallow(<Home />);
    })

    test('it renders', () => {
        expect(component).toExist;
    })
})