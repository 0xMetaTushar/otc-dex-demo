import { Modal } from '@/components/Modal';
import { TokenExchangeForm } from '../components/DexInput';
import { SlippageModal } from '@/components/SlippageModal';
import { ConfirmModal } from '@/components/ConfirmModal';
import { CompleteModal } from '@/components/CompleteModal';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
	return (
		<>	
		{/* <Navbar/>
		<Sidebar/> */}
			<main className="flex justify-center pt-5">
				{/* <TokenExchangeForm /> */}
				<Modal/>
			</main>
			
			{/* <SlippageModal/> */}
			{/* <ConfirmModal/> */}
			{/* <CompleteModal/> */}
		</>

	);
}
