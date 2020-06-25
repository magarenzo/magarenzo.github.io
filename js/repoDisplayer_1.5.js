/**
 * Fetch repositories listed on a GitHub user's profile and display it via HTML
 * @param {String} id
 */

function repoDisplayer(id) {

    const div = document.getElementById(id);
    var profileName = "magarenzo";
    if (id == "projects-main") {
        var excludedProjects = [
            "Stack-Palindrome",
            "Simple-RSA-Encryptions",
            "Poker-Hand-Simulation",
            "METAR-Bot",
            "Incident-System",
            "Zipcode-Query",
            "Grading-System",
            "Simple-Shift-Cipher",
            "DroidTooth-File-Transfer",
            "Ultimate-and-Lacrosse-Study",
            "Different-and-Unordered-Combinations",
            "magarenzo.github.io-Blog",
            "magarenzo.github.io-Old"
        ];
        var errorString = "<p>Check out all of my projects <a href='https://github.com/" + profileName + "?tab=repositories' target='_blank'>here</a> on my GitHub profile</p>";
    } else if (id == "projects-sygwave") {
        profileName = "sygwave";
        var excludedProjects = [];
        var errorString = "<p>Check out all of our projects <a href='https://github.com/" + profileName + "?tab=repositories' target='_blank'>here</a> on our GitHub profile</p>";
    } else if (id == "projects-assignments") {
        var excludedProjects = [
            "magarenzo.github.io",
            "Stock-Market-Simulator",
            "Strava-Scraper",
            "NBA-Wingspan-Hypothetical",
            "Smarts-vs-Reflexes",
            "Birds-Twitter-Bot",
            "Minimalist-GroupMe-Bot",
            "Resume-Template",
            "GitHub-Webhooks-Test",
            "Drop-and-Dump-Table",
            "LinkedInExperienceDisplayerJS",
            "RepoDisplayerJS",
            "ChangePageJS",
            "magarenzo.github.io-Blog",
            "magarenzo.github.io-Old"
        ];
        errorString = "<p>Check out all of my assignments <a href='https://github.com/" + profileName + "?tab=repositories' target='_blank'>here</a> on my GitHub profile</p>";
    }

    if (div) {

        fetch("https://api.github.com/users/" + profileName + "/repos").then((response) => {

            if (response.status != 200) {
                div.innerHTML += errorString;
            }

            return response.json();

        }).then((jsonObject) => {

            for (var key in jsonObject) {

                if (jsonObject[key].name &&
                    jsonObject[key].html_url &&
                    jsonObject[key].description &&
                    jsonObject[key].language) {

                    var name = JSON.stringify(jsonObject[key].name).split('"').join("");

                    if (!excludedProjects.includes(name)) {

                        var url = JSON.stringify(jsonObject[key].html_url).split('"').join("");
                        var description = JSON.stringify(jsonObject[key].description).split('"').join("");
                        var language = JSON.stringify(jsonObject[key].language).split('"').join("");

                        div.innerHTML += "<p><a href='" + url + "' target='_blank'>" + name + "</a><br>" + description + ", <strong>" + language + "</strong></p><hr>";

                    }

                }

            }

            div.innerHTML = div.innerHTML.slice(0, -4);

        }).catch(function() {
            div.innerHTML += errorString;
        });

    }

}