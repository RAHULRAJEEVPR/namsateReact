import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should load header with a login butoon",()=>{
    render(
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
)

const home =screen.getByText("home")
expect(home).toBeInTheDocument();
})
it("should change login button to logout button on click",()=>{
    render(
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
)

const loginButton=screen.getByRole("button",{name:"Login"})
//fireing click event
fireEvent.click(loginButton)
const logoutButton=screen.getByRole("button",{name:"Logout"})
expect(logoutButton).toBeInTheDocument();
})