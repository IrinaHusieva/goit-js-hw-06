const refSize = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');

refSize.addEventListener('input', () => {
    const font = refSize.value;
    refText.style.fontSize = font + 'px';
});