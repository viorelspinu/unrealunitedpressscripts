function addWorldImage() {
    var ulElement = document.querySelector('.widget-content.list-label-widget-content ul');
    var aElements = ulElement.getElementsByTagName('a');
    var i = 0;
    var n = aElements.length;
    while (Boolean(n - i)) {
        var labelLink = labelLinks[i];
        var labelText = labelLink.textContent.trim();
        var labelCount = labelLink.querySelector(".label-count").textContent.trim();

        var imgSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYpJekrlujWnB5emlylBsvgaLRXlN55oMVeNh-1_GzQor6bplIzwkM-B7-u4p5v9EEbmNpua5Eq9rt6zddPaIdlm284ZtMGyG-xS9pSqJ4I9aAg8b5TuRwnnILyd9q0uI4tHEVZ3IPjtf601TpcDzCFsFwYK1UTp6JT_fCrowvGO-aUmRxHwXIfxv1/s16000/";
        var imgAlt = labelText;
        var imgTag = '<img src="' + imgSrc + imgAlt.toLowerCase() + '.jpg">';

        labelLink.innerHTML = '<div>' + imgTag + '</div><div></div>' + labelText + ' (' + labelCount + ')</a>';
        labelLink.style.padding = '10px';
        i = i + 1;
    }
}
