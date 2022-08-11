const cardNumberInput = document.querySelector('#card-number')
const nameInput = document.querySelector('#name')
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')
const cvcInput = document.querySelector('#cvc')

const allInputs = document.querySelectorAll('.form__input')
const onCardParagraphs = document.querySelectorAll('.on-card')

const submitBtn = document.querySelector('.submit')
const continueBtn = document.querySelector('.continue')

const cardNumberError = document.querySelector('.card-number-error')
const expDateError = document.querySelector('.exp-date-error')
const cvcError = document.querySelector('.cvc-error')
const submitError = document.querySelector('.submit-error')

const form = document.querySelector('.form')
const complete = document.querySelector('.complete')

const cardNumberFormat = (ele, e) => {
	ele.value = ele.value
		.replace(/[^\d ]/g, '')
		.replace(/\W/gi, '')
		.replace(/(.{4})/g, '$1 ')
		.trim()
}

const clearForm = () => {
	form.style.display = 'flex'
	complete.style.display = 'none'
	window.location.reload(true)
}

const checkInputs = e => {
	const parent = e.target.parentElement
	const error = parent.querySelector('p')
	if (e.target.value === '') {
		error.style.visibility = 'visible'
		e.target.classList.add('error-border')
	} else if (e.target.value.length > e.target.getAttribute('maxlength')) {
		e.target.value = e.target.value.slice(0, -1)
	} else {
		e.target.classList.remove('error-border')
		error.style.visibility = 'hidden'
	}
	checkMonthCorectness()
	checkYearCorectness()
	checkCvcCorectness()
}
const checkMonthCorectness = () => {
	if (monthInput.value > 12) {
		expDateError.textContent = 'year has only 12 months ;)'
		expDateError.style.visibility = 'visible'
	} else if (monthInput.value < 0) {
		monthInput.value = ""
	} else {
		expDateError.textContent = `Can't be blank`
	}
}
const checkYearCorectness = () => {
	if (yearInput.value < 0) {
		yearInput.value = ""
	} else {
		return
	}
}
const checkCvcCorectness = () => {
	if (cvcInput.value < 0) {
		cvcInput.value = ""
	} else {
		return
	}
}
const reWrite = e => {
	onCardParagraphs.forEach(paragraph => {
		let paragraphClass = paragraph.getAttribute('class')
		if (paragraphClass.includes(e.target.getAttribute('id'))) {
			paragraph.textContent = e.target.value
		} else {
			return
		}
	})
}
const submit = () => {
	if (
		nameInput.value !== '' &&
		cardNumberInput.value.length === 19 &&
		monthInput.value.length === 2 &&
		yearInput.value.length === 2 &&
		cvcInput.value.length === 3
	) {
		form.style.display = 'none'
		complete.style.display = 'flex'
		submitError.style.visibility = 'hidden'
	} else {
		submitError.style.visibility = 'visible'
	}
}
allInputs.forEach(input => {
	input.addEventListener('keyup', e => {
		checkInputs(e)
		reWrite(e)
	})
})
submitBtn.addEventListener('click', e => {
	e.preventDefault()
	submit()
})
continueBtn.addEventListener('click', clearForm)
