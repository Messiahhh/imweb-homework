class Dialog {
    constructor({
        title,
        content,
        confirmText = '确认',
        cancelText = '取消',
        onConfirm,
    }) {
        const newNode = `
            <div class='dialog-mask' style='display: none'>
                <div class='dialog-container'>
                    <div class='dialog-title'>
                        <span>${title}</span>
                        <span class='cancel'>x</span>
                    </div>
                    <div class='dialog-content'>${content}</div>
                    <div class='dialog-btns'>
                        <button class='btns btns-cancel cancel'>${cancelText}</button>
                        <button class='btns btns-confirm'>${confirmText}</button>
                    </div>
                </div>
            </div>
        `
        document.body.innerHTML += newNode
        this.el = document.querySelector('.dialog-mask')
        this.el.addEventListener('click', (e) => {
            const classList = e.target.classList
            if (classList.contains('cancel')) {
                this.cancel()
            } else if (classList.contains('btns-confirm')) {
                if (onConfirm) {
                    onConfirm().then(() => this.cancel())
                } else {
                    this.cancel()
                }
            }
        })
    }

    confirm() {
        this.el.style.display = 'block'
    }

    cancel() {
        this.el.style.display = 'none'
    }

}