import axios from "axios"
import { Button, Form, Input } from 'antd';
export const AddUser=({users,setUsers})=>{

    const onFinish = (values) => {
        let userObj={
            fullName:values.fullName,
            userName:values.userName,
            age:values.age,
            imageUrl:values.imageUrl
        }
        axios.post("http://localhost:8080/users",userObj)
        setUsers([...users,userObj])
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      return (
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
         
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="userName"
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
            label="FullName"
            name="fullName"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="ImageUrl"
            name="imageUrl"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input/>
          </Form.Item>
         
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );  
}