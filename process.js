//?получение id текущего процесса
console.log(process.pid)

//? Если запустить такой код в диспетчере задач появится процесс, его можно убить 'kill id-процесса'
// while (true) {
//
// }

//? Можно получить доступ к переменным среды
// console.log(process.env)

//? использование переменных окружения из файла .env
const dotenv = require("dotenv")
dotenv.config()

console.log(process.env.ZXCVBN)

