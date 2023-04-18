import React, {useState} from 'react'

import {addDirectory} from './explorerSlice'
import {useAppSelector, useAppDispatch} from '@/redux/hooks'

import Container from "@/components/Container";
import Box from "@/components/Box";
import Directory from "@/components/Directory";
import File from "@/components/File";
import Button from "@/components/Button";
import ListItem from "@/components/ListItem";


function FileExplorer() {
	// The `state` arg is correctly typed as `RootState` already
	const fsEntryState = useAppSelector((state) => {
		return state.fileSystemEntry
	})
	const dispatch = useAppDispatch();

	const click = () => {
		const name = window.prompt('Are you sure you wish to delete this item?')
		if (name) {
			dispatch(addDirectory({level: 0, name}))
		}
	}

	function FileSystemEntry() {
		return (
			<Box>
				{fsEntryState.map(rootItem => (
					<div key={rootItem.name}>
						<ListItem
							onClick={click}
							text={rootItem.name}
							icon='root'
						/>
						{rootItem.directories?.map(item => (
							<Directory fsData={item} key={item.name}/>
						))}
						{rootItem.files?.map(item => (
							<File fsData={item} key={item.name}/>
						))}
					</div>
				))}
			</Box>
		)
	}


	// omit rendering logic
	return (
		<Container>
			<FileSystemEntry/>
		</Container>
	)
}


export default FileExplorer