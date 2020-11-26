import LikeButton from '.';

describe('LikeButton', () => {
    let component;

    beforeEach(() => {
        component = shallow(<LikeButton />)
    })

    test('renders a button with a string in it', () => {
        let button = component.find('button')
        expect(button.text()).toContain('')
    })
    
    test('shows red background if not liked', () => {
        component.setState({ liked: false })
        let button = component.find('button')
        expect(button.prop('style')).toHaveProperty('color', 'gray')
    })

    test('shows green background if liked', () => {
        component.setState({ liked: true })
        let button = component.find('button')
        expect(button.prop('style')).toHaveProperty('color', 'orange')
    })

    test('toggles liked state when clicked', () => {
        let button = component.find('button')
        let initLikedState = component.state('liked')
        button.simulate('click')
        expect(component.state('liked')).toBe(!initLikedState)
    })
})