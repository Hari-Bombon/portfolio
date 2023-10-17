
import React from 'react'
import GithubIcon from '../image/socials/github.png'
import twitterIcon from '../image/socials/twitter.png'
import LinkedinIcon from '../image/socials/linkedin.png'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            email:e.target.email.value,
            subject: e.target.subject.value,
            message:e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "app/send";
        //form the req for sending data to server.
        const options = {
            //the method is POST bcoz we are sending data
            method: 'POST',
            //tell the server we're sending json
            headers: {
                'Content-Type': 'application/json',
            },
            //body of the request is the json data we created above
            body:JSONdata,
        }
    }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-x-1/2'></div>
        <div className='z-10'> 
            <h5 className='text-xl font-bold text-white my-2'>Letz Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""}
            I am Currently looking for new opportunities, my inbox is always open, 
            Whether you have a question or just want to say hi , I will try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href="https://github.com">
                <Image src={GithubIcon} alt="Github Icon"/>
            </Link>

            <Link href="https://linkedin.com">
                <Image src ={LinkedinIcon} alt="Linkedin Icon"/>
            </Link>

            <Link href="https://twitter.com">
                <Image src ={twitterIcon} alt="Twitter Icon"/>
            </Link>
        </div>
        <form className='flex flex-col'>
            <div className='mb-6'>
            <label
            htmlFor='email' className='text-white block text-sm mb-2 font-medium'>
                Your Email
            </label>
            <input
                type='email'
                id='email'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='hi@gmail.com'
            />
            </div>
            <div className='mb-6'>
            <label
            htmlFor='email' className='text-white block  text-sm  mb-2 font-medium'>
               Subject
            </label>
            <input
                type='text'
                id='subject'
                required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Just saying hi'
            />
            </div>
            <div className='m-6'>
                <label
                htmlFor='message'
                className='text-white block text-sm mb-2 font-medium'>
                    Message
            </label>
            <textarea
                name="message"
                id="message"
                className='bg-[#18191E] border border-[#33353F]  placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Let's talk about='....'
            />
            </div>
            <button 
                type="submit"
                className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                    Send Message
                </button>
        </form>
        </div>
        </section>
  );
}

export default EmailSection