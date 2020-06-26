/**
 * Fetch repositories listed on a GitHub user's profile and display it via HTML
 * @param {String} id
 */

function repoDisplayer(id) {

    const div = document.getElementById(id);
    const profileName = "magarenzo";
    if (id == "projects-main") {
        var includedProjects = [
            "Birds-Twitter-Bot",
            "ChangePageJS",
            "Drop-and-Dump-Table",
            "LinkedInExperienceDisplayerJS",
            "magarenzo.github.io",
            "Minimalist-GroupMe-Bot",
            "NBA-Wingspan-Hypothetical",
            "RepoDisplayerJS",
            "Resume-Template",
            "Smarts-vs-Reflexes",
            "Stock-Market-Simulator",
            "Strava-Scraper"
        ];
        var errorString = "<p>Check out all of my projects <a href='https://github.com/" + profileName + "?tab=repositories' target='_blank'>here</a> on my GitHub profile</p>";
    } else if (id == "projects-assignments") {
        var includedProjects = [
            "Different-and-Unordered-Combinations",
            "DroidTooth-File-Transfer",
            "Grading-System",
            "Incident-System",
            "METAR-Bot",
            "Poker-Hand-Simulation",
            "Simple-RSA-Encryptions",
            "Simple-Shift-Cipher",
            "Stack-Palindrome",
            "Ultimate-and-Lacrosse-Study",
            "Zipcode-Query"
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

                    if (includedProjects.includes(name)) {

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