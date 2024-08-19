"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';

import React from 'react'

export default function Navbar() {
    const pathname = usePathname();
    console.log(pathname);
    
  return (
    <div>
       <Link className={`${pathname === "/" ? "active" : ""}`} href='/'>Trang chủ</Link>
       <Link className={`${pathname === "/contact" ? "active" : ""}`} href='/contact'>Liên Hệ</Link>
       <Link className={`${pathname === "/about" ? "active" : ""}`} href='/about'>Giới Thiệu</Link>
    </div>
  )
}
