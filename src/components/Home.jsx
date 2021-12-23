import styled from "styled-components";
import Navbar from "./Navbar";
import React from "react";
import Divider from '@mui/material/Divider';
import { Card } from 'antd';

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

const FILM_DATA = [
    {
        id: 1,
        title: "Matrix Ressurrection",
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
        description: 'Neo comes back to the real world and finds his father missing. He is taken in by the rebel leader, Morpheus, and together with his crew, they investigate the truth behind the apparent',
        genre: 'Action',
        duration: '2h 30m',
        rating: '8.5',
        year: '1999',
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'

    },
    {
        id: 2,
        title: "The Witcher",
        poster: 'https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
        genre: 'Action',
        duration: '2h 30m',
        rating: '8.5',
        year: '1999',
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'
    },
    {
        id: 3,
        title: "Arcane",
        poster: 'https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
        description: 'A young apprentice is selected for a secret society for the purpose of unraveling the mystery of the organization.',
        genre: 'Action',
        duration: '2h 30m',
        rating: '8.5',
        year: '1999',
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'
    },
    {
        id: 4,
        title: "Matrix Ressurrection",
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
        description: 'Neo comes back to the real world and finds his father missing. He is taken in by the rebel leader, Morpheus, and together with his crew, they investigate the truth behind the apparent',
        genre: 'Action',
        duration: '2h 30m',
        rating: '8.5',
        year: '1999',
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'
    },
    {
        id: 5,
        title: "Matrix Ressurrection",
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
        description: 'Neo comes back to the real world and finds his father missing. He is taken in by the rebel leader, Morpheus, and together with his crew, they investigate the truth behind the apparent',
        genre: 'Action',
        duration: '2h 30m',
        rating: '8.5',
        year: '1999',
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'
    },
    {
        id: 6,
        title: "Matrix Ressurrection",
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
        description: 'Neo comes back to the real world and finds his father missing. He is taken in by the rebel leader, Morpheus, and together with his crew, they investigate the truth behind the apparent',
        genre: 'Action',
        duration: '2h 30m',
        rating: '8.5',
        year: '1999',
        director: 'Lana Wachowski, Lilly Wachowski',
        actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'
    }


]


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
    height:40vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
export default function Home() {
    return (

        <div style={{ width: '70%', margin: 'auto',position:'relative' }}>
        
            <Navbar />
             <Container>
                <SwiperContainer>
                    <Swiper navigation={true}>
                        {FILM_DATA.map(film => (
                            <SwiperSlide key={film.id}>
                                {<h1 style={{ color: 'white', position: "absolute", top: 0, zIndex: 999 }}>{film.title}</h1>}
                                {<p style={{ width: '25%', color: 'white', position: "absolute", zIndex: 999, bottom: 0, left: 50 }}>{film.description}</p>}
                                <img src={film.poster} alt={film.title} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </SwiperContainer>
                <Divider style={{ backgroundColor: 'rgb(18,18,18)' }} />
                <h1 style={{ color: 'white' }}>Featured Today:</h1>
                <ContentContainer>
                    {FILM_DATA.map(film => (
                        <div key={film.id}>
                            <Card
                                style={{ width: 200 }}
                                cover={
                                    <img
                                        alt="example"
                                        style={{height:250}}
                                        src={film.poster}
                                    />
                                }
                                actions={[
                                    <StarFilled key="rate" />,
                                    <PlusSquareOutlined key="add" />,
                                    <InfoCircleOutlined key ="info" />
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
                    Watchlist will go here
                </Watchlist>


            </Container>
        </div>

    );
}