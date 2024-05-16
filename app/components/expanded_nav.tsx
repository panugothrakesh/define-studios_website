
import Image from "next/image"
import Link from "next/link"
import portfolio from "../assets/portfoliophoto.jpeg"
import about from "../assets/aboutusphoto.jpeg"
import press from "../assets/pressphoto.jpeg"
import connect from "../assets/connectphoto.jpeg"

export default function Expanded(){
    return(
        <>
            <div className="flex flex-col gap-24">
                <div className="lefttt grid grid-cols-2 justify-between w-screen px-24">
                    <div className="left flex flex-col justify-center items-end">
                        <div className="flex flex-col gap-2">
                            <h3 className=" text-sm 2xl:text-xl font-ebgaramond">01</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p>PORTFOLIO</p>
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">RESIDENTIAL</Link> &nbsp;|&nbsp; <Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">COMMERCIAL</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="right flex justify-end">
                        <Image className="flex justify-end items-end h-[65vw] right-0 w-[38vw] object-cover"src={portfolio} alt="" height={100} width={100}/>
                    </div>
                </div>
                <div className="righttt grid grid-cols-2 justify-between w-screen px-24">
                    <div className="right flex justify-start w-full">
                        <Image className="flex justify-end items-end left-0 h-[65vw] w-[38vw] object-cover" src={about} alt="" height={100} width={100}/>
                    </div>
                    <div className="left flex flex-col justify-center items-start">
                        <div className="flex flex-col gap-2">
                            <h3 className=" text-sm 2xl:text-xl font-ebgaramond">02</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">ABOUT</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lefttt grid grid-cols-2 justify-between w-screen px-24">
                    <div className="left flex flex-col justify-center items-end">
                        <div className="flex flex-col gap-2">
                            <h3 className=" text-sm 2xl:text-xl font-ebgaramond">03</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">PRESS</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="right flex justify-end">
                        <Image className="flex justify-end items-end right-0 h-[65vw] w-[38vw] object-cover" src={press} alt="" height={100} width={100}/>
                    </div>
                </div>
                <div className="righttt grid grid-cols-2 justify-between w-screen px-24">
                    <div className="right flex justify-start">
                        <Image className="flex justify-end items-end left-0 h-[65vw] w-[38vw] object-cover" src={connect} alt="" height={100} width={100}/>
                    </div>
                    <div className="left flex flex-col justify-center items-start">
                        <div className="flex flex-col gap-2">
                            <h3 className=" text-sm 2xl:text-xl font-ebgaramond">04</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">CONNECT</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}