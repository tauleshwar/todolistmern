import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className=' py-5 bg-secondary '>
      <div className="logo flex gap-2 mx-10">
        <Link href='/todo' className='text-2xl font-bold text-primary'>
          <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7929 4.09528V4.09632C15.776 4.1254 12.2955 10.1293 7.95067 17.4596C3.59532 24.8077 0 30.6906 0 30.6906L12.3315 30.6366L12.3323 30.6364L12.3297 30.646C18.3172 30.53 23.7182 26.5935 25.3119 20.6454C25.8102 18.786 25.8853 16.9143 25.5964 15.1255C24.8043 9.8583 20.9149 5.57454 15.7929 4.09528Z" fill="black" />
            <path d="M22.6076 0.309326V0.31037C22.5907 0.339449 19.1102 6.3433 14.7654 13.6736C10.41 21.0218 6.8147 26.9047 6.8147 26.9047L19.1461 26.8506L19.147 26.8505L19.1444 26.86C25.1319 26.7441 30.5329 22.8075 32.1266 16.8594C32.6249 15.0001 32.7 13.1284 32.4111 11.3396C31.619 6.07236 27.7296 1.78859 22.6076 0.309326Z" fill="#10F2C5" />
          </svg>
        </Link>

        <span className='text-2xl font-bold'>TODO</span>
      </div>
    </div>
  )
}

export default Header