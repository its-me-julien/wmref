'use client'

import Image from 'next/image'

export default function Example() {
  return (
    <header className="bg-background">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      >
        <div className="flex items-center lg:flex-1">
          <a
            href="https://worldmobilereferral.com/"
            className="-m-1.5 p-1.5 flex items-center space-x-2"
          >
            <Image
              alt="World Mobile Referral Logo"
              src="/web-app-manifest-512x512.png"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-foreground font-semibold text-lg">
              World Mobile Referral
            </span>
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12"></div>

        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a
            href="https://wmtx.cc/mobile"
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-foreground shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary"
          >
            Get a Code
          </a>
        </div>
      </nav>
    </header>
  )
}
