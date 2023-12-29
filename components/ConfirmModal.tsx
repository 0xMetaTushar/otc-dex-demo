import * as React from "react";

export function ConfirmModal(props : any) {
  return (
    <div className="justify-center items-stretch border bg-black flex max-w-[429px] flex-col p-6 rounded-3xl border-solid border-zinc-800">
      <div className="items-stretch flex justify-between gap-5 px-0.5">
        <div className="text-white text-xl font-semibold leading-8">
          Confirm Order
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ade75fa803d6880e80847aebe9e4f578234005c9636bc9ce6abcdb921c84a1a?apiKey=7e82e45e986e4749bd525d6070eef01e&"
          className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
      </div>
      <div className="justify-between items-center flex gap-5 mt-6 px-2.5">
        <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col py-0.5">
          <div className="text-white text-xs font-medium leading-8">Give</div>
          <div className="flex-col overflow-hidden self-center relative flex aspect-square w-[140px] items-center mt-1 px-8 py-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d37e921cf97623aa395778bdcbf44508cfe95d050d6ea6267fc73f6ecb74d947?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e40a75ce734958bbca4c89604eba179403d362d7c10ae471651c8327f5e6c8?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
            />
            <div className="relative justify-between items-stretch self-stretch flex gap-2.5 mt-5">
                
              <div className="text-zinc-500 text-sm font-medium leading-8">
                Amount:
              </div>
              <div className="text-white text-sm font-medium leading-8">1</div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4405c5292def42007eeb8d89922ea2c2a0726353b2ad687f6bd2cd4734df798c?apiKey=7e82e45e986e4749bd525d6070eef01e&"
          className="aspect-[1.29] object-contain object-center w-[18px] fill-indigo-600 overflow-hidden shrink-0 max-w-full my-auto"
        />
        <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col py-0.5">
          <div className="text-white text-xs font-medium leading-8">
            Receive
          </div>
          <div className="flex-col overflow-hidden self-center relative flex aspect-square w-[140px] items-center mt-1 px-8 py-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d37e921cf97623aa395778bdcbf44508cfe95d050d6ea6267fc73f6ecb74d947?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d260658b41c1e3b789378b0a379825d40abbbffcdfda34197185c6fb777b47d?apiKey=7e82e45e986e4749bd525d6070eef01e&"
              className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
            />
            <div className="relative justify-between items-stretch self-stretch flex gap-2.5 mt-5">
              <div className="text-zinc-500 text-sm font-medium leading-8">
                Amount:
              </div>
              <div className="text-white text-sm font-medium leading-8">2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-indigo-600 flex w-full flex-col mt-6 px-16 py-3.5 rounded-sm">
        <div className="flex items-stretch gap-2">
          <div className="text-white text-center text-base font-medium leading-5 grow whitespace-nowrap">
            Confirm Order
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a134d429868e8d69894545adb156f55f18ed05bcf8ad17aedb455f8da9dc781d?apiKey=7e82e45e986e4749bd525d6070eef01e&"
            className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </div>
  );
}


