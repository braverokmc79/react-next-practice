/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Head } from 'next/head';
import HeadInfo from './../components/HeadInfo';
import Image from 'next/image';
import photosStyles from "../styles/Photos.module.css"
import Link from 'next/link';



function photos({ photos }) {
    console.log("photos : ", photos);
    return (
        <>
            <HeadInfo title="my Blog Pohtos" />
            <div>
                <h1>Welcome to My photos </h1>
                <ul className={photosStyles.photos}>

                    {photos.map(photo => (

                        <li key={photo.id}>

                            <Link href={`/photos/${photo.id}`} >
                                <a>
                                    <img
                                        src={photo.thumbnailUrl}
                                        width={100}
                                        height={100}
                                        alt={photo.title}
                                    />
                                    <span>{photo.title}</span>
                                </a>
                            </Link>

                        </li>
                    ))}

                </ul>


            </div>
        </>
    )
}

let URL = "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10";

export const getStaticProps = async () => {
    const photos = await fetch(URL).then(res => res.json()).then(data => data);
    return {
        props: {
            photos
        },
        revalidate: 20
    }
}

export default photos;