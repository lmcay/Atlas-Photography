function show() {
    document.getElementById('mobile-nav').classList.toggle('active');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementSlow = document.querySelectorAll('.hidden-slow');
hiddenElementSlow.forEach((el) => observer.observe(el));