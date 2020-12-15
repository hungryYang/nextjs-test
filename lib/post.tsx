import fs, { promises as fsPromise } from 'fs';
import path from 'path';
import matter from 'gray-matter'

const publicPath = process.cwd()
const mdPath = path.join(publicPath, '/markdown');

export const getPosts = async () => {
    const files = await fsPromise.readdir(mdPath)
    const posts = files.map(file => {
        const text = fs.readFileSync(path.join(mdPath, file), 'utf-8')
        const id = file.replace(/\.md$/g, '')
        const {data: { title, date} , content} = matter(text)
        return {
            id,
            title,
            date
        }
    })
    return posts
}
