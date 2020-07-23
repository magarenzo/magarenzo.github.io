/**
 * Fetch repositories listed on a GitHub user's profile and display it via HTML
 * @param {String} id
 */

function repoDisplayer(id) {

    const div = document.getElementById(id);
    const profileName = "magarenzo";
    const errorString = "<p>Check out all of my projects <a href='https://github.com/" + profileName + "?tab=repositories' target='_blank'>here</a> on my GitHub profile</p>";
    const excludedProjects = [
        "Different-and-Unordered-Combinations",
        "Ultimate-and-Lacrosse-Study",
        "Grading-System",
        "Incident-System",
        "METAR-Bot",
        "Simple-RSA-Encryptions",
        "Stack-Palindrome",
        "GitHub-Webhooks-Test",
        "Minimalist-GroupMe-Bot",
        "Birds-Twitter-Bot",
        "Resume-Template",
        "Simple-Shift-Cipher",
        "magarenzo"
    ];

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
                    jsonObject[key].description) {

                    var name = JSON.stringify(jsonObject[key].name).split('"').join("");

                    if (!excludedProjects.includes(name)) {

                        var url = JSON.stringify(jsonObject[key].html_url).split('"').join("");
                        var description = JSON.stringify(jsonObject[key].description).split('"').join("");
                        var html = "<p><a href='" + url + "' target='_blank'>" + name + "</a><br>" + description;

                        if (jsonObject[key].language) {
                            html += ", <strong>" + JSON.stringify(jsonObject[key].language).split('"').join(""); + "</strong>";
                        }

                        div.innerHTML += html + "</p><hr>";

                    }

                }

            }

            div.innerHTML = div.innerHTML.slice(0, -4);

        }).catch(function() {
            div.innerHTML += errorString;
        });

    }

}