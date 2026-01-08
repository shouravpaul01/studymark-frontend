import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";

interface ILogoInterface {
  imageClass?: string;
  textClass?: string;
  containerClass?: string; 
}

export default function Logo({ 
  imageClass, 
  textClass,
  containerClass 
}: ILogoInterface) {
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-3 font-semibold hover:opacity-80 transition-opacity duration-200 ${containerClass || ''}`}
    >
      <Image
        src={logo}
        alt="StudyStakes Logo"
        width={40}
        height={31}
        className={`object-contain ${imageClass || ''}`}
        priority 
      />
      <span className={`text-2xl md:text-3xl text-primary font-semibold  mt-1.5 ${textClass || ''}`}>
        StudyMark
      </span>
    </Link>
  );
}