function CheckHttpStatusCode(statusCode) {
  switch (statusCode) {
    case "400":
      return "Há um ou mais erros no parâmetro passado para o serviço.";
    case "401":
      return "Operação não-autorizada";
    case "403":
      return "Usuário não está autenticado";
    case "404":
      return "Recurso não encontrado";
    case "500":
      return "Não foi possível completar a ação solicitada";
    default:
      return "Ocorreu um erro durante a execução do pedido.";
  }
}

export default statusCode => {
  return {
    success: false,
    message: CheckHttpStatusCode(statusCode)
  };
};
