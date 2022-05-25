const chatWidgetSide = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const messages  = document.getElementById('chat-widget__messages');
const time = new Date().getHours() + ':' + new Date().getMinutes();
const answers = [
    'Добрый день!',
    'К сожалению все операторы сейчас заняты',
    'Мы ничего не будем вам продавать',
    'Вы не купили ни одного товара, чтобы так с нами разговаривать',
    'Добрый день! До свидания!',
    'Где ваша совесть?'
];

chatWidgetSide.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        const input = document.querySelector('.chat-widget__input');
        const value = input.value;
        if(value != '') {
            messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">
            ${value}
            </div>
            </div>
            `;
            input.value = '';
            const randomAnswers = answers[Math.floor(Math.random()*answers.length)];
            messages.innerHTML += `
            <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">
            ${randomAnswers}
            </div>
            </div>
            `;
        }
    }
});