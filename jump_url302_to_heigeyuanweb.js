addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
})

async function fetchAndApply(request) {
    url = 'https://www.heigeyuan.com'
    return Response.redirect(url, 302)
}