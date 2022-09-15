import React from 'react'

const Integration = () => {
  return (
    <>
      <section className="h-[250px] bg-navyBlue">
        <div className=" m-auto h-full flex flex-col items-center justify-center">
          <h1 className="text-lightWhite whitespace-nowrap text-md md:text-6xl mb-6">Payment Integration</h1>
          <p className='text-lightOrange whi'>
            Online or Offline business! We have a solution for all your payment
            requirements.
          </p>
          <div className='flex space-x-9'>
            <a className="text-lightOrange" href="/">
              Home
            </a>
            <a className="text-lightOrange" href="/service">
              service
            </a>
            <span className='text-lightWhite'>PAYMENT INTEGRATION</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Integration;