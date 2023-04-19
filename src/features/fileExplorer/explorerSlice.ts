import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid';
import type {RootState} from '@/redux/store'
import {AddDirectoryPayLoadTypes, DirectoryType, InitStateType, RemoveDirectoryPayLoadTypes} from "@/types";
import {deleteNodeFromTree, insertNodeIntoTree} from "@/features/fileExplorer/actions";


const initialState: InitStateType = {
	id: uuidv4(),
	name: 'root',
	type: 'dir',
	items: []
}

export const explorerSlice = createSlice({
	name: 'fileSystemEntry',
	initialState,
	reducers: {
		addDirectory: (state, action: PayloadAction<AddDirectoryPayLoadTypes>) => {
			const payload = action.payload;
			insertNodeIntoTree(state, payload.nodeId, payload.newNode);
		},
		removeDirectory: (state, action: PayloadAction<RemoveDirectoryPayLoadTypes>) => {
			const payload = action.payload;
			deleteNodeFromTree(state, payload.nodeId);
		},
		setActiveNode: (state, action: PayloadAction<typeof uuidv4>) => {
			state.activeNodeId = action.payload;
		}
	},
})

export const {addDirectory, removeDirectory, setActiveNode} = explorerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.fileSystemEntry

export default explorerSlice.reducer