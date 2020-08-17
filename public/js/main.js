const callBtn = document.querySelector('.call_btn');
const callNum = document.querySelector('.call_num');
const callInput = document.querySelector('.call_input');
let tabList = document.querySelectorAll('.tab_list_wrap .tab_list')
const noteWrap = document.querySelector('.note_wrap');
const closeBtn = document.querySelector('.closeBtn');


closeBtn.addEventListener('click', () => {
  noteWrap.style.display = 'none'
})

Array.prototype.forEach.call(tabList, (list) => {
  list.children[0].addEventListener('click', function (e) {
    e.preventDefault();
    let tabContent = document.querySelectorAll('.tab_container .tab_content')
    let tabNum = this.parentElement.getAttribute('data-tabnum')

    Array.prototype.forEach.call(tabContent, (cont, i) => {
      cont.style.display = 'none'
      tabList[i].className = 'tab_list'
    })
    tabContent[tabNum].style.display = 'block'
    if (list.className.indexOf('tab_active') === -1) {
      list.className = 'tab_list tab_active'
    }
  })
})
