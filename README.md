# lavrenkovnv.github.io
# VIKA - Нейросетевой персональный ассистент
используется библиотеки:
Natural language, Node.js + Bootstrap

# Зависимости проекта

- Node.js 6
- Python >= 2 recomended 3
- Yarn / npm
 
# Установка и настройка

## Установка

Установить Yarn https://yarnpkg.com/en/docs/install

Склонировать репозиторий, cd в папку и написать `yarn` & `yarn start`

Добавить api ключ для http://openweathermap.org/api и https://newsapi.org/account в `config/index.js`

Открыть Chrome и написать http://localhost:4567/

Сказать `Хей Вика`, `Вика` или `Окей Вика` после чего сказать команду (прим. `Вика, что ты умеешь?`).

## Установка - Дополнительные Windows Инструкции

Установить Python: https://www.python.org/downloads/windows/

Установить Node.js v6: https://nodejs.org/en/download/

Установить Windows Build Tools: `npm install --global --production windows-build-tools`


# Навыки

## Добавление Навыков

Добавление навыка происходит посредством создания папки с названием навыка и добавлением внутрь её `index.js` файла.

добавить функции для `intent` и `{skill_name}_resp` к этому индексу, последний ограничивает логику, которая будет отвечать на запрос. `{skill_name}_resp` функция должна обязательно возвращать значения в формате `String`

В `intent` добавить `return {keywords:['key 1','key 2'], module:'{skill_name}'}` где `keywords` фразы, на которые вы хотели бы умение реагировать и `{skill_name}` это название вашего нового навыка.

Добавить `module.exports = {intent, get: {skill_name}_resp};` в конец ващего файла `index.js`

Добавить новую папку в `skills` директорию проекта.

И ура, Вика будет автоматически импортировать и включать ваш новый навык!

### API

Если нужно больше информации по добавлению навыков посмотрите страничку Wiki [Добавление Навыков](https://github.com/patrickjquinn/P-Brain.ai/wiki/Adding-Skills).

# Клиенты

### Веб клиент
`http://localhost:4567/api/ask?q={query}`
`http://localhost:4567/`
`http://localhost:4567/settings.html`
`http://localhost:4567/users.html`

### Raspberry Pi Client 

The Raspberry Pi Client for this project is available here: https://github.com/patrickjquinn/P-Brain.ai-RasPi

### Android клиент

https://github.com/timstableford/P-BrainAndroid

### iOS клиент

https://github.com/patrickjquinn/P-Brain.ai-iOS

# Установка и работа через Docker

Вы моете запустить данное приложение в Docker контейнере, это будет даже более правильно. Необходимые условия: у вас установлен docker.io {Есть сразу в офф репозитории Ubuntu, для Debian собираем из исходников}
и локально клонируем этот репозиторий. Затем выполните следующую команду, чтобы создать образ докера
с названием vika и контейнер vika.

    docker build -t vika .
    docker run --name=vika --net=host -v `pwd`:/home/app -v /home/app/node_modules -p 4567:4567  vika npm start

После этого вы можете остановить контейнер, запустив `docker stop vika`. запустить его заного
достаточно написать `docker start vika`.
