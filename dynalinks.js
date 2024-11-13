function openPlayStore(appId, deeplink, delay = 3000) {
    const playStoreUrl = `https://play.google.com/store/apps/details?id=${appId}`;
    window.open(playStoreUrl, '_blank');

}
