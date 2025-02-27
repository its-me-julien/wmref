'use client';

import Image from 'next/image';

export default function Example() {
  return (
    <div className="bg-gray-00">
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          alt="Background Hero"
          src="/bghero.png"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-black opacity-30" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              How does the World Mobile referral program work?
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
           Learn how to join the program, where to start, and how to earn rewards for referring your friends and family.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://wmtx.cc/mobile"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}