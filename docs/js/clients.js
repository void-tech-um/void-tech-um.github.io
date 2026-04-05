document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".project-card");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const modalId = card.getAttribute("data-modal");
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.classList.add("show");
                document.body.classList.add("modal-open");
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const modal = button.closest(".modal");
            if (modal) {
                modal.classList.remove("show");
                document.body.classList.remove("modal-open");
            }
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.classList.remove("show");
                document.body.classList.remove("modal-open");
            }
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modals.forEach((modal) => modal.classList.remove("show"));
            document.body.classList.remove("modal-open");
        }
    });
});