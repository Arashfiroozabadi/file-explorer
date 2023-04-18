import {HTMLAttributes} from "react";

interface PropsTypes extends HTMLAttributes<HTMLDivElement> {
}

export default function Box(props: PropsTypes) {
	const {children, className, onClick} = props;
	return (
		<div className={className ? `px-4 ${className}` : 'px-4'} onClick={onClick}>
			{children}
		</div>
	)
}