import * as React from "react";

export function Sidebar(props: any) {
  return (
    <div className="items-start bg-gray-950 flex max-w-[236px] flex-col pb-9 px-7 border-r-zinc-800 border-r border-solid">
      <div className="justify-center items-stretch self-center z-[1] flex w-[156px] max-w-full flex-col py-6 border-b-white border-b border-solid">
        <div className="text-zinc-500 text-xs font-semibold tracking-widest">
          SWAPS
        </div>
        <div className="justify-center items-center flex flex-col mt-4 px-7 py-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd8d9fc1c165b22033877a1a06bdd3beefa02df5842869467c0398f0ce8566b3?apiKey=7e82e45e986e4749bd525d6070eef01e&"
            className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full"
          />
          <div className="text-white text-xs font-medium self-stretch whitespace-nowrap mt-2">
            Direct OTC Swap
          </div>
        </div>
        <div className="justify-center items-center flex flex-col mt-4 px-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ea34945237df1df02d2c1a6b0b1229bb600dbebd2333ae6958f4cd8bb27976?apiKey=7e82e45e986e4749bd525d6070eef01e&"
            className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full"
          />
          <div className="text-white text-xs font-medium self-stretch whitespace-nowrap mt-2">
            Cross-Chain OTC Swap
          </div>
        </div>
        <div className="justify-center items-center flex flex-col mt-4 px-12 py-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/19ea7e6b9e2865ab6b5b49e5314783c4b51ac2aa872f4ccab8f6ecc3a0031f9d?apiKey=7e82e45e986e4749bd525d6070eef01e&"
            className="aspect-square object-contain object-center w-10 overflow-hidden"
          />
          <div className="text-white text-xs font-medium self-stretch whitespace-nowrap mt-2">
            NFT Swap
          </div>
        </div>
        <div className="justify-center items-center flex flex-col mt-4 px-12 py-2 rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fc08b5d35ca349c28090eff77ba551f20828a880a2d945eb02b77ad30d165b1?apiKey=7e82e45e986e4749bd525d6070eef01e&"
            className="aspect-square object-contain object-center w-10 overflow-hidden"
          />
          <div className="text-indigo-600 text-xs font-medium self-stretch whitespace-nowrap mt-2">
            Dex Swap
          </div>
        </div>
      </div>
      <div className="bg-slate-900 self-stretch flex shrink-0 h-[82px] flex-col rounded-md border-[0.5px] border-solid border-indigo-600" />
      <div className="justify-center items-stretch self-center flex w-[156px] max-w-full flex-col mt-6 py-6 border-b-white border-b border-solid">
        <div className="text-zinc-500 text-xs font-semibold tracking-widest">
          ALL TRADES
        </div>
        <div className="justify-center items-center flex flex-col mt-4 px-5 py-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f59c44abfdeb48c57dd2a04e5be0cbc6a10e3cf6cde12f056790d57e9558e348?apiKey=7e82e45e986e4749bd525d6070eef01e&"
            className="aspect-[1.1] object-contain object-center w-11 overflow-hidden max-w-full"
          />
          <div className="text-white text-xs font-medium self-stretch whitespace-nowrap mt-2">
            Direct Normal Swap
          </div>
        </div>
        <div className="justify-center items-center flex flex-col mt-4 px-5 py-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf7327f40a9dc92990481dee372712cc5d063ac84e0e49c7d86d49359a79f6b2?apiKey=7e82e45e986e4749bd525d6070eef01e&"
            className="aspect-[1.1] object-contain object-center w-11 overflow-hidden max-w-full"
          />
          <div className="text-white text-xs font-medium self-stretch whitespace-nowrap mt-2">
            Cross-Chain Swap
          </div>
        </div>
        <div className="justify-center items-center flex flex-col mt-4 px-12 py-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7641cb7781cf71c4daf1f6f2d89fcae5ac473e8fd5c4688a136484adfbe2b6d?apiKey=7e82e45e986e4749bd525d6070eef01e&"
            className="aspect-[1.48] object-contain object-center w-[59px] overflow-hidden"
          />
          <div className="text-white text-xs font-medium self-stretch whitespace-nowrap mt-2">
            NFT Swap
          </div>
        </div>
      </div>
      <div className="text-zinc-500 text-xs font-semibold tracking-widest self-center whitespace-nowrap mt-6">
        REWARDS & SETTINGS
      </div>
      <div className="justify-center items-center self-center flex w-[156px] max-w-full flex-col mt-4 px-14 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1efc3ed2c74926b0ccd922f716848969f53c612e77bb9d575595291b5f1d9f4?apiKey=7e82e45e986e4749bd525d6070eef01e&"
          className="aspect-[1.33] object-contain object-center w-full overflow-hidden"
        />
        <div className="text-white text-xs font-medium self-stretch whitespace-nowrap mt-2">
          Rewards
        </div>
      </div>
      <div className="justify-center items-center self-center flex w-[156px] max-w-full flex-col mt-4 px-14 py-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2861768a5deeac0e2a955f303712ff9aa252b0a77fc317f01f3be07cd778f571?apiKey=7e82e45e986e4749bd525d6070eef01e&"
          className="aspect-[1.25] object-contain object-center w-full overflow-hidden"
        />
        <div className="text-white text-xs font-medium self-stretch whitespace-nowrap mt-2">
          Settings
        </div>
      </div>
    </div>
  );
}


