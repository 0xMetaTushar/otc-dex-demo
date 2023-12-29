import * as React from "react";

export function TokenExchangeForm(props) {
   return (
    <div className="justify-center items-center bg-black flex max-w-[485px] flex-col p-9 rounded-xl max-md:px-5">
      <header className="text-zinc-500 text-sm font-medium leading-3 self-stretch">
        Choose Token you are Giving
      </header>
      <section className="justify-between items-stretch border shadow-sm bg-stone-950 self-stretch flex gap-5 mt-5 px-4 py-4 border-solid border-zinc-500">
        <div className="text-zinc-500 text-sm font-medium leading-5">Select Token</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f49971d8edef3e7b772f516382d1ec762f7bdc762b9fea1ace8d100f58d43161?apiKey=7e82e45e986e4749bd525d6070eef01e&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          alt="Token Image"
        />
      </section>
      <header className="text-zinc-500 text-sm font-medium leading-3 self-stretch mt-9">
        You Give
      </header>
      <section className="justify-between items-stretch border shadow-sm bg-stone-950 self-stretch flex gap-5 mt-5 px-4 py-4 border-solid border-zinc-500">
        <div className="text-zinc-500 text-sm font-medium leading-5">Enter Token Amount</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f49971d8edef3e7b772f516382d1ec762f7bdc762b9fea1ace8d100f58d43161?apiKey=7e82e45e986e4749bd525d6070eef01e&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          alt="Token Image"
        />
      </section>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f75e7e08c4542b65cc237cdb6745bf94eea62ce0d827276aecbf7e7eadff856c?apiKey=7e82e45e986e4749bd525d6070eef01e&"
        className="aspect-[0.58] object-contain object-center w-[15px] fill-white overflow-hidden self-center max-w-full mt-9"
        alt="Arrow Icon"
      />
      <header className="text-zinc-500 text-sm font-medium leading-3 self-stretch mt-9">
        Choose Token you are Receiving
      </header>
      <section className="justify-between items-stretch border shadow-sm bg-stone-950 self-stretch flex gap-5 mt-5 px-4 py-4 border-solid border-zinc-500">
        <div className="text-zinc-500 text-sm font-medium leading-5">Select Token</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f3d59a65c3c183ec533860dd8e9107884dddba4493ad3deb7737e91f5355cd3?apiKey=7e82e45e986e4749bd525d6070eef01e&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          alt="Token Image"
        />
      </section>
      <header className="text-zinc-500 text-sm font-medium leading-3 self-stretch mt-9">
        You Receive
      </header>
      <section className="justify-between items-stretch border shadow-sm bg-stone-950 self-stretch flex gap-5 mt-5 px-4 py-4 border-solid border-zinc-500">
        <div className="text-zinc-500 text-sm font-medium leading-5">Enter Token Amount</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f3d59a65c3c183ec533860dd8e9107884dddba4493ad3deb7737e91f5355cd3?apiKey=7e82e45e986e4749bd525d6070eef01e&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          alt="Token Image"
        />
      </section>
      <button className="text-white text-opacity-60 text-lg font-medium leading-7 whitespace-nowrap justify-center items-center shadow-sm self-stretch mt-9 px-16 py-3 rounded-md border-2 border-solid border-violet-950 max-md:px-5">
        Next Step
      </button>
    </div>
  );
}