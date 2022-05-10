const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");
const modalClose = document.getElementsByClassName("modal__close");

for (let i = 0; i < modalClose.length; i++) {
	modalClose[i].onclick = function() {
		this.closest(".modal").remove("modal_active");
	}
}

const showSuccess = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");

showSuccess.onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
};
