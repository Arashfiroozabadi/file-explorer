// Define a type for the slice state
import {v4} from "uuid";

export interface FileType {
	name: string
}

export interface DirectoryType {
	type: 'dir' | 'file' | null
	name: string
	items?: DirectoryType[]
	id?: v4
}

export interface AddDirectoryPayLoadTypes {
	nodeId: v4
	newNode: DirectoryType
}

export interface RemoveDirectoryPayLoadTypes {
	nodeId: v4
}

// Define the initial state using that type
export interface InitStateType extends DirectoryType {
	activeNodeId?: typeof uuidv4
}