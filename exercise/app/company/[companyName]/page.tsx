"use client"

import { useParams } from 'next/navigation'
import React from 'react'

export default function Company() {

const param = useParams();
console.log(param);

  return <div>Company Name:{param.companyName}</div>
}
