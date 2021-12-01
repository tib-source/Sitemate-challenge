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


const toggleModal = () => {
    showModal = !showModal
}


const handleModal = () => {
    toggleModal()
    console.log("meow")
    if (showModal) {
        document.body.appendChild(modalContainer)
    } else {
        document.body.removeChild(modalContainer)
    }
}
bodyButton.addEventListener("click", handleModal)



