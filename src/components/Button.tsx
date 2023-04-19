import {HTMLAttributes} from "react";

interface PropsTypes extends HTMLAttributes<HTMLButtonElement> {
}

export default function Button(props: PropsTypes) {
	const {children, onClick} = props;
	return (
		<button className='py-0 px-2' onClick={onClick}>
			{children}
		</button>
	)

}