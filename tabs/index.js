class EventEmitter {
    constructor() {
        this.eventList = {}
    }

    on(name, fn, type = 1) {
        let typeList = this.eventList[name]
        if (!typeList) {
            typeList = this.eventList[name] = []
        }
        typeList.push([fn, type])
    }

    once(name, fn, type = 0) {
        this.on(name, fn, type)
    }

    emit(name, ...args) {
        const listType = this.eventList[name]
        if (listType) {
            listType.forEach((arr, index) => {
                arr[0].apply(this, args)
                if (arr[1] === 0) {
                    listType.splice(index, 1)
                }
            })
        }
    }

    remove(name, fn) {
        const typeList = this.eventList[name]
        if (!typeList) return
        typeList.forEach((arr, index) => {
            if (arr[0] === fn) {
                typeList.splice(index, 1)
            }
        })
    }
}

class Tabs extends EventEmitter {
    constructor(selector, options) {
        super()
        let defaultOptions = {
            defaultIndex: 0,
            direction: 'column',
            justifyContent: 'flex-start',
            animated: false,
            animationDuration: 2000,
            animationDirection: 'normal',
            keyEvent: false,
        }
        options = Object.assign(defaultOptions, options)

        this.selector = selector
        this.el = document.querySelector(selector)
        if (this.template) {
            this.template = template
            this.render()
        }
        this.init(options)
        this.active(this.defaultIndex)
        this.events()
        if (this.animated) {
            this.start()
        }
    }

    render() {
        this.el.innerHTML = this.template
    }
    
    init(options) {
        const {
            defaultIndex,
            reverse,
            justifyContent,
            animated,
            animationDuration,
            animationDirection,
            keyEvent,
        } = options

        const el = this.el
        this.defaultIndex = defaultIndex
        this.animated = animated
        this.animationDuration = animationDuration
        this.animationDirection = animationDirection
        this.keyEvent = keyEvent
        const [label_container, content_container] = el.children
        this.label_container = label_container
        this.content_container = content_container
        const labels = this.labels = label_container.children
        this.labels_length = labels.length
        const contents = this.contents = content_container.children

        el.classList.add('tabs')
        el.classList.add(reverse === 'column' ? 'tabs-column' : 'tabs-column_reverse')
        
        label_container.classList.add('tabs-label-container')
        label_container.style.setProperty('--justifyContent', justifyContent)
        content_container.classList.add('tabs-content-container')

        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.add('tabs-label')
        }

        for (let i = 0; i < contents.length; i++) {
            contents[i].classList.add('tabs-content')
        }

    }

    active(index) {
        let current = this.current
        if (current === index) return
        this.labels[index].classList.add('tabs-label-active')
        if (typeof current === 'number') {
            this.labels[current].classList.remove('tabs-label-active')
        }
        this.current = index
        this.content_container.style.marginLeft = index === 0 ? '0' : `-${index}00%`
        this.emit('active', index)
        if (this.animated) {
            this.start()
        }

    }

    events() {
        Array.from(this.labels).forEach((node, index) => {
            node.addEventListener('click', () => {
                this.active(index)
            })
        })

        if (this.keyEvent) {
            window.addEventListener('keydown', (e) => {
                if (e.keyCode === 37) {
                    this.last()
                } 
                if (e.keyCode === 39) {
                    this.next()
                }
            })
        }
    }

    last() {
        const len = this.labels_length
        let next = this.animationDirection === 'normal' ? this.current - 1 : this.current + 1
        if (next >= len) next = 0
        if (next < 0) next = len - 1
        this.active(next)
    }

    next() {
        const len = this.labels_length
        let next = this.animationDirection === 'normal' ? this.current + 1 : this.current - 1
        if (next >= len) next = 0
        if (next < 0) next = len - 1
        this.active(next)
    }
    

    start() {
        this.animated = true
        this.timer && clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.next()
        }, this.animationDuration)
    }

    stop() {
        this.animated = false
        clearInterval(this.timer)
    }

    add(text, content) {
        const index = this.labels_length
        const newLabel = document.createElement('li')
        newLabel.className = 'tabs-label'
        newLabel.innerHTML = `<a href="#">${text}</a>`
        this.label_container.appendChild(newLabel)

        newLabel.addEventListener('click', () => {
            this.active(index)
        })
        const newContent = document.createElement('div')
        newContent.className = 'tabs-content'
        newContent.innerHTML = content
        this.content_container.appendChild(newContent)

        this.labels = this.label_container.children
        this.labels_length++
    }
}