import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px] mt-96">
      <div className="get-app">
        {/*<video*/}
        {/*    autoPlay*/}
        {/*    loop*/}
        {/*    muted*/}
        {/*    className="absolute inset-0 w-full h-full object-cover"*/}
        {/*>*/}
        {/*  <source src="video.mp4" type="video/mp4" />*/}
        {/*  /!* Add additional source elements for other video formats if needed *!/*/}
        {/*  Your browser does not support the video tag.*/}
        {/*</video>*/}
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp
