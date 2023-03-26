import react from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

test("should not allowed click button if isDisabled is present", () => {
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test("should render loading/spinner", () => {
    const {container, getByText} = render(<Button isLoading></Button>)

    expect(getByText(/Loading/i)).toBeInTheDocument()
    expect(container.querySelector("span")).toBeInTheDocument()
})

test("should render <a> tag", () => {
    const {container} = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument()
})

test("should render <a> tag", () => {
    const {container} = render(<Button type="link" isExternal></Button>)

    expect(container.querySelector("a")).toBeInTheDocument()
})

test("should render <Link> component", () => {
    const {container} = render(
        <Router>
            <Button type="link" isExternal></Button>
        </Router>
    )

    expect(container.querySelector("a")).toBeInTheDocument()
})