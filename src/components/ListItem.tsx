import Box from "@/components/Box";
import {HomeIcon} from "@heroicons/react/24/solid";

interface PropsTypes {
	icon: string,
	text: string,
	onClick: () => void
}

function Icon({name}: { name: string }) {
	if (name === 'root') {
		return <HomeIcon className="h-6 w-6 text-blue-500 mr-2"/>
	} else return null
}

export default function ListItem(props: PropsTypes) {
	const {icon, text, onClick} = props;
	return (
		<Box className="flex items-center" onClick={onClick}>
			<Icon name={icon}/>
			<div>{text}</div>
		</Box>
	)

}

