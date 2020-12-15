import React from "react";
import { getPosts } from '../../lib/post';
import {NextPage} from 'next';

type Props = {
    posts: {
        id: string,
        title: string,
        date: string
    }[]
}

const Post: NextPage<Props> =  (props) => {
    console.log(props.posts)
    return (<div>
        这是个post页面
    </div>)
}

export const getStaticProps = async () => {
    const posts = await getPosts()
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    }
    // // Get external data from the file system, API, DB, etc.
    // const data = ...
    //
    // // The value of the `props` key will be
    // //  passed to the `Home` component
    // return {
    //     props: ...
    // }
}

export default Post
