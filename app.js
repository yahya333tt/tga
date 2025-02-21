// Инициализация Web App
Telegram.WebApp.ready();

function selectCategory(category) {
    // Отправка данных в бота
    Telegram.WebApp.sendData(category);
    
    // Закрыть мини-приложение (опционально)
    Telegram.WebApp.close();
}