function State() {
	this.container = null;
	this.btnClose = null;
}

const state = new State();

export function init() {
	state.container = document.querySelector('#modal-contact');
	state.btnClose = document.querySelector('#modal-contact-close');

    state.btnClose.addEventListener("click", handleBtnCloseClick);
    state.container.addEventListener('click', handleContainerClick);
}

//FUNÇÃO RESPONSÁVEL POR APRESENTAR O MODAL NA TELA.
export function showModal() {
    state.container.classList.add("active");
}

//FUNÇÃO RESPONSÁVEL POR REMOVER O MODAL NA TELA.
export function closeModal() {
    state.container.classList.remove("active");
}

function handleBtnCloseClick(event){
    event.preventDefault();
    closeModal();
}

function handleContainerClick(event){
    event.preventDefault();
    if(event.target === this){
closeModal();
    }
    
}