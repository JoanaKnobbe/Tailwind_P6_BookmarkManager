const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const hambBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobileMenu');
const logo = document.getElementById('logo');
const hambLink = document.querySelectorAll('.hambLink')

//HAMBURGER

//Hamburger button listener
hambBtn.addEventListener('click', navToggle);
hambLink.forEach((link) => link.addEventListener('click', navToggle));


function navToggle(e) {
    hambBtn.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');

    if(mobileMenu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark.svg')
    } else {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    }
}








//ACCORDION
//Tabs menu event listener

tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

function onTabClick(e) {
    //Deactivate all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    })

    //Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'))

    //Activate a new tab+panel based on data-target
    e.target.classList.add(
        'border-softRed',
        'border-b-4'
    )

    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden')
}