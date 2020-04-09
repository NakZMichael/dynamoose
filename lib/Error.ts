class CustomError extends Error {
	name: string;
	message: string;

	constructor(message: string, defaultMessage: string, errorName: string) {
		super();
		this.name = errorName;
		this.message = message || defaultMessage;
		return this;
	}
}

const makeError = (defaultMessage: string, errorName: string) => (message: string): CustomError => new CustomError(message, defaultMessage, errorName);

export = {
	"MissingSchemaError": makeError("Missing Schema", "MissingSchemaError"),
	"InvalidParameter": makeError("Invalid Parameter", "InvalidParameter"),
	"InvalidParameterType": makeError("Invalid Parameter Type", "InvalidParameterType"),
	"UnknownAttribute": makeError("The attribute can not be found", "UnknownAttribute"),
	"InvalidType": makeError("Invalid Type", "InvalidType"),
	"WaitForActiveTimeout": makeError("Waiting for table to be active has timed out", "WaitForActiveTimeout"),
	"TypeMismatch": makeError("There was a type mismatch between the schema and document", "TypeMismatch"),
	"InvalidFilterComparison": makeError("That filter comparison is invalid", "InvalidFilterComparison"),
	"ValidationError": makeError("There was an validation error with the document", "ValidationError")
};