/**
 * @jest-environment jsdom
 */

import React from "react";
import SearchProductsButton from "../../components/buttons/SearchProductsButton";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup)
describe('display button correctly', () => {
    it('should render button correctly', () => {
        const {getByTestId} = render(<SearchProductsButton/>)
        expect(getByTestId("actionButton").textContent).toBe('Search Groceries Nearby')
    })
})