const cheerio = require("cheerio");
const axios = require("axios");

async function getWebsiteImage(url) {
    try {
        // Fetch the HTML content of the website
        const response = await axios.get(url);
        const html = response.data;

        // Parse the HTML using cheerio
        const $ = cheerio.load(html);

        // Extract the content of the og:image meta tag
        const imageUrl = $('meta[property="og:image"]').attr("content");

        // Return the extracted image URL
        return imageUrl;
    } catch (error) {
        console.error(error);
    }
}

// Usage
const websiteUrl = "https://www.haagendazs.co.kr/";
getWebsiteImage(websiteUrl)
    .then((imageUrl) => console.log("Website image URL:", imageUrl))
    .catch((error) => console.error("Error:", error));
