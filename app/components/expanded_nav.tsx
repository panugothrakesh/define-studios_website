'use-client'
import Image from "next/image"
import {motion} from 'framer-motion'
import Link from "next/link"
import portfolio from "../assets/portfoliophoto.jpeg"
import about from "../assets/aboutusphoto.jpeg"
import press from "../assets/pressphoto.jpeg"
import connect from "../assets/connectphoto.jpeg"

export default function Expanded(){
    return(
        <>
      <div className="flex flex-col gap-24">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                >
                <div className="lefttt flex flex-col md:flex-row justify-between w-screen md:px-24">
                    <div className="left flex flex-col w-full md:justify-center md:items-end items-center pb-5 md:pb-0">
                        <div className="flex md:flex-col gap-2">
                            <div className="text-lg 2xl:text-2xl flex items-center md:items-start flex-col  gap-2 font-ponjoung">
                            <h3 className=" text-md md:text-sm 2xl:text-xl font-ebgaramond hidden md:flex">01</h3>
                                <div className="flex gap-2 md:hidden">
                                    <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">01</h3>
                                    <p>PORTFOLIO</p>
                                </div>
                                <p className="md:flex hidden">PORTFOLIO</p>
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">RESIDENTIAL</Link> &nbsp;|&nbsp; <Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">COMMERCIAL</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="right flex justify-end w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-full right-0 md:w-[38vw] w-full object-cover" src={portfolio} alt="photo" height={2400} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                animate={{ opacity: 1 }}
                >
                <div className="righttt flex flex-col-reverse md:flex-row justify-evenly w-screen md:px-24">
                    <div className="right flex justify-start w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-full right-0 md:w-[38vw] w-full object-cover" src={about} alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                    <div className="right flex flex-col md:justify-center w-full items-center pb-5 md:pb-0 md:items-start">
                        <div className="flex md:flex-col gap-2">
                            <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">02</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">ABOUT</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                animate={{ opacity: 1 }}
                >
                <div className="lefttt flex flex-col md:flex-row justify-evenly w-screen md:px-24">
                    <div className="left flex flex-col w-full md:justify-center md:items-end items-center pb-5 md:pb-0">
                        <div className="flex md:flex-col gap-2">
                            <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">03</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">PRESS</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="right flex justify-end w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-full right-0 md:w-[38vw] w-full object-cover" src={press} alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                animate={{ opacity: 1 }}
                >
                <div className="righttt flex flex-col-reverse md:flex-row justify-evenly w-screen md:px-24">
                    <div className="right flex justify-start w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-full right-0 md:w-[38vw] w-full object-cover" src={connect} alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                    <div className="right flex flex-col md:justify-center w-full items-center pb-5 md:pb-0 md:items-start">
                        <div className="flex md:flex-col gap-2">
                            <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">04</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">CONNECT</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div>
            </div>
        </>
    )
}