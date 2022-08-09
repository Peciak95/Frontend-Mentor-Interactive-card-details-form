const numberOnCard = document.querySelector('.card-number')
const nameOnCard = document.querySelector('.name')
const monthOnCard = document.querySelector('.month')
const yearOnCard = document.querySelector('.year')
const cvcOnCard = document.querySelector('.cvc')

const cardNumberInput = document.querySelector('#card-number')
const nameInput = document.querySelector('#name')
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')
const cvcInput = document.querySelector('#cvc')

const submitBtn = document.querySelector('.submit')
const continueBtn = document.querySelector('.continue')

const cardNumberError = document.querySelector('.card-number-error')
const expDateError = document.querySelector('.exp-date-error')
const cvcError = document.querySelector('.cvc-error')

const form = document.querySelector('.form')
const complete = document.querySelector('.complete')

const cardNumberFormat = (ele, e) => {
		ele.value = ele.value
			.replace(/[^\d ]/g, '')
			.replace(/\W/gi, '')
			.replace(/(.{4})/g, '$1 ')
			.trim()
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
	} else {
		checkDate()
		checkMonthLength()
		checkYearLength()
		checkCvc()
		checkCvcLength()
        checkCardNumber()
	}
}
const checkCardNumber = () => {
    if (cardNumberInput.value !== '') {
		cardNumberError.style.visibility = 'hidden'
	} else {
		cardNumberError.style.visibility = 'visible'
	}
}
const checkDate = () => {
	if (monthInput.value === '' || yearInput.value === '') {
		expDateError.style.visibility = 'visible'
	} else {
		expDateError.style.visibility = 'hidden'
	}
}

const checkMonthLength = () => {
	if (monthInput.value.length < 3) {
		monthOnCard.textContent = monthInput.value
	} else {
		monthInput.value = monthInput.value.slice(0, -1)
	}
}
const checkYearLength = () => {
	if (yearInput.value.length < 3) {
		yearOnCard.textContent = yearInput.value
	} else {
		yearInput.value = yearInput.value.slice(0, -1)
	}
}

const checkCvcLength = () => {
	if (cvcInput.value.length < 4) {
		cvcOnCard.textContent = cvcInput.value
	} else {
		cvcInput.value = cvcInput.value.slice(0, -1)
	}
}
const checkCvc = () => {
	if (cvcInput.value !== '') {
		cvcError.style.visibility = 'hidden'
	} else {
		cvcError.style.visibility = 'visible'
	}
}

const clearForm = () => {
	form.style.display = 'flex'
	complete.style.display = 'none'
    window.location.reload(true)
}
nameInput.addEventListener('keyup', () => {
	nameOnCard.textContent = nameInput.value
})

monthInput.addEventListener('keyup', () => {
	checkDate()
	checkMonthLength()
	checkYearLength()
})
yearInput.addEventListener('keyup', () => {
	checkDate()
	checkMonthLength()
	checkYearLength()
})

cvcInput.addEventListener('keyup', () => {
	checkCvc()
	checkCvcLength()
})

cardNumberInput.addEventListener('keyup', () => {
	checkCardNumber()
})
submitBtn.addEventListener('click', e => {
	e.preventDefault()
	submit()
})
continueBtn.addEventListener('click', clearForm)
