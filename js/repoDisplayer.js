/**
 * Fetch repositories listed on a GitHub user's profile and display it via HTML
 * @param {String} id
 */
function repoDisplayer(id) {

    const profileName = "magarenzo";
    const includedProjects = ["AlphabetizeJS", "ChangePageJS", "Date-Reminder", "DroidTooth-File-Transfer", "Drop-and-Dump-Table", "magarenzo.github.io", "NBA-Wingspan-Hypothetical", "RepoDisplayerJS", "RPA-Challenge", "Workflow-Analyzer-Command-Line"];
    const errorString = "<p>Check out all of my projects <a href='https://github.com/" + profileName + "?tab=repositories' target='_blank'>here</a> on my GitHub profile</p>";

    const div = document.getElementById(id);

    if (div) {

        fetch("https://api.github.com/users/" + profileName + "/repos").then((response) => {

            if (response.status != 200) {
                div.innerHTML += errorString;
            }

            return response.json()

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
                        var html = "<p><a href='" + url + "' target='_blank'>" + name + "</a><br>" + description;

                        if (jsonObject[key].language) {
                            html += ", <strong>" + JSON.stringify(jsonObject[key].language).split('"').join(""); + "</strong>";
                        }

                        div.innerHTML += html + "</p>";

                    }

                }

            }

        }).catch(function() {

            div.innerHTML += errorString;

        });

    }

}