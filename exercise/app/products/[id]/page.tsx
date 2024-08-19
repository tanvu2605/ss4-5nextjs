"use client";

import { useParams, usePathname } from 'next/navigation';
import React from 'react'

export default function ProductDetail() {
    const pathname = usePathname();
      
    const param = useParams();
   
    
    

  return  <div>Giá trị trên URL là: {param.id}</div>
}
