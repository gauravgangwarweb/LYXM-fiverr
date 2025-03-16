import React from 'react'

const SignupCta = () => {
  return (
    <section className='md:-mt-12 bg-[#0a0a0b] text-[#f5f5f7] pt-20 md:pt-44 pb-20 px-6 md:px-10 '>
        <div className='mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 md:gap-6'>
        <div>
            <h2 className='text-2xl md:text-[44px] font-medium'>Request the spec sheet</h2>
            <p className='mt-2 text-lg text-[#a0a7ac]'>Download our latest specification sheet for Vestaboard.</p>
        </div>
        <div className='mt-4'>
            <form className='flex flex-col'>
                <label htmlFor="email" className='ml-2'>Enter your email</label>
                <input type="text" name='email' className='w-full mt-[6px] px-2 py-3 border border-white outline-none bg-inherit text-inherit rounded-md md:w-fit' placeholder='Email your email*' />
                <label htmlFor="check" className='ml-2 mt-[26px] flex items-center gap-1.5'>
                    <input type="checkbox" name="check" />
                    <span>I'm an architect, designer or contractor</span>
                </label>
                <button type="submit" className='mt-[18px] bg-[#f5f5f7] px-4 py-3 text-[#0a0a0b] w-full md:w-fit rounded-md' >Download</button>
            </form>
        </div>
        </div>
    </section>
  )
}

export default SignupCta