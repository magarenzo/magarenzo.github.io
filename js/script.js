const blank = "_blank";
const divs = {
    "wrapper": {
        "html": "<div id='content'></div>"
    },
    "content": {
        "html": "<div id='home' class='section'></div><div id='experience' class='section'></div><div id='education' class='sub-section experience-sub-section'></div><div id='skills' class='sub-section experience-sub-section'></div><div id='aws' class='sub-section experience-sub-section'></div><div id='certs' class='sub-section experience-sub-section'></div><div id='projects' class='section'></div><div id='projects-fill' class='sub-section projects-sub-section'></div><div id='projects-fill-2' class='sub-section projects-sub-section'></div><div id='more' class='section'></div><div id='leadership' class='sub-section more-sub-section'></div></div><div id='footer'></div>"
    },
    "nav": {
        "html": "<a class='navbar-brand'><img alt='Professional headshot of Michael A. Agarenzo' src='/images/headshot-circle.png' width='50' height='50'></a><button id='button-toggle' class='navbar-toggler' type='button' data-toggle='collapse' data-target='#nav-div' aria-controls='nav-div' aria-expanded='true' aria-label='Toggle Nav'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='nav-div'><ul class='navbar-nav mr-auto'><li class='nav-item'><a id='link-home' class='nav-link uipath' onclick='changePage(event, \"home\");'><img alt='Home' src='/images/icon-house.png' width='25' height='25'> Home</a></li><li class='nav-item'><a id='link-experience' class='nav-link' onclick='changePage(event, \"experience\");'><img alt='Resume' src='/images/icon-document.png' width='25' height='25'> Experience</a></li><li class='nav-item'><a id='link-projects' class='nav-link' onclick='changePage(event, \"projects\");'><img alt='Laptop' src='/images/icon-computer.png' width='25' height='25'> Projects</a></li><li class='nav-item'><a id='link-more' class='nav-link' onclick='changePage(event, \"more\");'><img alt='Hammer' src='/images/icon-hammer.png' width='25' height='25'> More</a></li></ul></div>"
    },
    "home": {
        "html": "<h1>magarenzo.com</h1><hr><img class='image-left image-mobile' alt='Professional headshot of Michael A. Agarenzo' src='/images/headshot-square.jpg' align='left'><p>Hi &#128075; I'm <strong>Michael</strong>, a <span class='uipath'>Technical Advisor at UiPath</span> with almost <strong>3 years of experience creating software solutions for enterprise customers.</p><p>I am experienced in product development, support, and consulting</strong> out of NYC and hold a B.S. in Computer Science from Adelphi University.</p><p>&copy; 2017-2021 Michael A. Agarenzo.</p>"
    },
    "footer": {
        "html": "<br><p><a class='social' href='mailto:contact@magarenzo.com' target='_blank'><img alt='Email' src='/images/icon-mail.png' width='25' height='25'></a><a class='social' href='https://github.com/magarenzo' target='_blank'><img alt='GitHub' src='/images/icon-github.png' width='25' height='25'></a><a class='social' href='https://linkedin.com/in/magarenzo' target='_blank'><img alt='LinkedIn' src='/images/icon-linkedin.png' width='25' height='25'></a></p>"
    },
    "experience": {
        "html": "<h1>Experience</h1><hr><img class='image-right image-mobile' src='/images/logo-uipath.png' alt='Official Logo for UiPath' align='right'><p>I'm a <strong>Technical Advisor</strong> at UiPath, a privately held global software company valued at over $10 billion that provides a complete RPA (Robotic Process Automation) platform to help organizations efficiently automate business processes <em>(2019 to Present in New York, NY).</em></p><p>Previously I was a <strong>Software Engineer</strong> at Varick <em>(2019 in New York, NY)</em> and prior to that I was a <strong>Junior Software Engineer</strong> at Overseas Military Sales Group <em>(2018 to 2019 in Woodbury, NY).</em></p><p><em>Click <a id='part-time-a' onclick='showDiv(\"part-time-div\");'>here</a> for my professional experience before becoming full-time or scroll down for my education, skills, and certifications.</em></p><div id='part-time-div'><p><strong>Web Assistant</strong><br>Adelphi University<br>September 2017 to April 2018 (Part-time)<br>Garden City, NY<br><a href='http://news.adelphi.edu/au_news/agarenzo/' target='_blank'>IT Student Worker of the Month: January 2018</a></p><p><strong>System Technician Intern</strong><br>Electro Industries<br>June to September 2017 (Internship)<br>Westbury, NY</p><p><strong>Technology Sales Associate</strong><br>Staples<br>January to June 2017 (Part-time)<br>Oceanside, NY</p><p><strong>Library Systems Assistant</strong><br>Adelphi University<br>February to December 2016 (Part-time)<br>Garden City, NY</p><p><strong>Cybersecurity System Analyst Intern</strong><br>Con Edison<br>June to August 2016 (Internship)<br>Mott Haven, NY</p><p><strong>Coding Mentor Intern</strong><br>kidOYO<br>February to April 2016 (Internship)<br>Garden City, NY</p></div>"
    },
    "education": {
        "html": "<h2>Education</h2><hr><img class='image-right image-mobile' src='/images/logo-adelphi.png' alt='Official Logo for Adelphi University' align='right'><ul><li><strong>B.S. in Computer Science</strong></li><li>Concentration in Information Security</li><li>2014 to 2018 from Adelphi University</li><li><a href='https://www.linkedin.com/feed/update/urn:li:activity:6394732388563320832/' target='_blank'>Recognition at Annual Research Conference</li></ul>"
    },
    "skills": {
        "html": "<h2>Skills</h2><table class='table table-striped table-dark table-bordered table-hover'><tbody><tr><td><strong>DevOps</strong></td><td>Agile, CI/CD, Confluence, Git, GitHub, Jira, Kanban, Kubernetes, Maven, Scrum, SDLC, Trello</td></tr><tr><td><strong>Hosting, Infrastructure</strong></td><td>Amazon Web Services, Apache, Docker, Elasticsearch, Hyper-V, Linux, macOS, Microsoft Azure, MySQL, NGINX, Redis, Unix, VMware, Windows, WildFly</td></tr><tr><td><strong>Programming, Web Development</strong></td><td>Bash, Batch, Bootstrap, CSS, Flask, HTML, Hugo, Java, JavaScript, Jekyll, jQuery, Node.js, PHP, PowerShell, Python, R, SQL, VB.NET, WordPress</td></tr><tr><td><strong>Robotic Process Automation</strong></td><td>Computer Vision, Document Understanding, OCR, UiPath: Action Center, AI Fabric, Automation Hub, Data Service, Insights, Orchestrator, Process Mining, Process Understanding, Robots, Studio, StudioX, Studio Pro, Task Capture, Task Mining, Test Suite</td></tr><tr><td><strong>Soft Skills</strong></td><td>Communication, Customer Service, (Cross-Functional Team) Leadership, Nonprofits, Process Implementation, Teamwork, Technical Consultation, Time Management</td></tr></tbody></table>"
    },
    "aws": {
        "html": "<h3>Amazon Web Services</h3><table class='table table-striped table-dark table-bordered table-hover'><tbody><tr><td><strong>API Gateway</strong></td><td>Creating and publishing REST APIs. Listening for POST requests, invoking Lambda functions, and sending back a response. Locking down endpoints using HTTP authentication based on the Basic schema</td></tr><tr><td><strong>Athena</strong></td><td>Creating databases. Creating tables using S3 buckets as a source. Querying tables</td></tr><tr><td><strong>Billing and Cost Management</strong></td><td>Navigating the cost explorer. Setting up cost and usage reports. Creating cost allocation tags</td></tr><tr><td><strong>CloudWatch</strong></td><td>Creating alarms. Creating rules with Lambda targets on trigger. Streaming logs to log groups. Monitoring metrics</td></tr><tr><td><strong>ECR</strong></td><td>Pushing and pulling repositories. Including repositories in automatic builds using Docker-Compose</td></tr><tr><td><strong>IAM</strong></td><td>Creating users and policies in conjuncture with groups. Creating and applying roles</td></tr><tr><td><strong>KMS</strong></td><td>Creating keys and encrypting and decrypting environment variables in Lambda functions</td></tr><tr><td><strong>Lambda</strong></td><td>Creating Node.js and Python functions. Combining them in workflows with other services</td></tr><tr><td><strong>RDS</strong></td><td>Working with clusters, instances, and snapshots</td></tr><tr><td><strong>Route 53</strong></td><td>Working with hosted zones and different types of record sets</td></tr><tr><td><strong>S3</strong></td><td>Creating buckets and limiting permissions and other settings</td></tr><tr><td><strong>Familiarity</strong></td><td>Athena, Budgets, CloudFormation, CloudBuild, CodePipeline, ElastiCache, RedShift, SNS, Systems Manager</td></tr></tbody></table>"
    },
    "certs": {
        "html": "<h2>Certifications</h2><table class='table table-striped table-dark table-bordered table-hover'><tbody><tr><td>AI/ML</td><td><a href='/pdfs/certifications/AI-Demystified.pdf' target='_blank'>AI Demystified</a>, <a href='/pdfs/certifications/AI-Fabric-Overview.pdf' target='_blank'>AI Fabric</a>, <a href='/pdfs/certifications/Document-Understanding-Overview.pdf' target='_blank'>Document Understanding</a></td></tr><tr><td>Robotic Process Automation</td><td><a href='/pdfs/certifications/RPA-Developer-Advanced-Training.pdf' target='_blank'>Advanced RPA Developer</a>, <a href='/pdfs/certifications/IT-Automation.pdf' target='_blank'>IT Automation</a>, <a href='/pdfs/certifications/Advanced-Training.pdf' target='_blank'>Robotic Enterprise Framework</a>, <a href='/pdfs/certifications/RPA-Business-Analysis-Fundamentals.pdf' target='_blank'>RPA Business Analysis</a>, <a href='/pdfs/certifications/RPA-in-Finance-and-Accounting.pdf' target='_blank'>RPA in Finance and Accounting</a>, <a href='/pdfs/certifications/Solution-Architect-Training.pdf' target='_blank'>RPA Solution Architect</a>, <a href='/pdfs/certifications/RPA-Starter-Training.pdf' target='_blank'>RPA Starter</a>, <a href='/pdfs/certifications/RPA-Testing.pdf' target='_blank'>RPA Testing</a>, <a href='/pdfs/certifications/SAP-Automation-Training.pdf' target='_blank'>SAP Automation (2019)</a>, <a href='/pdfs/certifications/SAP-Automation-2020.pdf' target='_blank'>SAP Automation (2020)</a></td></tr><tr><td>Soft Skills</td><td><a href='/pdfs/certifications/Diversity-Inclusion-Belonging-for-All.pdf' target='_blank'>Diversity, Inclusion, and Belonging for All</a>, <a href='/pdfs/certifications/Diversity-Inclusion-Belonging-for-All-Bystander-Training-Bystander-to-Upstander.pdf' target='_blank'>Bystander Training: From Bystander to Upstander</a>, <a href='/pdfs/certifications/Diversity-Inclusion-Belonging-for-All-Communicating-Across-Cultures.pdf' target='_blank'>Communicating Across Cultures</a>, <a href='/pdfs/certifications/Diversity-Inclusion-Belonging-for-All-Communicating-Culturally-Sensitive-Issues.pdf' target='_blank'>Communicating about Culturally Sensitive Issues</a>, <a href='/pdfs/certifications/Diversity-Inclusion-Belonging-for-All-Confronting-Bias-Thriving-Across-Differences.pdf' target='_blank'>Confronting Bias: Thriving Across Our Differences</a>, <a href='/pdfs/certifications/Diversity-Inclusion-Belonging-for-All-Diversity-Inclusion-Belonging.pdf' target='_blank'>Diversity, Inclusion, and Belonging</a>, <a href='/pdfs/certifications/Diversity-Inclusion-Belonging-for-All-Skills-Inclusive-Conversations.pdf' target='_blank'>Skills for Inclusive Conversations</a>, <a href='/pdfs/certifications/Diversity-Inclusion-Belonging-for-All-Unconscious-Bias.pdf' target='_blank'>Unconscious Bias</a></td></tr><tr><td>UiPath</td><td><a href='/pdfs/certifications/Action-Center.pdf' target='_blank'>Action Center</a>, <a href='/pdfs/certifications/Automation-Hub-Deep-Dive.pdf' target='_blank'>Automation Hub</a>, <a href='/pdfs/certifications/Cloud-Platform.pdf' target='_blank'>Cloud Platform</a>, <a href='/pdfs/certifications/Data-Service.pdf' target='_blank'>Data Service</a>, <a href='/pdfs/certifications/Foundation-Training.pdf' target='_blank'>Foundation</a>, <a href='/pdfs/certifications/Infrastructure-Training.pdf' target='_blank'>Infrastructure</a>, <a href='/pdfs/certifications/Insights-Training.pdf' target='_blank'>Insights</a>, <a href='/pdfs/certifications/Licensing-Training.pdf' target='_blank'>Licensing</a>, <a href='/pdfs/certifications/Orchestrator-Training.pdf' target='_blank'>Orchestrator</a>, <a href='/pdfs/certifications/Process-Mining.pdf' target='_blank'>Process Mining</a>, <a href='/pdfs/certifications/Security-Training.pdf' target='_blank'>Security</a>, <a href='/pdfs/certifications/Test-Suite.pdf' target='_blank'>Test Suite</a></td></tr></tbody></table>"
    },
    "projects": {
        "html": "<h1>Projects</h1><hr>"
    },
    "more": {
        "html": "<h1>Ultimate</h1><p><hr><img class= 'image-left image-mobile' alt='Ultimate headshot of Michael A. Agarenzo' src='/images/headshot-square-ultimate.jpg' align='left'><p>Long Island Ultimate is a 501(c)(3) nonprofit organization and DiscNY affiliate I am an active member, volunteer, and board member of. We aim to expand ultimate on Long Island through organized play, youth development, and a more competitive ultimate scene.</p><p>DiscNY is a 501(c)(3) nonprofit organization and USAU (USA Ultimate) affiliate based in NYC that I am an active member of and volunteered for, including work I did as their webmaster. Their focus is on long-term growth and sustainability for the sport of ultimate in the state of New York.</p><p><em>Click <a id='teams-a' onclick='showDiv(\"teams-div\")'>here</a> for my ultimate team history or scroll down for my volunteering and leadership experience.</em></p><div id='teams-div'><h2>Teams</h2><p><img src='/images/team-shade.jpg' alt='Shade Team Photo' width='100%'><strong>Shade</strong><br>Men's Club Team<br>Summer 2019 in NYC<br>7th at Northeast Regionals</p><p><img src='/images/team-blueprint.jpg' alt='Blueprint Team Photo' width='100%'><strong>Blueprint</strong><br>Men's Club Team<br>Summer 2018 in Brooklyn<br>7th at Northeast Regionals</p><p><img src='/images/team-birdz.png' alt='Birdz Team Photo' width='100%'><strong>Birdz</strong><br>Mixed Club Team<br>Summer 2017 on Long Island<br>6th at Metro NY Sectionals</p><p><img src='/images/team-adelphi.jpg' alt='Adelphi Ultimate Team Photo' width='100%'><strong>Adelphi Ultimate</strong><br>Mixed College Team<br>2014 to 2018 at Adelphi University</p></div><h2>Volunteering</h2><hr><img class='image-right image-mobile' src='/images/logo-liu.png' alt='Official Logo for Long Island Ultimate' align='right'><p><strong>Board Member</strong><br>Long Island Ultimate<br>December 2019 to Present<br></p><ul><li>Manage website, create and edit pages and posts, set up events and registration settings</li><li>Report bugs and submit feature requests for Ultimate Central, the event and member management platform for ultimate organizations that the site is deployed with</li><li>Partake in monthly board meetings and daily communication</li><li>Provide insight regarding the organization's plans and actions</li><li>Record meeting minutes and share via community update posts</li><li>Partake in yearly planning meeting to scope out the following year and discuss major topics</li></ul><p><strong>Participant in Walk to End Alzheimer's</strong><br>Alzheimer's Association<br>October 2020 to Present</p><ul><li>Participate yearly in New York's Walk to End Alzheimer's event in New York, NY</li></ul><p><strong>Participant in Making Strides of Long Island</strong><br>American Cancer Society<br>October 2019 to Present</p><ul><li>Participate yearly in Long Island's Making Strides event in Jones Beach, NY</li></ul><p><img class='image-right image-mobile' src='/images/logo-discny.jpg' alt='Official Logo for DiscNY' align='right'><p><strong>Webmaster</strong><br>DiscNY<br>October 2016 to October 2020<br><a href='https://discny.org/p/volunteer-spotlight-mike-agarenzo' target='_blank'>Volunteer Spotlight</a></p><ul><li>Maintained website content</li><li>Partook in daily email communication</li><li>Deployed subdomain for youth ultimate and migrated relevant content over from main site</li></ul><p><strong>Participant in and Fundraiser for Relay For Life</strong><br>American Cancer Society<br>April 2015 to May 2018</p><ul><li>Participated yearly in and raised money for Adelphi University's Relay For Life event</li><li>Fundraised throughout each year by getting individuals to sign up for the event and donate to the organization</li></ul><p><strong>Organizer for Adelphi Ultimate Food Drive</strong><br>St. Thomas the Apostle<br>April 2017</p><ul><li>Collected non-perishable food items from all participating teams in Adelphi Ultimate's yearly home tournament</li><li>All proceeds were donated to St. Thomas the Apostle, a local church in West Hempstead, NY</li></ul>"
    },
    "leadership": {
        "html": "<h2>Leadership</h2><hr><p><strong>Captain and Secretary</strong><br>Ultimate Frisbee Team (Adelphi University)<br>May 2015 to May 2017</p><ul><li>Created, planned, explained and led what was done at practices and competitions</li><li>Kept records such as attendance at events and minutes at meetings, disseminating information to members thereafter</li><li>Managed all registration and insurance forms of members, ensuring timely distribution, collection and submission</li><li>Managed and promoted frequent and timely communication among members</li></ul><p><strong>Treasurer and Secretary</strong><br>Cybersecurity Club (Adelphi University)<br>May 2016 to March 2017</p><ul><li>Researched cybersecurity topics of interest to be presented, discussed and performed at weekly meetings</li><li>Managed and requested funds</li></ul><p><strong>Recording Secretary</strong><br>Math and Computer Science Club (Adelphi University)<br>February to December 2016</p><ul><li>Recorded and organized minutes and any other information regarding meetings, club membership, events, etc., filing them both physically and electronically for recall and public viewing</li><ul>"
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
    $("#nav").html("<a class='navbar-brand'><img alt='Professional headshot of Michael A. Agarenzo' src='/images/headshot-circle.png' width='50' height='50'></a><button id='button-toggle' class='navbar-toggler' type='button' data-toggle='collapse' data-target='#nav-div' aria-controls='nav-div' aria-expanded='true' aria-label='Toggle Nav'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='nav-div'><ul class='navbar-nav mr-auto'><li class='nav-item'><a id='link-home' class='nav-link' href='https://magarenzo.com'><img alt='Home' src='/images/icon-house.png' width='25' height='25'> Home</a></li></ul></div>");
    $("#wrapper").html(divs["wrapper"].html);
    $("#content").html("<div id='error'></div><div id='footer'></div>");
    $("#error").html("<h1>Error 404</h1><hr><p>Page not found. Did you expect something to be here?</p><p><em>Help me fix it <a href='mailto:contact@magarenzo.com' target='_blank'>by reaching out <img alt='Email' src='/images/icon-mail-blue.png' width='25' height='25'></a></em></p><p>&copy; 2017 Michael A. Agarenzo.</p>");
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

function showDiv(id) {
    var div = document.getElementById(id);
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

function repoDisplayer(id) {
    const profileName = "magarenzo";
    const excludedProjects = ["Different-and-Unordered-Combinations", "Ultimate-and-Lacrosse-Study", "Grading-System", "Incident-System", "METAR-Bot", "Simple-RSA-Encryptions", "Stack-Palindrome", "GitHub-Webhooks-Test", "Minimalist-GroupMe-Bot", "Birdz-Twitter-Bot", "Resume-Template", "Simple-Shift-Cipher", "magarenzo", "Poker-Hand-Simulation", "Zipcode-Query"];
    var error = document.createElement("p");
    error.append("Check out all of my projects ");
    var errorAnchor = document.createElement("a");
    errorAnchor.innerText = "here";
    errorAnchor.href = "https://github.com/" + profileName + "?tab=repositories";
    errorAnchor.target = blank;
    error.append(errorAnchor);
    error.append(" on my GitHub profile");
    const div = document.getElementById(id);
    if (div) {
        fetch("https://api.github.com/users/" + profileName + "/repos").then((response) => {
            if (response.status != 200) {
                div.append(error);
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
                        var anchor = document.createElement("a");
                        anchor.innerText = name;
                        anchor.href = url;
                        anchor.target = blank;
                        var paragraph = document.createElement("p");
                        paragraph.append(anchor);
                        paragraph.append(document.createElement("br"));
                        var image = document.createElement("img");
                        if (jsonObject[key].name == "magarenzo.github.io") {
                            image.alt = "Icon for HTML";
                            image.src = "/images/icon-HTML.png";
                        } else if (jsonObject[key].language) {
                            image.alt = "Icon for " + language;
                            image.src = "/images/icon-" + language + ".png";
                        } else {
                            image.alt = "Icon for VB";
                            image.src = "/images/icon-VB.png";
                        }
                        image.width = "25";
                        image.height = "25";
                        paragraph.append(image);
                        paragraph.append(" " + description);
                        div.append(paragraph);
                    }
                }
            }
        }).catch(function() {
            div.append(error);
        });
    }
}

function repoDisplayerTwo(id) {
    const profileName = "SygWave";
    const excludedProjects = [];
    var error = document.createElement("p");
    error.append("Check out all of SygWave's projects ");
    var errorAnchor = document.createElement("a");
    errorAnchor.innerText = "here";
    errorAnchor.href = "https://sygwave.github.io";
    errorAnchor.target = blank;
    error.append(errorAnchor);
    error.append(" on our website");
    const div = document.getElementById(id);
    if (div) {
        fetch("https://api.github.com/users/" + profileName + "/repos").then((response) => {
            if (response.status != 200) {
                div.append(error);
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
                        var anchor = document.createElement("a");
                        anchor.target = blank;
                        anchor.innerText = name;
                        if (jsonObject[key].homepage) {
                            anchor.href = JSON.stringify(jsonObject[key].homepage).split('"').join("");
                        } else {
                            anchor.href = url;
                        }
                        var paragraph = document.createElement("p");
                        paragraph.append(anchor);
                        paragraph.append(document.createElement("br"));
                        var image = document.createElement("img");
                        if (jsonObject[key].name == "sygwave.github.io") {
                            image.alt = "Icon for HTML";
                            image.src = "/images/icon-HTML.png";
                        } else if (jsonObject[key].language) {
                            image.alt = "Icon for " + language;
                            image.src = "/images/icon-" + language + ".png";
                        }
                        image.width = "25";
                        image.height = "25";
                        paragraph.append(image);
                        paragraph.append(" " + description);
                        div.append(paragraph);
                    }
                }
            }
            var uipathParagraph = document.createElement("p");
            var uipathAnchor = document.createElement("a");
            uipathAnchor.innerText = "Workflow Analyzer CLI Script";
            uipathAnchor.href = "https://marketplace.uipath.com/listings/uipath-command-line-workflow-analyzer";
            uipathAnchor.target = blank;
            uipathParagraph.append(uipathAnchor);
            uipathParagraph.append(document.createElement("br"));
            var uipathImage = document.createElement("img");
            uipathImage.alt = "Icon for PowerShell";
            uipathImage.src = "/images/icon-PowerShell.png";
            uipathImage.width = "25";
            uipathImage.height = "25";
            uipathParagraph.append(uipathImage);
            uipathParagraph.append(" Run UiPath Studio's Workflow Analyzer via command line and pipe results to file");
            div.append(uipathParagraph);
        }).catch(function() {
            div.append(error);
        });
    }
}