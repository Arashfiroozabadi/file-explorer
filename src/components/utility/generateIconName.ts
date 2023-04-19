import {IconName, IconPrefix} from "@fortawesome/fontawesome-common-types";

interface ReturnTypes {
	prefix: IconPrefix
	iconName: IconName
}

/**
 *  Determines the file extension based on the file name and return the icon name
 */
export default function generateIconName(fileName: string): ReturnTypes {


	// Determines the file extension based on the `fileName` argument
	let ext;
	ext = fileName.match(/\.[0-9a-z]+$/i);

	// return the fontawesome icon name based on the file extension
	let iconName: IconName;
	let prefix: IconPrefix;
	if (ext) {
		ext = ext[0].replace('.', '');

		switch (ext) {
			case  'md':
				prefix = 'fab'
				iconName = 'markdown';
				break;
			case  'less':
				prefix = 'fab'
				iconName = 'less';
				break;
			case  'exe':
				prefix = 'fab'
				iconName = 'windows';
				break;
			case  'sass':
			case  'scss':
				prefix = 'fab'
				iconName = 'sass';
				break;
			case  'rs':
				prefix = 'fab'
				iconName = 'rust';
				break;
			case  'vue':
				prefix = 'fab'
				iconName = 'vuejs';
				break;
			case 'jsx':
			case 'tsx':
				prefix = 'fab'
				iconName = 'react';
				break
			case  'svg':
				prefix = 'fas'
				iconName = 'bezier-curve';
				break
			case  'png':
			case  'jpg':
			case  'jpeg':
			case  'gif':
				prefix = 'fas'
				iconName = 'image';
				break
			case  'txt':
				prefix = 'fas'
				iconName = 'file-lines';
				break
			case  'js':
			case  'ts':
				prefix = 'fab'
				iconName = 'js';
				break
			case  'py':
				prefix = 'fab'
				iconName = 'python';
				break;
			case  'jar':
			case  'java':
				prefix = 'fab'
				iconName = 'java';
				break;
			case  'html':
				prefix = 'fab'
				iconName = 'html5';
				break
			case  'css':
				prefix = 'fab'
				iconName = 'css3-alt';
				break
			default :
				prefix = 'fas'
				iconName = 'question';
				break
		}
	} else {
		prefix = 'fas'
		iconName = 'question'
	}
	return {prefix, iconName};
}
