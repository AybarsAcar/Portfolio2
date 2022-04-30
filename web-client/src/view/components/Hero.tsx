import React from 'react';
import {
  ArrowRightIcon,
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/outline';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

const handleContactHover = () => {};

function Hero() {
  return (
    <div className="w-full h-[60vh] bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">I'm Aybars Acar</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Hello, World!</h1>
          <p className="text-2xl">
            I'm currently working as an analyst at{' '}
            <span className="underline font-semibold text-blue-900">UGL</span>.
          </p>
          <p className="text-2xl py-3">
            I am also a masters student in Computer Science at Monash
            University.
          </p>
          <div
            onMouseEnter={handleContactHover}
            className="flex py-3 w-[40%] my-4 border-b-2 border-black hover:cursor-pointer"
          >
            <ArrowRightIcon className="w-5 mr-8 animate-arrow-animation" />
            <p>Get in touch</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute flex-col top-[35%] left0">
        <ul>
          <li className="bg-[#0A66C2] text-white w-[160px] items-center ml-[-90px] hover:ml-0 duration-300">
            <a
              className="flex justify-between items-center"
              href="https://www.linkedin.com/in/aybarsacar/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <AiOutlineLinkedin size={40} />
            </a>
          </li>
          <li className="bg-[#171515] text-white w-[160px] items-center ml-[-90px] hover:ml-0 duration-300">
            <a
              className="flex justify-between items-center"
              href="https://github.com/AybarsAcar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <BsGithub size={40} />
            </a>
          </li>
          <li className="bg-[#1DA1F2] text-white w-[160px] items-center ml-[-90px] hover:ml-0 duration-300">
            <a
              className="flex justify-between items-center"
              href="https://twitter.com/AybarsAcar1"
              target="_blank"
              rel="noreferrer"
            >
              Twitter <FiTwitter size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;

/*
   <div
          className=" flex flex-col py-8 md:min-w-[760px] bottom-[5%]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CloudUploadIcon className="h-6 text-indigo-600" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600" /> Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
            </p>
          </div>
        </div>
        */

/*
 <div
        className="flex flex-col py-8
        mx-auto my-10 md:left-1/2 transform md:w-[40rem] bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl"
      >
        <p>Connect on</p>

        
        <div className="flex justify-between flex-wrap px-4">
          <div className="px-6">
            <AiOutlineLinkedin className="text-4xl" />
          </div>
          <div className="px-6">
            <FiTwitter className="text-4xl" />
          </div>
          <div className="px-6">
            <BsGithub className="text-4xl" />
          </div>
        </div>
      </div>
*/
