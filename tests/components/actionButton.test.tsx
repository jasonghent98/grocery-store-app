/**
 * @jest-environment jsdom
 */

import React from "react";
import SearchProductsButton from "../../components/buttons/SearchProductsButton";
import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

afterEach(cleanup)
describe('Search Products Button', () => {
    const props = {
        item: 'test'
    }
    const searchProductsButtonJSX = (
        <SearchProductsButton {...props} />
    )

    it('should render text correctly', () => {
        const {getByTestId} = render(searchProductsButtonJSX)
        expect(getByTestId("searchProductsButton").textContent).toBe('Search Item Nearby')
    })
    
    // test for if the search products button receives props
    describe('props test for search products button', () => {
        it('should receive user input as props', () => {
            const {getByTestId} = render(searchProductsButtonJSX)
            const getButton = getByTestId('searchProductsButton')
            console.log(getButton)
            expect(getButton).toBeInTheDocument()
        })
    })

})