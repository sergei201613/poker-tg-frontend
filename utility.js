function isTelegramWebApp() {
    try {
        return window.Telegram.WebApp.initData.length != 0;
    } catch (error) {
        console.log("Error in isTelegramWebApp():", error);
        return false;
    }
}
