document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("subscribe-modal");
    const closeButton = document.querySelector(".modal__close_times");

    closeButton.addEventListener("click", function () {
        modal.classList.remove("modal_active");
        document.cookie = "modalClosed=true; path=/";
    });

    const isModalClosed = document.cookie.includes("modalClosed=true");

    if (!isModalClosed) {
        modal.classList.add("modal_active");
    }
});
