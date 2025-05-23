import React from 'react'

function AboutWho() {
  return (
    <section className='py-10 bg-white'>
        <div className="container mx-auto">
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_622px]'>
{/* first part */}
                <div className='p-8 lg:p-10'>
                    <h2 className='text-2xl md:text-5xl font-bold pb-[0.7em] leading-[1.3em]'>Who We Are</h2>
                    <p className=' text-sm md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                </div>
                {/* 2nd part */}
                
                    <div className='pt-10 sm:px-10'>
                        <img src="/About_Banner_2.jpg" alt="image" />
                    </div>
                
            </div>
        </div>
    </section>
  )
}

export default AboutWho