// Navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

const pages = ['projects', 'certificates', 'contacts', 'education'];

pages.forEach((page) => {
  document.getElementById(page + '-btn').addEventListener('click', () => {
    showPage(page);
  });
});

function showPage(pageToBeLoaded) {
  document.getElementById(pageToBeLoaded).style.display = 'show';
  document.getElementById(pageToBeLoaded + '-btn').style.display = 'none';
  pages
    .filter((page) => page != pageToBeLoaded)
    .forEach((page) => {
      document.getElementById(page).style.display = 'none';
      document.getElementById(page + '-btn').style.display = 'block';
    });
}

// Fetch Data
import allData from './data';

console.log('allData: ', allData);

// Combine HTML with Data
const display_data = (data) => {
  // contentDiv.innerHTML
  for (let page of pages) {
    addContentDiv(data[page]);
  }
};

// Create generic layout for different pages:
// projects, certificates, education, contact and work experience
let contentDiv = document.getElementById('context');
let addContentDiv = (details) => console.log(details);
// `<div class="">${JSON.stringify(details)}</div>`;

// ===================================================================

// // projects
// let projects = document.getElementsByClassName('projminisection')[0];
// let proj_div = ({ href, target, src, name }) =>
//   `<div class="proj text-center">
//     <a  href="${href}" target="${target}">
//       <img class="img-tile" src="${src}" alt="${name}">
//       <br><br>
//       <span class="projname"> ${name} </span>
//     </a>
//   </div>`;

// // To segregate certificates - outer layer
// /*
// <div class="certisection text-center mt-4">
//   <h4> Coursera Certificates</h4>
//   <div class="certiminisection">
//     <!-- certificates belonging to above category -->
//   </div>
// </div>
// */

// // certificates
// let certificates = document.getElementsByClassName('certiminisection')[0];
// let cert_div = ({ href, target, src, name, institute }) =>
//   `<div class="text-center certbor">
//     <a  href="${href}" target="${target}">
//       <img class="img-tile" src="${src}" alt="${name}">
//       <br>
//       <span class="certname"> ${name} ${
//     institute ? ' : ' + institute : ''
//   } </span>
//       <br>
//     </a>
//   </div>`;

// // contacts
// let contacts = document.getElementById('con');
// let contact_div = ({ href, target, color, icon }) =>
//   `<div class="conta">
//     <a class="madhe" href="${href}" target="${target}">
//       <i style="color: ${color}" class="${icon}"></i>
//     </a>
//   </div>`;

// // education
// let education = document.getElementById('institutions');
// let education_div = ({ href, name, shortname, src, year, degree }) =>
//   `<div class="text-center proj">
//     <a  href="${href}" target="_blank">
//       <img class="img-tile" src="${src}" alt="${name}">
//       <br>
//       <div class="projname"> ${name} ${shortname} </div>
//       <span class="projname"> ${degree} ${year} </span>
//       <br>
//     </a>
//   </div>`;
