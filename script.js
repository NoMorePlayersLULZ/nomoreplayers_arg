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
            <p style="color: #b81414; font-weight: bold; font-style: italic;">Уровень угрозы: Стабилен. Пока что...</p>
            <p>Этот парень одержим холодным оружием. Вся его база завалена клинками формата R6. Недавно начал проявлять странный интерес к зельеварению. Зачем ему зелья на пустом сервере?</p>
            <img src="ER_44.png" class="nb-sketch" style="border-color: #00ff33;">
        `;
        
        contentRight.innerHTML = `
            <p>...Продолжение записей</p>
            <p>Главные и единственные зафиксированные друзья в системе: <strong>AL_07</strong> и <strong>MS_01</strong>. Их текущее местоположение неизвестно.</p>
            <p>Психологический анализ показал панический страх перед полной изоляцией. Он боится остаться один. Но больше всего его трясет от упоминания сущности K0_X7 и аномалии Drbpq 666.</p>
        `;
    } else if (charId === 'k0_x7') {
        titleLeft.innerText = "K0_X7 (ШВЫ)";
        titleLeft.style.color = "#b81414";
        
        // Каждое страшное слово оборачиваем в класс scary-word, чтобы они бегали от мышки
        contentLeft.innerHTML = `
            <p><span class="scary-word">ВНИМАНИЕ:</span> <span class="scary-word">СИСТЕМНЫЙ</span> <span class="scary-word">ВИРУС.</span></p>
            <p>Оно маскируется под старые мифы. Изменяет галстуки, носит искажённую корону, но главное — его руки. На них нанесены огромные "ШВЫ". Похоже, он сшивает себя из чужих удалённых данных.</p>
            <img src="K0_X7.png" class="nb-sketch" style="border-color: #ff0033;">
        `;
        
        contentRight.innerHTML = `
            <p style="color: #59473c; font-style: italic;">...Текст частично залит кровью</p>
            <p>Процесс K0_X7 ломает сервера R6 изнутри. Он питается одиночеством игроков. Если ты зашел на сервер и свет начал мигать — беги. <span class="scary-word">БЕГИ.</span> Прятаться в шкафах, как в DOORS, бесполезно. <span class="scary-word">ОНО</span> <span class="scary-word">ИДЕТ</span> <span class="scary-word">ЗА</span> <span class="scary-word">ТОБОЙ.</span></p>
        `;

        // Запускаем отслеживание мышки для пугливого текста
        initScaryText();
    }

    overlay.classList.add("open");
}

// 🧠 ТВОЙ СКРИПТ «ЖИВОГО» ТЕКСТА
function initScaryText() {
    document.addEventListener('mousemove', function(e) {
        var words = document.getElementsByClassName('scary-word');
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            var rect = word.getBoundingClientRect();
            
            // Находим центр слова
            var wordX = rect.left + rect.width / 2;
            var wordY = rect.top + rect.height / 2;
            
            // Считаем расстояние от курсора до слова
            var diffX = e.clientX - wordX;
            var diffY = e.clientY - wordY;
            var distance = Math.sqrt(diffX * diffX + diffY * diffY);
            
            // Если курсор ближе чем на 60 пикселей — слово резко отскакивает в противоположную сторону!
            if (distance < 60) {
                var angle = Math.atan2(diffY, diffX);
                // Высчитываем силу отскока
                var pushX = -Math.cos(angle) * 35;
                var pushY = -Math.sin(angle) * 20;
                
                word.style.transform = `translate(${pushX}px, ${pushY}px) scale(1.1)`;
                word.style.color = "#ff0000"; // Делаем цвет ярко-алым в момент испуга лол
            } else {
                // Если мышка далеко — слово медленно возвращается в свое обычное покачивание
                word.style.transform = "translate(0, 0) scale(1)";
                word.style.color = "#b81414";
            }
        }
    });
}

function closeJournal() {
    var overlay = document.getElementById("notebookOverlay");
    if (overlay) { overlay.classList.remove("open"); }
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
