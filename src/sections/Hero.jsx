
import { Input } from "@/components/ui/input";
import React from "react";

const Hero = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className=" rounded-lg flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-200 text-white py-4 px-4">
            <div className="mb-4 flex  flex-col items-center justify-center">
                <h1 className="text-4xl  font-semibold mb-4">This is your <span className=" text-indigo-300 bg-gradient-to-r from-yellow-100 via-yellow-500 to-pink-200 text-transparent bg-clip-text ">Ultimate</span> Password Generator</h1>
                <p className="text-xl   ">Generate strong passwords in split seconds ⚡</p>

            </div>
         
            
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
