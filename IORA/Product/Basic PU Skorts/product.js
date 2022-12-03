function DisSelect() {
    var x = document.getElementById("inlineRadio1");
    x.checked = false;
    var y = document.getElementById("inlineRadio2");
    y.checked = false;
    var z = document.getElementById("inlineRadio3");
    z.checked = false;
    if (x.checked == false) {
        var Add = document.getElementById("Submit").disabled = true;
        document.getElementById("Size").innerHTML = " ";
    }
}

function Checksize() {
    var ele = document.getElementsByName('inlineRadioOptions');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            var Add = document.getElementById("Submit").disabled = false;
            document.getElementById("Size").innerHTML = ele[i].value;
        }
    }
}