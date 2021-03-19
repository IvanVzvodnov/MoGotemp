document.addEventListener('DOMContentLoaded', ()=>{
    `use strict`
    const accordionItem = document.querySelectorAll('.accordion_item')

    accordionItem.forEach(elem=>{
        elem.addEventListener('click',()=>{
            elem.classList.toggle('active')
        })
    })

    const header = document.querySelector('.header')
    const foo = setInterval(()=>{
    if(window.pageYOffset>30){
        header.classList.add('header--fixed')
    }else{
        header.classList.remove('header--fixed')
    }
},100)
})





