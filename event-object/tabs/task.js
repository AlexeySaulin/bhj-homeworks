const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));

function selectTabs(event) {
	let eventTarget = event.target;

	tabs.forEach(item => {
		item.classList.remove("tab_active");
	});
	tabsContent.forEach(item => {
		item.classList.remove("tab__content_active");
	});

	eventTarget.classList.add("tab_active");

	let index = tabs.indexOf(document.querySelector(".tab_active"));

	tabsContent[index].classList.add("tab__content_active");
};

tabs.forEach(item => {
	item.addEventListener("click", selectTabs);
});