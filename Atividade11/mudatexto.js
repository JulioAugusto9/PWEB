maiusc = (chkbx) => {
    if (!chkbx.checked) return;
    const input = document.forms.divContainer[0];
    input.value = input.value.toUpperCase();
    document.forms.divContainer.children[2].children["chkbxMin"].checked = false;
}

minusc = (chkbx) => {
    if (!chkbx.checked) return;
    const input = document.forms.divContainer[0];
    input.value = input.value.toLowerCase();
    document.forms.divContainer.children[1].children["chkbxMai"].checked = false;
}