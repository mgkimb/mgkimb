
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