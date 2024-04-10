<h1>Consumo de API com React Native</h1>
<img src="https://github.com/SilvanaMenezes/ConsumindoAPI_React-Native/assets/113936753/b6f5a84f-48f1-42a3-a699-5d36b4d81026" align="right" height="440em"/>

### Objetivo:

- Desenvolver uma aplicação Mobile que demonstre o consumo de uma API RESTful.

### Desenvolvimento/ Aplicação/ Validação

### API Utilizada:
- [Api Viacep](https://viacep.com.br/) - Webservice gratuito para consulta de CEP.

### Validação:

Os erros trabalhados foram em cima da documentação da api cita, são eles:

- CEP no formato de _8_ dígitos;
- O campo não poder está vazio;
- Deve conter somente números.
- Para cada erro o usuario recebe uma mensagem notificando-o 

## Aplicação

>**Nota**: Importante ter o java na versão 17 ou mais recente.

## Etapa 1: Iniciar o servidor

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

Para iniciar o servidor,  o seguinte comando no _raiz_ do projeto:

```bash
# usando npm
npm start
```

## Etapa 2: Inicie o aplicativo

Deixe o Bundler rodar em seu _próprio_ terminal. Abra um _novo_ terminal na _raiz_ do projeto. Execute o seguinte comando para iniciar seu aplicativo _Android_:

```bash
# usando npm
npm run android
```

## Desenvolvimento:

### Pesquisa e Seleção da API:

- Pesquise e selecione uma API RESTful de seu interesse.
- -A API escolhida deve fornecer dados ou funcionalidades que possam ser utilizados em uma aplicação Android.
- Leia a documentação da API para entender os endpoints disponíveis, os formatos de dados suportados e os requisitos de autenticação (se houver).

### Criação da Aplicação Android:

- Adicione as dependências necessárias para realizar requisições HTTP e processar JSON no seu projeto.
- Implemente a lógica para consumir a API, incluindo:

 ### Desenvolvimento da Interface do Usuário:

- Crie uma interface gráfica simples para apresentar os dados obtidos da API.
- Utilize elementos visuais como TextView, ListView ou RecyclerView para exibir os dados de forma organizada e amigável ao usuário.

## Critérios de Avaliação:

- Funcionalidade: A aplicação deve consumir a API corretamente e apresentar os dados de forma organizada.
- Interface do Usuário: A interface deve ser simples, intuitiva e agradável ao usuário.
- Desempenho: A aplicação deve ser responsiva e funcionar sem travamentos.
- Documentação: A documentação deve ser clara e completa, descrevendo a aplicação, a API utilizada e as instruções de uso.
