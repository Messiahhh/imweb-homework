class Tips {
    constructor({
        cl,
        text,
        color = '#fff',
        background = '#666',
        direction = 'top'
    }) {
        const container = document.querySelector(`.${cl}`)
        container.classList.add('tips-container')

        const position = window.getComputedStyle(container, null).position
        if (position === 'static') {
            container.style.position = 'relative'
        }
        
        const newNode = `<div class="tips tips-${direction}" style="--bg: ${background}; color: ${color}">${text}</div>`
        container.innerHTML += newNode

    }
}

