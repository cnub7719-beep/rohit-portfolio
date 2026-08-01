"use client";

import { useEffect, useState, useRef } from "react";


export default function Counter({ number, label }) {


  const [count, setCount] = useState(0);

  const [started, setStarted] = useState(false);

  const ref = useRef();



  useEffect(() => {


    const observer = new IntersectionObserver(

      ([entry]) => {

        if(entry.isIntersecting && !started){

          setStarted(true);

        }

      },

      {
        threshold: 0.5
      }

    );



    if(ref.current){

      observer.observe(ref.current);

    }



    return () => {

      if(ref.current){

        observer.unobserve(ref.current);

      }

    };


  }, [started]);






  useEffect(() => {


    if(!started) return;



    const target = parseInt(number);



    let current = 0;



    const interval = setInterval(()=>{


      current += Math.ceil(target / 40);



      if(current >= target){

        current = target;

        clearInterval(interval);

      }



      setCount(current);



    },30);




    return () => clearInterval(interval);



  }, [started, number]);





  return (

    <div
      ref={ref}
      className="text-center"
    >


      <h3 className="
        text-4xl
        font-bold
      ">

        {count}+

      </h3>



      <p className="
        text-gray-400
        mt-2
      ">

        {label}

      </p>



    </div>

  );

}