/** @format */
"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useState, ReactNode } from "react";
import logo from "../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

import { useAutoAnimate } from '@formkit/auto-animate/react';

type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
};

const NavItems: NavItem[] = [
    { label: 'PORTFOLIO', link: '', children: [
        {
            label: "INTERIOR",
            link: "/interior",
        },{
        label: "ARCHITECTURE",
        link: "/architecture",
    }
    ]},
    { label: 'ABOUT', link: '/about' },
    { label: 'PRESS', link: '/press' },
];

export default function Navbar() {
    const currentPath = usePathname();
    const [animationParent] = useAutoAnimate();
    const [isSideMenuOpen, setSideMenu] = useState(false);

    function openSideMenu() {
        setSideMenu(true);
    }

    function closeSideMenu() {
        setSideMenu(false);
    }

    const isActive = (link: string | undefined) => {
        return currentPath === link;
    };

    return (
        <div className="bg-white fixed md:sticky">
            <motion.div
                initial="hello"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hello: { opacity: 0, scale: 0.9 }
                }}
                animate={{ opacity: 1 }}
            >
                <div className="mx-auto text-[#222222] font-ponjoung flex w-screen max-w-7xl justify-between items-center px-4 md:py-10 py-4 text-xs">
                    <section className="flex items-center">
                        <Link href={"/"}><Image className="w-4/5 md:w-full" width={512} height={512} src={logo} alt="Logo" /></Link>
                    </section>
                    <section ref={animationParent}>
                        {isSideMenuOpen &&
                            <MobileNav closeSideMenu={closeSideMenu} />
                        }
                        <div className="hidden md:flex items-center gap-6 transition-all">
                            {NavItems.map((d, i) =>
                                <div key={i} className="text-[#222222] relative group px-2 py-3 transition-all">
                                    <Link href={d.link ?? ''} className={(isActive(d.link) || (d.children && d.children.some(child => isActive(child.link)))) ? 'text-black/50' : ''}>
                                        <p className="flex group-hover:hover:text-black/50 cursor-pointer items-center gap-2">
                                            <span>{d.label}</span>
                                            {d.children && (
                                                <IoIosArrowDown className='rotate-180 transition-all group-hover:rotate-0' />
                                            )}
                                        </p>
                                    </Link>

                                    {/* dropdown */}
                                    {d.children && (
                                        <div className="absolute -right-2 top-8 hidden pt-[.125rem] w-auto flex-col gap-1 rounded-lg bg-none transition-all group-hover:flex">
                                            {d.children.map((c, j) =>
                                                <Link key={j} href={c.link ?? ''} className={`${(isActive(c.link)) ? 'text-black/50' : ''} flex cursor-pointer items-start py-1 pl-2 pr-4 text-[#222222] hover:text-black/50`}>
                                                    <span className="whitespace-nowrap">{c.label}</span>
                                                </Link>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <FiMenu onClick={openSideMenu} className="cursor-pointer md:hidden text-4xl" />
                    </section>
                    <div ref={animationParent} className="md:flex hidden">
                        <Link href={'/connect'} className={`group ${(isActive('/connect')) ? 'text-black/50' : ''}`}>
                            <p className="flex group-hover:hover:text-black/50 cursor-pointer items-center gap-2">
                                <span>CONNECT</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

type SingleNavItemProps = {
    label: string;
    link?: string;
    closeSideMenu: () => void;
    children?: ReactNode;
};

type MobileNavProps = {
    closeSideMenu: () => void;
};

function MobileNav({ closeSideMenu }: MobileNavProps) {
    const handleLinkClick = () => {
        closeSideMenu();
    };

    return (
        <div className="fixed z-20 left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
            <div className="h-full w-[75%] bg-white px-4 pt-6 pb-4">
                <section className="flex justify-end">
                    <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
                </section>
                <div className="flex flex-col text-base gap-2 transition-all">
                    {NavItems.map((d, i) => (
                        <SingleNavItem
                            key={i}
                            label={d.label}
                            link={d.link}
                            closeSideMenu={closeSideMenu}
                        >
                            {d.children && d.children.map((c, j) => (
                                <Link key={j} href={c.link ?? ''} className="flex cursor-pointer items-center pt-4 pl-6 pr-8 text-[#222222] hover:text-black/50" onClick={handleLinkClick}>
                                    <span className="whitespace-nowrap pl-3">{c.label}</span>
                                </Link>
                            ))}
                        </SingleNavItem>
                    ))}
                    <Link href={'/connect'} className="flex cursor-pointer items-center absolute bottom-24 text-[#222222] hover:text-black/50" onClick={handleLinkClick}>
                    <button className='py-3 px-14 hover:bg-black bg-black/80 transition-all duration-200 text-white'>CONNECT</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function SingleNavItem({ label, link, children, closeSideMenu }: SingleNavItemProps) {
    const currentPath = usePathname();
    const [isItemOpen, setItem] = useState(false);
    const [animationParent] = useAutoAnimate();

    function toggleItems() {
        setItem(!isItemOpen);
    }

    const isActive = (link: string | undefined) => {
        return currentPath === link;
    };

    const handleClick = () => {
        if (link) {
            closeSideMenu(); // Close mobile menu when a menu item is clicked
        }
    };

    return (
        <div ref={animationParent} onClick={toggleItems} className="text-md relative px-2 py-3 transition-all">
            <Link href={link ?? '#'} className={isActive(link) ? 'text-black/50' : ''}>
                <p className="flex group-hover:text-black/50 cursor-pointer items-center gap-2 text-[#222222]" onClick={handleClick}>
                    <span>{label}</span>
                    {children && (
                        <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />
                    )}
                </p>
            </Link>

            {/* dropdown */}
            {isItemOpen && children && (
                <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all">
                    {children}
                </div>
            )}
        </div>
    );
}
