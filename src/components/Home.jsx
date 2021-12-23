import styled from "styled-components";
import Navbar from "./Navbar";
import React from "react";
import Divider from '@mui/material/Divider';
import { Card } from 'antd';
import { Link } from 'react-router-dom';


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
export default function Home(props) {
    const FILM_DATA = props.FILM_DATA;
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
                    Watchlist will go here
                </Watchlist>


            </Container>
        </div>

    );
}