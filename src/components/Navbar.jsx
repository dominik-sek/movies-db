//functional component
import React from 'react';
import { Link, Navigate,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import {message} from 'antd';
import { useJwt, decodeToken } from "react-jwt";

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
    background-color: ;
    border-radius: 10px;
    padding:10px;
    margin: 0 10px;
    color: white;
    font-size: 1rem;
`

export default function Navbar(props) {
    const navigate = useNavigate();
    let decoded = decodeToken(props.token);
    
    const logOut = (props, decoded) =>{
        //decode token then make delete request reset props.token and isLoggedIn to false
        axios({
            method: 'delete',
            url:'https://pr-movies.herokuapp.com/api/user/logout/:userId',
            data:{
                userId: decoded.userId
            }
        }).then((res)=>{
            console.log(res)
            message.success('You have been logged out', 1.5)
            setTimeout(()=>{
                navigate('/',{state:{isLoggedIn:false, token:'' } });
            },1500)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    const showNotLogged = (props) =>{
        return(
            <>
            <Link to="/signin" ><Button style={props.component ==="SignIn" ? {backgroundColor: 'rgba(223, 160, 0, 0.8)'} : { backgroundColor: 'transparent'} }>Sign in</Button></Link>  
            <Link to="/signup" style={{marginLeft:'auto'}}>   <Button style={props.component ==="SignUp" ? {backgroundColor: 'rgba(223, 160, 0, 0.8)'} : { backgroundColor: 'transparent'} }>Sign up</Button></Link>
            </>
        )
    }

    const showLoggedIn = (props) =>{
        //add movie button with request 
        return(
            <>
            <Link to = "/add" ><Button style={props.component ==="Add" ? {backgroundColor: 'rgba(223, 160, 0, 0.8)'} : { backgroundColor: 'transparent'} }>Add a movie</Button></Link>
            <Button onClick={()=>{logOut(props, decoded)}} style={ { backgroundColor: 'transparent'} }>Sign out</Button>
            </>
        )
    }
    


    return (

        <TopNavigation >
            <nav style={{ width: '70%', margin: '0 auto', display:'flex' }}>
                <Link to="/" > <Button style={props.component ==="Home" ? {backgroundColor: 'rgba(223, 160, 0, 0.8)'} : { backgroundColor: 'transparent'} }>Home</Button></Link> {/* change to logo */}
                {props.isLoggedIn ? showLoggedIn(props):showNotLogged(props)}
            </nav>
        </TopNavigation>

    )

}


;