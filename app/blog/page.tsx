import { Metadata } from "next";
import Link from "next/link";

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        }
    })

    return response.json();
}

export const metadata: Metadata = {
    title: 'My Blog | Next App',
    description: 'First is the best!',
}

export default async function Blog() {
    const posts = await getData()

    return (
        <div>
            <h1>Blog main page</h1>
            {posts.map((elem: any) => <div key={elem.title}>
                <Link href={`/blog/${elem.id}`}>{elem.title}</Link>
            </div>)}
        </div>
    );
}