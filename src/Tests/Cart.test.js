import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RouteSwitch from "../RouteSwitch";

describe ("Cart tests", () => {

    it("Cart count updates correctly", () => {
        render(<RouteSwitch />)
        const storeButton = screen.getByText(/Store/i);
        userEvent.click(storeButton);

        const increaseButton = screen.getAllByRole("button", {name: "+"})[0];
        const addtocartButton = screen.getAllByRole("button", {name: "ADD TO CART"})[0];
        const cartTotal = screen.getAllByText(/(0)/i)[1];
        userEvent.click(increaseButton);
        userEvent.click(addtocartButton);
        expect(cartTotal.textContent).toMatch(/(1)/);

    })

    it("Cart price total updates correctly", () => {
        render(<RouteSwitch />)
        const storeButton = screen.getByText(/Store/i);
        userEvent.click(storeButton);
        const increaseButton = screen.getAllByRole("button", {name: "+"})[0];
        const addtocartButton = screen.getAllByRole("button", {name: "ADD TO CART"})[0];
        const cartbutton = screen.getAllByText(/Cart/i)[0];
        

        userEvent.click(increaseButton);
        userEvent.click(addtocartButton);
        userEvent.click(cartbutton);
        const cartpricetotal = screen.getByText(/total/i);
        expect(cartpricetotal.textContent).toMatch("Cart Total: $40.00");

    })

    it("Cart price total updates correctly with multiple items", () => {
        render(<RouteSwitch />)
        const storeButton = screen.getByText(/Store/i);
        userEvent.click(storeButton);
        const increaseButton = screen.getAllByRole("button", {name: "+"})[0];
        const addtocartButton = screen.getAllByRole("button", {name: "ADD TO CART"})[0];
        const increaseButtontwo = screen.getAllByRole("button", {name: "+"})[31];
        const addtocartButtontwo = screen.getAllByRole("button", {name: "ADD TO CART"})[31];
        const cartbutton = screen.getAllByText(/Cart/i)[0];

        userEvent.click(increaseButton);
        userEvent.click(addtocartButton);
        userEvent.click(increaseButtontwo);
        userEvent.click(increaseButtontwo);
        userEvent.click(increaseButtontwo);
        userEvent.click(addtocartButtontwo);
        userEvent.click(cartbutton);

        const cartpricetotal = screen.getByText(/total/i);
        expect(cartpricetotal.textContent).toMatch("Cart Total: $49.30");
    })

    it("Cart price updates after changing quantity of an item within the cart", () => {
        render(<RouteSwitch />)
        const storeButton = screen.getByText(/Store/i);
        userEvent.click(storeButton);
        const increaseButton = screen.getAllByRole("button", {name: "+"})[0];
        const addtocartButton = screen.getAllByRole("button", {name: "ADD TO CART"})[0];
        const increaseButtontwo = screen.getAllByRole("button", {name: "+"})[31];
        const addtocartButtontwo = screen.getAllByRole("button", {name: "ADD TO CART"})[31];
        const cartbutton = screen.getAllByText(/Cart/i)[0];

        userEvent.click(increaseButton);
        userEvent.click(addtocartButton);
        userEvent.click(increaseButtontwo);
        userEvent.click(increaseButtontwo);
        userEvent.click(increaseButtontwo);
        userEvent.click(addtocartButtontwo);
        userEvent.click(cartbutton);

        const cartpricetotal = screen.getByText(/total/i);
        const cartdecrease = screen.getAllByRole("contentinfo")[1];

        userEvent.click(cartdecrease);
        expect(cartpricetotal.textContent).toMatch("Cart Total: $46.20");
    })
})
