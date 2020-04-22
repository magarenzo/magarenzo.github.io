/**
 * Fetch repositories listed on a GitHub user's profile and display it via HTML
 * @param {String} id
 */

function gitHubRepoDisplayer(id) {

    const profileName = "magarenzo";
    const skippedProjects = ["magarenzo.github.io-Blog", "magarenzo.github.io-Old"];
    const div = document.getElementById(id);

    if (div) {

        fetch("https://api.github.com/users/" + profileName + "/repos").then((response) => {

            return response.json()

        }).then((jsonObject) => {

            for (var key in jsonObject) {

                if (jsonObject[key].name &&
                    jsonObject[key].html_url &&
                    jsonObject[key].description &&
                    jsonObject[key].language) {

                    var name = JSON.stringify(jsonObject[key].name).split('"').join("");

                    if (!skippedProjects.includes(name)) {

                        var url = JSON.stringify(jsonObject[key].html_url).split('"').join("");
                        var description = JSON.stringify(jsonObject[key].description).split('"').join("");
                        var language = JSON.stringify(jsonObject[key].language).split('"').join("");

                        div.innerHTML += "<p><a href='" + url + "' target='_blank'>" + name + "</a><br><em>" + description + "</em>. <strong>" + language + "</strong>.</p>";

                    }

                }

            }

        });

    }

}