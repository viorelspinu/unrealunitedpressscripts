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
        } else if (labelText.startsWith("Crystalline")) {
            imgSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqZ1MA-Zti1QW42EjL2gthS-K2GrHbRbY90a9COiOIhPEwlfSrKhj9rhqGYC_7q95OxIZxsCzof0D7ULcP6gtFMnQV1-4l4tn-s0Thns_7ByJBQrB99kWExPYj9FM60tooMAEi_jD-ukCuY_tuPUC0jJu-Y8wKzzPW9sUz9taVJEg6a_ewvdFPSp_j/s16000/crytalline.jpg"
        } else if (labelText.startsWith("Felisdom")) {
            imgSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1N3VHfHhy4JIXpza2FRulZxo065D1k5v-Kfm1Vl1tPFlL1pshqnEpRLw4BjG-jsmEDqxXXvU2D0s_DNAnSXez7aixLx8rrPT2dlEYMpsoeurMXm4fa_TV3SIR286lN7Oueo12D5Q9Brbl0AWi9AWPNuo0UVS3acOzpCZIVyrEAQeb3sMSBgqwY8Pt/s1600/felisdom.jpg"
        } else if (labelText.startsWith("Gambit")) {
            imgSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH6NtIwHtcDP2swWy1Z4gxOdGM-zRTCXKxYNQW7wfAX8fqyUv85fGZ08ilo-BIDNGNbOBfrnSwSWmkt62QZbn9gy9oszjcTzsIw5qLVRDp4PsfiCSY3HyeVNBgVy2yIk1vehY4-yDHJU24GMKJaA1h1So3Edgh0hei529TfVfARxxBuE_vAHQ-689T/s16000/gambit.jpg"
        } else if (labelText.startsWith("Mechanor")) {
            imgSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHNDP2EQ6VWiBUhibj1VjpPFa6YK0r2bmOAElB-rchA8IgANl9h4F7qesVCVtql1vx9qvSgeRoP8IMgD76JYC69IeQdlTXu4Vxzw84tr3GmxdDW2Tfsu_zMn2DD-2CkXmsE4IvYZ7S73q5TfYbw334DaD3AoaYUWHcgtILNc8YJe1QcrP_cQ5fya_Q/s16000/mechanor.jpg"
        } else if (labelText.startsWith("NewHaven")) {
            imgSrc = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDvuQ0B_7h_LvRUoGW3IYMEjYx5mIQhPk4ISIWV-DztuounmO2b2jfThu-R-fird34KJ-TdADNGvfHndYalZQcG0-O-idpC-Ck0cMDBW8DRk4vUitpG0WT5rd71YOCcvnR6HFQJ8ntxOJel3l8QhG3L6rlMgEC49kV8L_qVyhzukrxfjT67gnYAamA/s16000/newhaven.jpg"
        }

        else {
            imgSrc = "";
        }

        var imgAlt = labelText;
        var imgTag = '<img style="filter: sepia(100%)" src="' + imgSrc + '">';

        labelLink.innerHTML = '<div>' + imgTag + '</div><div></div>' + labelText.replace(labelCount, '').trim() + ' (' + labelCount + ')</a>';
        labelLink.style.padding = '10px';
    }




}
