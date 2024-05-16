"use client"

// import bg from 'ctabg.png'
import Image from 'next/image'
import { useState } from 'react';
import Balancer from "react-wrap-balancer";

export default function CTA(){
    const [email, setEmail] = useState('');
    return (
        <>
        <div className='mx-auto overflow-hidden flex flex-col gap-8'>
            <div className='py-8 relative overflow-hidden min-h-[520px]'>
                <Image className=" -z-10" src={"/ctabg.png"} alt="Call the Action Background" fill style={{objectFit: 'cover'}}/>
                <div className='z-10 gap-8 flex flex-col w-full max-w-7xl mx-auto pl-4 py-6'>
                    <div>
                    <h1 className='text-6xl font-silkFlower leading-tight text-[#F2F1EB]'>
                        <Balancer>
                            Make your first step <br/>the right one
                        </Balancer>
                    </h1>
                    <p className='font-ebgaramond leading-normal text-xl text-[#F2F1EB]'>
                        <Balancer>
                            Services for the next generation of modern <br/> Interior.
                        </Balancer>
                    </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='font-ebgaramond text-xl text-[#F2F1EB]'>Made for you with love❤️.</p>
                        <div className='bg-[#F2F1EB] text-[#222222] flex w-fit py-1 px-1 justify-between rounded-full'>
                            {/* What&apos;s your email? */}
                            <input value={email} className=' focus:outline-none active:outline-none bg-transparent ml-6 w-52' onChange={e => setEmail(e.target.value)} placeholder="What's your email?"/>
                            <button className='bg-[#3D7F64] text-[#F2F1EB] py-2 px-6 rounded-full'>
                                Let&apos;s get started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full bg-cyan-300" style={`background-image: ${bg}`}> */}
            </div>
        </>
    )
}