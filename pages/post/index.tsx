import React from "react";
import {getArticle, getPosts} from '../../lib/post';
import {NextPage} from 'next';
import Link from "next/link";

type Props = {
    posts: {
        id: string,
        title: string,
        date: string
    }[]
}

const Post: NextPage<Props> =  (props) => {
    const { posts } = props
    return (<div>
        {
            posts.map(post => <Link href={`/post/${post.id}`} key={post.id}>
                <a>{post.title}</a>
            </Link>)
        }
    </div>)
}

export const getStaticProps = async () => {
    const posts = await getPosts()
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    }
}

export default Post
