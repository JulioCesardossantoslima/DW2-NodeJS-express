// UsuariosController.js para o controle de todas as rotas relacionadas ao usuário: /login /cadastro /autenticar etc. De acordo com a hierarquia MVC.
// Conta Teste: email:julio@email.com senha:1234
import express from "express";
const router = express.Router();
// Importando o Model
import Usuario from "../model/Usuario.js";
// Importando a biblioteca BCRYPT (hash de senha)
// Para isso, precisamos baixar, no terminal, o bcrypt com: npm install bcrypt
import bcrypt from "bcrypt";

// ROTA DE LOGIN
router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true, // Adicionando a variável loggedOut para indicar que o usuário está deslogado
    messages: req.flash() // Coletando a flash message e enviando para pagina
  });
});

// ROTA DE LOGOUT
router.get("/logout", (req, res) => {
  // Destruindo a sessão do usuário
  req.session.user = undefined;
  res.redirect("/");
})

// ROTA DE AUTENTICAÇÃO
router.post("/autenticar", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;

  // Buscando o usuário no banco
  Usuario.findOne({ where: { email: email } })
    .then((usuario) => {
      // SE O USUÁRIO EXISTIR
      if (usuario != undefined) {
        // Se o usuário existe, valide a senha para ver se ela bate com o banco de dados através do bcrypt
        // VALIDANDO A SENHA (HASH)
        const senhaCorreta = bcrypt.compareSync(password, usuario.password);
        // (password, usuario.password) -> password é o que o usuário digitou e usuario.password é a senha do banco. Estes dados serão comparados

        // SE A SENHA FOR VÁLIDA
        if (senhaCorreta) {
          // Autoriza o LOGIN e cria a sessão para o usuário
          req.session.user = {
            id: usuario.id,
            email: usuario.email,
          };
          // res.send(`Usuário logado:<br>
          //   ID: ${req.session.user.id}<br>
          //   Email: ${req.session.user.email}<br>
          //   <a href="/logout">Sair</a>`);
          // Ciando a mensagem de feedback de sucesso
          req.flash('success', 'Login efetuado com sucesso!');
          // Redirecionar usuario para a home page após login bem sucedido
          res.redirect("/");

          // SE A SENHA FOR INVÁLIDA
        } else {
          req.flash('danger', 'A senha informada está incorreta. Tente novamente.');
          res.redirect("/login");
        }

        // SE O USUÁRIO NÃO EXISTIR
      } else {
          req.flash('danger', 'O Usuário informado não existe. Verifique os dados e tente novamente.');
          res.redirect("/login");
      }
    })
    .catch((error) => {
      // Sem o catch, um erro no banco deixaria a página carregando para sempre
      console.log("Erro ao autenticar. Erro: " + error);
      res.status(500).send("Erro interno ao fazer login.");
    });
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    loggedOut: true, // Adicionando a variável loggedOut para indicar que o usuário está deslogado
    messages: req.flash() // Coletando a flash message e enviando para pagina
    });
});

router.post("/cadastro/novo", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;

  // Verificando se o usuário já existe
  Usuario.findOne({ where: { email: email } })
    .then((usuario) => {
      // Usuário não encontrado
      if (usuario == undefined) {
        // Se o usuário não foi encontrado, então cadastra o usuário:

        // Algoritmo para o hash de senha, com o mesmo salt para todas as senhas.
        // Salt é um valor numérico que entra no cálculo do hash. Ele pode ser aleatório todas as vezes, ou ser o mesmo com a mesma senha.
        // GERANDO O HASH DE SENHA
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // Enviando para o banco de dados
        Usuario.create({
          email: email,
          password: hash,
        })
          .then(() => {
            res.redirect("/login");
          })
          .catch((error) => {
            console.log("Erro ao criar a conta. Erro: " + error);
            res.status(500).send("Erro ao criar a conta.");
          });
      } else {
        // USUÁRIO JÁ CADASTRADO
        req.flash('danger', 'O Usuário informado já está cadastrado. Tente novamente.');
          res.redirect("/cadastro");
      }
    })
    .catch((error) => {
      console.log("Erro ao buscar usuário. Erro: " + error);
      res.status(500).send("Erro interno.");
    });
});

export default router;