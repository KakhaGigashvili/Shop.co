'use client'

import { Button, Form, Input } from "antd"
import Orsignup from "../components/Orsignup"
import styles from '../styles.module.scss'
import Link from "next/link"

export default () => {

    const onFinish = (value: object | string) => {
        return(
            console.log(value)
        )
    }

    return(
<div className="w-[700px] m-auto">
            <div className=" mt-[50px]">
        <h2 className={`${styles.integral} font-bold text-5xl`}>Welcome Back</h2>
        <p className= {`${styles.integral}  mt-[10px] font-normal text-base `}>Don't have account?
        <Link href={'./login'} > Sign Up</Link></p>
            </div>

        <Form labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        style={{marginTop: '100px'}}
        onFinish={onFinish} >

            <Form.Item
            name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder="Email" style={{height: '49px', width: '554px', border:'1px solid #04030899'}} />
      </Form.Item>

      <Form.Item name='password'
      rules = {[{
        required: true,
        message: 'Pleace input your password'
      }]}>
        <Input.Password placeholder="Password" style={{height: '49px', width: '554px', border:'1px solid #04030899'}} />
      </Form.Item>

        <p className= {`${styles.integral}  mt-[10px] font-normal text-base text-right mb-[30px] mr-[150px] cursor-pointer `} >
            Forgot Password?</p>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '554px', background: '#000000', height: '49px'}}> Login </Button>
      </Form.Item>

        </Form>

        <Orsignup />
        </div>
    )
}
