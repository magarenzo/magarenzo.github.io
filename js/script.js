/**
 * Set divs
 */
var divs = {
    "home": {
        "html": "<p>Hi, I'm Michael, a Technical Advisor at UiPath with 2+ years of experience creating solutions in product engineering</p><p>I develop, support, and consult on enterprise software in NYC, and am a Computer Science graduate of Adelphi University</p><p>Explore to get to know me!</p>"
    },
    "experience": {
        "html": "<p><strong>Technical Advisor</strong><br>UiPath<br>2019 to Present (Full-time)<br>New York, NY</p><hr><p><strong>Software Engineer</strong><br>Varick<br>2019 (Full-time)<br>New York, NY</p><hr><p><strong>Junior Software Engineer</strong><br>Overseas Military Sales Group<br>2018 to 2019 (Full-time)<br>Woodbury, NY</p><hr><p><strong>Web Assistant</strong><br>Adelphi University<br>September 2017 to April 2018 (Part-time)<br>Garden City, NY<br><a href='http://news.adelphi.edu/au_news/agarenzo/' target='_blank'>IT Student Worker of the Month: January 2018</a></p><hr><p><strong>System Technician Intern</strong><br>Electro Industries/GaugeTech<br>June to September 2017 (Internship)<br>Westbury, NY</p><hr><p><strong>Technology Sales Associate</strong><br>Staples<br>January to June 2017 (Part-time)<br>Oceanside, NY</p><hr><p><strong>Library Systems Assistant</strong><br>Adelphi University<br>February to December 2016 (Part-time)<br>Garden City, NY</p><hr><p><strong>Cybersecurity System Analyst Intern</strong><br>Con Edison<br>June to August 2016 (Internship)<br>Mott Haven, NY</p><hr><p><strong>Coding Mentor Intern</strong><br>kidOYO<br>February to April 2016 (Internship)<br>Garden City, NY</p>"
    },
    "projects": {
        "html": ""
    },
    "more": {
        "html": ""
    }
};

function main() {
    for (div in divs) {
        $("#" + div).html(divs[div].html);
    }
}