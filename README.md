<img align ="right" height"590em" 
src="https://raw.githubusercontent.com/gist/Giuliana09/482bbbe5f74eefef2e4d8f393944fa6e/raw/1010c5306d3428e6d1370a2f9fdb3170ae2ea239/layoutAppMobile.svg"/>
<h1>Consumo de API com React Native<h1/>

<br>
  
<h2>Objetivo:</h2>

- Desenvolver uma aplicação Mobile que demonstre o consumo de uma API RESTful.

###

<h2>Desenvolvimento/ Aplicação/ Validação</h2>

### API Utilizada:
- [Api Viacep](https://viacep.com.br/) - Webservice gratuito para consulta de (CEP) do Brasil.

<br>

## Validação:

Os erros trabalhados foram em cima da documentação da api cita, são eles:
<br>
- CEP no formato de _8_ dígitos;
- O campo não poder está vazio;
- Deve conter somente números.
- Para cada erro o usuario recebe uma mensagem notificando-o 

<br>

###

## Aplicação

>**Nota**: Importante ter o java na versão 17 ou mais recente.

## Etapa 1: Iniciar o servidor

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

Para iniciar o servidor,  o seguinte comando no _raiz_ do projeto:

```bash
# usando npm
npm start
```

## Step 2: Inicie o aplicativo

Deixe o Bundler rodar em seu _próprio_ terminal. Abra um _novo_ terminal na _raiz_ do projeto. Execute o seguinte comando para iniciar seu aplicativo _Android_:

```bash
# usando npm
npm run android
```

Esta é uma maneira de executar o aplicativo :tada:

###

## Desenvolvimento:

### Pesquisa e Seleção da API:

- Pesquise e selecione uma API RESTful de seu interesse.
- -A API escolhida deve fornecer dados ou funcionalidades que possam ser utilizados em uma aplicação Android.
- Leia a documentação da API para entender os endpoints disponíveis, os formatos de dados suportados e os requisitos de autenticação (se houver).

<br>

###Criação da Aplicação Android:

- Adicione as dependências necessárias para realizar requisições HTTP e processar JSON no seu projeto.
- Implemente a lógica para consumir a API, incluindo:

  ### Desenvolvimento da Interface do Usuário:

- Crie uma interface gráfica simples para apresentar os dados obtidos da API.
- Utilize elementos visuais como TextView, ListView ou RecyclerView para exibir os dados de forma organizada e amigável ao usuário.

### Critérios de Avaliação:

- Funcionalidade: A aplicação deve consumir a API corretamente e apresentar os dados de forma organizada.
- Interface do Usuário: A interface deve ser simples, intuitiva e agradável ao usuário.
- Desempenho: A aplicação deve ser responsiva e funcionar sem travamentos.
- Documentação: A documentação deve ser clara e completa, descrevendo a aplicação, a API utilizada e as instruções de uso.

###
