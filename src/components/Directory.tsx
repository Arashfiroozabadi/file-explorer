import {DirectoryType} from "@/types";
import Box from "@/components/Box";

interface PropsTypes {
	fsData: DirectoryType
}

export default function Directory(props: PropsTypes) {
	const {fsData} = props;
	return (
		<Box>
			{fsData.name}
			{fsData.files?.map((file,index) => (
				<div style={{marginLeft:10}} key={file.name}>{file.name}</div>
			))}
		</Box>
	)

}