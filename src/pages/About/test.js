import About from '.';

describe('About', () => {
    let component;
    
    beforeEach(() => {
        component = shallow(<About />);
    })

    test('it renders', () => {
        expect(component).toExist;
    })
})