function openPlayStore(appId, deeplink, delay = 3000) {
    const playStoreUrl = `https://play.google.com/store/apps/details?id=${appId}`;
    window.open(playStoreUrl, '_blank');
//> "https://www.bestsecret.com/product.htm?listName=Women%252FCampaigns%252Fcampaign_177224&position=1&code=31759163&colorCode=72&area=WOMEN_NEW&gender=FEMALE&back_url=%252Fnew_category.htm&originProdLink=&back_param_shop=campaign_177224&back_param_gender=FEMALE"

}
