import React from 'react';
import {NextPage} from 'next';
import {getArticle, getPostsId} from '../../lib/post';
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

// export const getServerSideProps:GetServerSideProps = async (context) => {
//     const { params } = context
//     const id = params?.id
//     const { title, date, content } = await getArticle(id)
//     return {
//         props: {
//             title,
//             date: JSON.stringify(date),
//             content
//         }
//     }
// }

export const getStaticPaths = async () => {
    const idLists = await getPostsId()
    return {
        paths: idLists.map(id => ({ params: { id } })),
        fallback: true
    }
}

export const getStaticProps = async (context: any) => {
    const { params: { id } } = context
    const { title, date, content } = await getArticle(id)
    return {
        props: {
            title,
            date: JSON.stringify(date),
            content
        }
    }
}


