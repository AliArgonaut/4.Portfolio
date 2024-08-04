import React from 'react'; 

const Hero = () => {
return (
<>
  <div className='hero bg-base-200 min-h-screen'>
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="PLACEHOLDER FOR 3JS COMPONENT" className='max-w-sm rounded-lg shadow-2xl' />  
      <div>
        <h1 className='text-xl font-bold'>Lloyd Bonds</h1>
        <p className="py-6">
            I'm a software engineering major at St. Leo University. I'm passionate about creating next-level web experiences and making things that others find useful. 
        </p>
      </div>
    </div> 
  </div>        
</>
)
}
export default Hero