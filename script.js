function changeBpm() {
    var style = getComputedStyle(document.body);
    var bpm = (1/(document.getElementById('bpm').value/60)) + 's';

    document.body.style.setProperty('--animSpeed', bpm);
}