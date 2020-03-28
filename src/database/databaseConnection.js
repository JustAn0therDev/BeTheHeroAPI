import knex from "knex";
import configuration from "../../knexfile";

const environmentVariableForDbConnection =
  process.env.NODE_ENV === "test" 
  ? configuration.test 
  : configuration.development;

export default knex(environmentVariableForDbConnection);
