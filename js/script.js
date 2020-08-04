/**
 * Load div if homepage was redirected to from a subdomain
 */

if (document.referrer.includes("experience")) {

    changePage(event, "experience");

} else if (document.referrer.includes("projects")) {

    changePage(event, "projects");

} else if (document.referrer.includes("more")) {

    changePage(event, "more");

}

/**
 * Initialize and run Firebase analytics
 */

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