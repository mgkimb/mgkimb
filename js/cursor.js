const hero = document.querySelector('[data-hero]')

window.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e
  const x = Math.round((clientX / window.innerWidth) * 100)
  const y = Math.round((clientY / window.innerHeight) * 100)
  
  hero.style.setProperty('--x', `${x}%`)
  hero.style.setProperty('--y', `${y}%`)
})


$.js = function (el) {
  return $('[data-js=' + el + ']')
};

function carousel() {
$.js('timeline-carousel').slick({
  infinite: false,
  arrows: true,
   arrows: true,
  prevArrow: '<div class="slick-prev"> <div class="btn mr-3 btn-warning d-flex justify-content-center align-items-center"> <div>Previous</div><svg class="ml-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <path d="M10.1,19.1l1.5-1.5L7,13h14.1v-2H7l4.6-4.6l-1.5-1.5L3,12L10.1,19.1z"/> </svg></div></div>',
  nextArrow: '<div class="slick-next"> <div class="btn btn-warning d-flex justify-content-center align-items-center"> <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M 14 4.9296875 L 12.5 6.4296875 L 17.070312 11 L 3 11 L 3 13 L 17.070312 13 L 12.5 17.570312 L 14 19.070312 L 21.070312 12 L 14 4.9296875 z"/> </svg> <div>Next</div></div></div>',
  dots: true,
  autoplay: false,
  speed: 1100,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});
}

carousel(); 

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const work = this.closest(".work");
      const additionalInfo = work.querySelector(".additional-info");
      additionalInfo.classList.toggle("show");
      button.classList.toggle("active");
      button.classList.toggle("clicked");
    });
  });
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


$.js = function (el) {
  return $('[data-js=' + el + ']')
};


function downloadCV() {

  const link = document.createElement('a');
  link.href = 'images/files/BRELA-RESUME.pdf';
  link.download = 'BRELA-RESUME.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filters button");
  const webAppFilters = document.getElementById('web-app-filters');
  const desktopFilters = document.getElementById('desktop-filters');
  const lowCodeFilters = document.getElementById('low-code-filters');

  let currentMainCategory = '';

  filterButtons.forEach(button => {
      button.addEventListener("click", function () {
          const category = this.id.replace("filter-", "");

         
          filterButtons.forEach(btn => btn.classList.remove("active"));
          document.querySelectorAll("#web-app-filters button, #desktop-filters button, #low-code-filters button").forEach(btn => btn.classList.remove("active"));

          this.classList.add("active");


          const works = document.querySelectorAll(".work");
          works.forEach(work => {
              work.style.display = "none";

              if (category === "all") {
                  work.style.display = "block";
              } else if (work.classList.contains(category)) {
                  work.style.display = "block";
              }
          });

          if (category === "web-app") {
              webAppFilters.classList.remove('hidden');
              desktopFilters.classList.add('hidden');
              lowCodeFilters.classList.add('hidden');
              currentMainCategory = 'web-app';
          } else if (category === "desktop") {
              webAppFilters.classList.add('hidden');
              desktopFilters.classList.remove('hidden');
              lowCodeFilters.classList.add('hidden');
              currentMainCategory = 'desktop';
          } else if (category === "low-code") {
              webAppFilters.classList.add('hidden');
              desktopFilters.classList.add('hidden');
              lowCodeFilters.classList.remove('hidden');
              currentMainCategory = 'low-code';
          } else if (category === "ui-ux") {
              webAppFilters.classList.add('hidden');
              desktopFilters.classList.add('hidden');
              lowCodeFilters.classList.add('hidden');
              currentMainCategory = 'ui-ux';
          } else if (category === "all") {
              webAppFilters.classList.add('hidden');
              desktopFilters.classList.add('hidden');
              lowCodeFilters.classList.add('hidden');
              currentMainCategory = '';
          }

      
          if (currentMainCategory) {
              document.querySelectorAll(`#${currentMainCategory}-filters button`).forEach(btn => {
                  btn.addEventListener("click", function () {
                      document.getElementById(`filter-${currentMainCategory}`).classList.add("active");
                      this.classList.add("active");
                  });
              });
          }
      });
  });

  document.querySelectorAll("#web-app-filters button, #desktop-filters button, #low-code-filters button").forEach(btn => {
      btn.addEventListener("click", function () {
          const mainCategory = this.closest(".filters").querySelector("button.active").id.replace("filter-", "");
          document.getElementById(`filter-${mainCategory}`).classList.add("active");
          this.classList.add("active");
      });
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function() {
      const content = this.querySelector('.card-content');
      const isExpanded = this.classList.toggle('expanded');
      content.style.maxHeight = isExpanded ? content.scrollHeight + 'px' : '0';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".navbar__logo", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)"
  });

  gsap.from(".navbar__brand", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from(".navbar__links a", {
    duration: 1.5,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    ease: "bounce.out"
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".portfolio-banner__overlay--image", {
    duration: 1,
    y: 20,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".portfolio-banner__overlay--text");

  document.addEventListener("mousemove", (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { left, top, width, height } = textElement.getBoundingClientRect();
    
    const elementX = left + width / 2;
    const elementY = top + height / 2;

    const offsetX = (mouseX - elementX) / 10; 
    const offsetY = (mouseY - elementY) / 10; 

    gsap.to(textElement, {
      x: offsetX,
      y: offsetY,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});


gsap.utils.toArray(".skills article").forEach((article) => {
  article.addEventListener("mouseenter", () => {
    gsap.to(article, {
      x: 10,   
      y: -10,  
      duration: 0.5,
      ease: "power2.out"
    });
  });

  article.addEventListener("mouseleave", () => {
    gsap.to(article, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });
});
function animateHighlights(isHovering) {
  gsap.to('.personal-info__name--highlight', {
    y: isHovering ? -10 : 0,
    duration: 0.3,
    ease: "power1.inOut",
    stagger: {
      amount: 0.5,
      from: "start"
    }
  });
}

const nameElement = document.querySelector('.personal-info__name');

nameElement.addEventListener('mouseenter', () => {
  animateHighlights(true);
});

nameElement.addEventListener('mouseleave', () => {
  animateHighlights(false);
});
document.addEventListener("DOMContentLoaded", function() {
  const timelinePoints = document.querySelectorAll('.vtimeline-point');

  timelinePoints.forEach(point => {
    point.addEventListener('mouseenter', () => {
      gsap.to(point.querySelector('.vtimeline-content'), {
        scale: 1.1,  
        duration: 0.5,
        ease: "power2.out"
      });
    });

    point.addEventListener('mouseleave', () => {
      gsap.to(point.querySelector('.vtimeline-content'), {
        scale: 1,   
        duration: 0.5,
        ease: "power2.out"
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  fetch("works.json")
    .then(response => response.json())
    .then(data => {
      const worksContainer = document.getElementById("works-container");
      data.forEach(work => {
        const workItem = document.createElement("div");
        workItem.className = `work ${work.category}`;
        workItem.innerHTML = `
          <img src="${work.image}" alt="${work.modalTitle}">
          <a href="#" class="button learn-more" data-toggle="modal" data-target="#workModal" data-id="${work.id}">Learn More</a>
        `;
        worksContainer.appendChild(workItem);
      });

      document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function () {
          const workId = this.getAttribute('data-id');
          const selectedWork = data.find(work => work.id === workId);

          document.getElementById('workModalName').textContent = selectedWork.modalName;
          document.getElementById('workModalLabel').textContent = selectedWork.modalTitle;
          document.getElementById('workModalDate').textContent = selectedWork.modalDate;

          // Populate carousel
          const carouselInner = document.getElementById('carouselInner');
          carouselInner.innerHTML = '';
          if (selectedWork.media && selectedWork.media.length) {
            selectedWork.media.forEach((item, index) => {
              const isActive = index === 0 ? 'active' : '';
              let itemHtml = `
                <div class="carousel-item ${isActive}">
                  ${item.type === 'video' ? `<video controls><source src="${item.src}" type="video/mp4"></video>` : `<img src="${item.src}" class="d-block w-100" alt="${selectedWork.modalTitle}">`}
                </div>
              `;
              carouselInner.insertAdjacentHTML('beforeend', itemHtml);
            });
          } else {
            carouselInner.innerHTML = `
              <div class="carousel-item active">
                <img src="${selectedWork.image}" class="d-block w-100" alt="${selectedWork.modalTitle}">
              </div>
            `;
          }

          document.getElementById('modalOverview').textContent = selectedWork.overview;
          document.getElementById('modalFeatures').innerHTML = selectedWork.features.map(feature => `<li>${feature}</li>`).join('');
          document.getElementById('modalProcess').textContent = selectedWork.process;
          document.getElementById('modalResults').textContent = selectedWork.results;

          const dashElement = document.getElementById('modalDash');
          dashElement.style.display = selectedWork.modalName && selectedWork.modalTitle ? 'inline' : 'none';

          const techIcons = {
            "Git": "<i class='fab fa-git'></i> Git",
            "HTML5": "<i class='fab fa-html5'></i> HTML5",
            "CSS3": "<i class='fab fa-css3-alt'></i> CSS3",
            "JavaScript": "<i class='fab fa-js-square'></i> JavaScript",
            "Bootstrap": "<i class='fab fa-bootstrap'></i> Bootstrap",
            "CodeIgniter": "<i class='fab fa-php'></i> CodeIgniter",
            "PHP": "<i class='fab fa-php'></i> PHP",
            "Figma": "<i class='fab fa-figma'></i> Figma",
            "MySQL": "<i class='fas fa-database'></i> MySQL",
            "Heroku": "<i class='fas fa-cube'></i> Heroku",
            "Java": "<i class='fa fa-coffee'></i> Java",
            "000webhost": "<i class='fa fa-globe'></i> 000webhost",
            "Trello": "<i class='fab fa-trello'></i> Trello"
          };
          document.getElementById('modalTech').innerHTML = selectedWork.tech.split(', ').map(tech => `<div class="tech-button">${techIcons[tech] || tech}</div>`).join('');

          const liveSiteButton = document.getElementById('modalLiveSite');
          if (selectedWork.liveSite) {
            liveSiteButton.href = selectedWork.liveSite;
            liveSiteButton.style.display = 'inline-block';
          } else {
            liveSiteButton.style.display = 'none';
          }

          const figmaButton = document.getElementById('modalFigma');
          if (selectedWork.figma) {
            figmaButton.href = selectedWork.figma;
            figmaButton.style.display = 'inline-block';
          } else {
            figmaButton.style.display = 'none';
          }

          const behanceButton = document.getElementById('modalBehance');
          if (selectedWork.behance) {
            behanceButton.href = selectedWork.behance;
            behanceButton.style.display = 'inline-block';
          } else {
            behanceButton.style.display = 'none';
          }

          const article1Button = document.getElementById('modalArticle1');
          if (selectedWork.Article1) {
            article1Button.href = selectedWork.Article1;
            article1Button.style.display = 'inline-block';
          } else {
            article1Button.style.display = 'none';
          }

          const article2Button = document.getElementById('modalArticle2');
          if (selectedWork.Article2) {
            article2Button.href = selectedWork.Article2;
            article2Button.style.display = 'inline-block';
          } else {
            article2Button.style.display = 'none';
          }

          const article3Button = document.getElementById('modalArticle3');
          if (selectedWork.Article3) {
            article3Button.href = selectedWork.Article3;
            article3Button.style.display = 'inline-block';
          } else {
            article3Button.style.display = 'none';
          }

          const sourceCodeButton = document.getElementById('modalSourceCode');
          if (selectedWork.sourceCode) {
            sourceCodeButton.href = selectedWork.sourceCode;
            sourceCodeButton.style.display = 'inline-block';
          } else {
            sourceCodeButton.style.display = 'none';
          }
        });
      });
    })
    .catch(error => console.error('Error loading works:', error));
});

$(document).ready(function() {
  $('.learn-more').click(function(e) {
    e.preventDefault();
    var target = $(this).data('target');
    var workInfo = $(this).closest('.work').find('.additional-info');

    $('#popup-title').text(workInfo.find('h2').text());
    $('#popup-description').text(workInfo.find('p').first().text());
    $('#popup-tech').text(workInfo.find('.tech').text());
    $('#popup-img').attr('src', $(this).closest('.work').find('img').attr('src'));

    $('#popup').fadeIn();
  });

  $('.close-btn').click(function() {
    $('#popup').fadeOut();
  });

  $(window).click(function(event) {
    if ($(event.target).is('#popup')) {
      $('#popup').fadeOut();
    }
  });
});
