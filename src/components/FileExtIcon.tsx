import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import generateIconName from "@/components/utility/generateIconName";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export default function FileExtIcon({fileName}: { fileName: string }) {

	function iconPack(fileName: string):IconProp {
		const {iconName, prefix} = generateIconName(fileName);
		return [`${prefix}`, `${iconName}`];
	}

	return (
		<FontAwesomeIcon className='mr-3' icon={iconPack(fileName)}/>
	)
}