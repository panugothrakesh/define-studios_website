/** @format */
"use client"
import {motion} from 'framer-motion'
import React from "react"
import Link from "next/link";

import { useAutoAnimate } from '@formkit/auto-animate/react'
type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
    iconImage?: string;
}

const NavItems :NavItem[] =[
    {label:'Home', link:'/'},
    {label:'About Us', link:'/about-us'},
    {label:'Residential Works', link:'/residential'},
    {label:'Commercial Works', link:'/commercial'},
    {label:'Locations', link:'/locations'},
    {label:'Contact Us', link:'/contact-us'},
]


export default function Footer(){
    const [animationParent] = useAutoAnimate()
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: .5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: .9 }
        }}
        animate={{ opacity: 1 }}
        >
        <div className="bg-white border-t-[1px] border-black/30 flex flex-col justify-center items-center mt-14 pt-14 pb-20">
        <div className="mx-auto text-[#222222] font-haboro flex md:flex-row flex-col justify-between gap-10 md:gap-0 w-full max-w-7xl md:px-24 lg:px-24 xl:px-4 pt-4 pb-10 text-sm">
            <div className="flex flex-col justify-center items-center gap-5">
                <span className=" font-ponjoung">FOLLOW</span>
                <ul className="text-sx text-center flex flex-col gap-2">
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <span className=" font-ponjoung">LOCATION</span>
                <ul className="text-sx text-center leading-loose">
                    <li>Suma Building, Kavuri Hills, Madhapur,<br /> Hyderabad, Telangana 500033</li>
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <span className=" font-ponjoung">CONTACT</span>
                <ul className="text-sx text-center flex flex-col gap-2">
                    <li><Link href={''}>enquires@df9studios.com</Link></li>
                    <li>+91 00000 00000</li>
                </ul>
            </div>
        </div>
        <p className="text-sm text-black/40">&#169; owned by Gleedesign studios but soon by Df9 Studios</p>
        </div>
        </motion.div>
    )
}