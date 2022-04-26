const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/granite.ts'),
      name: 'Granite',
      fileName: (format) => `granite.${format}.js`
    },
  }
})

