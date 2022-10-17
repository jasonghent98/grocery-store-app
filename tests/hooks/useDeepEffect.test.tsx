/**
 * @jest-environment jsdom
 */

import {renderHook, render, cleanup} from '@testing-library/react'
import useDeepEffect from '../../utility/useDeepEffect'


// useDeepEffect is a custom hook and needs to be rendered within a react component

/**
 * create a mock component that will render the useDeepEffect method
 * 
 * we want to test if passing a callback func to this component with an array of dependencies containing ref objects will cause a rerender to the DOM
 * 
 * 
 * we also should test a case where the useDeepEffect callback func shouldn't be invoked
 */

describe('this suite takes care of the useDeepEffect test cases', () => {
    // create the useDeepEffect component calls the useDeepEffect hook

    const dependencies = [{name: 'teddy'}, {location: 'Gainesville'}]
    afterEach(cleanup)

    test('callback func in useDeepEffect should execute when we initially mount the component... due to the isFirstEffect var',  () => { 
        const mockFnc = jest.fn()
        renderHook(() => useDeepEffect(mockFnc, dependencies))   
        expect(mockFnc).toHaveBeenCalled()
    })

    test('callback func should execute when we change a dependency', () => {
        const mockFnc = jest.fn()
        renderHook(() => useDeepEffect(mockFnc, dependencies))
        const diffDependencies = [{name: 'different dependencies'}]
        renderHook(() => useDeepEffect(mockFnc, diffDependencies))
        expect(mockFnc).toHaveBeenCalledTimes(2) // calls once during intial mount, and once when deps change
    })
 
   
    test('callback func should not execute when we keep the same dependency and after component rerenders', () => {
        const mockFnc = jest.fn()
        const Component = () => {
            useDeepEffect(mockFnc, dependencies)
            return <h1>Testing the hook with a DOM element</h1>
        }
        const {rerender} = render(<Component/>)
        rerender(<Component/>)
        rerender(<Component/>)
        expect(mockFnc).toHaveBeenCalledTimes(1) 
    })
})