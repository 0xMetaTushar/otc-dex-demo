import { useState } from 'react';
import { Modal } from './Modal';

export function TokenExchangeForm(props) {
	const [isOpen, setIsOpen] = useState(false);
	const handleModel = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
		<div className="flex max-w-[530px] flex-col">
			<div className="text-white text-xl font-semibold leading-6 self-stretch w-full max-md:max-w-full">
				Dex swap
			</div>
			<div className="text-zinc-500 text-xl font-semibold leading-6 self-stretch w-full mt-3 max-md:max-w-full">
				Fill in the Details to Complete the first step.
			</div>
			{/* Circles  */}
			<div className=" flex items-center justify-center gap-20 mt-9">
				<div className=" bg-indigo-600 h-20 w-20 rounded-full flex justify-center items-center">
					<div className="bg-white h-10 w-10 rounded-full" />
				</div>
				<div className="flex flex-col" />
				<div className="h-20 w-20 rounded-full bg-neutral-700 flex justify-center items-center">
					<div className="bg-white h-10 w-10 rounded-full" />
				</div>
				<div className="line absolute h-[1.2px] bg-zinc-600 w-40 left-1/2 transform -translate-x-1/2" />
			</div>
			{/* Input Box */}
			<div className="bg-neutral-800  flex w-full flex-col justify-center mt-9 pl-1 rounded-xl transform -rotate-2">
				<div className="justify-center items-center bg-black flex flex-col px-8 py-9 rounded-xl max-md:max-w-full max-md:px-5 transform rotate-2">
					<div className="text-zinc-500 text-sm font-medium leading-3 self-stretch max-md:max-w-full">
						Choose Token you are Giving
					</div>
					{/* Select Token  */}
					
					<div
						className="justify-between items-stretch border shadow-sm bg-stone-950 self-stretch flex w-full gap-5 mt-5 pl-5 pr-8 py-4 border-solid border-zinc-500 max-md:flex-wrap max-md:pr-5"
						onClick={handleModel}
					>
						<div className="text-zinc-500 text-sm font-medium leading-5">
							Select Token
						</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e6b5ac0e4901ffc5194e99c4e51fec69f8100dc6a85740289101c409afaeec8?apiKey=7e82e45e986e4749bd525d6070eef01e&"
							className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
						/>
					</div>

					<div className="text-zinc-500 text-sm font-medium leading-3 self-stretch mt-9 max-md:max-w-full">
						You Give
					</div>
					<div className="justify-between items-stretch border shadow-sm bg-stone-950 self-stretch flex w-full gap-5 mt-5 pl-5 pr-8 py-4 border-solid border-zinc-500 max-md:flex-wrap max-md:pr-5">
						<div className="text-zinc-500 text-sm font-medium leading-5">
							Enter Token Amount
						</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e6b5ac0e4901ffc5194e99c4e51fec69f8100dc6a85740289101c409afaeec8?apiKey=7e82e45e986e4749bd525d6070eef01e&"
							className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
						/>
					</div>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d65e1240fa4af9466016b5df2942c637bc47b4ff02be85987edee5437e48a7?apiKey=7e82e45e986e4749bd525d6070eef01e&"
						className="aspect-[0.54] object-contain object-center w-3.5 fill-white overflow-hidden self-center max-w-full mt-9"
					/>
					<div className="text-zinc-500 text-sm font-medium leading-3 self-stretch mt-9 max-md:max-w-full">
						Choose Token you are Receiving
					</div>
					<div className="justify-between items-stretch border shadow-sm bg-stone-950 self-stretch flex w-full gap-5 mt-5 pl-5 pr-8 py-4 border-solid border-zinc-500 max-md:flex-wrap max-md:pr-5">
						<div className="text-zinc-500 text-sm font-medium leading-5">
							Select Token
						</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c3b51829b5e526dc147773bd76dcea3c55c6cb554d3e6dd3904345b3d6ccd22?apiKey=7e82e45e986e4749bd525d6070eef01e&"
							className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
						/>
					</div>
					<div className="text-zinc-500 text-sm font-medium leading-3 self-stretch mt-9 max-md:max-w-full">
						You Receive
					</div>
					<div className="justify-between items-stretch border shadow-sm bg-stone-950 self-stretch flex w-full gap-5 mt-5 pl-5 pr-8 py-4 border-solid border-zinc-500 max-md:flex-wrap max-md:pr-5">
						<div className="text-zinc-500 text-sm font-medium leading-5">
							Enter Token Amount
						</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c3b51829b5e526dc147773bd76dcea3c55c6cb554d3e6dd3904345b3d6ccd22?apiKey=7e82e45e986e4749bd525d6070eef01e&"
							className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
						/>
					</div>
					<div className="text-white text-opacity-60 text-lg font-medium leading-7 whitespace-nowrap justify-center items-center shadow-sm self-stretch mt-9 px-16 py-3 rounded-md border-2 border-solid border-violet-950 max-md:max-w-full max-md:px-5">
						Next Step
					</div>
				</div>
			</div>
		</div>
		{/* Model
		 */}
		</>
	);
}
