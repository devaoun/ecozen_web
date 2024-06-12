import React from 'react'
import adHome from '../assets/adHomepage.jpg'
import modelSneaker from '../assets/model-sneaker.png'
import modelSport from '../assets/model-sport.png'
import { Link, useNavigate } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className='min-h-[80vh] m-auto border-2'>
            <Link to='/product' className=' h-[200px]'>
                <img className='w-full' src={adHome} />
            </Link>
            <div className=' bg-ec-home-gray flex flex-col p-[35px] h-fit'>
                <div className=' opacity-50  w-fit font-normal mx-auto text-[20px]'>START SHOPPING</div>
                <div className=' w-fit font-bold mx-auto my-[20px] text-[40px]'>CHOOSE A MODEL</div>
                <div className='w-[1000px] h-fit mx-auto my-[60px] flex justify-between'>
                    <Link to='/product/sneaker'>
                        <button className='w-[400px] h-[300px] hover:shadow-2xl active:opacity-70'>
                            <img src={modelSneaker} />
                            <div className=' text-[30px] w-fit h-fit font-extralight mx-auto'>SNEAKERS</div>
                        </button>
                    </Link>
                    <Link to='/product/sport'>
                        <button className='w-[400px] h-[300px] hover:shadow-2xl active:opacity-70'>
                            <img src={modelSport} />
                            <div className=' text-[30px] w-fit h-fit font-extralight mx-auto'>SPORTS</div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='m-[40px] px-[120px]'>
                <div className=' text-[40px] font-medium text-center'>WHY ECOZEN</div>
                <div className=' text-[20px] font-light text-center mt-[20px]'>
                    ecozen คือแบรนด์รองเท้าที่ทำมาจากเส้นใยธรรมชาติ ที่มีหัวใจหลักคือ ต้องดีต่อสุขภาพเท้าของคนใส่ และต้องใส่ใจต่อสิ่งแวดล้อม ซึ่งการที่รองเท้าของเราจะดีต่อสุขภาพเท้าของคนใส่ได้นั้น เราจะต้องผ่านการทดสอบในเรื่องของความใส่สบาย ความเป็นมิตรกับเท้า และต้องไม่กัดเท้า จุดเด่นของสินค้าเราจึงเป็นเรื่องของความนุ่มสบาย โดยที่ไม่ว่าใครก็ตามที่ได้ลองใส่สินค้าของ ecozen จะต้องรู้สึกดี และสบายกว่ารองเท้าประเภทอื่นๆที่เคยใส่มา และนอกจากเรื่องของการใส่สบายแล้ว ธรรมชาติและสิ่งแวดล้อมของโลกที่เราอาศัยอยู่ก็เป็นเรื่องที่สำคัญ เราจึงเลือกใช้แต่ใยที่มาจากธรรมชาติเป็นหลัก ในการนำมาทำเป็นสินค้า ซึ่งวัตถุดิบหลักที่ทางแบรนด์เลือกใช้ก็คือ เส้นใยกัญชงนั่นเอง เพราะเส้นใยกัญชงเป็นเส้นที่มีคุณสมบัติที่หลากหลาย แถมยังเป็นมิตรต่อสิ่งแวดล้อมมากกว่าเส้นใยธรรมชาติชนิดอื่นๆอีกด้วย และนอกจากเรื่องของเส้นใยธรรมชาติแล้ว ในฐานะที่เป็นผู้ผลิต ทางแบรนด์ยังได้เล็งเห็นว่า การที่ผลิตสินค้าขึ้นมาจากธรรมชาตินั้น ไม่ว่ายังไงก็จะส่งผลกระทบต่อธรรมชาติไม่ทางใดก็ทางหนึ่ง ทางแบรนด์จึงมีแคมเปญ ซื้อรองเท้า 1 คู่ ปลูกต้นไม้ 1 ต้น เพื่อเป็นการรักษาสมดุลระหว่างการผลิตสิ้นค้าและเป็นการเสริมสร้างธรรมชาติให้แข็งแกร่งขึ้นควบคู่ไปกับการผลิตสินค้าที่ดีให้แก่ผู้บริโภค
                </div>
            </div>
        </div>
    )
}
