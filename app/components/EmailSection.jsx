import React from 'react'
import GithubIcon from '../../../public/github.png'
import twitterIcon from '../../../public/twitter.png'
import LinkedinIcon from '../../../public/linkedin.png'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div> 
            <h5 className='text-xl font-bold text-white my-2'>Letz Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""}
            I am Currently looking for new opportunities, my inbox is always open, 
            Whether you have a question or just want to say hi , I will try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href="github.com">
                <Image src ={/>
            </Link>
        </div>
        </div>
        </section>
  );
}

export default EmailSection