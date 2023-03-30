function addWorldImage() {
    // Select all the <a> elements inside the <ul> element
    var labelLinks = document.querySelectorAll(".widget-content.list-label-widget-content ul a.label-name");

    // Loop through each <a> element and modify its contents and style
    for (var i = 0; i < labelLinks.length; i++) {
        var labelLink = labelLinks[i];
        var labelText = labelLink.textContent.trim();
        var labelCount = labelLink.querySelector(".label-count").textContent.trim();

        var imgSrc = "";
        if (labelText.startsWith("Aeris")) {
            imgSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYpJekrlujWnB5emlylBsvgaLRXlN55oMVeNh-1_GzQor6bplIzwkM-B7-u4p5v9EEbmNpua5Eq9rt6zddPaIdlm284ZtMGyG-xS9pSqJ4I9aAg8b5TuRwnnILyd9q0uI4tHEVZ3IPjtf601TpcDzCFsFwYK1UTp6JT_fCrowvGO-aUmRxHwXIfxv1/s16000/aeris4.jpg";
        } else if (labelText.startsWith("Arinthia")) {
            imgSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyqO2TQqXjQiL_HvWgFdqaQkSfCWbVb1zegauXQAMXxRkiVG5ihQ0hSRGAHAGEKt0Cv_IsOkKf_-sLzQeCeqU2i5Bn32Pq_7iTIFKTm5P9VaatDZKNHDH6BrC4k4Y4GD0dahNRZblPQDtVcc2N5_8ePdH40pdWu0okj-i4C0DV1_skjBW7nLdj9J8T/s16000/arinthia.jpg";
        } else if (labelText.startsWith("Behemoth")) {
            imgSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEnmPri7oNCimGJESO3AuR7clQAjRI65u17TnSqSO5ta0Gme31zNknYeE9YOjzWAjqyw8S0OdA4XpNcmkthsFry8KdYdIOa2WnzQpD72TL3uMQLeGRIJbkbjxzc3IoxCheN5PidLEITystyie5L0YKx8Ykc1KxdBrjaoBomnRL_JIBXYDGyMNNIBJa/s16000/behemoth.jpg"
        } else if (labelText.startsWith("Crystalline")){
            imgSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqZ1MA-Zti1QW42EjL2gthS-K2GrHbRbY90a9COiOIhPEwlfSrKhj9rhqGYC_7q95OxIZxsCzof0D7ULcP6gtFMnQV1-4l4tn-s0Thns_7ByJBQrB99kWExPYj9FM60tooMAEi_jD-ukCuY_tuPUC0jJu-Y8wKzzPW9sUz9taVJEg6a_ewvdFPSp_j/s16000/crytalline.jpg"
        }
        
        else {
            imgSrc = "";
        }

        var imgAlt = labelText;
        var imgTag = '<img src="' + imgSrc + '">';

        labelLink.innerHTML = '<div>' + imgTag + '</div><div></div>' + labelText.replace(labelCount, '').trim() + ' (' + labelCount + ')</a>';
        labelLink.style.padding = '10px';
    }




}
