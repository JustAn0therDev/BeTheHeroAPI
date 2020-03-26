export default (deletionWasSuccessful, catchedError) => {
  return {
    success: deletionWasSuccessful,
    message: buildResponseMessage(catchedError)
  };
};

function buildResponseMessage(catchedError) {
  return catchedError ? catchedError : "Entidade excluída com sucesso";
}