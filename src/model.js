import {
	ImageBlock,
	TextBlock,
	TextColumnsBlock,
	TitleBlock
} from './classes/blocks'
import image from './assets/travellers.png'

export const model = [
	new TitleBlock('Website constructor', {
		tag: 'h2',
		styles: 'text-align: center;'
	}),
	new TextBlock('Build sites with just a vanilla JavaScript', {
		styles: 'text-align: center; font-weight: bold; color: #777;'
	}),
	new ImageBlock(image, {
		alt: 'my image',
		styles: 'padding: 2rem 0; display: flex; justify-content: center;',
		imageStyles: 'width: 140px; height: auto;'
	}),
	new TextColumnsBlock(['1 text', '2 text', '3 text'], {
		styles: 'text-align: center; border: 1px dashed #ddd;'
	})
]
