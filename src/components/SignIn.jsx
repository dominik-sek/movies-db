import Navbar from "./Navbar";
import styled from 'styled-components';
import { Form, Input, Button, Checkbox,message } from 'antd';
import './styles.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color:white !important;
    
`;


export default function SignIn(props) {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const handleChangeRoute = (token) => {
    message.success('You will be redirected to the main page',1.5);
      setTimeout(()=>{
        navigate('/',{state:{isLoggedIn:true, token:token } });
      },1500)

  }

  const handleLogin = () => {
    let login = form.getFieldValue('username'); 
    let password = form.getFieldValue('password');
    if(login && password){
      axios({
        method: 'post',
        url: 'https://pr-movies.herokuapp.com/api/user/auth',
        data:{
          login: login,
          password: password
        }
      }).then((res) =>{
        handleChangeRoute(res.data.token);

      }).catch((error)=>{

        message.error(error.response.data,1.5)
        console.log(error.response.data)
      })
    }
  }
      //testowytest1
    //testtest
  return (
    <>
      <Navbar component={"SignIn"} />
      <Container>


        <Form
          form = {form}
          name="basic"
          style={{ width: '35%', padding: '20px', border: '1px solid white' }}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <h1 style={{ color: 'white' }}> LOGO</h1>

          <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>

            <h1 style={{ color: 'white' }}> Login</h1>

          </div>
          <Form.Item
            label="Username"
            name="username"

            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" onClick = {handleLogin} htmlType="submit" style={{ cursor: 'pointer !important' }} className="login-form-button">
              Log in
            </Button>
            Or <Link to="/signup"> register now!</Link>
          </Form.Item>
        </Form>



      </Container>
    </>
  );
}