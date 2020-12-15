import { NextApiHandler } from 'next'
import { getPosts } from 'lib/post';

const post: NextApiHandler = async (req, res) => {
    await getPosts()
    res.statusCode = 200
    res.json({
        title: 'hello world'
    })
}

export default post
