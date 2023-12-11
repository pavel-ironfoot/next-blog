async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        next: {
            revalidate: 60,
        }
    })
    if(!response.ok) throw new Error("Unable to fetch posts!")
    return response.json();
}

type Props = {
    params: {
        id: string;
    }
}

export default async function Post({ params: { id } }:Props) {
    const dataPost = await getData(id);
    
    return (
        <div>
            <h1>Post Page {id}</h1>
            <h2>{dataPost.title}</h2>
            <p>{dataPost.body}</p>
        </div>
    );
}