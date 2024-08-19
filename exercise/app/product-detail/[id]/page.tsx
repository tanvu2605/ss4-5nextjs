"use client";

import { useParams } from 'next/navigation';
import React from 'react'

export default function ProductDetail() {

const param = useParams();

  return <div>Product ID:{param.id}</div>
}
