        //отбить в консоль если все услышала правильно
        annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
            console.log('Сказал:',userSaid); //пример: 'hello'
            console.log('Текст команды: ',commandText); // 'hello (there)'
            console.log('Это может быть любой из следующих: ',phrases); // ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
        });
        //отбить в консоль если не поняла
        annyang.addCallback('resultNoMatch', function(phrases) {
            console.log("Вы пытались сказать: ", phrases[0]);
            console.log("Но опять же, это может быть любой из следующих: ", phrases);
        });


        annyang.addCallback('soundstart', function() {
            console.log('услышан звук');
        });

        annyang.addCallback('result', function() {
            console.log('звук прекратился');
        });
        var socket = null;
        function setupSocket(token) {
            socket = io.connect('/', {query: 'token=' + token});
            push_response('Обновляю базу данных...');
            
            socket.on('set_name', function(msg) {
                var name = msg.name;
                annyang.setLanguage('ru');

                name="Вика"
                if (!name){
                    name = "Вика";
                }   
                $(".loading").remove();
                if (annyang) {
                    var commands = {};
                    commands["Витя"+ " *tag"] = log_speech;
                    commands["клиника"+ " *tag"] = log_speech;
                    commands["Clinique"+ " *tag"] = log_speech;
                    commands["викка"+ " *tag"] = log_speech;
                    commands["века"+ " *tag"] = log_speech;
                    commands["Vika"+ " *tag"] = log_speech;
                    commands["wika"+ " *tag"] = log_speech;
                    commands["VIKO"+ " *tag"] = log_speech;
                    commands["Eureka"+ " *tag"] = log_speech;
                    commands["Erica"+ " *tag"] = log_speech;
                    commands["Topeka"+ " *tag"] = log_speech;
                    commands["река"+ " *tag"] = log_speech;
                    commands["рейка"+ " *tag"] = log_speech;
                    commands["Drake"+ " *tag"] = log_speech;
                    commands["Рико"+ " *tag"] = log_speech;
                    commands[name + " *tag"] = log_speech;
                    console.log('Установленное имя: ',name);
                    commands["(слушай) " + name + " *tag"] = log_speech;
                    commands["(hey) " + name + " *tag"] = log_speech;
                    commands["(okay) " + name + " *tag"] = log_speech;
                    commands[name] = observe_speech;
                    annyang.addCommands(commands);
                    SpeechKITT.setInstructionsText('Скажите "' + name + '"' );
                    //SpeechKITT.setSampleCommands(["Сколько времени ?","Помоги мне "]);
                }
            });
            socket.on('response', function(msg) {
                $(".loading").remove();
                response_handler(msg);
            });
        }