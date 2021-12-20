//tabs
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabsContent = document.querySelectorAll('.tabcontent')


function hideTabContent() {
	tabsContent.forEach(item => {
		item.classList.add('hide', 'fade')
		item.classList.remove('show')
	})

	tabs.forEach(item => {
		item.classList.remove('tabheader__item_active')
	})
}

function showTabContent(i = 0) {
	tabsContent[i].classList.add('show', 'fade')
	tabsContent[i].classList.remove('hide')
	tabs[i].classList.add('tabheader__item_active')
}


hideTabContent()
showTabContent()


tabsParent.addEventListener('click', (event) => {
	const target = event.target

	if (target.classList.contains('tabheader__item')) {
		tabs.forEach((item, i) => {
			if (target === item) {
				hideTabContent()
				showTabContent(i)
			}
		})
	}
})

// modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('[data-modal]')
const closeModalBtn = document.querySelector('.modal__close')

modalTrigger.addEventListener('click', openModal)

function openModal() {
	modal.classList.add('show')
	modal.classList.remove('hide')
	document.body.style.overflow = 'hidden'

	clearInterval(modalTimeout)
}

function closeModal() {
	modal.classList.add('hide')
	modal.classList.remove('show')
	document.body.style.overflow = ''
}

closeModalBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (event) => {
	if (event.target === modal) {
		closeModal()
	}
})

document.body.addEventListener('keydown', (event) => {
	if (event.code === 'Backspace') {
		closeModal()
	}
})

function openModalScroll() {
	const page = document.documentElement

	if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
		openModal()

		window.removeEventListener('scroll', openModalScroll)
	}
}

window.addEventListener('scroll', openModalScroll)
const modalTimeout = setTimeout(openModal, 5000)


// data
const deadline = '2021-12-25'

function getTimeRemaining(deadline) {
	const t = new Date(deadline) - new Date(),
		days = Math.floor((t / (1000 * 60 * 60 * 24))),
		hours = Math.floor((t / (1000 * 60 * 60) % 24)),
		minutes = Math.floor((t / 1000 / 60) % 60),
		seconds = Math.floor((t / 1000) % 60);

	return {
		"total": t,
		"days": days,
		"hours": hours,
		"minutes": minutes,
		"seconds": seconds
	}
}


function setClock(element, deadline) {
	const elem = document.querySelector(element),
		days = elem.querySelector('#days'),
		hours = elem.querySelector('#hours'),
		minutes = elem.querySelector('#minutes'),
		seconds = elem.querySelector('#seconds');

	setInterval(updateClock, 1000)

	updateClock()


	function makeZero(num) {
		if (num > 0 && num < 10) {
			return `0${num}`
		} else {
			return num
		}
	}

	function updateClock() {
		const t = getTimeRemaining(deadline);
		days.innerHTML = makeZero(t.days);
		hours.innerHTML = makeZero(t.hours);
		minutes.innerHTML = makeZero(t.minutes);
		seconds.innerHTML = makeZero(t.seconds)
	}
}

setClock('.timer', deadline)

