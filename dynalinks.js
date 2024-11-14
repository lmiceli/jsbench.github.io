//val bsUrl = "https://www.bestsecret.com/product.htm?listName=Women%2FCampaigns%2Fcampaign_177224&position=1&code=31759163&colorCode=72&area=WOMEN_NEW&gender=FEMALE&back_url=%2Fnew_category.htm&originProdLink=&back_param_shop=campaign_177224&back_param_gender=FEMALE"


function encodeUrlParameter(url) {
    return encodeURIComponent(url);
}

function navigateToEncodedUrl() {
    const originalUrl = "https://www.bestsecret.com/product.htm?listName=Women%2FCampaigns%2Fcampaign_177224&position=1&code=31759163&colorCode=72&area=WOMEN_NEW&gender=FEMALE&back_url=%2Fnew_category.htm&originProdLink=&back_param_shop=campaign_177224&back_param_gender=FEMALE"
//    const originalUrl = "https://www.bestsecret.com/product.htm?listName=Women/Campaigns/campaign_177224&position=1&code=31759163&colorCode=72&area=WOMEN_NEW&gender=FEMALE&back_url=/new_category.htm&originProdLink=&back_param_shop=campaign_177224&back_param_gender=FEMALE";
    const encodedUrl = encodeUrlParameter(originalUrl);

    const newUrl = `https://play.google.com/store/apps/details?id=com.bestsecret.main&referrer=utm_source%3Dtest_source%26utm_medium%3Dtest_medium%26utm_term%3D${encodedUrl}%26utm_content%3Dtest_content%26utm_campaign%3Dtest_name`;
    window.location.href = newUrl;
}


// Example usage:
const originalUrl = "https://www.bestsecret.com/product.htm?listName=Women/Campaigns/campaign_177224&position=1&code=31759163&colorCode=72&area=WOMEN_NEW&gender=FEMALE&back_url=/new_category.htm&originProdLink=&back_param_shop=campaign_177224&back_param_gender=FEMALE";
const encodedUrl = encodeUrlParameter(originalUrl);
console.log(encodedUrl);