
const { castPasalCaseToCamelCase, castSnakeToCamelCase} = require("./StringOperations");


const testCastPascalCaseToCamelCase = () => {
    
    executeTest("Hola mundo", "HOLAMUNDO". castPascalCaseToCamelCase);
    executeTest("Hola mundo", "Hola mundo". castPascalCaseToCamelCase);
   
}

const testcastSnakeCaseToCamelCase = () => {
    executeTest("Hola_mundo", "HOLAMUNDO", castSnakeCaseToCamelCase);
    executeTest("Hola_mundo", "Hola_mundo", castSnakeCaseToCamelCase);
   
}


function executeTest  (input, expectedOutput, functionToExecute) {
    const actualOutput = functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}


testCastPascalCaseToCamelCase();
testcastCamelCaseToPascalCase();
testcastSnakeCaseToCamelCase();


