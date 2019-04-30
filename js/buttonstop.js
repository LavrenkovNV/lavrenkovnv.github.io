                    document.getElementById('button_stop').onclick = function() {
                    var sounds = document.getElementsByTagName('audio');
                        for(i=0; i<sounds.length; i++) sounds[i].pause();
                                const Http = new XMLHttpRequest();
                                const url='http://192.168.27.1/play.php?bvm=/z';
                                Http.open("GET", url);
                                Http.send();
                                Http.onreadystatechange=(e)=>{
                                console.log(Http.responseText);
                    }
                    }; 