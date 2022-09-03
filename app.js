const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const panes = $$('.tab-pane')
const tabs = $$('.tab-item')

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

line.style.width = tabActive.offsetWidth + 'px'
line.style.left = tabActive.offsetLeft + 'px'


tabs.forEach(function(tab, index){
    const pane = panes[index]
    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        this.classList.add('active')
        pane.classList.add('active')

                
        line.style.width = this.offsetWidth + 'px'
        line.style.left = this.offsetLeft + 'px'
    }
})







