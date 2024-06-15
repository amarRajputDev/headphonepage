import React, { useRef } from 'react'
import four from '../assets/four.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin);

function Four() {
  const h1 =useRef()
  const h2 =useRef()
  const p1 =useRef()
  const p12 =useRef()
  const p2 =useRef()
  const img =useRef()

  useGSAP(()=>{
    gsap.from(h1.current,{
      x:-100,
      opacity:0,
      duration:0.5,
      scrollTrigger:{
        trigger:h1.current,
        scroller:"body",
        // markers:true,
        start:"top 70%"
      }
})
gsap.from(p1.current,{
  x:-100,
  opacity:0,
  duration:0.5,
  delay:0.3,
  scrollTrigger:{
    trigger:h1.current,
    scroller:"body",
    // markers:true,
    start:"top 70%"
  }
})
gsap.from(p12.current,{
  x:-100,
  opacity:0,
  duration:0.5,
  delay:0.6,
  scrollTrigger:{
    trigger:h1.current,
    scroller:"body",
    // markers:true,
    start:"top 70%"
  }
})
gsap.from(img.current,{
  x:-100,
  opacity:0,
  duration:0.5,
  delay:0.3,
  scrollTrigger:{
    trigger:img.current,
    scroller:"body",
    // markers:true,
    start:"top 70%"
  }
})
gsap.from(h2.current,{
  x:-100,
  opacity:0,
  duration:0.5,
  delay:0.3,
  scrollTrigger:{
    trigger:h1.current,
    scroller:"body",
    // markers:true,
    start:"top 50%"
  }
})
gsap.from(p2.current,{
  x:-100,
  opacity:0,
  duration:0.5,
  delay:0.3,
  scrollTrigger:{
    trigger:h1.current,
    scroller:"body",
    // markers:true,
    start:"top 40%"
  }
})


  })


  return (
    <div className=' h-screen w-screen four flex p-10 flex-col-reverse sm:flex-row gap-5 items-center justify-center '>
        {/* left  */}
        <div className='h-full w-full sm:text-left sm:p-10 text-center mt-10 sm:mt-0 flex flex-col justify-between sm:justify-around '>

            <div>
            <h1 className=' text-4xl sm:text-6xl ' ref={h1}>Expert Support</h1>
            <p className=' mt-5 'ref={p1}>aulty phone battery? Slow laptop? We have <br />
            in-house tech experts who can assist you</p>
            <p ref={p12}>Visit us in stores!</p>
            </div>
            <div>
            <h1 ref={h2} className=' text-4xl sm:text-6xl'>our locations</h1>
            <p ref={p2} className=' mt-5'>123 Anywhere St. <br />
                Any City, State, Any Country <br />
                (123) 456 7890</p>
            
            </div>

            </div>
        

        {/* right  */}
        <div className='h-[40%] sm:h-full w-full flex justify-center items-center '>
            <img ref={img} src={four} alt=""  className='h-full sm:h-[70%] rounded-tr-[150px] shadow-2xl'/>


        </div>
      
    </div>
  )
}

export default Four
