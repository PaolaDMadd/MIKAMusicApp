import Fan from '.';

describe(' Fan', () => {
    let component;
    
    beforeEach(() => {
        component = shallow(<Fan />);
    })

    test('it renders', () => {
        expect(component).toExist;
    })
})