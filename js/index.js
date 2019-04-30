$('.chat[data-chat=person2]').addClass('active-chat')
$('.person[data-chat=person2]').addClass('active')
$('.left .person').mousedown(function () {
    if ($(this).hasClass('.active')) {
        return false
    }
    const findChat = $(this).attr('data-chat')
    const personName = $(this).find('.name').text()
    $('.right .top .name').html(personName)
    $('.chat').removeClass('active-chat')
    $('.left .person').removeClass('active')
    $(this).addClass('active')
    $('.chat[data-chat = ' + findChat + ']').addClass('active-chat')
})

function push_statment(msg) {
    $('.chat').append('<div id="'+msg+'" class="bubble me">' + msg + '</div>')
}

function push_silent_response(msg) {
    $('.chat').append('<div class="bubble you">' + msg + '</div>')
}

function push_response(msg, callback) {
    if (msg == 'Обновляю базу данных...') {
        $('.chat').append('<div class="bubble you loading">' + msg + '</div>')
    } else {
        speak_response(msg, callback)

        if (msg.toLowerCase().indexOf('облачно') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fas fa-cloud"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('дождём') != -1 || msg.toLowerCase().indexOf(' DRIZZLE') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fas fa-cloud-showers-heavy"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('чисто') != -1 ) {
            $('.chat').append('<div class="bubble you"><i class="far fa-sun"></i>' + ' ' + msg + '</div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')    
        } else if (msg.toLowerCase().indexOf('дымом') != -1 || msg.toLowerCase().indexOf(' дымкой') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fas fa-smog"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('курс') != -1 || msg.toLowerCase().indexOf(' валют') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fab fa-bitcoin"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('солнечном') != -1 || msg.toLowerCase().indexOf('AND CLEAR') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fas fa-cloud-sun"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav">/div>')
        } else if (msg.toLowerCase().indexOf('снегом') != -1) {
            $('.chat').append('<div class="bubble you"><i class="far fa-snowflake"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('подкидываю') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fas fa-coins"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('am') != -1 || msg.toLowerCase().indexOf('pm') != -1) {
            $('.chat').append('<div class="bubble you"><i class="far fa-clock"></i>' + ' ' + msg + '</div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('договор') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fa fa-address-card" aria-hidden="true"></i>' + ' ' + msg + '</div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('спасибо') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grin-beam-sweat"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('иди сюда') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grin-wink"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('фото') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grimace"></i>/div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('самоунччтожение') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grin-squint-tears"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('работаю') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grin-hearts"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('до свидания') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grin"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('калькулятором') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="fas fa-calculator"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('семья') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="fas fa-users"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')

        } else {
            $('.chat').append('<div class="bubble you">' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="https://tts.voicetech.yandex.net/generate?text='+msg.toLowerCase()+'&format=wav&lang=ru-RU&speaker=oksana&key=bf4277fc-06c0-405a-b278-b796bbbd3f27&speed=1&emotion=good" type="audio/x-wav"></div>')
        }
    }
}



function push_rhvoice_response(msg, callback) {
    if (msg == 'Обновляю базу данных...') {
        $('.chat').append('<div class="bubble you loading">' + msg + '</div>')
    } else {
        speak_response(msg, callback)

        if (msg.toLowerCase().indexOf('облачно') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fas fa-cloud"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('дождём') != -1 || msg.toLowerCase().indexOf(' DRIZZLE') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fas fa-cloud-showers-heavy"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('чисто') != -1 ) {
            $('.chat').append('<div class="bubble you"><i class="far fa-sun"></i>' + ' ' + msg + '</div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')    
        } else if (msg.toLowerCase().indexOf('дымом') != -1 || msg.toLowerCase().indexOf(' дымкой') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fas fa-smog"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('курс') != -1 || msg.toLowerCase().indexOf(' валют') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fab fa-bitcoin"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('солнечном') != -1 || msg.toLowerCase().indexOf('AND CLEAR') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fas fa-cloud-sun"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav">/div>')
        } else if (msg.toLowerCase().indexOf('снегом') != -1) {
            $('.chat').append('<div class="bubble you"><i class="far fa-snowflake"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('подкидываю') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fas fa-coins"></i>' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('am') != -1 || msg.toLowerCase().indexOf('pm') != -1) {
            $('.chat').append('<div class="bubble you"><i class="far fa-clock"></i>' + ' ' + msg + '</div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('договор') != -1) {
            $('.chat').append('<div class="bubble you"><i class="fa fa-address-card" aria-hidden="true"></i>' + ' ' + msg + '</div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('спасибо') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grin-beam-sweat"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('иди сюда') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grin-wink"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('фото') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grimace"></i>/div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('самоунччтожение') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grin-squint-tears"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('работаю') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grin-hearts"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('до свидания') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="far fa-grin"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('калькулятором') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="fas fa-calculator"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        } else if (msg.toLowerCase().indexOf('семья') != -1) {
            $('.chat').append('<div class="bubble you">' + ' ' + msg +' '+ '<i class="fas fa-users"></i></div><div><audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        


        } else {
            $('.chat').append('<div class="bubble you">' + ' ' + msg + '<audio id="player" controls="" autoplay="metadata" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav"></div>')
        }
    }
}


//<audio controls="" autoplay="" preload="auto"><source src="http://localhost:8080/say?text='+msg.toLowerCase()+'" type="audio/x-wav">


function push_yt_response(id) {
    $('.chat').append('<div style="border-radius: 5px !important;" class="bubble you"><div id="player_container"><div class="player" id="player' + id + '"></div></div></div>')
}

function push_picture(id) {
    $('.chat').append('<div style="border-radius: 5px !important;" class="bubble you"><div id="image_container"><picture> <img src="http://localhost/1.png" alt="Flowers" style="width: 100px;height: 100px;background-color: #fec337;"> </picture></div></div>')
}


function push_timer_response(msg) {
    if (!msg) {
        $('.chat').append('<div class="bubble you countdown"/>')
    } else {
        // $('.countdown').remove();
        const old = document.getElementsByClassName('countdown')[0]
        old.innerHTML = msg
        $('.countdown').removeClass('countdown')
    }
}

function push_movie_response(id) {
    const old = document.getElementById('movie')

    if (old) {
        old.innerHTML = ''
    }
    $('.chat').append('<div style="border-radius: 5px !important;" class="bubble you"><div id="movie"><div class="loader"></div></div></div>')
}

$('#textbox').keypress(function (e) {
    if (e.which == 13) {
        $(this).blur()
        log_speech($('#textbox').val())
        document.getElementById('textbox').value = ''

        return false
    }
})
