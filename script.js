function switchTab(tabId, element) {
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }
    var navItems = document.getElementsByClassName("nav-item");
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
    element.classList.add("active");
    closeJournal(); // При переключении вкладок закрываем блокнот
}

// 📖 СКРИПТ ДЛЯ ТВОЕГО ЖУРНАЛА
function openJournal(charId) {
    var journal = document.getElementById("journalPanel");
    var title = document.getElementById("journalTitle");
    var content = document.getElementById("journalContent");

    if (charId === 'er_44') {
        // Настройки для ER_44 (Зеленый стиль)
        journal.style.borderColor = "#00ff33";
        journal.style.boxShadow = "0 -5px 25px rgba(0, 255, 51, 0.2)";
        title.style.color = "#00ff33";
        title.innerText = "[ЖУРНАЛ НАБЛЮДЕНИЯ: ER_44]";
        content.innerHTML = `
            <p><strong>Запись от 11.09.2026:</strong> Мечник ER_44 держит оборону. Система стабильна на 100%. Нам удалось обнаружить скрытый архив с данными о его тренировках.</p>
            <p>Часть страниц вырвана, но на одной из них была странная ссылка на внешний сервер... Игроки утверждают, что продолжение лора спрятано там.</p>
            <p>🔗 <a href="https://github.io" target="_blank" style="color: #00ff33; text-decoration: underline;">ОТКРЫТЬ СЛЕДУЮЩУЮ СТРАНИЦУ ДНЕВНИКА (ВНЕШНИЙ ИСТОЧНИК)</a></p>
        `;
    } else if (charId === 'k0_x7') {
        // Настройки для Босса K0_X7 (Красный стиль вируса)
        journal.style.borderColor = "#ff0033";
        journal.style.boxShadow = "0 -5px 25px rgba(255, 0, 51, 0.3)";
        title.style.color = "#ff0033";
        title.innerText = "[ОШИБКА ДАННЫХ: ПРОЦЕСС_K0_X7]";
        content.innerHTML = `
            <p style="color: #ff0033;"><strong>КРИТИЧЕСКИЙ СБОЙ:</strong> Обнаружены следы вируса "ШВЫ". Он заменяет нормальные аватары забаганными красными масками.</p>
            <p>В исходном коде этого процесса зашифровано послание. Все, кто пытался перейти по его ссылкам, больше не выходили в сеть.</p>
            <p>🔗 <a href="https://github.io" target="_blank" style="color: #ff0033; text-decoration: underline;">ПЕРЕЙТИ В ЛОГОВО ВИРУСА [РИСК ДЕАНОНИМИЗАЦИИ]</a></p>
        `;
    }

    journal.classList.add("open"); // Выкатываем панель
}

function closeJournal() {
    document.getElementById("journalPanel").classList.remove("open"); // Прячем панель
}

function checkAccess() {
    var input = document.getElementById("passInput").value.toLowerCase().trim();
    var error = document.getElementById("errText");

    if (input === "er_44") {
        error.style.display = "none";
        alert("КЛЮЧ ПРИНЯТ. ДОСТУП К ЗЕРКАЛУ ДИСКА ОТКРЫТ.");
        window.location.href = "https://yandex.ru"; 
    } else {
        error.style.display = "block";
        document.body.style.backgroundColor = "#220000";
        setTimeout(function() { document.body.style.backgroundColor = "#050505"; }, 200);
    }
}
