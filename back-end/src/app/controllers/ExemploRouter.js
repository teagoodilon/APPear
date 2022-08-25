import { Router } from 'express';
import ExemploSchema from '@/app/schemas/Exemplo';
import { isValidObjectId } from 'mongoose'; //ignorem essa importação de início

const ExemploRouter = new Router();

ExemploRouter.get('/hello', (req, res) => {
  return res.send({ message: 'Hello world!' });
});

ExemploRouter.post('/', (req, res) => {
  const { titulo, descricao } = req.body; //Atribuição via desestruturação

  //A desestruturação busca pelos parametros "titulo" e "descricao" dentro do objeto
  //req.body e atribui esses valores para as variaveis com os mesmos nomes ("titulo" e "descricao")
  //Detalhes em:
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao

  if (!titulo) return res.status(400).send({ erro: 'É necessário um título' });
  if (!descricao)
    return res.status(400).send({ erro: 'É necessária uma descrição' });

  //Se chegar até aqui, significa que tá tudo certo
  ExemploSchema.create({ titulo, descricao })
    .then((resultado) => {
      return res.send(resultado);
    })
    .catch((err) => {
      console.error(err, 'Erro ao criar objeto');
      return res.status(500).send({ erro: 'Erro interno do servidor' });
    });
});

ExemploRouter.get('/', (req, res) => {
  ExemploSchema.find()
    .then((resultado) => {
      return res.send(resultado);
    })
    .catch((err) => {
      console.error(err, 'Erro ao listar objetos');
      return res.status(500).send({ erro: 'Erro interno do servidor' });
    });
});

ExemploRouter.put('/:id', (req, res) => {
  //:id significa que id é um parâmetro da requisição
  //é possivel obter o id através de req.params.id
  const id = req.params.id;
  const { titulo, descricao } = req.body;

  if (!id) return res.status(400).send({ erro: 'ID é obrigatório' });
  if (!isValidObjectId(id))
    return res.status(400).send({ erro: 'ID inválido' });

  ExemploSchema.findByIdAndUpdate(id, { titulo, descricao })
    .then((resultado) => {
      if (resultado) return res.send(resultado);
      //Retorna o resultado antes da mudança, apesar de ter modificado
      else return res.status(404).send({ erro: 'Objeto não encontrado' });

      //Quando algum método de find do mongoose vai para o then, significa que o processo de busca deu certo,
      //mas não significa que foi encontrado, por isso é necessário o if e else
    })
    .catch((err) => {
      console.error(err, 'Erro ao editar o objeto');
      return res.status(500).send({ erro: 'Erro interno do servidor' });
    });
});

ExemploRouter.delete('/:id', (req, res) => {
  const id = req.params.id;

  if (!id) return res.status(400).send({ erro: 'ID é obrigatório' });
  if (!isValidObjectId(id))
    return res.status(400).send({ erro: 'ID inválido' });

  ExemploSchema.findByIdAndRemove(id)
    .then((resultado) => {
      if (resultado) return res.send(resultado);
      else return res.status(404).send({ erro: 'Objeto não encontrado' });
    })
    .catch((err) => {
      console.error(err, 'Erro ao remover objeto');
      return res.status(500).send({ erro: 'Erro interno do servidor' });
    });
});

export default ExemploRouter;
