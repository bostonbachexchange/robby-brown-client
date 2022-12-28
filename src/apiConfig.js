let apiUrl
const apiUrls = {
    // YOU MUST CHANGE PRODUCTION URL WHEN DEPLOYING
	production: 'https://kind-clam-scrubs.cyclic.app',
	development: 'http://localhost:8000',
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

export default apiUrl
