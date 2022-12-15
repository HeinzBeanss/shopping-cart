import { getByRole, getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from '../Nav';
import RouteSwitch from "../RouteSwitch";
import Store from "../Components/Store";

describe ("Store tests", () => {
    
    it("Correctly displays a title", () => {
        render(<RouteSwitch />)
        const storeButton = screen.getByText(/Store/i);
        userEvent.click(storeButton);
        expect(screen.getByText(/PICK OUT YOUR FAVOURITE SINGLES/i).textContent).toMatch(/PICK OUT YOUR FAVOURITE SINGLES/i);
    })

    it("Cart count updates correctly", () => {
        render(<RouteSwitch />)
        const increaseButton = screen.getAllByRole("button", {name: "+"})[0];
        const addtocartButton = screen.getAllByRole("button", {name: "ADD TO CART"})[0];
        const cartTotal = screen.getAllByText(/(0)/i)[1];
        userEvent.click(increaseButton);
        userEvent.click(addtocartButton);
        expect(cartTotal.textContent).toMatch(/(1)/);

    })
})