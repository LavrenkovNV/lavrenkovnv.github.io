        if (!annyang) {
            document.getElementById('writer').style.display = 'block';
        } else {
            annyang.init({}, true);
            SpeechKITT.annyang();
            SpeechKITT.setStylesheet('themes/flat-turquoise.css');
            SpeechKITT.vroom();
            if (detectmob()) {
                annyang.start({
                    autoRestart: true,
                    continuous: false
                });
            } else {
                annyang.start({
                    autoRestart: true,
                    continuous: false
                });
            }
        }