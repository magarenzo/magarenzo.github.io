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