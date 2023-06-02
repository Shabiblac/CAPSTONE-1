const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobile = document.querySelector('.cancle-mobile');
const menuIcon = document.querySelector('.menu-icon');
const button = document.querySelector('.button');
let cards = null;

// Featured Speakers //
const speakers = [{
  pic: './images/Speakers/6.PNG',
  name: 'John Doe',
  job: 'Senior Cyber Security Engineer (CANADA)',
  resume: 'John is an expert in the cyber security sytem and as been able to tackle a lot security attacks ',
},

{
  pic: './images/Speakers/1.PNG',
  name: 'Maria Daren',
  job: 'Information Technology Engineer(SNR)',
  resume: 'Engineer Maria is an expert in the ICT department',
},

{
  pic: './images/Speakers/2.PNG',
  name: 'David Perez',
  job: 'University of Buenos Aires (UBA)',
  resume: 'Prof. Perez is an engineer with expertise in Data science and Computer research scientist.',
},

{
  pic: './images/Speakers/3.PNG',
  name: 'Grace Johnson',
  job: 'Colombian National Police ',
  resume: 'Officer Johnson is an expert in the investigation of crimes as an information technology manager.',
},

{
  pic: './images/Speakers/4.PNG',
  name: 'Torres Max',
  job: 'Prof(UCLA) Sale Engineer',
  resume: 'Dr. Torres is an expert in sales engineer and as impact knowledge into thousands of lives with her skills.',
},

{
  pic: './images/Speakers/5.PNG',
  name: 'Martina Brooke ',
  job: 'Software Web Engineer',
  resume: 'Engr Brooke is an expert in the Software development space, and have used her skills to improve the world with her techniques',
}];

const featuredSpeaker = document.querySelector('.card-wrapper');

/* eslint-disable no-plusplus */
function speakerCard() 
  for (let card = 0; card < speakers.length; card++) 
    featuredSpeaker.innerHTML += `
            <div class="card-container">
                <div class="cards">
                    <img src="${speakers[card].pic}" alt="Speakers">
                    <ul>
                        <li class="name">${speakers[card].name}</li>
                        <li class="jobs">${speakers[card].job}</li>
                        <li class="resume">${speakers[card].resume}</li>
                    </ul>
                    </div>
            </div>`;
  }

  cards = document.querySelectorAll('.card-container');
}

window.onload = () => {
  speakerCard();
};

button.addEventListener('click', () => {
  cards.forEach((card) => {
    card.style.display = 'grid';
  });

  button.classList.add('hide');
});

function toggleMenu() {
  mobileMenu.classList.toggle('hide');
  closeMobile.classList.toggle('hide');
  body.classList.add('no-scroll');
}
menuIcon.addEventListener('click', toggleMenu);

function closeMenu() {
  closeMobile.classList.toggle('hide');
  mobileMenu.classList.toggle('hide');
  body.classList.remove('no-scroll');
}
closeMobile.addEventListener('click', closeMenu);

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide');
    closeMobile.classList.toggle('hide');
    body.classList.remove('no-scroll');
  });
});
