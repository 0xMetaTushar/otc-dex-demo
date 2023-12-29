import * as React from "react";

export function SlippageModal() {
  return (
    <div className="items-stretch flex max-w-[660px] flex-col pl-12 pr-16 max-md:px-5">
      <div className="text-white text-lg font-semibold leading-6 max-md:max-w-full">
        Dex Swap
      </div>
      <div className="text-zinc-500 text-xl font-semibold leading-6 mt-3 max-md:max-w-full">
        Fill the Details to fulfill the Second Step in the process.
      </div>
      <div className="items-stretch self-center flex w-[400px] max-w-full justify-between gap-5 mt-9">
        <div className="justify-center items-center bg-indigo-600 flex flex-col h-20 flex-1 px-5 rounded-[40px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/06dc251a4e509073357518da5db261de342940ce859b0056e7a77d5c895452c6?apiKey=7e82e45e986e4749bd525d6070eef01e&"
            className="aspect-square object-contain object-center w-full overflow-hidden"
          />
        </div>
        <div className="justify-center items-center bg-neutral-700 flex flex-col h-20 flex-1 px-5 rounded-[40px]">
          <div className="flex shrink-0 h-10 flex-col rounded-[50%]" />
        </div>
      </div>
      <div className="bg-neutral-800 self-center flex w-[493px] max-w-full flex-col justify-center items-stretch mt-9 pl-4 py-2 rounded-xl">
        <div className="justify-center items-stretch bg-black flex flex-col p-9 rounded-xl max-md:max-w-full max-md:px-5">
          <div className="text-zinc-500 text-sm font-medium leading-3">
            Slippage Details
          </div>
          <div className="justify-between items-stretch border shadow-sm bg-stone-950 flex gap-5 mt-5 px-4 py-4 border-solid border-zinc-500">
            <div className="text-zinc-500 text-sm font-medium leading-5">
              Select
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaaab88ef64896c2faf329e7cf7e961afd1e7e6dad07a35397deffc939094dec?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="text-white text-opacity-60 text-lg font-medium leading-7 whitespace-nowrap justify-center items-center shadow-sm mt-9 px-16 py-3 rounded-md border-2 border-solid border-violet-950 max-md:px-5">
            Next Step
          </div>
        </div>
      </div>
    </div>
  );
}


