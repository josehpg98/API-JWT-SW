const { Router } = require('express');

const controleAutores = require('./conttroladores/autor');
const controleTarefas = require("./conttroladores/tarefa");
const seguranca = require('./conttroladores/seguranca');

const rotas = new Router();

rotas.route("/login")
     .post(seguranca.login)

rotas.route('/autores')
   .get(seguranca.verificaJWT, controleAutores.getAutores)
   .post(seguranca.verificaJWT, controleAutores.addAutor)
   .put(seguranca.verificaJWT, controleAutores.updateAutor)

rotas.route('/autores/:codigo')
   .get(seguranca.verificaJWT, controleAutores.getAutorPorCodigo)
   .delete(seguranca.verificaJWT, controleAutores.deleteAutor)


rotas.route('/tarefas')
     .get(seguranca.verificaJWT, controleTarefas.getTarefas)
     .post(seguranca.verificaJWT, controleTarefas.addTarefa)
     .put(seguranca.verificaJWT, controleTarefas.updateTarefa)

rotas.route('/tarefas/:codigo')
     .delete(seguranca.verificaJWT, controleTarefas.deleteTarefa)

module.exports = rotas;