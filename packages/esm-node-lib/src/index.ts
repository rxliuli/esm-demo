import path from 'path'
import { fileURLToPath } from 'url'

export const esmDirname = path.dirname(fileURLToPath(import.meta.url))
