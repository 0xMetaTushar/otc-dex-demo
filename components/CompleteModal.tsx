import * as React from "react";

export function CompleteModal(props :any) {
  return (
    <div className="justify-center border bg-black flex max-w-[421px] flex-col px-12 py-9 rounded-3xl border-solid border-zinc-800 items-end">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ade75fa803d6880e80847aebe9e4f578234005c9636bc9ce6abcdb921c84a1a?apiKey=7e82e45e986e4749bd525d6070eef01e&"
        className="aspect-square object-contain object-center w-[18px] overflow-hidden max-w-full"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7603ce5a-a9be-4601-9f14-3805bfda36f4?apiKey=7e82e45e986e4749bd525d6070eef01e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7603ce5a-a9be-4601-9f14-3805bfda36f4?apiKey=7e82e45e986e4749bd525d6070eef01e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7603ce5a-a9be-4601-9f14-3805bfda36f4?apiKey=7e82e45e986e4749bd525d6070eef01e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7603ce5a-a9be-4601-9f14-3805bfda36f4?apiKey=7e82e45e986e4749bd525d6070eef01e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7603ce5a-a9be-4601-9f14-3805bfda36f4?apiKey=7e82e45e986e4749bd525d6070eef01e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7603ce5a-a9be-4601-9f14-3805bfda36f4?apiKey=7e82e45e986e4749bd525d6070eef01e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7603ce5a-a9be-4601-9f14-3805bfda36f4?apiKey=7e82e45e986e4749bd525d6070eef01e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7603ce5a-a9be-4601-9f14-3805bfda36f4?apiKey=7e82e45e986e4749bd525d6070eef01e&"
        className="aspect-square object-contain object-center w-[113px] stroke-[1.4px] overflow-hidden self-center max-w-full mt-6 rounded-[50%]"
      />
      <div className="text-white text-xl font-semibold leading-8 self-stretch whitespace-nowrap mt-9">
        The Order Has Been Completed!
      </div>
    </div>
  );
}


