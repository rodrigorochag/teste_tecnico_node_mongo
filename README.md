# Teste Técnico Backend

<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#solucao">Solução</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#pastas">Estrutura das pastas</a> • 
 <a href="#instalacao">Manual de instalação</a> • 
  <a href="#manual_uso">Manual de uso</a> • 
 <a href="#autor">Autor</a>
</p>

<p align="left" id=objetivo> Este desafio teve como objetivo desenvolver um sistema para que os dados de sensores de geolocalização sejam enviados para o servidor, possibilitando uma busca através do ID do dispostitivo através do endpoint na URL. </p>


<p align="left" id=solucao> A solução proposta visou desenvolver um sistema de comunicação baseada em API Rest através de um objeto JSON contendo informações específicas, sendo possível acessar o objeto através de um endpoint na URL ou então na região em destaque na página principal. Exemplo: <i> "/api/v1/location/:device_id".</i> Onde o "device_id" seria responsável por identificar o objeto. </p>

![Exemplo dos dados salvos no banco](https://github.com/rodrigorochag/teste_tecnico_node_mongo/blob/main/exemplo.PNG)

<p align="left" id=tecnologias> A sistema foi desenvolvido utilizando a linguagem de programação <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript<a/>. Através do ambiente backend <a href="https://nodejs.org/en/docs/">Node.JS</a> foi possível desenvolver uma arquitetura que suporte a comunicação web entre servidores, sendo eles de desenvolvimento ou produção. Com o auxílio do framework próprio para o Node.JS, o <a href="https://expressjs.com/pt-br/">Express JS</a> permitiu auxiliar a construção do servidor. Para que os objetos JSON fiquem armazenados no sistema e que seja possível realizar um CRUD para resgatar os dados, foi utilizado o <a href="https://www.mongodb.com/">MongoDB</a> haja vista que a tecnologia permite que dados não estruturados sejam acessados facilmente através do sistema.  </p>   <a href=""></a>
  
  
  

<p align="left" id=estrutura> O projeto conta com diversos arquivos essenciais para o seu funcionamento e para o funcionamento das bibliotecas citadas acima </p>

<p id=pastas>Estrutura das pastas e arquivos:</p>


```

├── teste_tecnico_node_mongo
│   ├── package-lock.json # Arquivo essencial com dependecias e configurações
│   ├── package.json  # Arquivo essencial com dependecias e configurações
│   ├── index.js # Arquivo com as requires e configurações para comunicação com o servidor
│   ├── index.html # Arquivo com o estilo e interações com o sistema
│   ├── README.md # README do repositório
│   ├── css
│   │   └── style.css # Estilo da página HTML
│   ├── js
│   │   └── search.js # Funções de CRUD
│   │   └── trata_hash.js # responsável por separar o HASH em indices de um array
│   │   └── traduz.js # responsável por realizar os calculos
│   ├── models
│   │   └── Location.js # Modelo do que é armazenado no banco de dados
│   ├── node_modules
│   │   └── ... # Diversos arquivos do Node.js
│   ├── routes
│   │   └── locationRoutes.js # Configurações de rotas e interações com o sistema
```


<p align="left" id=instalacao>Para utilizar o sistema do desafio, é necessário realizar os seguintes comandos: </p>

```
$ mkdir projeto
$ cd projeto
$ git clone https://github.com/rodrigorochag/teste_tecnico_andre.git
$ cd teste_tecnico_andre
$ npm i
$ npm start
```

<p align="left" id=manual_uso>

 Para utilizar o sistema, é necessário executar o comando <i>"npm start"</i> e abrir o console do seu browser. Nesta versão, é possível realizar o post do HASH e salvar no banco de dados apenas se os cálculos e o HASH forem compatíveis. Se o HASH for compatível, ele é salvo no banco de dados, se não, é exibido uma mensagem de erro instruindo sobre o que deve ser feito.
 
</p>




<p align="left" id=autor>O projeto foi desenvolvido por <a href="https://github.com/rodrigorochag"> Rodrigo Rocha</a> </p>
