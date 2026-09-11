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
        journal.style.borderColor = "#00ff33";
        journal.style.boxShadow = "0 -5px 25px rgba(0, 255, 51, 0.2)";
        title.style.color = "#00ff33";
        title.innerText = "[ЖУРНАЛ НАБЛЮДЕНИЯ: ER_44]";
        content.innerHTML = "<p>Лор главного героя ER_44.</p>";
    } else if (charId === 'k0_x7') {
        journal.style.borderColor = "#ff0033";
        journal.style.boxShadow = "0 -5px 25px rgba(255, 0, 51, 0.3)";
        title.style.color = "#ff0033";
        title.innerText = "[ОШИБКА ДАННЫХ: ПРОЦЕСС_K0_X7]";
        content.innerHTML = "<p style='color: #ff0033;'>Лор главного вируса K0_X7.</p>";
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
