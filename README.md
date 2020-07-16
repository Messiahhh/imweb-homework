## 原生组件

个人看来，组件最重要的是用起来方便。

##### Dialog

``` js
const modal = new Dialog({
    title: 'akara',
    content: '测试',
})

// modal.confirm()
```

##### Tips

``` js
const element = new Tips({
    el: 'my-tips',
    text: 'hello',
    background: '#302d2d',
    direction: 'top'
})
```

##### Tabs

和以上两个组件不同，使用这个组件的时候必须先写好HTML的结构。

``` html
<div class='akara'>
    <div>
        <div>Tab 1</div>
        <div>Tab 2</div>
        <div>Tab 3</div>
    </div>
    <div>
        <div>Content of Tab Pane 1...</div>
        <div>Content of Tab Pane 2...</div>
        <div>Content of Tab Pane 3...</div>
    </div>
</div>
<script>
const el = new Tabs('.akara')
</script>
```

