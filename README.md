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



``` html
<div class='akara'>
    <ul>
        <li><a href="#">Tab 1</a></li>
        <li><a href="#">Tab 2</a></li>
        <li><a href="#">Tab 3</a></li>
        <li><a href="#">Tab 4</a></li>
        <li><a href="#">Tab 5</a></li>
    </ul>
    <div>
        <div>Content of Tab Pane 1...</div>
        <div>Content of Tab Pane 2...</div>
        <div>Content of Tab Pane 3...</div>
        <div>Content of Tab Pane 4...</div>
        <div>Content of Tab Pane 5...</div>
    </div>
</div>
<script>
const el = new Tabs('.akara')
</script>
```


