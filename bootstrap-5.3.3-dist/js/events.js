document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown-toggle").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let menu = this.nextElementSibling;

            if (menu.classList.contains("d-block")) {
                menu.classList.remove("d-block");
            } else {
                // Close any other open dropdowns
                document.querySelectorAll(".dropdown-menu.d-block").forEach(openMenu => {
                    openMenu.classList.remove("d-block");
                });

                menu.classList.add("d-block");
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu.d-block").forEach(menu => {
                menu.classList.remove("d-block");
            });
        }
    });
});