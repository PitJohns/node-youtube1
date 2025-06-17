// File System

const { error } = require('console')
const { errorMonitor } = require('events')
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//    if(err) {
//     throw error
//    }

//    console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello NODEJS!', err => {
//     if (err) {
//         throw err 
//     }

//     console.log('Файл создан')

//     fs.appendFile(filePath, '\nHello Again, Bitch!', err => {
//     if (err) {
//         throw err 
//     }

//     console.log('Файл создан')
//     })

// })

 fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }

    console.log(content)
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())
 })
