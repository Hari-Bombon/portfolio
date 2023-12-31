"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import GithubIcon from '../image/socials/github.png';
import LinkedinIcon from '../image/socials/linkedin.png';
import twitterIcon from '../image/socials/twitter.png';
const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [email,SetEmail] =useState('')
    const [subject,SetSubject] =useState('')
    const [message,SetMessage] =useState('')
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: email,
        subject: subject,
        message: message,
      };
      
      fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            alert(`Email sent from ${email}`);
            setEmailSubmitted(true);
            SetEmail('');
            SetSubject('');
            SetMessage('');
          } else {
            console.error('Email sending failed');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    
  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-1/2 -translate-x-1/2'></div>
        <div className='z-10'> 
            <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""}
            I am Currently looking for new opportunities, my inbox is always open, 
            Whether you have a question or just want to say hi , I will try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2 max-w-50% h-auto'>
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
      </div>
      <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                value={email}
                onChange={(e)=>{SetEmail(e.target.value)}}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                value={subject}
                onChange={(e)=>{SetSubject(e.target.value)}}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="m-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e)=>{SetMessage(e.target.value)}}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default EmailSection;