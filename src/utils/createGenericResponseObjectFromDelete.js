function buildResponseMessage(catchedError) {
  return catchedError ? catchedError : "Entidade excluída com sucesso";
}

export default (deletionWasSuccessful, catchedError) => {
  return {
    success: deletionWasSuccessful,
    message: buildResponseMessage(catchedError)
  };
};
