import { esmDirname } from 'esm-node-lib/src/index'
import { cjsDirname } from 'cjs-node-lib/src/index'
import { createRequire } from 'module'

console.log(esmDirname)
console.log((await import('esm-node-lib/package.json')).name)
// console.log(cjsDirname) // 会出错
console.log(createRequire(import.meta.url)('cjs-node-lib/src/index').cjsDirname)
console.log((await import('cjs-node-lib/package.json')).name)
