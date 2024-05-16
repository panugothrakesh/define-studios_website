/** @format */
"use client"

import Image from "next/image"
import React from "react"
import { IoIosArrowDown } from "react-icons/io";
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
        <div className="border-t-2 bg-white flex flex-col justify-center items-center pt-14 pb-20 gap-6 border-t-[#EDEBE0]">
        <div className="mx-auto text-[#222222] font-ebgaramond flex w-full max-w-7xl justify-center px-4 pt-4 pb-10 text-sm">
            <section ref={animationParent}>
                <div className="flex flex-col md:flex-row items-center gap-6 transition-all">
                    {NavItems.map((d, i)=>
                    <div key={i}  className="relative group px-2 py-3 transition-all">
                <Link href={d.link ?? '#'}>
                    <p className="flex group-hover:text-[#3D7F64] cursor-pointer items-center gap-2 text-[#222222]">
                    <span>{d.label}</span>
                    {d.children && (
                    <IoIosArrowDown className='rotate-180 transition-all group-hover:rotate-0'/>)}
                    </p>
                    </Link>

                    {/* dropdown */}
                    {d.children && (
                    <div className=" absolute left-0 top-10 hidden w-auto flex-row gap-1 rounded-lg py-3 shadow-md transition-all group-hover:flex">
                        {d.children.map((c, j)=>
                        <Link key={j} href={c.link ?? ''} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-[#222222] hover:text-[#3D7F64]">
                            <Image src={c.iconImage ?? ''} alt="Icon"/>
                            <span className=" whitespace-nowrap pl-3">{c.label}</span>
                        </Link>
                        )}
                    </div>
                    )}
                </div>
                )}
                </div>
            </section>
        </div>
        <p >Contact us at  :  <Link href={""} className="text-[#3D7F64]"> <span className="font-bold">support</span>@interiordesign.com</Link></p>
        <hr className="border-white/80 w-full border-1"/>
        <p className="text-sm text-black/40">&#169; owned by Gleedesign studios but soon by Df9 Studios</p>
        </div>
    )
}