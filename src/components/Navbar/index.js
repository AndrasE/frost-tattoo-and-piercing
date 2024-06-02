import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements'

function Navbar() {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                Frost
            </NavLogo>
            <h1>hello</h1>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar