import BackButton from '.';

describe('BackButton', () => {
    let component, stubRouterHistory;

    beforeEach(() => {
        stubRouterHistory = { goBack: jest.fn() }
 
        component = shallow(<BackButton.WrappedComponent history={stubRouterHistory}/>)
    })

    test('renders', () => {
        expect(component).toExist;
    })

    test('calls history goBack function when clicked', () => {
        const btn = component.find('button')
        btn.simulate('click')
        expect(stubRouterHistory.goBack.mock.calls.length).toBe(1)
    })
})