const divs = {
    "wrapper": {
        "html": "<div id='content'></div>"
    },
    "content": {
        "html": "<p>&nbsp;</p><p>&nbsp;</p><div id='home' class='section'></div><div id='experience' class='section'></div><div id='education' class='sub-section experience-sub-section'></div><div id='skills' class='sub-section experience-sub-section'></div><div id='aws' class='sub-section experience-sub-section'></div><div id='certs' class='sub-section experience-sub-section'></div><div id='projects' class='section'></div><div id='projects-fill' class='sub-section projects-sub-section'></div><div id='projects-fill-2' class='sub-section projects-sub-section'></div><div id='more' class='section'></div><div id='leadership' class='sub-section more-sub-section'></div><div id='ultimate' class='sub-section more-sub-section'></div><div id='copyright'></div><div id='footer'></div>"
    },
    "nav": {
        "html": "<a class='navbar-brand'><img alt='Professional headshot of Michael A. Agarenzo' src='/images/headshot-circle.png' width='50' height='50'></a><button id='button-toggle' class='navbar-toggler' type='button' data-toggle='collapse' data-target='#nav-div' aria-controls='nav-div' aria-expanded='true' aria-label='Toggle Nav'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='nav-div'><ul class='navbar-nav mr-auto'><li class='nav-item'><a id='link-home' class='nav-link uipath' onclick='changePage(event, \"home\");'><img alt='Home' src='/images/icon-house.png' width='25' height='25'> Home</a></li><li class='nav-item'><a id='link-experience' class='nav-link' onclick='changePage(event, \"experience\");'><img alt='Resume' src='/images/icon-document.png' width='25' height='25'> Experience</a></li><li class='nav-item'><a id='link-projects' class='nav-link' onclick='changePage(event, \"projects\");'><img alt='Laptop' src='/images/icon-computer.png' width='25' height='25'> Projects</a></li><li class='nav-item'><a id='link-more' class='nav-link' onclick='changePage(event, \"more\");'><img alt='Hammer' src='/images/icon-hammer.png' width='25' height='25'> More</a></li></ul></div>"
    },
    "home": {
        "html": "<h1>magarenzo.com</h1><hr><br><img class='image-left image-mobile' alt='Professional headshot of Michael A. Agarenzo' src='/images/headshot-square.jpg' align='left'><p>Hi &#128075; I'm <strong>Michael</strong>, a <span class='uipath'>Technical Advisor at UiPath</span> with <strong>2+ years of experience creating solutions in product engineering</strong></p><p><strong>I develop, support, and consult on enterprise software</strong> in NYC, and am a Computer Science graduate of Adelphi University</p><p>Explore to get to know me!</p>"
    },
    "copyright": {
        "html": "<p><em>&copy; 2017-2020 Michael A. Agarenzo.</em></p>"
    },
    "footer": {
        "html": "<br><p><a class='social' href='mailto:contact@magarenzo.com' target='_blank'><img alt='Email' src='/images/icon-mail.png' width='25' height='25'></a><a class='social' href='https://github.com/magarenzo' target='_blank'><img alt='GitHub' src='/images/icon-github.png' width='25' height='25'></a><a class='social' href='https://linkedin.com/in/magarenzo' target='_blank'><img alt='LinkedIn' src='/images/icon-linkedin.png' width='25' height='25'></a></p>"
    },
    "experience": {
        "html": "<h1>Experience</h1><p><em>Education, Skills, Certifications</em></p><hr><br><img class='image-right image-mobile' src='/images/logo-uipath.png' alt='Official Logo for UiPath' align='right'><p><strong>Technical Advisor</strong><br>UiPath<br>2019 to Present (Full-time)<br>New York, NY</p><p><strong>Software Engineer</strong><br>Varick<br>2019 (Full-time)<br>New York, NY</p><p><strong>Junior Software Engineer</strong><br>Overseas Military Sales Group<br>2018 to 2019 (Full-time)<br>Woodbury, NY</p><hr><p><strong>Web Assistant</strong><br>Adelphi University<br>September 2017 to April 2018 (Part-time)<br>Garden City, NY<br><a href='http://news.adelphi.edu/au_news/agarenzo/' target='_blank'>IT Student Worker of the Month: January 2018</a></p><p><strong>System Technician Intern</strong><br>Electro Industries<br>June to September 2017 (Internship)<br>Westbury, NY</p><p><strong>Technology Sales Associate</strong><br>Staples<br>January to June 2017 (Part-time)<br>Oceanside, NY</p><p><strong>Library Systems Assistant</strong><br>Adelphi University<br>February to December 2016 (Part-time)<br>Garden City, NY</p><p><strong>Cybersecurity System Analyst Intern</strong><br>Con Edison<br>June to August 2016 (Internship)<br>Mott Haven, NY</p><p><strong>Coding Mentor Intern</strong><br>kidOYO<br>February to April 2016 (Internship)<br>Garden City, NY</p><br>"
    },
    "education": {
        "html": "<h2>Education</h2><hr><br><img class='image-right image-mobile' src='/images/logo-adelphi.png' alt='Official Logo for Adelphi University' align='right'><p><strong>College</strong><br>Adelphi University</p><p><strong>Degree</strong><br>B.S. in Computer Science</p><p><strong>Concentration</strong><br>Information Security</p><p><strong>Graduation Date</strong><br>May 2018</p><p><a href='https://github.com/magarenzo/DroidTooth-File-Transfer' target='_blank'>Recognition at Annual Research Conference</a></p><br>"
    },
    "skills": {
        "html": "<h2>Skills</h2><br><table class='table table-striped table-dark table-bordered table-hover'><tbody><tr><td><strong>DevOps</strong></td><td>Agile, CI/CD, Confluence, Git, GitHub, Jira, Kanban, Kubernetes, Maven, Scrum, SDLC</td></tr><tr><td><strong>Hosting, Infrastructure</strong></td><td>Amazon Web Services, Apache, Docker, Elasticsearch, Hyper-V, Linux, macOS, Microsoft Azure, MySQL, NGINX, Redis, Unix, VMware, Windows, WildFly</td></tr><tr><td><strong>Programming, Web Development</strong></td><td>Bash, Batch, Bootstrap, CSS, Flask, HTML, Hugo, Java, JavaScript, Jekyll, jQuery, Node.js, PHP, PowerShell, Python, R, SQL, VB.NET, WordPress</td></tr><tr><td><strong>Robotic Process Automation</strong></td><td>Computer Vision, Document Understanding, OCR, UiPath: AI Fabric, Automation Hub, Insights, Orchestrator, Process Mining, Process Understanding, Robots, Studio, StudioX, Studio Pro, Task Capture, Task Mining, Test Suite</td></tr><tr><td><strong>Soft Skills</strong></td><td>Communication, Customer Service, Leadership, Process Implementation, Teamwork, Technical Consultation, Time Management</td></tr></tbody></table><br>"
    },
    "aws": {
        "html": "<h4>Amazon Web Services</h4><br><table class='table table-striped table-dark table-bordered table-hover'><tbody><tr><td><strong>API Gateway</strong></td><td>Creating and publishing REST APIs. Listening for POST requests, invoking Lambda functions, and sending back a response. Locking down endpoints using HTTP authentication based on the Basic schema</td></tr><tr><td><strong>Athena</strong></td><td>Creating databases. Creating tables using S3 buckets as a source. Querying tables</td></tr><tr><td><strong>Billing and Cost Management</strong></td><td>Navigating the cost explorer. Setting up cost and usage reports. Creating cost allocation tags</td></tr><tr><td><strong>CloudWatch</strong></td><td>Creating alarms. Creating rules with Lambda targets on trigger. Streaming logs to log groups. Monitoring metrics</td></tr><tr><td><strong>ECR</strong></td><td>Pushing and pulling repositories. Including repositories in automatic builds using Docker-Compose</td></tr><tr><td><strong>IAM</strong></td><td>Creating users and policies in conjuncture with groups. Creating and applying roles</td></tr><tr><td><strong>KMS</strong></td><td>Creating keys and encrypting and decrypting environment variables in Lambda functions</td></tr><tr><td><strong>Lambda</strong></td><td>Creating Node.js and Python functions. Combining them in workflows with other services</td></tr><tr><td><strong>RDS</strong></td><td>Working with clusters, instances, and snapshots</td></tr><tr><td><strong>Route 53</strong></td><td>Working with hosted zones and different types of record sets</td></tr><tr><td><strong>S3</strong></td><td>Creating buckets and limiting permissions and other settings</td></tr><tr><td><strong>Familiarity</strong></td><td>Athena, Budgets, CloudFormation, CloudBuild, CodePipeline, ElastiCache, RedShift, SNS, Systems Manager</td></tr></tbody></table><br>"
    },
    "certs": {
        "html": "<h3>Certifications</h3><hr><br><h5>Artificial Intelligence, Machine Learning</h5><ul><li><a href='/pdfs/certifications/AI-Demystified.pdf' target='_blank'>AI Demystified</a></li><li><a href='/pdfs/certifications/AI-Fabric-Overview.pdf' target='_blank'>AI Fabric</a></li><li><a href='/pdfs/certifications/Document-Understanding-Overview.pdf' target='_blank'>Document Understanding</a></li></ul><br><h5>Robotic Process Automation</h5><ul><li><a href='/pdfs/certifications/RPA-Developer-Advanced-Training.pdf' target='_blank'>Advanced RPA Developer</a></li><li><a href='/pdfs/certifications/IT-Automation.pdf' target='_blank'>IT Automation</a></li><li><a href='/pdfs/certifications/Advanced-Training.pdf' target='_blank'>Robotic Enterprise Framework</a></li><li><a href='/pdfs/certifications/RPA-Business-Analysis-Fundamentals.pdf' target='_blank'>RPA Business Analysis</a></li><li><a href='/pdfs/certifications/RPA-in-Finance-and-Accounting.pdf' target='_blank'>RPA in Finance and Accounting</a></li><li><a href='/pdfs/certifications/Solution-Architect-Training.pdf' target='_blank'>RPA Solution Architect</a></li><li><a href='/pdfs/certifications/RPA-Starter-Training.pdf' target='_blank'>RPA Starter</a></li><li><a href='/pdfs/certifications/RPA-Testing.pdf' target='_blank'>RPA Testing</a></li><li><a href='/pdfs/certifications/SAP-Automation-Training.pdf' target='_blank'>SAP Automation (2019)</a></li><li><a href='/pdfs/certifications/SAP-Automation-2020.pdf' target='_blank'>SAP Automation (2020)</a></li></ul><br><h5>UiPath</h5><ul><li><a href='/pdfs/certifications/Automation-Hub-Deep-Dive.pdf' target='_blank'>Automation Hub</a></li><li><a href='/pdfs/certifications/Cloud-Platform.pdf' target='_blank'>Cloud Platform</a></li><li><a href='/pdfs/certifications/Foundation-Training.pdf' target='_blank'>Foundation</a></li><li><a href='/pdfs/certifications/Infrastructure-Training.pdf' target='_blank'>Infrastructure</a></li><li><a href='/pdfs/certifications/Insights-Training.pdf' target='_blank'>Insights</a></li><li><a href='/pdfs/certifications/Licensing-Training.pdf' target='_blank'>Licensing</a></li><li><a href='/pdfs/certifications/Orchestrator-Training.pdf' target='_blank'>Orchestrator</a></li><li><a href='/pdfs/certifications/Process-Mining.pdf' target='_blank'>Process Mining</a></li><li><a href='/pdfs/certifications/Security-Training.pdf' target='_blank'>Security</a></li><li><a href='/pdfs/certifications/Test-Suite.pdf' target='_blank'>Test Suite</a></li></ul>"
    },
    "projects": {
        "html": "<h1>Projects</h1><hr><br>"
    },
    "more": {
        "html": "<h1>Volunteering</h1><p><em>Leadership, Ultimate Frisbee</em></p><hr><br><img class='image-right image-mobile' src='/images/logo-liu.png' alt='Official Logo for Long Island Ultimate' align='right'><p><strong>Board Member</strong><br>Long Island Ultimate<br>December 2019 to Present<br></p><ul><li><p>Manage website, create and edit pages and posts, set up events and registration settings</p></li><li><p>Report bugs and submit feature requests for Ultimate Central, the event and member management platform for ultimate organizations that the site is deployed with</p></li><li><p>Partake in monthly board meetings and daily communication</p></li><li><p>Provide insight regarding the organization's plans and actions</p></li><li><p>Record meeting minutes and share via community update posts</p></li><li><p>Partake in yearly planning meeting to scope out the following year and discuss major topics</p></li></ul><img class='image-right image-mobile' src='/images/logo-discny.jpg' alt='Official Logo for DiscNY' align='right'><p><strong>Webmaster</strong><br>DiscNY<br>October 2016 to Present<br><a href='https://discny.org/p/volunteer-spotlight-mike-agarenzo' target='_blank'>Volunteer Spotlight</a></p><ul><li><p>Maintain website content</p></li><li><p>Partake in daily email communication</p></li><li><p>Deployed subdomain for youth ultimate and migrated relevant content over from main site</p></li></ul><p><strong>Participant in Making Strides of Long Island</strong><br>American Cancer Society<br>September 2020, October 2019<br>Jones Beach</p><ul><li><p>Participated in Long Island's Making Strides event</p></li></ul><p><strong>Participant in and Fundraiser for Relay For Life</strong><br>American Cancer Society<br>April 2015 to May 2018<br>Adelphi University</p><ul><li><p>Participated yearly in and raised money for Adelphi University's Relay For Life event</p></li><li><p>Fundraised throughout each year by getting individuals to sign up for the event and donate to the organization</p></li></ul><p><strong>Organizer for Adelphi Ultimate Food Drive</strong><br>St. Thomas the Apostle<br>April 2017<br>Adelphi University</p><ul><li><p>Collected non-perishable food items from all participating teams in Adelphi Ultimate's yearly home tournament</p></li><li><p>All proceeds were donated to St. Thomas the Apostle, a local church in West Hempstead, NY</p></li></ul><br>"
    },
    "leadership": {
        "html": "<h2>Leadership</h2><hr><br><p><strong>Captain, Secretary</strong><br>Ultimate Frisbee Team<br>May 2015 to May 2017<br>Adelphi University</p><ul><li><p>Created, planned, explained and led what was done at practices and competitions</p></li><li><p>Kept records such as attendance at events and minutes at meetings, disseminating information to members thereafter</p></li><li><p>Managed all registration and insurance forms of members, ensuring timely distribution, collection and submission</p></li><li><p>Managed and promoted frequent and timely communication among members</p></li></ul><p><strong>Treasurer and Secretary</strong><br>Cybersecurity Club<br>May 2016 to March 2017<br>Adelphi University</p><ul><li><p>Researched cybersecurity topics of interest to be presented, discussed and performed at weekly meetings</p></li><li><p>Managed and requested funds</p></li></ul><p><strong>Recording Secretary</strong><br>Math and Computer Science Club<br>February to December 2016<br>Adelphi University</p><p>Recorded and organized minutes and any other information regarding meetings, club membership, events, etc., filing them both physically and electronically for recall and public viewing</p><br>"
    },
    "ultimate": {
        "html": "<h2>Ultimate</h2><hr><br><p>DiscNY is a 501(c)(3) nonprofit organization and USAU (USA Ultimate) affiliate based in NYC that I am an active member of and volunteer for, including work I do as their webmaster. Our focus is on long-term growth and sustainability for the sport of ultimate in the state of New York</p><p>Long Island Ultimate is a 501(c)(3) nonprofit organization and DiscNY affiliate I am an active member, volunteer, and board member of. We aim to expand ultimate on Long Island through organized play, youth development, and a more competitive ultimate scene</p><h3>Teams</h3><br><p><img src='/images/team-shade.jpg' alt='Shade Team Photo' width='100%'></p><p><strong>Shade</strong><br>Men's Club Team<br>Summer 2019<br>NYC</p><br><p><img src='/images/team-blueprint.jpg' alt='Blueprint Team Photo' width='100%'></p><p><strong>Blueprint</strong><br>Men's Club Team<br>Summer 2018<br>Brooklyn</p><br><p><img src='/images/team-birdz.png' alt='Birdz Team Photo' width='100%'></p><p><strong>Birdz</strong><br>Mixed Club Team<br>Summer 2017<br>Long Island</p><br><p><img src='/images/team-adelphi.jpg' alt='Adelphi Ultimate Team Photo' width='100%'></p><p><strong>Adelphi Ultimate</strong><br>Mixed College Team<br>2014 to 2018<br>Adelphi University</p>"
    }
};

function main() {
    for (var div in divs) {
        $("#" + div).html(divs[div].html);
    }
    firebase.initializeApp({
        apiKey: "AIzaSyBS_h8sKsOllQfY7ziQkzMUNsh2dz0akOw",
        authDomain: "magarenzo-com.firebaseapp.com",
        databaseURL: "https://magarenzo-com.firebaseio.com",
        projectId: "magarenzo-com",
        storageBucket: "magarenzo-com.appspot.com",
        messagingSenderId: "473158920186",
        appId: "1:473158920186:web:cd929bda1eee1a893ba643",
        measurementId: "G-4W9PTW5H04"
    });
    firebase.analytics();
}

function error() {
    $("#nav").html("<a class='navbar-brand'><img alt='Professional headshot of Michael A. Agarenzo' src='/images/headshot-circle.png' width='50' height='50'></a><button id='button-toggle' class='navbar-toggler' type='button' data-toggle='collapse' data-target='#nav-div' aria-controls='nav-div' aria-expanded='true' aria-label='Toggle Nav'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='nav-div'><ul class='navbar-nav mr-auto'><li class='nav-item'><a id='link-home' class='nav-link uipath' href='https://magarenzo.com'><img alt='Home' src='/images/icon-house.png' width='25' height='25'> Home</a></li></ul></div>");
    $("#wrapper").html(divs["wrapper"].html);
    $("#content").html("<p>&nbsp;</p><p>&nbsp;</p><div id='error'></div><div id='copyright'></div><div id='footer'></div>");
    $("#error").html("<h1>Error 404 - Page Not Found</h1><hr><br><img class='image-left image-mobile' alt='Professional headshot of Michael A. Agarenzo' src='/images/headshot-square.jpg' align='left'><p>Did you expect something to be here? <a href='mailto:contact@magarenzo.com' target='_blank'>Email me</a> to let me know!</p>");
    $("#copyright").html(divs["copyright"].html);
    $("#footer").html(divs["footer"].html);
}

function changePage(event, page) {
    var sections = document.getElementsByClassName("section");
    for (var section = 0; section < sections.length; section++) {
        sections[section].style.display = "none";
    }
    var subSections = document.getElementsByClassName("sub-section");
    for (var subSection = 0; subSection < subSections.length; subSection++) {
        subSections[subSection].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
    var pageSubSections = document.getElementsByClassName(page + "-sub-section");
    for (var pageSubSection = 0; pageSubSection < pageSubSections.length; pageSubSection++) {
        pageSubSections[pageSubSection].style.display = "block";
    }
    navLinks = document.getElementsByClassName("nav-link");
    for (var navLink in navLinks) {
        for (var navLinkClass in navLinks[navLink].classList) {
            if (navLinks[navLink].classList[navLinkClass] == "uipath") {
                navLinks[navLink].classList.remove("uipath");
            }
        }
    }
    document.getElementById("link-" + page).classList.add("uipath");
    if (page == "home") {
        document.title = "magarenzo.com"
    } else {
        document.title = page.charAt(0).toUpperCase() + page.slice(1) + " | magarenzo.com";
    }
    window.scrollTo(0, 0);
    if (screen.width <= 960) {
        document.getElementById("button-toggle").click();
    }
}

function repoDisplayer(id) {
    const profileName = "magarenzo";
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
        "magarenzo",
        "Poker-Hand-Simulation",
        "Zipcode-Query"
    ];
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
                    jsonObject[key].description) {
                    var name = JSON.stringify(jsonObject[key].name).split('"').join("");
                    var language = JSON.stringify(jsonObject[key].language).split('"').join("");
                    if (!excludedProjects.includes(name)) {
                        var url = JSON.stringify(jsonObject[key].html_url).split('"').join("");
                        var description = JSON.stringify(jsonObject[key].description).split('"').join("");
                        var html = "<p><a href='" + url + "' target='_blank'>" + name + "</a><br>";
                        if (jsonObject[key].language) {
                            html += " " + "<img alt='Icon for " + language + "' src='/images/icon-" + language + ".png' width='25' height'25'> " + description;
                        } else {
                            html += " " + "<img alt='Icon for VB' src='/images/icon-VB.png' width='25' height='25'> " + description;
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

function repoDisplayerTwo(id) {
    const profileName = "SygWave";
    const excludedProjects = [];
    const errorString = "<p>Check out all of our projects <a href='https://github.com/" + profileName + "?tab=repositories' target='_blank'>here</a> on our GitHub team's profile</p>";
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
                    jsonObject[key].description) {
                    var name = JSON.stringify(jsonObject[key].name).split('"').join("");
                    var language = JSON.stringify(jsonObject[key].language).split('"').join("");
                    if (!excludedProjects.includes(name)) {
                        var url = JSON.stringify(jsonObject[key].html_url).split('"').join("");
                        var description = JSON.stringify(jsonObject[key].description).split('"').join("");
                        var html = "<p><a href='" + url + "' target='_blank'>" + name + "</a><br>";
                        if (jsonObject[key].language) {
                            html += " " + "<img alt='Icon for " + language + "' src='/images/icon-" + language + ".png' width='25' height'25'> " + description;
                        } else {
                            html += " " + "<img alt='Icon for VB' src='/images/icon-VB.png' width='25' height='25'> " + description;
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