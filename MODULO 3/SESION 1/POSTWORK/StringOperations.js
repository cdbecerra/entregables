const castPascalCaseToSnakeCase = (pascalCaseString) => {
    return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}

const castSnakeCaseToPascalCase = (snakeCaseString) => {
    const words = snakeCaseString.split('_');
    return words.map(word => word[0].toUpperCase() + word.substr(1)).join('');
}

const castPasalCaseToCamelCase = (pascalCaseString ) => {
    const words = pascalCaseString.split('_');
    return words.map(word => word[0].toUpperCase() + word.substr(1)).join('');
}

const castSnakeToCamelCase = (snakeCaseString) => {
    return snakeCaseString.replace(/_([A-Z])/g, function (primeraLetra, salida) {
        return salida.toUpperCase();
    });
}

module.exports = {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase, castPasalCaseToCamelCase, castSnakeToCamelCase};