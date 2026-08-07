// ==UserScript==
// @name         KPV points
// @namespace    http://tampermonkey.net/
// @author       Цари / Ритуал [1241910]
// @version      2.5.2
// @match        *://*.catwar.net/cat*
// @match        *://*.catwar.su/cat*
// @updateURL    https://raw.githubusercontent.com/TsarII/KPV-points/main/Баллы%20КПВ-1.0.user.js
// @downloadURL  https://raw.githubusercontent.com/TsarII/KPV-points/main/Баллы%20КПВ-1.0.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (!/^\/cat(\d+|\/[^/]+)$/.test(location.pathname)) {
        return;
    }



    // =========================
    // МЕДАЛИ
    // =========================

    const medalOverlays = {

        // 1 балл
        "665": "https://i.ibb.co/Swk8Fxpy/1.png",
        "155": "https://i.ibb.co/Swk8Fxpy/1.png",
        "154": "https://i.ibb.co/Swk8Fxpy/1.png",
        "668": "https://i.ibb.co/Swk8Fxpy/1.png",
        "839": "https://i.ibb.co/Swk8Fxpy/1.png",
        "5310": "https://i.ibb.co/Swk8Fxpy/1.png",

        // 3 балла
        "162": "https://i.ibb.co/prs25cxg/3.png",
        "157": "https://i.ibb.co/prs25cxg/3.png",
        "666": "https://i.ibb.co/prs25cxg/3.png",
        "163": "https://i.ibb.co/prs25cxg/3.png",
        "166": "https://i.ibb.co/prs25cxg/3.png",
        "167": "https://i.ibb.co/prs25cxg/3.png",
        "178": "https://i.ibb.co/prs25cxg/3.png",
        "251": "https://i.ibb.co/prs25cxg/3.png",
        "667": "https://i.ibb.co/prs25cxg/3.png",
        "932": "https://i.ibb.co/prs25cxg/3.png",
        "1020": "https://i.ibb.co/prs25cxg/3.png",
        "2644": "https://i.ibb.co/prs25cxg/3.png",
        "2878": "https://i.ibb.co/prs25cxg/3.png",
        "3350": "https://i.ibb.co/prs25cxg/3.png",
        "3483": "https://i.ibb.co/prs25cxg/3.png",
        "894": "https://i.ibb.co/prs25cxg/3.png",
        "2762": "https://i.ibb.co/prs25cxg/3.png",
        "2780": "https://i.ibb.co/prs25cxg/3.png",
        "5027": "https://i.ibb.co/prs25cxg/3.png",
        "5271": "https://i.ibb.co/prs25cxg/3.png",

        // 4 балла
        "161": "https://i.ibb.co/fsVWmkL/4.png",
        "160": "https://i.ibb.co/fsVWmkL/4.png",
        "164": "https://i.ibb.co/fsVWmkL/4.png",
        "1097": "https://i.ibb.co/fsVWmkL/4.png",
        "3835": "https://i.ibb.co/fsVWmkL/4.png",
        "4337": "https://i.ibb.co/fsVWmkL/4.png",
        "5322": "https://i.ibb.co/fsVWmkL/4.png",

        // 6 баллов
        "252": "https://i.ibb.co/FkwC3XxW/6.png",

        // 7 баллов
        "664": "https://i.ibb.co/xtgTsH7v/7.png",
        "422": "https://i.ibb.co/xtgTsH7v/7.png",
        "280": "https://i.ibb.co/xtgTsH7v/7.png",
        "168": "https://i.ibb.co/xtgTsH7v/7.png",
        "2656": "https://i.ibb.co/xtgTsH7v/7.png",
        "2655": "https://i.ibb.co/xtgTsH7v/7.png",

        // 8 баллов
        "663": "https://i.ibb.co/Kj1TCzDV/8.png"
    };

    const medalPoints = {

    // 1 балл
    665: 1,
    155: 1,
    154: 1,
    668: 1,
    839: 1,
    5310: 1,

    // 3 балла
    162: 3,
    166: 3,
    157: 3,
    666: 3,
    163: 3,
    167: 3,
    178: 3,
    251: 3,
    667: 3,
    932: 3,
    1020: 3,
    2644: 3,
    2878: 3,
    3350: 3,
    3483: 3,
    894: 3,
    2762: 3,
    2780: 3,
    5027: 3,
    5271: 3,

    // 4 балла
    161: 4,
    160: 4,
    164: 4,
    1097: 4,
    3835: 4,
    4337: 4,
    5322: 4,

    // 6 баллов
    252: 6,

    // 7 баллов
    664: 7,
    422: 7,
    280: 7,
    168: 7,
    2656: 7,
    2655: 7,

    // 8 баллов
    663: 8
};

    // =========================
    // ПАМЯТНЫЕ ПРЕДМЕТЫ
    // =========================

    const relicOverlays = {

        // 0 баллов
        "Властелин всех двух стихий": "https://i.ibb.co/XfgLyvsq/0.png",
        "Отколовшаяся сосулька": "https://i.ibb.co/XfgLyvsq/0.png",
        "Окроплённое перо": "https://i.ibb.co/XfgLyvsq/0.png",
        "Льдинка с отпечатком лапы": "https://i.ibb.co/XfgLyvsq/0.png",
        "Визитка": "https://i.ibb.co/XfgLyvsq/0.png",
        "Сверкающая чешуйка": "https://i.ibb.co/XfgLyvsq/0.png",
        "Тот, кто держал остриё": "https://i.ibb.co/XfgLyvsq/0.png",
        "Разбитое зеркало": "https://i.ibb.co/XfgLyvsq/0.png",
        "Ягодный след": "https://i.ibb.co/XfgLyvsq/0.png",
        "Старый кулон": "https://i.ibb.co/XfgLyvsq/0.png",
        "Маска": "https://i.ibb.co/XfgLyvsq/0.png",
        "Меч и курочка": "https://i.ibb.co/XfgLyvsq/0.png",
        "Тлеющий уголёк": "https://i.ibb.co/XfgLyvsq/0.png",
        "Деревянный солдатик": "https://i.ibb.co/XfgLyvsq/0.png",
        "Окаменелое гнездо": "https://i.ibb.co/XfgLyvsq/0.png",
        "Подарок": "https://i.ibb.co/XfgLyvsq/0.png",
        "Конверт": "https://i.ibb.co/XfgLyvsq/0.png",
        "Падение": "https://i.ibb.co/XfgLyvsq/0.png",
        "Гнилое яблочко": "https://i.ibb.co/XfgLyvsq/0.png",
        "Тьма багрового прошлого": "https://i.ibb.co/XfgLyvsq/0.png",
        "История о принце": "https://i.ibb.co/XfgLyvsq/0.png",
        "Цилиндр Щелкунчика": "https://i.ibb.co/XfgLyvsq/0.png",
        "Та, кто держала остриё": "https://i.ibb.co/XfgLyvsq/0.png",
        "Корзина упавших звёзд": "https://i.ibb.co/XfgLyvsq/0.png",
        "Кроха-барсёнок": "https://i.ibb.co/XfgLyvsq/0.png",
        "Причудливая диковинка": "https://i.ibb.co/XfgLyvsq/0.png",

        // 1 балл
        "В чём смысл жизни?": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Вестник новостей": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Спаситель от жажды": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Всезнайка": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Резное перышко": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Чудной камушек": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Меховый друг": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Командный дух!": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Воспоминания о работе": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Перо сойки": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Расколотый молнией": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Замёрзший клочок меха": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Свинка-копилка": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Странная рыба": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Клыки стихии": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Пылающее перо": "https://i.ibb.co/ZzB8rWtF/1.png",
        "Ледяной череп": "https://i.ibb.co/ZzB8rWtF/1.png",

        // 2 балла
        "Искатель приключений": "https://i.ibb.co/99DH3CPz/2.png",
        "Всё ещё ребенок": "https://i.ibb.co/99DH3CPz/2.png",
        "Истинный лидер": "https://i.ibb.co/99DH3CPz/2.png",
        "Знающий себя": "https://i.ibb.co/99DH3CPz/2.png",
        "Создатель чудес": "https://i.ibb.co/99DH3CPz/2.png",
        "Окрылённый страхом": "https://i.ibb.co/99DH3CPz/2.png",
        "Бесстрашный туннелер": "https://i.ibb.co/99DH3CPz/2.png",
        "Горьковато-пряный корень": "https://i.ibb.co/99DH3CPz/2.png",
        "Чудной трофей": "https://i.ibb.co/99DH3CPz/2.png",
        "Прошедший через пекло": "https://i.ibb.co/99DH3CPz/2.png",

        // 3 балла
        "Я люблю скалы!": "https://i.ibb.co/FqgsrT5r/3.png",
        "Орлиный глаз": "https://i.ibb.co/FqgsrT5r/3.png",
        "Точно-Не-Речной": "https://i.ibb.co/FqgsrT5r/3.png",
        "Ах, жизнь моя жестянка!": "https://i.ibb.co/FqgsrT5r/3.png",
        "Паучий враг": "https://i.ibb.co/FqgsrT5r/3.png",
        "Вдохновитель юных": "https://i.ibb.co/FqgsrT5r/3.png",
        "После стольких лун": "https://i.ibb.co/FqgsrT5r/3.png",
        "Бросивший вызов Духам": "https://i.ibb.co/FqgsrT5r/3.png",
        "Первый учитель": "https://i.ibb.co/FqgsrT5r/3.png",
        "Подарок вод": "https://i.ibb.co/FqgsrT5r/3.png",
        "Хранитель Очага": "https://i.ibb.co/FqgsrT5r/3.png",

        // 4 балла
        "Благодетель": "https://i.ibb.co/1HTKTFR/4.png",
        "Не чувствующий лап": "https://i.ibb.co/1HTKTFR/4.png",
        "Тишину, пожалуйста!": "https://i.ibb.co/1HTKTFR/4.png",
        "Где моя зарплата?": "https://i.ibb.co/1HTKTFR/4.png",
        "Сладко естся, плохо спится": "https://i.ibb.co/1HTKTFR/4.png",

        // 5 баллов
        "Что такое сон?": "https://i.ibb.co/nqkXnVtB/5.png"
    };

    const relicPoints = {

    // 0 баллов
    "Властелин всех двух стихий": 0,
    "Отколовшаяся сосулька": 0,
    "Окроплённое перо": 0,
    "Льдинка с отпечатком лапы": 0,
    "Визитка": 0,
    "Сверкающая чешуйка": 0,
    "Тот, кто держал остриё": 0,
    "Разбитое зеркало": 0,
    "Ягодный след": 0,
    "Старый кулон": 0,
    "Маска": 0,
    "Меч и курочка": 0,
    "Тлеющий уголёк": 0,
    "Деревянный солдатик": 0,
    "Окаменелое гнездо": 0,
    "Подарок": 0,
    "Конверт": 0,
    "Падение": 0,
    "Гнилое яблочко": 0,
    "Тьма багрового прошлого": 0,
    "История о принце": 0,
    "Цилиндр Щелкунчика": 0,
    "Та, кто держала остриё": 0,
    "Причудливая диковинка": 0,
    "Корзина упавших звёзд": 0,
    "Кроха-барсёнок": 0,

    // 1 балл
    "В чём смысл жизни?": 1,
    "Вестник новостей": 1,
    "Спаситель от жажды": 1,
    "Всезнайка": 1,
    "Резное перышко": 1,
    "Чудной камушек": 1,
    "Меховый друг": 1,
    "Командный дух!": 1,
    "Воспоминания о работе": 1,
    "Перо сойки": 1,
    "Расколотый молнией": 1,
    "Замёрзший клочок меха": 1,
    "Свинка-копилка": 1,
    "Странная рыба": 1,
    "Клыки стихии": 1,
    "Пылающее перо": 1,
    "Ледяной череп": 1,

    // 2 балла
    "Искатель приключений": 2,
    "Всё ещё ребенок": 2,
    "Истинный лидер": 2,
    "Знающий себя": 2,
    "Создатель чудес": 2,
    "Окрылённый страхом": 2,
    "Бесстрашный туннелер": 2,
    "Горьковато-пряный корень": 2,
    "Чудной трофей": 2,
    "Прошедший через пекло": 2,

    // 3 балла
    "Я люблю скалы!": 3,
    "Орлиный глаз": 3,
    "Точно-Не-Речной": 3,
    "Ах, жизнь моя жестянка!": 3,
    "Паучий враг": 3,
    "Вдохновитель юных": 3,
    "После стольких лун": 3,
    "Бросивший вызов Духам": 3,
    "Первый учитель": 3,
    "Подарок вод": 3,
    "Хранитель Очага": 3,

    // 4 балла
    "Благодетель": 4,
    "Не чувствующий лап": 4,
    "Тишину, пожалуйста!": 4,
    "Где моя зарплата?": 4,
    "Сладко естся, плохо спится": 4,

    // 5 баллов
    "Что такое сон?": 5
};

    function addOverlayToImage(img, overlayUrl) {

        if (img.dataset.overlayAdded) return;
        img.dataset.overlayAdded = '1';

        const wrapper = document.createElement('span');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        wrapper.style.lineHeight = '0';

        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);

        const overlay = document.createElement('img');
        overlay.src = overlayUrl;

        overlay.style.position = 'absolute';
        overlay.style.left = '0';
        overlay.style.top = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none';
        overlay.style.zIndex = '9999';

        wrapper.appendChild(overlay);
    }

    function addMedalOverlays() {

        document.querySelectorAll('img[src*="medal/"]').forEach(img => {

            const match = img.src.match(/medal\/(\d+)\.png/i);
            if (!match) return;

            const medalId = match[1];
            const overlayUrl = medalOverlays[medalId];

            if (!overlayUrl) return;

            addOverlayToImage(img, overlayUrl);
        });
    }

    function addRelicOverlays() {

        document.querySelectorAll('.blocks b').forEach(titleElement => {

            const title = titleElement.textContent
                .replace(/[«»]/g, '')
                .trim();

            const overlayUrl = relicOverlays[title];
            if (!overlayUrl) return;

            const block = titleElement.closest('.blocks');
            if (!block) return;

            const relicId = block.dataset.id;

            const img = document.querySelector(
                `.headers[data-id="${relicId}"] img`
            );

            if (!img) return;

            addOverlayToImage(img, overlayUrl);
        });
    }

function processAll() {
    addMedalOverlays();
    addRelicOverlays();
}

processAll();
showKPVPoints();

new MutationObserver(() => {
    processAll();
}).observe(document.body, {
    childList: true,
    subtree: true
});

function showKPVPoints() {

    let medalTotal = 0;
    let relicTotal = 0;

    // Медали
    document.querySelectorAll('img[src*="medal/"]').forEach(img => {
        const match = img.src.match(/medal\/(\d+)\.png/i);
        if (!match) return;

        const id = match[1];
        medalTotal += medalPoints[id] || 0;
    });

    // Предметы
    document.querySelectorAll('.blocks b').forEach(el => {
        const title = el.textContent
            .replace(/[«»]/g, '')
            .trim();

        relicTotal += relicPoints[title] || 0;
    });

    const total = medalTotal + relicTotal;

    let panel = document.getElementById('kpv-points-panel');

if (!panel) {
    panel = document.createElement('div');
    panel.id = 'kpv-points-panel';

panel.style.cssText = `
    display: inline-block;
    margin: 15px 0 0 10px;
    padding: 12px 16px;
    background: rgba(245,240,230,.95);
    border: 2px solid #a98a5d;
    border-radius: 14px;
    box-shadow: 0 1px 4px rgba(0,0,0,.15);
    box-sizing: border-box;
    max-width: calc(100% - 20px);
    color: #000;
`;

    const siteTable = document.getElementById('site_table');
    if (!siteTable) return;

    siteTable.appendChild(panel);
}



   const lastMedal = [...document.querySelectorAll('img[src*="medal/"]')]
    .filter(img => img.closest('#branch'))
    .pop();

if (lastMedal) {

    let wrapper = document.getElementById('kpv-points-wrapper');

    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.id = 'kpv-points-wrapper';

        wrapper.style.cssText = `
            width:100%;
            clear:both;
            margin-top:12px;
            text-align:left;
        `;

        lastMedal.closest('#branch').appendChild(wrapper);
    }

    wrapper.appendChild(panel);
}

    panel.innerHTML = `
        <div style="font-size:18px;font-weight:bold;margin-bottom:8px;">
            🏆 Баллы КПВ
        </div>

        <div><b>Всего:</b> ${total}</div>
        <div><b>Медали:</b> ${medalTotal}</div>
        <div><b>Предметы:</b> ${relicTotal}</div>
    `;
}



})();
