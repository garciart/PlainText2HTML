function convertText() {
    var plainText;
    var convertedText = "";

    plainText = document.getElementById('myText').value;
    plainText = plainText.trim();
    if (plainText.length > 0) {
        // Start with a paragraph tag
        convertedText += "<p>";
        // Replace all carriage returns and line feeds with only line feeds
        convertedText += plainText.replace(/\r\n/gm, "\n");
        // Replace line feeds with closing and opening paragraph tags
        convertedText = convertedText.replace(/\n/gm, "</p>\n<p>");
        // Replace any empty paragraphs with a line break (br)
        convertedText = convertedText.replace(/<p><\/p>/gm, "<br>");
        // Replace any tabs with a single space
        convertedText = convertedText.replace(/\t/gm, " ");
        // Replace multiple spaces with a single space
        convertedText = convertedText.replace(/  +/gm, ' ');
        /* Convert URLs to anchors using a regex to check if the string:
         * 1. Begins with a proper scheme: (?:(?:ht|f)tps?:\/\/|www\.|mailto:)
         * 2. Contains only legal URL characters: [A-Za-z0-9\-._~:\/?#\[\]@!$&'()*+,;=]+
         * 3. Is not already in an anchor tag: (?!.*(href=|<\/a>))
         * 4. Ends with a letter, number, or underscore: [A-Za-z0-9_$]
         * 5. Using global and multiline options: /gm
         * It does not check if the URL is valid
         */ 
        convertedText = convertedText.replace(/((?:(?:ht|f)tps?:\/\/|www\.|mailto:)[A-Za-z0-9\-._~:\/?#\[\]@!$&'()*+,;=]+(?!.*(href=|<\/a>)))[A-Za-z0-9_$]/gm, "<a href=\"$&\" target=\"_blank\" title=\"\">$1</a>");
        // convertedText = convertedText.replace(".\" target", "\" target");
        // convertedText = convertedText.replace(".</a>", "</a>.");
        // Close the initial paragraph tag
        convertedText += "</p>";
    }
    document.getElementById('myHTML').value = convertedText;	
}

var element = document.getElementById('convertButton');
element.onclick = convertText;