import Link from 'next/link'
import React from 'react'
import { Image } from 'next/image';
import { useRouter } from 'next/router';


const index = ({ photo }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const id = router.query;
    console.log("router   : ", router, id);
    console.log("id   : ", id);

    const { title, url } = photo;

    return (
        <div>
            <h2>{title}</h2>

            <img
                src={url}
                widht={500} height={500}
            />
            <Link href="/photos" >
                <a>go back</a>
            </Link>
        </div>
    )
}


export const getStaticProps = async (context) => {

    const { id } = context.params;
    const photo = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.json()).then(data => data);
    return {
        props: {
            photo
        },
        revalidate: 10
    }
}

export const getStaticPaths = async () => {
    const photos = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_end=10").then(res => res.json()).then(data => data);
    const ids = photos.map(photo => photo.id);
    const paths = ids.map(id => {
        return {
            params: { id: id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

    // return {
    //     paths: [
    //         {
    //             params: { id: '1' }
    //         },
    //         {
    //             params: { id: '2' }
    //         },
    //         {
    //             params: { id: '3' }
    //         }
    //     ],
    //     fallback: false
    // }
}



export default index