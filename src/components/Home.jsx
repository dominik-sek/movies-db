import styled from "styled-components";
import Navbar from "./Navbar";
import React from "react";
import Divider from '@mui/material/Divider';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";


import { Swiper, SwiperSlide } from 'swiper/react';
import { PlusSquareOutlined, StarFilled,InfoCircleOutlined } from '@ant-design/icons';
import "swiper/css";
import "swiper/css/navigation";

import './styles.css'
import SwiperCore, {
    Navigation
} from 'swiper';

SwiperCore.use([Navigation]);

const { Meta } = Card;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    color:white ;
    padding-top:50px;
    height: 100%;
    margin-left:-10%;
    margin-right:-10%;
`;
const SwiperContainer = styled.div`
    width: 100%;
    height:50vh;
    margin-top:50px;
    display: flex;
    align-items: center;
    margin-bottom:50px;
    `;
const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: wrap-reverse;
    justify-content: space-between;
    `;
const Watchlist = styled.div`
    width: 100%;
    height:30vh;
    background-color: rgb(0,0,0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

const callApi = async () => {
    const response = await axios.get('https://pr-movies.herokuapp.com/api/movies');
    return response.data;
};

let FILMS_SORTED = [];
let FILMS_RANDOM = [];

const sortMovies = (movieList) =>{
    movieList.forEach(movie =>{
        //if length of movie.title is > 4
        if(movie.title !== undefined && movie.title !== "" && movie.title.length > 4){
            if(!movie.content.includes("localhost") && movie.image.includes("http")){
                FILMS_SORTED.push(movie);
            }
        }
    });
}

const randomizeMovies = () =>{
    let random = Math.floor(Math.random() * FILMS_SORTED.length);
    for (let i = 0; i<5; i++){
        FILMS_RANDOM.push(FILMS_SORTED[random]);
        random = Math.floor(Math.random() * FILMS_SORTED.length);
    }
}




export default function Home(props) {
    const [movies, setMovies] = React.useState([]);
    const [allMovies, setAllMovies] = React.useState([]);
    const location = useLocation();

    
    React.useEffect(() => {
        callApi().then(data => {
            sortMovies(data);
            randomizeMovies();
            setMovies(FILMS_RANDOM);
            setAllMovies(FILMS_SORTED);
            FILMS_RANDOM = [];
            FILMS_SORTED = [];
        })}, []);
    

    
    //api call to get films, need to sort it by uniqueness and remove ones without titles or content 
    //get 5 from the top
    
    return (

        <div style={{ width: '70%', margin: 'auto',position:'relative' }}>
        
            <Navbar component={"Home"} isLoggedIn={location.state != null ? location.state.isLoggedIn : false} token={location.state != null ? location.state.token : null} />
             <Container>
             <h1 style={{ color: 'white' }}>Featured Today:</h1>
                <SwiperContainer>
                    <Swiper navigation={true} autoplay={true}>
                        {movies.map(film => (
                            <SwiperSlide key={film.id}>
                                {<h1 style={{ color: 'white', position: "absolute", top: 0, zIndex: 999 }}>{film.title}</h1>}
                                {<p style={{ height:'50%', width: '25%', color: 'white', position: "absolute", zIndex: 999, bottom: 0, left: 50, overflow:'hidden',lineHeight:'25px'  }}>{film.content}</p>}
                                <img src={film.image} alt={film.title} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </SwiperContainer>
                <Divider style={{ backgroundColor: 'rgb(18,18,18)' }} />
                <h1 style={{ color: 'white' }}>Movies:</h1>
                <ContentContainer>
                    {allMovies.map(film => (
                        <div key={film.id} style={{width:'fit-content', marginTop: '10px'}}>
                            <Card
                                style={{ width: 200 }}
                                cover={
                                    <img
                                        alt="example"
                                        style={{height:250}}
                                        src={film.image}
                                    />
                                }
                                actions={[
                                    <StarFilled key="rate" />,
                                    <PlusSquareOutlined key="add" />,
                                    <Link to={`details/${film.id}`}> <InfoCircleOutlined key ="info"/> </Link>
                                ]}
                            >
                                <Meta
                                    title={film.title}
                                />
                            </Card>
                        </div>
                    ))}



                </ContentContainer>
                <Divider style={{ backgroundColor: 'rgb(18,18,18)' }} />
                <Watchlist>
                    Watchlist could go here
                </Watchlist>


            </Container>
        </div>

    );
}