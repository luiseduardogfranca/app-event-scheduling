# Event Scheduling 🗓

This project is an event scheduling application front-end, developed in JavaScript with ReactJS framewook, to manage an event list and return all events divided by tracks.

Link to Event Scheduling app: [https://app-scheduling-event.herokuapp.com/](https://app-scheduling-event.herokuapp.com/)

## API repository

This application use the [Scheduling Events API](https://github.com/luiseduardogfranca/event-scheduling) to manage all events and get a list of tracks.

## Depedencies

- reactjs
- axios

### CI/CD

This application has deployed in Heroku with deploy automatic when the master branch is pushed.

Note: The free dynos enter the sleep mode after time, so the UpTimeRobot is used to ping in dyno every 15min.

## Get started

1. Clone repository
2. Install dependencies
3. Run application in your browser

### 1. Clone repository

Clone this repository in your machine:

```sh
$ git clone git@github.com:luiseduardogfranca/app-event-scheduling.git
```

#### 2. Install depedencies

From directory of project, run the following commands:

```sh
# Install depedencies with npm:
$  npm install

# Run the application in localhost:3001 with the following command:
$  npm start

# Open application in your browser:
localhost:3001/api/v1/sendEvents
```

## File example

Create a file with .txt extension.

```
Diminuindo tempo de execução de testes em aplicações Rails enterprise 60min
Reinventando a roda em ASP clássico 45min
Apresentando Lua para as massas 30min
Erros de Ruby oriundos de versões erradas de gems 45min
Erros comuns em Ruby 45min
Rails para usuários de Django lightning
Trabalho remoto: prós e cons 60min
Desenvolvimento orientado a gambiarras 45min
Aplicações isomórficas: o futuro (que talvez nunca chegaremos) 30min
Codifique menos, Escreva mais! 30min
Programação em par 45min
A mágica do Rails: como ser mais produtivo 60min
Ruby on Rails: Por que devemos deixá-lo para trás 60min
Clojure engoliu Scala: migrando minha aplicação 45min
Ensinando programação nas grotas de Maceió 30min
Ruby vs. Clojure para desenvolvimento backend 30min
Manutenção de aplicações legadas em Ruby on Rails 60min
Um mundo sem StackOverflow 30min
Otimizando CSS em aplicações Rails 30min
```
