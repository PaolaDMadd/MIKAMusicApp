
import Header from '.';

describe('Header', () => {
    let component;
    
    beforeEach(() => {
        component = shallow(<Header />);
    })

    test('it renders', () => {
        expect(component).toExist;
    })
})