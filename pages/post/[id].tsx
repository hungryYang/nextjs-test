import React from 'react';
import {GetServerSideProps, NextPage} from 'next';
import {getArticle} from '../../lib/post';
type Props = {
    title: string,
    date: string,
    content: string
}
const PostShow: NextPage<Props> = ({
    title,
    content
}) => {
    return <div>
        <h1>{ title }</h1>
        <article dangerouslySetInnerHTML={{ __html: content}} />
    </div>
}

export default PostShow

export const getServerSideProps:GetServerSideProps = async (context) => {
    const { params } = context
    const id = params?.id
    const { title, date, content } = await getArticle(id)
    return {
        props: {
            title,
            date: JSON.stringify(date),
            content
        }
    }
}

// export const getStaticPaths = async () => {
//
// }
//
// export const getStaticProps = async (context: any) => {
//     console.log(context);
//     // const posts = await getPosts()
//     return {
//         props: {
//             posts: JSON.parse(JSON.stringify(1))
//         }
//     }
// }


