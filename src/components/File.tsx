import {DirectoryType} from "@/types";
import Box from "@/components/Box";

interface PropsTypes {
	fsData: {
		name: string;
	}
}

export default function File(props: PropsTypes) {
	const {fsData} = props;
	return (
		<Box>
			{fsData.name}
		</Box>
	)

}