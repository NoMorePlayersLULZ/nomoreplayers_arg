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
        titleLeft.innerText = "ER_44 (Авенлл)";
        titleLeft.style.color = "#1a1512";
        
        contentLeft.innerHTML = `
            <p style="color: #b81414; font-weight: bold; font-style: italic;">Уровень угрозы: Стабилен.</p>
            <p>Этот парень одержим холодным оружием. Вся его база завалена клинками формата R6. Недавно начал проявлять странный интерес к зельеварению.</p>
            <img src="ER_44.png" class="nb-sketch" style="border-color: #00ff33;">
        `;
        
        contentRight.innerHTML = `
            <p>...Продолжение записей</p>
            <p>Главные и единственные зафиксированные друзья в системе: <strong>AL_07</strong> и <strong>MS_01</strong>.</p>
            <p>Психологический анализ показал панический страх перед полной изоляцией. Он боится остаться один. Но больше всего его трясет от упоминания сущности K0_X7 и аномалии Drbpq 666.</p>
        `;
    } else if (charId === 'k0_x7') {
        titleLeft.innerText = "K0_X7 (ШВЫ)";
        titleLeft.style.color = "#b81414";
        
        // Каждое слово запечатано отдельно, теперь скрипт его точно поймает
        contentLeft.innerHTML = `
            <p><span class="scary-word">ВНИМАНИЕ:</span> <span class="scary-word">СИСТЕМНЫЙ</span> <span class="scary-word">ВИРУС.</span></p>
            <p>Оно маскируется под старые мифы. Изменяет галстуки, носит искажённую корону, но главное — его руки. На них нанесены огромные "ШВЫ". Похоже, он сшивает себя из чужих данных.</p>
            <img src="K0_X7.png" class="nb-sketch" style="border-color: #ff0033;">
        `;
        
        contentRight.innerHTML = `
            <p style="color: #59473c; font-style: italic;">...Текст частично залит кровью</p>
            <p>Процесс K0_X7 ломает сервера R6 изнутри. Он питается одиночеством игроков. Если ты зашел на сервер и свет начал мигать — беги. <span class="scary-word">БЕГИ.</span> Прятаться бесполезно. <span class="scary-word">ОНО</span> <span class="scary-word">ИДЕТ</span> <span class="scary-word">ЗА</span> <span class="scary-word">ТОБОЙ.</span></p>
        `;
    }

    overlay.classList.add("open");
}

function closeJournal() {
    var overlay = document.getElementById("notebookOverlay");
    if (overlay) { overlay.classList.remove("open"); }
}

// Постоянный слушатель мышки, работает всегда, когда блокнот открыт
document.addEventListener('mousemove', function(e) {
    var words = document.getElementsByClassName('scary-word');
    if (words.length === 0) return;

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var rect = word.getBoundingClientRect();
        
        var wordX = rect.left + rect.width / 2;
        var wordY = rect.top + rect.height / 2;
        
        var diffX = e.clientX - wordX;
        var diffY = e.clientY - wordY;
        var distance = Math.sqrt(diffX * diffX + diffY * diffY);
        
        // Расстояние срабатывания увеличено до 80 пикселей под крупный экран
        if (distance < 80) {
            var angle = Math.atan2(diffY, diffX);
            var pushX = -Math.cos(angle) * 45;
            var pushY = -Math.sin(angle) * 25;
            
            word.style.transform = `translate(${pushX}px, ${pushY}px) scale(1.15)`;
            word.style.color = "#ff0000";
        } else {
            word.style.transform = "translate(0, 0)";
            word.style.color = "#b81414";
        }
    }
});

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
