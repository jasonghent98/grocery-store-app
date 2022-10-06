/**
 * @jest-environment jsdom
 */

 import React from "react";
 import About from "../../pages/about";
 import { render, cleanup, screen } from "@testing-library/react";
 import '@testing-library/jest-dom'
 
 afterEach(cleanup)
 describe('Search Products Button', () => {
     const props = {
         item: 'test'
     }
     const searchProductsButtonJSX = (
         <About/>
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
             expect(getButton).toBeInTheDocument()
         })
     })
 
 })