import {v4 as uuidv4} from "uuid";
import {DirectoryType, InitStateType} from "@/types";

// export function getNodeFromTree(node: InitStateType, nodeId: typeof uuidv4) {
// 	if (node.id == nodeId) {
// 		return node;
// 	} else if (node.items != null) {
// 		let result = null;
// 		for (let i = 0; result == null && i < node.items.length; i++) {
// 			result = getNodeFromTree(node.items[i], nodeId);
// 		}
// 		return result;
// 	}
// 	return null;
// }


export function insertNodeIntoTree(node: InitStateType, nodeId: typeof uuidv4, newNode: DirectoryType): void {
	if (node.id == nodeId) {
		if (newNode) {
			newNode.id = uuidv4();
			newNode.items = [];
			node.items?.push(newNode);
		}

	} else if (node.items != null) {
		for (let i = 0; i < node.items.length; i++) {
			insertNodeIntoTree(node.items[i], nodeId, newNode);
		}
	}
}

export function deleteNodeFromTree(node: InitStateType, nodeId: typeof uuidv4): void {
	if (node.items != null) {
		for (let i = 0; i < node.items.length; i++) {
			let filtered = node.items.filter((f: any) => f.id == nodeId);
			if (filtered && filtered.length > 0) {
				node.items = node.items.filter((f: any) => f.id != nodeId);
				return;
			}
			deleteNodeFromTree(node.items[i], nodeId,);
		}
	}
}