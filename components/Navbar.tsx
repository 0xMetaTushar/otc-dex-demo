import React from "react";
import Image from "next/image";

export function Navbar(props : any) {
  return (
    <form className="items-stretch flex flex-col pb-12">
      <header className="bg-stone-950 flex w-full flex-col justify-center items-stretch mb-20 px-16 py-8 border-b-2 border-b-zinc-800 border-solid max-md:max-w-full max-md:mb-10 max-md:px-5">
        <div className="flex w-[1280px] max-w-full justify-between gap-5 mx-5 pr-14 items-start max-md:flex-wrap max-md:mr-2.5 max-md:pr-5">
          <div className="justify-center items-stretch flex gap-2.5">
            <button className="text-black text-2xl whitespace-nowrap justify-center items-stretch bg-white aspect-[1.127659574468085] px-5 py-2 rounded-xl" aria-label="Z">
              Z
            </button>
            <div className="text-white text-2xl font-bold self-center grow whitespace-nowrap my-auto">Zetaswap</div>
          </div>
          <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
              <button className="text-white text-center text-lg font-medium leading-6 whitespace-nowrap justify-center items-stretch border grow px-4 py-3 rounded-lg border-solid border-white" aria-label="Mini Market">
                Mini Market
              </button>
              <div className="justify-between items-center border flex gap-4 px-4 py-3 rounded-lg border-solid border-indigo-600">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d0518dd2695dea294714f7ccd9c18de0a3713d365b13571a44e91ee24897b8?apiKey=7e82e45e986e4749bd525d6070eef01e&"
                  alt=""
                  width={13}
                  height={13}
                  
                 
                  className="aspect-[1.3] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-indigo-600 text-center text-lg font-medium leading-6 self-stretch">Zeta Chain</div>
              </div>
              <button className="text-white text-center text-lg font-medium leading-6 whitespace-nowrap justify-center items-stretch bg-indigo-600 grow px-6 py-3 rounded-lg max-md:px-5" aria-label="Connect Wallet">
                Connect Wallet
              </button>
            </div>
            <div className="justify-end items-stretch self-center flex gap-0 my-auto">
              <button className="text-white text-center text-lg font-semibold whitespace-nowrap justify-center items-center bg-orange-700 aspect-square h-[42px] px-4 rounded-[114.402px]" aria-label="P">
                P
              </button>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a5909c81251397a53a131d1c47b0fd36073b317d9756ae5373ecb0fe54b911?apiKey=7e82e45e986e4749bd525d6070eef01e&"
                alt=""
                width={26}
                height={26}
                
                
                className="aspect-square object-contain object-center w-[26px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
      </header>
    </form>
  );
}