// Define a type for the slice state
export interface FileType {
	name: string
}

export interface DirectoryType {
	name: string,
	files?: FileType[],
	directories?: DirectoryType[],
	level: number
}

export interface FileSystemEntryType {
	name: string,
	files?: FileType[],
	directories?: DirectoryType[],
	level: number
}
