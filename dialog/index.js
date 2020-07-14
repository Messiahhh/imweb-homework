class Dialog {
    constructor({
        title,
        content,
    }) {
        const newNode = `
            <div class='dialog-mask'>
                <div class='dialog-container'>
                    
                </div>
            </div>
        `
        console.log(newNode);
        document.body.innerHTML += newNode
    }
}