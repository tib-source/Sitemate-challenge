// variable definition
const modalHtml = `
        <div class="modal__wrapper">
            <p>Are you sure you want to continue</p>
            <div class="modal__buttons">
                <button id='yes' class="button">Yes</button>
                <button id='cancel' class="button">Cancel</button>
            </div>
        </div>
    
    `
const modalContainer = document.createElement("div")
modalContainer.classList.add('modal')
modalContainer.innerHTML = modalHtml
let showModal = false
const bodyButton = document.getElementById('click')

// event handle functions
const toggleModal = () => {
    showModal = !showModal
}

const handleModal = () => {
    toggleModal()
    if (showModal) {
        document.body.appendChild(modalContainer)
        setTimeout(() => document.querySelector('.modal__wrapper').classList.add('active'), 100)
        const modalButtons = document.querySelectorAll('.modal__buttons button')
        modalButtons.forEach(button => {
            console.log(button)
            button.addEventListener('click', handleModalButton)
        })
    } else {
        document.querySelector('.modal__wrapper').classList.remove('active')
        const modalButtons = document.querySelectorAll('.modal__buttons button')
        modalButtons.forEach(button =>
            button.removeEventListener('click', handleModalButton))
        document.body.removeChild(modalContainer)
    }
}

const handleModalButton = (event) => {
    const clicked = document.querySelector('.clicked')
    console.log(clicked)
    clicked.innerHTML = `You clicked the ${event.target.innerHTML} button`
    document.querySelector('.container')
    handleModal()
}


// event listener
bodyButton.addEventListener("click", handleModal)


