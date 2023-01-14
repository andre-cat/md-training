function enableCheckBoxes(){
    document.querySelectorAll('input').forEach(c=>c.removeAttribute('disabled'));
}
enableCheckBoxes()