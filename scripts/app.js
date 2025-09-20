// Close navbar when any link is clicked
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var hamburger = document.getElementById('hamburger-icon');
  if (navbar && hamburger) {
    navbar.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navbar.style.display = 'none';
        hamburger.classList.remove('open');
      });
    });
  }
});
// Hide navbar link when its section is in view
document.addEventListener('DOMContentLoaded', function () {
  const sectionToNav = {
    welcome: 'welcome',
    projects: 'projects',
    certis: 'certis',
    contacts: 'contacts',
  };
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, // 20% of section visible
  };
  Object.entries(sectionToNav).forEach(([sectionId, navId]) => {
    const section = document.getElementById(sectionId);
    const navSpans = document.querySelectorAll(
      `#navbar a[href="#${sectionId}"]`
    );
    if (section && navSpans.length) {
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          navSpans.forEach((span) => {
            if (entry.isIntersecting) {
              span.parentElement.classList.add('hide');
            } else {
              span.parentElement.classList.remove('hide');
            }
          });
        });
      }, observerOptions);
      observer.observe(section);
    }
  });
});
// projects
let projects = document.getElementsByClassName('projminisection')[0];
let proj_div = ({ href, target, src, name }) =>
  `<div class="proj text-center">
    <a  href="${href}" target="${target}">
      <img class="img-tile" src="${src}" alt="${name}">
      <br><br>
      <span class="projname"> ${name} </span>
    </a>
  </div>`;

// certificates
let certificates = document.getElementsByClassName('certiminisection')[0];
let cert_div = ({ href, target, src, name, institute }) =>
  `<div class="text-center certbor">
    <a  href="${href}" target="${target}">
      <img class="img-tile" src="${src}" alt="${name}">
      <br>
      <span class="certname"> ${name} ${
    institute ? ' : ' + institute : ''
  } </span>
      <br>
    </a>
  </div>`;

// contacts
let contacts = document.getElementById('con');
let contact_div = ({ href, target, color, icon }) =>
  `<div class="conta">
    <a class="madhe" href="${href}" target="${target}">
      <i style="color: ${color}" class="${icon}"></i>
    </a>
  </div>`;

// education
let education = document.getElementById('institutions');
let education_div = ({ href, name, shortname, src, year, degree }) =>
  `<div class="text-center proj">
    <a  href="${href}" target="_blank">
      <img class="img-tile" src="${src}" alt="${name}">
      <br>
      <div class="projname"> ${name} ${shortname} </div>
      <span class="projname"> ${degree} ${year} </span>
      <br>
    </a>
  </div>`;

const display_data = (data) => {
  projects.innerHTML = data.projects
    .filter((project) => project.visible)
    .map((project) => proj_div(project))
    .join(' ');

  certificates.innerHTML = data.certificates
    .filter((certificate) => certificate.visible)
    .map((certificate) => cert_div(certificate))
    .join(' ');

  contacts.innerHTML = data.contacts.map((item) => contact_div(item)).join(' ');

  education.innerHTML = data.education
    .map((item) => education_div(item))
    .join(' ');
};

fetch('scripts/data.json')
  .then((response) => response.json())
  .then((json) => display_data(json));

// Hamburger toggle
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger-icon');
  var navbar = document.getElementById('navbar');
  if (hamburger && navbar) {
    hamburger.addEventListener('click', function () {
      // Toggle navbar visibility
      var isHidden =
        navbar.style.display === 'none' ||
        getComputedStyle(navbar).display === 'none';
      if (isHidden) {
        navbar.style.display = '';
        hamburger.classList.add('open');
      } else {
        navbar.style.display = 'none';
        hamburger.classList.remove('open');
      }
    });
    // On page load, ensure correct icon state
    if (
      navbar.style.display === 'none' ||
      getComputedStyle(navbar).display === 'none'
    ) {
      hamburger.classList.remove('open');
    } else {
      hamburger.classList.add('open');
    }
  }
});
