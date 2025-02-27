const bookControl = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

bookControl.forEach(element => {
	element.addEventListener('click', (event) => {
		event.preventDefault();

		const fontSizeActive = document.querySelector('.font-size_active');
		fontSizeActive.classList.remove('font-size_active');

		element.classList.add('font-size_active');

		if (element.classList.contains('font-size_small')) {
			book.classList.add('book_fs-small');
		} else if (element.classList.contains('font-size_big')) {
			book.classList.add('book_fs-big');
		} else {
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		}
	});
});