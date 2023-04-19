import {useState} from "react";
import {v4} from "uuid";
import {DocumentPlusIcon, FolderPlusIcon, TrashIcon} from "@heroicons/react/24/solid";
import {AddDirectoryPayLoadTypes, DirectoryType} from "@/types";
import {addDirectory, removeDirectory} from "@/features/fileExplorer/explorerSlice";
import {useAppDispatch} from "@/redux/hooks";
import Modal from "@/components/Modal";
import Box from "@/components/Box";

interface PropsTypes {
	fsData: DirectoryType
}


export function RemoveNode({fsData}: PropsTypes) {

	const dispatch = useAppDispatch();
	const removeNode = (id: typeof v4): void => {
		dispatch(removeDirectory({nodeId: id}))
	}

	return (
		<TrashIcon
			className="h-5 w-4 text-blue-500"
			onClick={() => removeNode(fsData.id)}
		/>
	)
}

export default function FileManager({fsData}: PropsTypes) {
	let [modalTitle, setModalTitle] = useState('');
	let [error, setError] = useState({status: false, msg: ''});
	let [node, setNode] = useState<DirectoryType>({
		id: fsData.id,
		name: '',
		type: null
	});
	let [openModal, setOpenModal] = useState(false);

	const closeModal = () => {
		setNode({
			...node,
			name: '',
			type: null
		});
		setOpenModal(false)
	}

	const dispatch = useAppDispatch();

	const addNewNode = (): void => {
		if (node.name) {
			const isDirExist = fsData.items?.find(item => item.name === node.name);
			if (isDirExist) {
				setError({status: true, msg: 'cannot add existing node'});
			} else {
				setError({status: false, msg: ''});
				const payload: AddDirectoryPayLoadTypes = {
					nodeId: fsData.id,
					newNode: {
						type: node.type,
						name: node.name
					}
				}
				dispatch(addDirectory(payload));
				setTimeout(() => {
					closeModal()
				}, 100)
			}
		} else {
			setError({status: true, msg: 'please enter a name'});
		}

	}

	const openAddNodeModal = (id: typeof v4, type: 'dir' | 'file') => {
		const _modalTitle = type === 'dir' ? 'Add new Directory' : 'Add new File';
		setModalTitle(_modalTitle);
		setNode({
			...node,
			id: id,
			type,
		});
		setOpenModal(true);
	}

	return (
		<>
			<div className='flex border rounded py-1 px-2 items-end ml-2'>
				{fsData.name !== 'root' &&
					<div className='mr-2'>
						<RemoveNode fsData={fsData}/>
					</div>
				}
				<DocumentPlusIcon
					className="h-5 w-4 text-blue-500 mr-2"
					onClick={() => openAddNodeModal(fsData.id, 'file')}
				/>
				<FolderPlusIcon
					className="h-5 w-4 text-blue-500"
					onClick={() => openAddNodeModal(fsData.id, 'dir')}
				/>
			</div>
			<Modal
				title={modalTitle}
				open={openModal}
				closeModal={() => closeModal()}
				onOkClick={() => addNewNode()}
				disableOk={node.name.length < 1}
			>
				<div>
					<label className="flex items-center">
						<div>Name:</div>
						<input
							className={`ml-3 p-2 w-full border-2 rounded-md ${error.status ? 'border-rose-500' : ''}`}
							value={node.name}
							onChange={e => setNode({
								...node,
								name: e.target.value
							})}
						/>
					</label>
					{error.status &&
						<p className='px-2 text-red-400'>{error.msg}</p>
					}
				</div>
			</Modal>
		</>
	)
}