# Some utilities

## Installing
 `npm install @joao.hencke/utils`

## Usage
```javascript
 const { generator } = require('@joao.hencke/utils');
 generator.cnpj();
 generator.cpf();
 generator.creditCard(generator.creditCard.schemas.MasterCard);
 generator.creditCard(generator.creditCard.schemas.Visa);
```

## Generators
 - CPF
 - CNPJ
 - Credit Card
 
## String
 - Base64 - Check if String is a valid base64
 - Reverse - 
 ```javascript 
 const str = 'reverse'
 reverse(str) //esrever
 ```
 
## Object 
 - is - Check type.
 ```javascript 
 const arr = []
 is('array', arr) //true - uses Object.prototype.toString method
 ```
 
 ## Array
 - flatten - flatten an array of arrays
 ```javascript
 const arr = [1, [2, 3], [4, [5]]]
 flatten(arr) // [1, 2, 3, 4, 5]
 ```
