
const themeToggle = document.getElementById("themeToggle");

// DARK MODE
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        themeToggle.textContent = isDark
            ? "☀ Light Mode"
            : "☾ Dark Mode";
    });
}

// LIKE BUTTON
document.querySelectorAll(".like-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const liked = button.classList.toggle("liked");

        button.textContent = liked ? "♥ Liked" : "♡ Like";
        button.setAttribute("aria-pressed", String(liked));
    });
});

// GENRE FILTER
const genreButtons = document.querySelectorAll(".genre-btn");
const bookCards = document.querySelectorAll(".book-card");
const bookCount = document.getElementById("bookCount");

genreButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedGenre = button.dataset.genre;

        genreButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        let visibleBooks = 0;

        bookCards.forEach((card) => {
            const matches =
                selectedGenre === "All" ||
                card.dataset.genre === selectedGenre;

            card.hidden = !matches;

            if (matches) {
                visibleBooks++;
            }
        });

        if (bookCount) {
            bookCount.textContent = `${visibleBooks} Stories`;
        }
    });
});

document.querySelectorAll(".toggle-synopsis").forEach((button) => {
    button.addEventListener("click", () => {
        const synopsis = button
            .closest(".story-header")
            ?.querySelector(".synopsis");

        if (!synopsis) return;

        synopsis.hidden = !synopsis.hidden;

        button.textContent = synopsis.hidden
            ? "Show Synopsis"
            : "Hide Synopsis";
    });
});
