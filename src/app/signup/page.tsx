'use client'

import { Button, Checkbox, Form, Input } from "antd"
import styles from '../styles.module.scss'
import Orsignup from "../components/Orsignup"
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
        <h2 className={`${styles.integral} font-bold text-5xl`}>Create account</h2>
        <p className= {`${styles.integral}  mt-[10px] font-normal text-base `}>Already have an account?
        <Link href={'/login'}> Login</Link></p>
            </div>

        <Form labelCol={{span: 8}} wrapperCol={{span: 16}} style={{marginTop: '100px'}} onFinish={onFinish} >

        <div className="flex justify-elft">
            <Form.Item name="First Name"
            rules={[
          {
            required: true,
            message: 'Please input your First Name'
        }]} >
                <Input placeholder="First Name" style={{height: '49px', width: '262px', border:'1px solid #04030899'}} />
            </Form.Item>

            <Form.Item name="Last Name"
            rules={[
              {
            required: true,
            message: 'Please input your Last Name'
              }]}>

                <Input placeholder="Last Name" style={{height: '49px', width: '262px', marginLeft: '30px', border:'1px solid #04030899'}} />
            </Form.Item>
        </div>

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

      <Form.Item
      name='password'
      rules = {[{
        required: true,
        message: 'Pleace input your password'
      }]}>
        <Input.Password placeholder="Password"
        style={{height: '49px', width: '554px', border:'1px solid #04030899'}} />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox>
            <p>
          i agree to DopeSass Terms of service and Privacy policy
            </p>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '554px', background: '#000000', height: '49px'}}> Create Account </Button>
      </Form.Item>

        </Form>

        <Orsignup />
        </div>
    )
}
