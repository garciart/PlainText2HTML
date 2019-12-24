function convertText() {
    var plainText;
    var convertedText = "";
    var i;

    plainText = document.getElementById('myText').value;
    plainText = plainText.trim();
    if (plainText.length > 0) {
        convertedText += "<p>";
        convertedText += plainText.replace(/\n/g, "</p>\n<p>");
        convertedText = convertedText.replace(/<p><\/p>/g, "<br>");
        convertedText = convertedText.replace(/\t/g, " ");
        convertedText = convertedText.replace(/  +/g, ' ');
        convertedText = convertedText.replace(/((?:(?:ht|f)tps?:\/\/|www)[^\s,?!]+(?!.*<\/a>))/gm, "<a href=\"$&\" target=\"_blank\" title=\"\">$1</a>");
        convertedText = convertedText.replace(".\" target", "\" target");
        convertedText = convertedText.replace(".</a>", "</a>.");
        convertedText += "</p>";
    }
    document.getElementById('myHTML').value = convertedText;	
}

var el = document.getElementById('convertButton');
el.onclick = convertText;