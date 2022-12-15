import { render, screen } from "@testing-library/react"
import Footer from "../Footer";
import Store from "../Components/Store";
import { useState } from "react";
import { airneos, airneoscover, avian, aviancover } from "../images"

describe("Footer tests", () => {

    it("Makes sure the footer is shown on the store page", () => {
        render(<Footer />);
        expect(screen.getByRole("presentation").textContent).toMatch(/Made by David Bean/i);
    })
})