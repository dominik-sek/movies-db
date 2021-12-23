import Navbar from "./Navbar";
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import './styles.css'
import { rgbToHex } from "@mui/material";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color:white !important;
    
`;

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export default function SignIn() {
  return (
    <>
      <Navbar />
      <Container>

      
        <Form
          name="basic"
          style={{ width:'35%', padding: '20px',border: '1px solid white'}}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
        <div style={{display:'flex', justifyContent:'center', padding:'15px'}}>

          <h1 style={{color:'white'}}> logo here</h1>

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
            <Button type="primary" htmlType="submit" style={{cursor:'pointer !important'}}>
              Submit
            </Button>
          </Form.Item>
        </Form>



      </Container>
    </>
  );
}