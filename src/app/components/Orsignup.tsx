import { Button, Form } from "antd"
import Image from "next/image"

export default () => {
    return(
        <div>
            <div className="relative w-[554px] mb-[30px]">
            <span className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-white px-2 text-black text-sm z-10">
            or
            </span>

        <div className="border border-gray-400 bg-[#04030866] w-full h-[1px]" />
        </div>

        <Form.Item>
        <Button style={{ width: '554px', height: '49px' }}>
        <Image
            alt="google"
            src="/image/google.png"
            width={20}
            height={15}
            className="mr-[10px]"
            />
             Continue with Google
        </Button>
        </Form.Item>

      <Form.Item>
        <Button style={{ width: '554px', height: '49px'}}>
        <Image
            alt="apple"
            src="/image/original-apple.png"
            width={20}
            height={15}
            className="mr-[10px]"
            />
             Continue with Apple </Button>
      </Form.Item>
        </div>
    )
}
