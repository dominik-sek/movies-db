import Navbar from "./Navbar";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
export default function SignUp() {
  return (
      <>
      
      <Navbar />
      <Container>

    <div className="row">
        <div className="col-md-6">
            <h1 style={{color: "white"}}>Welcome to Sign Up</h1>
            </div>
        </div>
    </Container>

      </>
        
      );
}