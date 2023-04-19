import {useState} from "react";
import {FolderIcon} from "@heroicons/react/24/solid";
import type {v4} from "uuid";

import {DirectoryType} from "@/types";
import Box from "@/components/Box";
import FileExtIcon from "@/components/FileExtIcon";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {setActiveNode} from "@/features/fileExplorer/explorerSlice";
import FileManager, {RemoveNode} from "@/features/fileExplorer/FileManager";

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
						<RemoveNode fsData={fsData}/>
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
					<FileManager fsData={fsData}/>
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