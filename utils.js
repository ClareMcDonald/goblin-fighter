export function renderGoblin(goblinData) {
    const goblinDiv = document.createElement('div');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const emojiEl = document.createElement('p');

    goblinDiv.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp;
    emojiEl.textContent = goblinData.hp > 0 ? '😈 ' : '🔥';

    if (goblinData.hp === 0) {
        goblinDiv.classList.add('dead');
    }

    goblinDiv.append(nameEl, hpEl, emojiEl);

    return goblinDiv;
}