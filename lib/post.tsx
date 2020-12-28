import fs, {promises as fsPromise} from 'fs';
import path from 'path';
import matter from 'gray-matter';

const publicPath = process.cwd()
const mdPath = path.join(publicPath, '/markdown');

export const getPosts = async () => {
    const files = await fsPromise.readdir(mdPath)
    return files.map(file => {
        const text = fs.readFileSync(path.join(mdPath, file), 'utf-8')
        const id = file.replace(/\.md$/g, '')
        const {data: {title, date}} = matter(text)
        return {
            id,
            title,
            date
        }
    })
}

export const getArticle = async (id : any) => {
    const text = fs.readFileSync(path.join(mdPath, `${id}.md`), 'utf-8')
    const {data: { title, date } , content} = matter(text)
    return {
        title,
        date,
        content
    }
}

export const getPostsId = async () => {
    const files = await fsPromise.readdir(mdPath)
    return files.map(file => {
        return file.replace(/\.md$/g, '')
    })
}
