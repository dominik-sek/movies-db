import Navbar from "./Navbar";
import styled from 'styled-components';
import {Modal} from 'antd';
import { OmitProps } from "antd/lib/transfer/ListBody";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  message,
  Typography
} from 'antd';

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

export default function Add(props) {
  //shouldve been a modal but i dont know how to make it work with routes
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleChangeRoute = (e) => {
      message.success('Your movie has been added, redirecting to the main page',0.2);
        setTimeout(()=>{
          navigate('/', {state: {isLoggedIn:true}}); // <- might be a problem with logging out
        },100)
  
    }
  const handleAdd = () =>{
  
    let title = form.getFieldValue('title');
    let image = form.getFieldValue('image');
    let content = form.getFieldValue('content');
  
    if(title && image && content){
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: title,
                image: image,
                content: content,
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
  <div style={{display:'flex', justifyContent:'center'}}>  
   <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    style={{ width: '35%', padding: '20px', border: '1px solid white' }}
                    scrollToFirstError
                >


                    <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>

                        <h1 style={{ color: 'white' }}> Add a movie</h1>
                        
                    </div>
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input title',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="image"
                        label="Image"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="content"
                        label="Content"
                        rules={[
                            {
                                required: true,
                                message: 'Please input content!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" onClick={handleAdd} htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
    </div>
  );
}