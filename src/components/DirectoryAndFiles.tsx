import {useState} from "react";
import {FolderIcon, FolderPlusIcon, TrashIcon, DocumentPlusIcon} from "@heroicons/react/24/solid";
import type {v4} from "uuid";

import {AddDirectoryPayLoadTypes, DirectoryType} from "@/types";
import Box from "@/components/Box";
import FileExtIcon from "@/components/FileExtIcon";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {addDirectory, removeDirectory, setActiveNode} from "@/features/fileExplorer/explorerSlice";

interface PropsTypes {
	fsData: DirectoryType
}

export default function DirectoryAndFiles(props: PropsTypes) {

	const activeNodeId = useAppSelector((state) => {
		return state.fileSystemEntry.activeNodeId;
	})

	const dispatch = useAppDispatch();

	const {fsData} = props;
	const [isExtended, toggleExtended] = useState(false);

	const handleExtendNode = (nodeId: typeof v4) => {
		toggleExtended(!isExtended)
		dispatch(setActiveNode(nodeId))
	}

	const addNewNode = (id: typeof v4, type: 'dir' | 'file'): void => {
		const name = window.prompt('Enter directory name');
		if (name) {

			const isDirExist = fsData.items?.find(item => item.name === name);
			if (isDirExist) {
				alert('cannot add existing node');
			} else {
				const payload: AddDirectoryPayLoadTypes = {
					nodeId: fsData.id,
					newNode: {
						name,
						id,
						type
					}
				}
				dispatch(addDirectory(payload))
			}

		}
	}
	const removeNode = (id: typeof v4): void => {
		dispatch(removeDirectory({nodeId: id}))
	}

	if (fsData.type === 'file') {
		return (
			<Box className='flex items-center py-1'>
				<div className='flex items-center'
				     onClick={() => handleExtendNode(fsData.id)}
				>
					<FileExtIcon fileName={fsData.name}/>
					<div>{fsData.name}</div>
				</div>
				{
					activeNodeId === fsData.id &&
					<div className='rounded border py-1 px-2 ml-2'>
						<TrashIcon
							className="h-5 w-4 text-blue-500"
							onClick={() => removeNode(fsData.id)}
						/>
					</div>
				}

			</Box>
		)
	}
	return (
		<Box className='py-1'>
			<div className='flex items-center'>
				<div className='self-center px-1 font-bold'>
					{isExtended ? '-' : '+'}
				</div>
				<div className='flex items-center py-0' onClick={() => handleExtendNode(fsData.id)}>
					<FolderIcon className="h-5 w-4 text-blue-500 mr-2"/>
					{fsData.name}
				</div>
				{activeNodeId === fsData.id &&
					<div className='flex border rounded py-1 px-2 items-end  ml-2'>
						{fsData.name !== 'root' &&
							<TrashIcon
								className="h-5 w-4 text-blue-500 mr-2"
								onClick={() => removeNode(fsData.id)}
							/>
						}
						<DocumentPlusIcon
							className="h-5 w-4 text-blue-500 mr-2"
							onClick={() => addNewNode(fsData.id, 'file')}
						/>
						<FolderPlusIcon
							className="h-5 w-4 text-blue-500"
							onClick={() => addNewNode(fsData.id, 'dir')}
						/>
					</div>
				}
			</div>
			{isExtended && fsData.items?.map(item => (
				<DirectoryAndFiles
					key={item.name} fsData={item}
				/>
			))}
		</Box>
	)
}