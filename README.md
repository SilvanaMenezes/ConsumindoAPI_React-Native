<h1>Consumo de API com React Native</h1>
<img src="/buscadorCep/assets/Tela-1.png" align="right" height="440em"/>

### Objetivo:

- Desenvolver uma aplicação Mobile que demonstre o consumo de uma API RESTful.

### Desenvolvimento/ Aplicação/ Validação

### API Utilizada:
- [Api Viacep](https://viacep.com.br/) - Webservice gratuito para consulta de CEP.

### Validação:

A documentação indica tratar os seguintes erros:

- CEP no formato de _8_ dígitos;
- O campo não poder está vazio;
- Deve conter somente números;
- Para cada erro deve apresentar uma mensagem para o usuário.

## Aplicação

**Nota**: Importante ter o java na versão 17 ou mais recente.

## Etapa 1: Iniciar o servidor

Primeiro, você precisará iniciar o **Metro**, o _bundler_ JavaScript que vem _com_ o React Native.

Para iniciar o servidor, o seguinte comando na _raiz_ do projeto:

```bash
# usando npm
npm start
```

## Etapa 2: Inicie o aplicativo

Deixe o Bundler rodar em seu _próprio_ terminal. Abra um _novo_ terminal na _raiz_ do projeto.
Execute o seguinte comando para iniciar seu aplicativo _Android_:

```bash
# usando npm
npm run android
```

## Desenvolvimento:

### Formulamos a ideia utilizando a ferramenta Figma:

<img src="/buscadorCep/assets/figma.png" align="center" height="440em">

### Criação da Aplicação Android:

- Adicionamos as dependências necessárias para realizar as requisições HTTP e processar o JSON no projeto.
- Implementamos a lógica para consumir a API.

### Exemplo de uso

- Simulação de uso da aplicação

  <img src="https://github.com/SilvanaMenezes/ConsumindoAPI_React-Native/assets/56271202/cfb0ec3c-c80f-4c0f-b818-09c6b16be409" align="center" height="440em"/>

## Material de Apoio

- [Stack Mobile](https://youtu.be/Ri9ZsqXxLjg?si=7D19LS4Ze96Dil0c) - React Native - Criando um App de Buscador de Cep
- [Stack Mobile](https://youtu.be/wyT2GaU2zLg?si=G1CV5BspBKGFstxw) - React Native - Consumindo API de Cep com Axios  

### Desenvolvedoras

- <a href="https://github.com/Giuliana09">Giuliana</a>
- <a href="https://github.com/SilvanaMenezes">Silvana</a>
