const timelineEvents = [
    {
        year: 1816,
        title: "Declaration of Independence",
        era: "independence",
        description:
            "On July 9, the Congress of Tucumán declared the independence of the United Provinces of the Río de la Plata from Spanish rule and from any other foreign domination."
    },
    {
        year: 1829,
        title: "Rise of Juan Manuel de Rosas",
        era: "organization",
        description:
            "Juan Manuel de Rosas became governor of Buenos Aires and became one of the most influential political figures during the period of conflict between federalists and unitarians."
    },
    {
        year: 1853,
        title: "Constitution of 1853",
        era: "organization",
        description:
            "The Constitution established a federal republican framework and became a central foundation of Argentina's political organization."
    },
    {
        year: 1862,
        title: "National consolidation",
        era: "organization",
        description:
            "Bartolomé Mitre became president, marking an important stage in the consolidation of a unified national government."
    },
    {
        year: 1880,
        title: "Buenos Aires becomes federal capital",
        era: "organization",
        description:
            "Buenos Aires was federalized and became the permanent capital of the Argentine Republic."
    },
    {
        year: 1912,
        title: "Sáenz Peña Law",
        era: "modern",
        description:
            "Electoral reform introduced secret and compulsory voting for Argentine men, helping expand political participation."
    },
    {
        year: 1916,
        title: "First Radical government",
        era: "modern",
        description:
            "Hipólito Yrigoyen became president after the first presidential election held under the Sáenz Peña electoral system."
    },
    {
        year: 1943,
        title: "Military coup",
        era: "modern",
        description:
            "A military coup removed President Ramón Castillo and opened a new period of political transformation."
    },
    {
        year: 1946,
        title: "Juan Domingo Perón elected",
        era: "modern",
        description:
            "Juan Domingo Perón was elected president. Peronism became one of the most important and enduring political movements in Argentina."
    },
    {
        year: 1955,
        title: "Overthrow of Perón",
        era: "modern",
        description:
            "A military uprising known as the Revolución Libertadora removed Perón from power and began another period of political instability."
    },
    {
        year: 1976,
        title: "Military dictatorship begins",
        era: "democracy",
        description:
            "A military coup removed President Isabel Perón and established the dictatorship known as the National Reorganization Process."
    },
    {
        year: 1982,
        title: "Malvinas/Falklands War",
        era: "democracy",
        description:
            "Argentina went to war with the United Kingdom over the Malvinas/Falkland Islands. The conflict ended with an Argentine defeat."
    },
    {
        year: 1983,
        title: "Return to democracy",
        era: "democracy",
        description:
            "Raúl Alfonsín took office on December 10 after democratic elections, beginning the longest continuous period of constitutional democracy in modern Argentine history."
    },
    {
        year: 1994,
        title: "Constitutional reform",
        era: "democracy",
        description:
            "A major constitutional reform reduced the presidential term from six to four years, allowed one immediate reelection and introduced important institutional changes."
    },
    {
        year: 2001,
        title: "Economic and political crisis",
        era: "democracy",
        description:
            "A severe economic and political crisis led to social unrest, the resignation of President Fernando de la Rúa and a rapid succession of presidents."
    },
    {
        year: 2003,
        title: "Néstor Kirchner becomes president",
        era: "democracy",
        description:
            "Néstor Kirchner took office and began a political period associated with economic recovery, human-rights policies and the Kirchnerist movement."
    },
    {
        year: 2015,
        title: "Mauricio Macri elected",
        era: "democracy",
        description:
            "Mauricio Macri became president, representing a major political change after twelve years of Kirchnerist governments."
    },
    {
        year: 2019,
        title: "Alberto Fernández elected",
        era: "democracy",
        description:
            "Alberto Fernández was elected president with Cristina Fernández de Kirchner as vice president."
    },
    {
        year: 2020,
        title: "COVID-19 pandemic",
        era: "democracy",
        description:
            "Argentina, like countries around the world, faced the COVID-19 pandemic, producing major public-health, economic and social consequences."
    },
    {
        year: 2023,
        title: "Javier Milei elected president",
        era: "democracy",
        description:
            "Javier Milei won the presidential election and began a new political period focused strongly on reducing government intervention and reforming the Argentine economy."
    },
    {
        year: 2026,
        title: "Argentina today",
        era: "democracy",
        description:
            "Argentina continues to face major debates about economic policy, inflation, public spending, institutions and the country's long-term development."
    }
];


/* ------------------------------
   Theme
-------------------------------- */

function loadTheme() {
    const savedTheme = localStorage.getItem("argentinaTheme");
    const themeButton = document.querySelector("#theme-toggle");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (themeButton) {
            themeButton.textContent = "Light mode";
        }
    }
}


function toggleTheme() {
    const themeButton = document.querySelector("#theme-toggle");

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "argentinaTheme",
        isDark ? "dark" : "light"
    );

    if (themeButton) {
        themeButton.textContent = isDark
            ? "Light mode"
            : "Dark mode";
    }
}


/* ------------------------------
   Mobile navigation
-------------------------------- */

function setupNavigation() {
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("#main-nav");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });
}


/* ------------------------------
   Timeline
-------------------------------- */

function renderTimeline(events) {
    const timelineContainer =
        document.querySelector("#timeline-container");

    const noResults =
        document.querySelector("#no-results");

    const status =
        document.querySelector("#timeline-status");

    if (!timelineContainer) {
        return;
    }

    timelineContainer.innerHTML = "";

    if (events.length === 0) {
        noResults.hidden = false;
        status.textContent = "0 events found.";
        return;
    }

    noResults.hidden = true;

    status.textContent =
        `${events.length} historical events displayed.`;

    events
        .sort((a, b) => a.year - b.year)
        .forEach((event) => {
            const article = document.createElement("article");

            article.className = "timeline-item";

            article.innerHTML = `
                <span class="timeline-year">${event.year}</span>
                <h2>${event.title}</h2>
                <p>${event.description}</p>
            `;

            timelineContainer.appendChild(article);
        });
}


function filterTimeline() {
    const searchInput =
        document.querySelector("#timeline-search");

    const activeButton =
        document.querySelector(".filter-button.active");

    if (!searchInput || !activeButton) {
        return;
    }

    const searchTerm =
        searchInput.value.trim().toLowerCase();

    const selectedEra =
        activeButton.dataset.era;

    const filteredEvents =
        timelineEvents.filter((event) => {
            const matchesSearch =
                event.title.toLowerCase().includes(searchTerm) ||
                event.description.toLowerCase().includes(searchTerm) ||
                String(event.year).includes(searchTerm);

            const matchesEra =
                selectedEra === "all" ||
                event.era === selectedEra;

            return matchesSearch && matchesEra;
        });

    renderTimeline(filteredEvents);
}


function setupTimeline() {
    const searchInput =
        document.querySelector("#timeline-search");

    const filterButtons =
        document.querySelectorAll(".filter-button");

    if (!searchInput) {
        return;
    }

    renderTimeline(timelineEvents);

    searchInput.addEventListener(
        "input",
        filterTimeline
    );

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((item) => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            filterTimeline();
        });
    });
}


/* ------------------------------
   Form + localStorage
-------------------------------- */

function saveSuggestion(suggestion) {
    const storedSuggestions =
        JSON.parse(
            localStorage.getItem("argentinaSuggestions") || "[]"
        );

    storedSuggestions.push(suggestion);

    localStorage.setItem(
        "argentinaSuggestions",
        JSON.stringify(storedSuggestions)
    );
}


function setupForm() {
    const form =
        document.querySelector("#history-form");

    const message =
        document.querySelector("#form-message");

    if (!form || !message) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData =
            new FormData(form);

        const suggestion = {
            name: formData.get("visitorName"),
            year: formData.get("eventYear"),
            title: formData.get("eventTitle"),
            description: formData.get("eventDescription")
        };

        if (
            suggestion.name &&
            suggestion.year &&
            suggestion.title &&
            suggestion.description
        ) {
            saveSuggestion(suggestion);

            message.textContent =
                `Thank you, ${suggestion.name}. Your suggestion "${suggestion.title}" from ${suggestion.year} has been saved on this device.`;

            form.reset();
        } else {
            message.textContent =
                "Please complete all required fields.";
        }
    });
}


/* ------------------------------
   Application start
-------------------------------- */

function init() {
    loadTheme();
    setupNavigation();
    setupTimeline();
    setupForm();

    const themeButton =
        document.querySelector("#theme-toggle");

    if (themeButton) {
        themeButton.addEventListener(
            "click",
            toggleTheme
        );
    }
}

document.addEventListener("DOMContentLoaded", init);