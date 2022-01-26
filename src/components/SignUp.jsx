import Navbar from "./Navbar";
import styled from 'styled-components';
import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    message,
    Typography
} from 'antd';
const { Option } = Select;
const { Paragraph, Text } = Typography;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};





export default function SignUp(props) {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const handleChangeRoute = (e) => {
        message.success('You can now log in');
          setTimeout(()=>{
            navigate('/signin');
          },500)
    
      }

    const registerUser = () =>{
        let login = form.getFieldValue('login');
        let password = form.getFieldValue('password');
        let email = form.getFieldValue('email');

        if(login && password && email){
            axios({
                method: 'post',
                url: 'https://pr-movies.herokuapp.com/api/user/create',
                data: {
                    name: login,
                    email: email,
                    password: password,
                }
            }).then((response) =>{
                console.log(response.data);
                handleChangeRoute();
            }).catch((err)=>{
                console.log(err.response.data);
                message.error(err.response.data);
            })
        }
    }

    return (
        <>

            <Navbar component={"SignUp"} />
            <Container>

                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    style={{ width: '35%', padding: '20px', border: '1px solid white' }}
                    scrollToFirstError
                >

                    <h1 style={{ color: 'white' }}>LOGO</h1>

                    <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>

                        <h1 style={{ color: 'white' }}> Sign up</h1>
                        
                    </div>
                    <Form.Item
                        name="login"
                        label="login"
                        tooltip="What will your username be?"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your login!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        // rules={
                        //     [
                        //         {
                        //         type: 'email',
                        //         message: 'The input is not valid E-mail!',
                        //         required: true,
                        //         },
                        //         {
                        //         message: 'Please input your E-mail!',
                        //         },
                                
 
                        //     ]
                        // }
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" onClick={registerUser} htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>


            </Container>

        </>

    );
}