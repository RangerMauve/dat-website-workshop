const fs = require('fs')

const files = fs.readdirSync(__dirname)

const index = `
<!DOCTYPE html>
<title>GIF LIST</title>

${files.map((file) => `
<img src="${file}">
`).join('')}

`
fs.writeFileSync('index.html', index)