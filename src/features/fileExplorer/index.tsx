import React from 'react'

import {useAppSelector} from '@/redux/hooks'
import Container from "@/components/Container";
import DirectoryAndFiles from "@/components/DirectoryAndFiles";

function FileExplorer() {
	const fsEntryState = useAppSelector((state) => {
		return state.fileSystemEntry
	})

	return (
		<Container>
			<DirectoryAndFiles fsData={fsEntryState}/>
		</Container>
	)
}


export default FileExplorer