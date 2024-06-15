import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Timeline } from 'gsap/gsap-core';


gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollToPlugin);

function Third() {

    var tl = gsap.timeline({});
    const text = useRef()
    const box1 = useRef()
    const box2= useRef()
    const box3= useRef()

    useGSAP(()=>{
        gsap.from(text.current,{
            x:-100,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:text.current,
                scroller:"body",
                // markers:true,
                start: "top 70%"
            }
        })
        gsap.from(box1.current,{
            x:-100,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:text.current,
                scroller:"body",
                // markers:true,
                start: "top 60%"
            }
        })
        gsap.from(box2.current,{
            x:-100,
            opacity:0,
            duration:0.5,
            delay:0.3,
            scrollTrigger:{
                trigger:text.current,
                scroller:"body",
                // markers:true,
                start: "top 60%"
            }
        })
        gsap.from(box3.current,{
            x:-100,
            opacity:0,
            duration:0.5,
            delay:0.3,
            scrollTrigger:{
                trigger:text.current,
                scroller:"body",
                // markers:true,
                start: "top 60%"
            }
        })
    })

  return (
    <div className=' w-screen h-screen main flex flex-col justify-center items-center gap-2'>
        {/* upper  */}
        <div className='flex'>
            <h1 className=' font-extrabold text-3xl' ref={text}>Shop by category</h1>
        </div>


        {/* cards  */}
        <div className='h-[80%] w-full p-10 flex flex-wrap justify-around '>
            <div className=' bg-white shadow-2xl  w-[40%] sm:w-[30%] h-[45%] sm:h-[70%] rounded-tr-[40px] rounded-bl-[40px] flex flex-col py-4 px-1 items-center' ref={box1}>
                <img src="https://www.notebookcheck.net/fileadmin/_processed_/b/a/csm_iPhone_15_Pro_Max_technizo_concept_e0cbf9498d.jpg" alt="" className=' w-[110px] h-[1000%] object-scale-down rounded-tr-[40px] sm:w-[90%] sm:rounded-none' />
                <div className=' flex flex-col flex-wrap p-1'>
                    <h1 className='font-bold text-[1rem] text-center'>Phones & Accessories</h1>
                    <p className=' text-[0.6rem] text-center'>High class, high quality phones at affordable prices</p>
                </div>

            </div>
            <div className=' bg-white shadow-2xl sm:w-[30%] w-[40%] h-[45%] rounded-tr-[40px] sm:h-[70%] rounded-bl-[40px] flex flex-col py-4 px-1 items-center' ref={box2}>
                <img src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className=' w-[110px] h-[100%] object-scale-down rounded-tr-[40px] sm:w-[90%] sm:rounded-none' />
                <div className=' flex flex-col flex-wrap p-1'>
                    <h1 className='font-bold text-[1rem] text-center'>Computer Equipment</h1>
                    <p className=' text-[0.6rem] text-center'>All your desktop or laptop needs made available</p>
                </div>

            </div>
            <div className=' bg-white shadow-2xl sm:h-[70%] sm:w-[30%]  w-[40%] h-[45%] rounded-tr-[40px] rounded-bl-[40px] flex flex-col py-4 px-1 items-center' ref={box3}>
                <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className=' w-[110px] h-[100%] object-scale-down sm:w-[90%] rounded-tr-[40px] sm:rounded-none' />
                <div className='w-80% p-1'>
                    <h1 className='font-bold text-[1rem] text-center'>miscellaneous
                    items</h1>
                    <p className=' text-[0.6rem] text-center'>We've got more stuff to meet your techie needs</p>
                </div>

            </div>

        </div>


        {/* buttons  */}
        <div className='sm:mt-[-100px]'>
        <button className='bg-white w-[9rem] rounded-3xl h-11'>Shop all</button>
            
        </div>
      
    </div>
  )
}

export default Third
