const obj = {
    Nome: "Anderson",
    Idade: 16,
    Sexo: "Masculino",
    Altura: 1.69,
    Namora: true,
    Trabalha: false,
    Hobbies: [
        "Academia",
        "Programar"
    ]
}

//Converter objeto para JSON

const jsonData = JSON.stringify(obj)
console.log(jsonData)

//Converter JSON para objeto

const objData = JSON.parse(jsonData)
console.log(objData)