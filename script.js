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
    closeJournal();
}

function openJournal(charId) {
    var journal = document.getElementById("journalPanel");
    var title = document.getElementById("journalTitle");
    var content = document.getElementById("journalContent");

    if (charId === 'er_44') {
        // ОБНОВЛЕННЫЙ ТВОЙ ЛОР ДЛЯ ER_44
        journal.style.borderColor = "#00ff33";
        journal.style.boxShadow = "0 -5px 25px rgba(0, 255, 51, 0.2)";
        title.style.color = "#00ff33";
        title.innerText = "[ЖУРНАЛ НАБЛЮДЕНИЯ: ER_44]";
        content.innerHTML = `
            <p><strong>НАСТОЯЩЕЕ ИМЯ:</strong> Авенлл</p>
            <p><strong>УВЛЕЧЕНИЯ:</strong> Клинковое оружие (R6), в последнее время зафиксирована активность в сфере зельеварения.</p>
            <p><strong>СВЯЗИ С ДРУГИМИ СУБЪЕКТАМИ:</strong> <span style="color: #00ff33;">AL_07</span>, <span style="color: #00ff33;">MS_01</span> (Статус друзей: подтвержден).</p>
            <p><strong>УГРОЗЫ И ПСИХОЛОГИЧЕСКИЕ МАРКЕРЫ:</strong> Испытывает панический страх перед процессом <span style="color: #ff0033;">K0_X7</span> и аномалией <span style="color: #ff0033;">Drbpq 666</span>. Обнаружена глубокая фобия полной изоляции (страх остаться одному на пустом сервере).</p>
        `;
    } else if (charId === 'k0_x7') {
        journal.style.borderColor = "#ff0033";
        journal.style.boxShadow = "0 -5px 25px rgba(255, 0, 51, 0.3)";
        title.style.color = "#ff0033";
        title.innerText = "[ОШИБКА ДАННЫХ: ПРОЦЕСС_K0_X7]";
        content.innerHTML = `
            <p style="color: #ff0033;"><strong>КРИТИЧЕСКИЙ СБОЙ:</strong> Обнаружены следы вируса "ШВЫ". Он заменяет нормальные аватары забаганными красными масками.</p>
            <p>В исходном коде этого процесса зашифровано послание. Все, кто пытался перейти по его ссылкам, больше не выходили в сеть.</p>
        `;
    }

    journal.classList.add("open");
}

function closeJournal() {
    var journal = document.getElementById("journalPanel");
    if (journal) {
        journal.classList.remove("open");
    }
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
