const arrBox = document.querySelectorAll('.box')
arrBox.forEach(item => item.classList.remove('active'))

arrBox.forEach(item => {
    item.addEventListener('click', (e) => {
        arrBox.forEach(item => item.classList.remove('active'))
        item.classList.toggle('active')
        item.querySelector('.price').classList.add('active')
    })
})

