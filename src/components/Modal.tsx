import {Fragment, ReactNode} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon} from "@heroicons/react/24/solid";

interface PropsTypes {
	open: boolean
	title: string
	closeModal: () => void
	onOkClick: () => void
	children: ReactNode
	disableOk: boolean
}

export default function Modal(props: PropsTypes) {
	const {open, title, closeModal, onOkClick, children, disableOk} = props
	return (
		<Transition appear show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25"/>
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel
								className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
							>
								<Dialog.Title
									as="h3"
									className="flex text-lg font-medium leading-6 text-gray-900"
								>
									<div className='grow'>{title}</div>
									<XMarkIcon
										className="h-5 w-5 text-blue-500 mr-2"
										onClick={() => closeModal()}
									/>
								</Dialog.Title>
								<div className="mt-2">
									{children}
								</div>

								<div className="flex mt-4">
									<div className="grow"/>
									<button
										disabled={disableOk}
										type="button"
										className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 enabled:hover:bg-blue-200 disabled:opacity-25 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
										onClick={() => onOkClick()}
									>
										ok
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
