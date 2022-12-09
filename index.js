addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * @param {Request} request
 */

const playstoreURL = 'https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox';
const appstoreURL = 'https://apps.apple.com/us/app/google/id284815942';
const fallbackURL = 'https://www.google.com'
const statusCode = 301;
 
async function handleRequest(request) {
  const userAgent = request.headers.get('User-Agent') || '';
  if (userAgent.includes('Android')) {
    return Response.redirect(playstoreURL, statusCode);
  }
  else if (userAgent.includes('iPhone')) {
    return Response.redirect(appstoreURL, statusCode);
  }
  else {
    return Response.redirect(fallbackURL, statusCode);
  }
}
