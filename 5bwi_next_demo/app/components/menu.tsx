import Link from 'next/link'
import React from 'react'

type Props = {}

export default function menu({ }: Props) {
    return (
        <div>
            <ul className='flex space-x-4'>
                <li className='hover:text-blue-500 transition-colors'>
                    <Link href="/">Home</Link>
                </li>
                <li className='hover:text-blue-500 transition-colors'>
                    <Link href="/trucks">Trucks</Link>
                </li>
                <li className='hover:text-blue-500 transition-colors'>
                    <Link href="/cars">Cars</Link>
                </li>
            </ul>
        </div>
    );
}