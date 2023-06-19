import fs from 'fs'
import path from 'path'

export const POST_PATH = path.join(process.cwd(), `${process.env.NEXT_PUBLIC_LOCAL_POST_PATH}`)
export const postFilePaths = fs.readdirSync(POST_PATH).filter((path) => /\.mdx?$/.test(path))
