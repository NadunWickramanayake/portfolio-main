"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import check from "../../../public/check.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
 
  return (
    
      <section id="contact"className="flex items-center justify-center h-screen relative">
        {/* Background Purple Round */}
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        {/* Content */}
        <div className="z-10 text-center">
          <h5 className="text-2xl font-bold text-white my-7">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you! 
          </p>
          <p className="text-white font-bold mb-4 max-w-md">
            Email Adress - nadun.wic@gmail.com
          </p>  
          <div className="socials flex justify-center gap-2">
            <Link href="https://github.com/NadunWickramanayake">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/nadun-wickramanayake/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLrbGbPlKfZhLPbLqfJKTjqCKVTwgSThRtcTtJwFgBMRdGwvwDZQKlMDrtwTplWcbFkkTg">
              <Image src={check} alt="Mail Icon" />
            </Link>
          </div>
        </div>
      </section>
    );
    
  
    
};

export default EmailSection;
