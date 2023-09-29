import PostPages from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div>
      <h1>Post Page {params.postId}</h1>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>

      <h3>Otras publicaciones</h3>

      <Suspense fallback={<div>Cargando Publicaciones...</div>}>
        <PostPages />
      </Suspense>
    </div>
  );
}

export default Page;
