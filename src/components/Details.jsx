import Navbar from "./Navbar";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

//https://pr-movies.herokuapp.com/api/movies/{props.id}
export default function Details(props) {
  const param = useParams();
  const [movie, setMovie] = useState({});
  axios.get(`https://pr-movies.herokuapp.com/api/movies/${param.id}`).then((res) =>{
     setMovie(res.data);
  })
  return ( 
  <>      
    <Navbar />
    <Container>

            <div className="row">
                <div className="col-md-6" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                    <h1 style={{color: "white"}}>{movie.title}</h1>
                    <p style={{color: "white", width:'30%'}}>{movie.content}</p>
                    <img style={{width:'25%'}}src={movie.image} alt=""/>
                    </div>
                </div>
        </Container>
    </>
  );
}