class Tips {
    constructor({
        el,
        text,
        color = '#fff',
        background = '#666',
        direction = 'top'
    }) {
        const container = document.querySelector(`.${el}`)
        container.classList.add('tips-container')
        const position = window.getComputedStyle(container, null).position
        if (position === 'static') {
            container.style.position = 'relative'
        }
        const newNode = `<div class="tips tips-${direction}" style="--bg: ${background}; color: ${color}"><span>${text}</span></div>`
        container.innerHTML += newNode
    }
}

