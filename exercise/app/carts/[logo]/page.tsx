"use client";

import { useParams, usePathname } from 'next/navigation';

export default function CartDetail() {
    const pathname = usePathname();// Dùng để lấy đường dẫn đằng sau URL gốc (http://localhost:3000)
    console.log(pathname);
    
    const param = useParams(); //Dùng để lấy giá trị trên URL 
   
    
    

  return  <div>Giá trị trên URL là: {param.logo}</div>
}
