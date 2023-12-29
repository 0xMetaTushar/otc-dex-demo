import * as React from "react";

export function Modal() {
  return (
    <div className="justify-center items-stretch border bg-zinc-900 flex max-w-[496px] flex-col px-9 py-6 rounded-lg border-solid border-neutral-800 max-md:px-5">
      <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-white text-xl font-semibold leading-8">
          Select Token
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ade75fa803d6880e80847aebe9e4f578234005c9636bc9ce6abcdb921c84a1a?apiKey=7e82e45e986e4749bd525d6070eef01e&"
          className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="justify-center items-stretch flex flex-col mt-6 pb-6 border-b-neutral-800 border-b border-solid max-md:max-w-full">
        <div className="border bg-zinc-900 flex flex-col justify-center pl-4 pr-16 py-2.5 rounded-[100px] border-solid border-zinc-500 items-start max-md:max-w-full max-md:pr-5">
          <div className="items-center flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c14865ed3c01c20e5d101a23f9d1c4fb2fed32c2fd70d5cd5cad33ce7d0e7595?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-zinc-500 text-base leading-6 self-stretch grow whitespace-nowrap">
              Search
            </div>
          </div>
        </div>
        <div className="text-white text-base font-semibold leading-8 mt-6 max-md:max-w-full">
          Choose from popular Cryptocurrencies
        </div>
        <div className="justify-center items-stretch flex gap-3 mt-5 pr-10 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="justify-between items-center border flex gap-1.5 px-3 py-1.5 rounded-[50px] border-solid border-zinc-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d8a63c37693b5f2d8394b1f55517b5cc38703bc4c1d946a3ab10fcfb74d1522?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="items-stretch self-stretch flex justify-between gap-1.5">
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Bitcoin
              </div>
              <div className="stroke-[1px] self-center flex w-4 shrink-0 h-4 flex-col my-auto rounded-[50%]" />
            </div>
          </div>
          <div className="justify-between items-center border flex gap-1.5 px-3 py-1.5 rounded-[50px] border-solid border-zinc-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdc8e8b1915f718cd4f6bf01c3b49068f551934d55d66fa0706be1aa59fc39e1?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="items-stretch self-stretch flex justify-between gap-1.5">
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Ethereum
              </div>
              <div className="stroke-[1px] self-center flex w-4 shrink-0 h-4 flex-col my-auto rounded-[50%]" />
            </div>
          </div>
          <div className="justify-between items-center border flex gap-1.5 px-3 py-1.5 rounded-[50px] border-solid border-zinc-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d8a63c37693b5f2d8394b1f55517b5cc38703bc4c1d946a3ab10fcfb74d1522?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="items-stretch self-stretch flex justify-between gap-1.5">
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Bitcoin
              </div>
              <div className="stroke-[1px] self-center flex w-4 shrink-0 h-4 flex-col my-auto rounded-[50%]" />
            </div>
          </div>
        </div>
        <div className="items-stretch flex gap-3 mt-3 pr-10 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="justify-between items-center border flex gap-1.5 px-3 py-1.5 rounded-[50px] border-solid border-zinc-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d8a63c37693b5f2d8394b1f55517b5cc38703bc4c1d946a3ab10fcfb74d1522?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="items-stretch self-stretch flex justify-between gap-1.5">
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Bitcoin
              </div>
              <div className="stroke-[1px] self-center flex w-4 shrink-0 h-4 flex-col my-auto rounded-[50%]" />
            </div>
          </div>
          <div className="justify-between items-center border flex gap-1.5 px-3 py-1.5 rounded-[50px] border-solid border-zinc-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdc8e8b1915f718cd4f6bf01c3b49068f551934d55d66fa0706be1aa59fc39e1?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="items-stretch self-stretch flex justify-between gap-1.5">
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Ethereum
              </div>
              <div className="stroke-[1px] self-center flex w-4 shrink-0 h-4 flex-col my-auto rounded-[50%]" />
            </div>
          </div>
          <div className="justify-between items-center border flex gap-1.5 px-3 py-1.5 rounded-[50px] border-solid border-zinc-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d8a63c37693b5f2d8394b1f55517b5cc38703bc4c1d946a3ab10fcfb74d1522?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="items-stretch self-stretch flex justify-between gap-1.5">
              <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
                Bitcoin
              </div>
              <div className="stroke-[1px] self-center flex w-4 shrink-0 h-4 flex-col my-auto rounded-[50%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-base font-semibold leading-8 mt-6 max-md:max-w-full">
        Token Information
      </div>
      <div className="justify-between items-stretch flex gap-5 mt-3 px-4 py-1 rounded-lg max-md:max-w-full max-md:flex-wrap">
        <div className="text-zinc-500 text-lg font-semibold leading-6">
          Token Display
        </div>
        <div className="text-zinc-500 text-right text-lg font-semibold leading-6">
          Balance
        </div>
      </div>
    </div>
  );
}


