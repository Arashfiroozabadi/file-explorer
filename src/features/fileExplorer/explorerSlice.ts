import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '@/redux/store'
import {FileSystemEntryType} from "@/types";
// Define the initial state using that type
const initialState: FileSystemEntryType[] = [{
	name: 'root',
	files: [],
	directories: [],
	level: 0
}]

export const explorerSlice = createSlice({
	name: 'fileSystemEntry',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		addDirectory: (state, action: PayloadAction<FileSystemEntryType>) => {
			const {level, name} = action.payload;
			state[level].directories?.push({
				level,
				name,
				files: [],
				directories: []
			})
		},
	},
})

export const {addDirectory} = explorerSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.fileSystemEntry

export default explorerSlice.reducer