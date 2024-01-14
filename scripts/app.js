// Navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// To segregate projects - outer layer
/*
<div class="projsection text-center">
  <h4>Data Science based Projects</h4>
  <div class="projminisection">
    <!-- projects belonging to above category -->
  </div>
</div>
*/

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

// To segregate certificates - outer layer
/*
<div class="certisection text-center mt-4">
  <h4> Coursera Certificates</h4>
  <div class="certiminisection">
    <!-- certificates belonging to above category -->
  </div>
</div>
*/

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
