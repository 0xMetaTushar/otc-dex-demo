import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	RadioGroup,
	useDisclosure,
	Radio,
} from '@nextui-org/react';
import { SearchIcon } from '../components/icons/SearchIcon';

export default function App() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button onPress={onOpen}>Open Modal</Button>
			<Modal
				backdrop="opaque"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				className=" bg-zinc-900 rounded-lg border-solid border-neutral-800"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="text-white text-xl font-semibold leading-8">
								Select Token
							</ModalHeader>
							<ModalBody className="text-sky-800">
								<Input
									isClearable
									radius="full"
									classNames={{
										label: 'text-black/50 dark:text-white/90',

										input: [
											'bg-transparent',
											'text-black/90 dark:text-white/90',
											'placeholder:text-default-700/50 dark:placeholder:text-white/60',
										],
										innerWrapper: 'bg-transparent',
										inputWrapper: [
											'shadow-xl',
											'bg-default-200/50',
											'dark:bg-default/60',
											'backdrop-blur-xl',
											'backdrop-saturate-200',
											'hover:bg-default-200/70',
											'dark:hover:bg-default/70',
											'group-data-[focused=true]:bg-default-200/50',
											'dark:group-data-[focused=true]:bg-default/60',
											'!cursor-text',
										],
									}}
									placeholder="Type to search..."
									startContent={
										<SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
									}
								/>

								<RadioGroup
									className="font-semibold leading-8 mt-6 "
									label="Choose from popular Cryptocurrencies"
									orientation="horizontal"
								>
									<Radio
										classNames={{
											label: 'text-white',
                      wrapper: '',
										}}
										value="bitcoin"
									>
										Bitcoin
									</Radio>
                  <Radio
										classNames={{
											label: 'text-white',
                      wrapper: '',
										}}
										value="polygon"
									>
										Polygon
									</Radio>
                  <Radio
										classNames={{
											label: 'text-white',
                      wrapper: '',
										}}
										value="ethereum"
									>
										Ethereum
									</Radio>
								</RadioGroup>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
