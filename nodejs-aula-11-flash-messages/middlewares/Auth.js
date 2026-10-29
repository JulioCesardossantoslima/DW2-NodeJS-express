// Este middleware será invocado a cada requisição do usuário em rotas especificas para checar se o usuário está logado ou não. Se não estiver logado, será redirecionado para a página de login.

function Auth(req, res, next) {
  // Next faz que o fluxo do programa continue.
  // Verificando se a sessão de usuário existe
  if (req.session.user != undefined) {
    // Prosseguir
    next();
  } else {
    // Se a sessão não existir, redireciona para a página de login
    res.redirect("/login?loggedOut=true");
  }
}

export default Auth;
