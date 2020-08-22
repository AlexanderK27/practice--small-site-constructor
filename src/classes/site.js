export class Site {
	constructor(selector) {
		this.$el = document.querySelector(selector)
	}

	render(model) {
		this.$el.innerHTML = ''
		return model.forEach(block => {
			this.$el.insertAdjacentHTML('beforeend', block.toHTML())
		})
	}
}
