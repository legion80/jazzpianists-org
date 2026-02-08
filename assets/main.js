function playerClicked(playerNode) {
    const playerType = playerNode.dataset.playertype;
    playerNode.closest(".audio-player").classList.add(playerType);
}

document.addEventListener('DOMContentLoaded', () => {
    const NUMBER_OF_STYLES = 4;
    var current = new Date();
    var yearStart = new Date(current.getFullYear(), 0, 1);
    var timeDifference = current - yearStart;
    var oneDayInMilliseconds = 1000 * 60 * 60 * 24;
    var daysPassed = Math.ceil(timeDifference / oneDayInMilliseconds + 1);
    document.body.classList.add("style-" + (daysPassed % NUMBER_OF_STYLES));
});