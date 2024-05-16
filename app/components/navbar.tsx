/** @format */
"use client"
import { usePathname } from "next/navigation"
import Image from "next/image"
import React, { useState } from "react"
import logo from "../assets/logo.svg"
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

import { useAutoAnimate } from '@formkit/auto-animate/react'


type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
}

const NavItems :NavItem[] =[
    {label:'PORTFOLIO', link:'', children:[{
        label: "RESIDENTIAL",
        link: "/our-gallery/residential",
    },
    {
        label: "COMMERCIAL",
        link: "/our-gallery/commercial",
    }]},
    {label:'ABOUT', link:'/about'},
    {label:'PRESS', link:'/press'},
]

export default function Navbar(){
    const currentPath = usePathname();
    const [animationParent] = useAutoAnimate()
    const [isSideMenuOpen, setSideMenu] = useState(false);
    function openSideMenu(){
        setSideMenu(true);
    };
    function closeSideMenu(){
        setSideMenu(false)
    }

    const isActive = (link: any) =>{
        return currentPath ===  link;
    }
    return (
        <div className="border-b-2 bg-white border-b-[#EDEBE0]">
        <div className="mx-auto text-[#222222] font-ponjoung flex w-full max-w-7xl justify-between items-center px-4 py-10 text-xs">
            <section className="flex items-center">
                <Link href={"/"} ><Image src={logo} alt="Logo"/></Link>
            </section>
            <section ref={animationParent}>
                {isSideMenuOpen && 
                <MobileNav closeSideMenu={closeSideMenu}/>
            }
                <div className="hidden md:flex items-center gap-6 transition-all">
                    {NavItems.map((d, i)=>
                    <div key={i}  className="text-[#222222] relative group px-2 py-3 transition-all">
                <Link href={d.link ?? ''} className={(isActive(d.link) || (d.children && d.children.some(child => isActive(child.link)))) ? 'text-black/50':''}>
                    <p className="flex group-hover:hover:text-black/50 cursor-pointer items-center gap-2">
                    <span>{d.label}</span>
                    {d.children && (
                    <IoIosArrowDown className='rotate-180 transition-all group-hover:rotate-0'/>)}
                    </p>
                    </Link>

                    {/* dropdown */}
                    {d.children && (
                    <div className=" absolute right-0 top-8 hidden pt-[.125rem] w-auto flex-col gap-1 rounded-lg bg-none transition-all group-hover:flex">
                        {d.children.map((c, j)=>
                        <Link key={j} href={c.link ?? ''} className={`${(isActive(c.link)) ? 'text-black/50':''} flex cursor-pointer items-start py-1 pl-2 pr-4 text-[#222222] hover:text-black/50`}>
                            <span className="whitespace-nowrap">{c.label}</span>
                        </Link>
                        )}
                    </div>
                    )}
                </div>
                )}
                </div>

                <FiMenu onClick={openSideMenu} className="cursor-pointer md:hidden text-4xl"/>
            </section>
            <div ref={animationParent} className="md:flex hidden">
                <Link href={'/contact'} className={ `group ${(isActive('/contact')) ? 'text-black/50':''}`}>
                        <p className="flex group-hover:hover:text-black/50 cursor-pointer items-center gap-2">
                            <span>CONNECT</span>
                        </p>
                </Link>    
            </div>
        </div>
        </div>
    )
}

function MobileNav({closeSideMenu}:{closeSideMenu:()=>void }){
    return (
        <div className="fixed z-20 left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
            <div className="h-full w-[75%] bg-white p-4">
                <section className="flex justify-end">
                <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl"/>
                </section>
                <div className="flex flex-col text-base gap-2 transition-all">
                    {NavItems.map((d, i)=>
                    <SingleNavItem
                    key={i}
                    label={d.label}
                    link={d.link}>
                        {d.children}
                    </SingleNavItem>
                )}
                </div>
            </div>
        </div>
    )
}

function SingleNavItem(d: NavItem){
    const currentPath = usePathname();
    const [isItemOpen, setItem] = useState(false);
    const [animationParent] = useAutoAnimate()
    function toggleItems(){
        return setItem(!isItemOpen)
    }
    const isActive = (link: any) =>{
        return currentPath ===  link;
    }

    return (
        <div ref={animationParent} onClick={toggleItems} className="relative px-2 py-3 transition-all">
                <Link href={d.link ?? '#'} className={isActive(d.link) || (d.children && d.children.some(child => isActive(child.link))) ? 'text-[#3D7F64]':''}>
                    <p className="flex group-hover:text-[#3D7F64] cursor-pointer items-center gap-2 text-[#222222]">
                    <span>{d.label}</span>
                    {d.children && (
                    <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}/>)}
                    </p>
                    </Link>

                    {/* dropdown */}
                    {isItemOpen && d.children && (
                    <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all">
                        {d.children.map((c, j)=>
                        <Link key={j} href={c.link ?? ''} className="flex cursor-pointer items-center pt-4 pl-6 pr-8 text-[#222222] hover:text-[#3D7F64]">
                            <span className=" whitespace-nowrap pl-3">{c.label}</span>
                        </Link>
                        )}
                    </div>
                    )}
                </div>
    )
}