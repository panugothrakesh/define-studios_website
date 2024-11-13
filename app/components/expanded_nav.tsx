'use-client'
import Image from "next/image"
import {motion} from 'framer-motion'
import Link from "next/link"
// import portfolio from "../assets/portfoliophoto.jpeg"
// import about from "../assets/aboutusphoto.jpeg"
// import press from "../assets/pressphoto.jpeg"
import about from "../assets/about.jpg"
import portfolio from "../assets/portfolio.jpg"
import connect from "../assets/connect.jpg"

export default function Expanded(){
    return(
        <>
      <div className="flex flex-col gap-24">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                >
                <div className="lefttt flex flex-col md:flex-row justify-between w-screen md:px-24">
                    <div className="left flex flex-col w-full md:justify-center md:items-end items-center pb-5 md:pb-0  pr-6 ld:pr-0">
                        <div className="flex md:flex-col gap-2">
                            <div className="text-lg 2xl:text-2xl flex items-center md:items-start flex-col  gap-2 font-ponjoung">
                            <h3 className=" text-md md:text-sm 2xl:text-xl font-ebgaramond hidden md:flex">01</h3>
                                <div className="flex gap-2 md:hidden">
                                    <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">01</h3>
                                    <p>PORTFOLIO</p>
                                </div>
                                <p className="md:flex hidden">PORTFOLIO</p>
                                <p>
                                    <Link href="/interior" className="transition-all duration-100 hover:underline hover:underline-offset-2">INTERIOR</Link>
                                    &nbsp;|&nbsp;
                                    <Link href="/architecture" className="transition-all duration-100 hover:underline hover:underline-offset-2">ARCHITECTURE</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right flex justify-end w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-[160vw] right-0 md:w-[38vw] w-full object-cover" src={portfolio} alt="photo" height={1300} width={700} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                animate={{ opacity: 1 }}
                >
                <div className="righttt flex flex-col-reverse md:flex-row justify-evenly w-screen md:px-24">
                    <div className="right flex justify-start w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-[160vw] right-0 md:w-[38vw] w-full object-cover" src={about} alt="photo" height={1300} width={700} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                    <div className="right flex flex-col md:justify-center w-full items-center pb-5 md:pb-0  pl-6 ld:pl-0 md:items-start">
                        <div className="flex md:flex-col gap-2">
                            <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">02</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href="/about" className="transition-all duration-100 hover:underline hover:underline-offset-2">ABOUT</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                animate={{ opacity: 1 }}
                >
                <div className="lefttt flex flex-col md:flex-row justify-evenly w-screen md:px-24">
                    <div className="left flex flex-col w-full md:justify-center md:items-end items-center pb-5 md:pb-0  pr-6 ld:pr-0">
                        <div className="flex md:flex-col gap-2">
                            <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">03</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href="/connect" className="transition-all duration-100 hover:underline hover:underline-offset-2">CONNECT</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="right flex justify-end w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-[160vw] right-0 md:w-[38vw] w-full object-cover" src={connect} alt="photo" height={1300} width={700} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                </div>
                </motion.div>
            </div>
        </>
    )
}