import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from '../Nav';
import RouteSwitch from "../RouteSwitch";

describe("Navigation Bar tests", () => {
    it("The nav bar correctly allows the user to navigate the website", () =>{
        render(<RouteSwitch />)
        // render(<Nav />)
        const storeButton = screen.getByText(/Store/i);

        userEvent.click(storeButton);
        expect(global.window.location.pathname).toContain("/store");
    })
})