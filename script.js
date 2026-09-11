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
    var overlay = document.getElementById("notebookOverlay");
    var titleLeft = document.getElementById("nbTitleLeft");
    var contentLeft = document.getElementById("nbContentLeft");
    var contentRight = document.getElementById("nbContentRight");

    if (charId === 'er_44') {
        // Текст твоего лога, разбитый на левую и правую страницы дневника DOORS
        titleLeft.innerText = "ER_44 (Авенлл)";
        titleLeft.style.color = "#1a1512";
        
        contentLeft.innerHTML = `
            <p style="color: #b81414; font-weight: bold; font-style: italic;">Уровень угрозы: Стабилен. Пока что...</p>
            <p>Этот парень одержим холодным оружием. Вся его база завалена клинками формата R6. Недавно начал проявлять странный интерес к зельеварению. Зачем ему зелья на пустом сервере?</p>
            <img src="ER_44.png" class="nb-sketch" style="border-color: #00ff33;">
        `;
        
        contentRight.innerHTML = `
            <p>...Продолжение записей</p>
            <p>Главные и единственные зафиксированные друзья в системе: <strong>AL_07</strong> и <strong>MS_01</strong>. Их текущее местоположение неизвестно.</p>
            <p>Психологический анализ показал панический страх перед полной изоляцией. Он боится остаться один. Но больше всего его трясет от упоминания <span style="color: #b81414; font-weight: bold;">K0_X7</span> и сущности по имени <span style="color: #b81414; font-weight: bold;">Drbpq 666</span>.</p>
            <p style="text-align: center; color: #5778a6; font-weight: bold; margin-top: 20px;">Надо помочь ему или мы трупы.</p>
        `;
    } else if (charId === 'k0_x7') {
        // Лор босса, оформленный под зловещий дневник со следами порчи
        titleLeft.innerText = "K0_X7 (ШВЫ)";
        titleLeft.style.color = "#b81414"; // У босса имя пишется зловеще красным карандашом
        
        contentLeft.innerHTML = `
            <p style="color: #b81414; font-weight: bold; font-style: italic;">ВНИМАНИЕ: СИСТЕМНЫЙ ВИРУС.</p>
            <p>Оно маскируется под старые мифы. Изменяет галстуки, носит искажённую корону, но главное — его руки. На них нанесены огромные "ШВЫ". Похоже, он сшивает себя из чужих удалённых данных.</p>
            <img src="K0_X7.png" class="nb-sketch" style="border-color: #ff0033;">
        `;
        
        contentRight.innerHTML = `
            <p style="color: #59473c; font-style: italic;">...Текст частично залит кровью или чернилами</p>
            <p>Процесс K0_X7 ломает сервера R6 изнутри. Он питается одиночеством игроков. Если ты зашел на сервер и свет начал мигать — беги. Прятаться в шкафах, как в DOORS, бесполезно.</p>
            <p style="background: #000; color: #ff0033; padding: 10px; font-family: monospace; font-size: 12px; text-align: center; margin-top: 20px; box-shadow: 0 4px 5px rgba(0,0,0,0.3);">
                СТАБИЛЬНОСТЬ_СИСТЕМЫ = 0%<br>
                [ДАННЫЕ_СТЁРТЫ]
            </p>
        `;
    }

    overlay.classList.add("open"); // Включаем вылет блокнота
}

function closeJournal() {
    var overlay = document.getElementById("notebookOverlay");
    if (overlay) {
        overlay.classList.remove("open"); // Прячем блокнот обратно
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
