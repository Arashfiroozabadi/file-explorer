import {DirectoryType} from "@/types";
import Box from "@/components/Box";
import {HTMLAttributes} from "react";

interface PropsTypes extends HTMLAttributes<HTMLDivElement> {
	text?: string;
}

export default function Button(props: PropsTypes) {
	const {text} = props;
	return (
		<button>
			{text}
		</button>
	)

}