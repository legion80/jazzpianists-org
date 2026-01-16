function playerClicked(playerNode) {
    const playerType = playerNode.dataset.playertype;
    playerNode.closest(".audio-player").classList.add(playerType);
}