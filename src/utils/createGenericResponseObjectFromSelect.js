function CheckIfObjectHasRelevantValue(objectToReturnAsResponse) {
  switch (typeof objectToReturnAsResponse) {
    case "array":
      return objectHasRelevantValue && objectToReturnAsResponse.length > 0
        ? true
        : false;
    case "number":
      return objectToReturnAsResponse > 0 
      ? true 
      : false;
    case "string":
      return objectToReturnAsResponse !== "" 
      ? true 
      : false;
    case "object":
      return objectToReturnAsResponse 
      ? true 
      : false;
  }
}

function buildResponseSuccess(objectToReturnAsResponse) {
  let objectReturnedWithRelevantValue = CheckIfObjectHasRelevantValue(
    objectToReturnAsResponse
  );

  return objectReturnedWithRelevantValue;
}

function buildResponseMessage(objectToReturnAsResponse) {
  return CheckIfObjectHasRelevantValue(objectToReturnAsResponse)
    ? "Dados resgatados com sucesso"
    : "Ocorreu um erro durante o resgate dos dados.";
}

export default (propertyName, objectToReturnAsResponse) => {
  let createdResponse = {
    success: buildResponseSuccess(objectToReturnAsResponse),
    message: buildResponseMessage(objectToReturnAsResponse)
  };
  createdResponse[propertyName] = objectToReturnAsResponse;
  
  return createdResponse;
};
