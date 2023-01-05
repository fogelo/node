const fs = require("fs")
const path = require("path")

//?создание папки. Есть синхронные и асинхронные варианты методов
// fs.mkdirSync(path.resolve(__dirname, "dir"))

// fs.mkdir(path.resolve(__dirname, "dir"), (err => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("Папка создана")
// }))

//rmdir - удаление папки
//writeFile - создание файла и запись в него чего нибудь
//appendFile - дозаписывает что-то в конец файла

//? Пример записи в файл
// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, err => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }
//
// writeFileAsync(path.resolve(__dirname, "text.txt"), "data")

//? Пример чтения из файла
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
        if (err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}
readFileAsync(path.resolve(__dirname, "text.txt")).then(data => {
    const obj = {
        data: data.match(/\s\W\W\W\s/g)
    }
    console.log(obj)
})
