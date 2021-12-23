//functional component
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopNavigation = styled.nav`
    background-color: rgb(18 18 18);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    position: fixed;
    left:0;
    z-index: 999;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`
const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    border-radius: 10px;
    padding:10px;
    color: white;
    font-size: 1rem;
`

export default function Navbar() {

    return (

        <TopNavigation >
            <nav style={{ width: '70%', margin: '0 auto', display:'flex' }}>
                <Link to="/">  <Button>Home</Button></Link> {/* change to logo */}
                <Link to="/signin" >   <Button>Sign in</Button></Link>
                <Link to="/signup" style={{marginLeft:'auto'}}>   <Button>Sign up</Button></Link>
            </nav>
        </TopNavigation>

    )

}


;