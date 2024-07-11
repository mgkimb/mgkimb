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
  