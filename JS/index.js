const themeToggle = document.getElementById('theme-toggle')
const filterButtons = document.querySelectorAll('.filer-btn')
const extensionLists = document.getElementById('extensions-list')

// Add theme toggle event listener
themeToggle.addEventListener('click', () =>{
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = (currentTheme === 'dark') ? 'light': 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    themeToggle.innerHTML = (newTheme === 'dark') ? `<img src="/assets/images/icon-sun.svg alt="Sun Icon">` : `<img src="/assets/images/icon-moon.svg alt="Moon Icon">`
})

// Filter Extensions
filterButtons.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        filterButtons.forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        const filter = btn.dataset.filter
        document.querySelectorAll('.extension-item'.forEach(item =>{
            if(filter === 'all'){
                item.style.display = ''
            }else if(filter === active){
                item.style.display = (item.classList.contains('active')) ? '' : 'none'
            }else if(filter === inactive){
                item.style.display = (item.classList.contains('active')) ? 'none' : ''
            }
        }))
    })
})

