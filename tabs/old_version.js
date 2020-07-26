// class Tabs {
//     constructor(el) {
//         // 选中栏
//         let active_label 
//         // 选中栏的索引
//         let active_label_index

//         const tabs = document.querySelector(el)
//         const [label_container, content_container] = tabs.children
//         tabs.classList.add('tabs')
//         label_container.classList.add('tabs-label-container')
//         content_container.classList.add('tabs-content-container')
//         Array.from(label_container.children).forEach((node, index) => {
//             if (index === 0) {
//                 node.classList.add('tabs-label-active')
//                 active_label = node
//                 active_label_index = index
//             }
//             node.classList.add('tabs-label')
//             // 绑定事件，其实也可以用事件委托
//             node.addEventListener('click', function (e) {
//                 const label = this
//                 if (label.classList.contains('tabs-label')) {
//                     if (label.classList.contains('tabs-label-active')) return 
//                     else {
//                         label.classList.add('tabs-label-active')
//                         active_label?.classList.remove('tabs-label-active')
//                         active_label = label
//                         active_label_index = index
//                         content_container.style.marginLeft = index === 0 ? '0' : `-${index}00%`
//                     }
//                 }
//             })
//         })
//         Array.from(content_container.children).forEach(node => node.classList.add('tabs-content'))
//     }
// }