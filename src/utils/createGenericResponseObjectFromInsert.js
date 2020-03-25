  function buildResponseMessage(catchedError) {
    return catchedError ? catchedError : "Entidade cadastrada com sucesso";
  }
  
  export default (id, catchedError) => {
    let ifAnIdWasGenerated = id !== undefined ? true : false;
    return {
      success: ifAnIdWasGenerated,
      message: buildResponseMessage(catchedError),
      id
    };
  };
  