import {HTMLAttributes, ReactNode} from "react";

interface PropsTypes extends HTMLAttributes<HTMLDivElement> {
}


export default function Container(props: PropsTypes) {
	const {children} = props;
	return (
		<div className='container mx-auto px-4 py-6'>
			{children}
		</div>
	)
}