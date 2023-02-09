import { useState, useEffect } from "react";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { Post } from "./types/Post";
import { api } from "./api";

export default function App() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    loadPosts();
  }, [])

  const loadPosts = async () => {
    setLoading(true); //habilita o loading para o usuario saber que está carregando
    let json = await api.getAllPosts(); //acessa essa função
    setLoading(false);//tiro o loading após carregar a API
    setPosts(json) //joga os posts no state para que seja exibido na tela
  }


  const handleAddPost = async (title: string, body: string) => {

    let json = await  api.addNewPost(title, body, 1);
    if(json.id) {
      alert("Post adiconado com sucesso!")
    } else {
      alert("Ocorreu algum erro!")
    } 
  }

  return (
    <div className="p-5">
      {loading &&
        <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost}/>

      {!loading && posts.length > 0 &&
        <>
          <div>Total de Posts: {posts.length}</div>

          <div>
            {posts.map((item, index) => (
              <PostItem data={item} />
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <div>Não há Posts para exibir.</div>
      }
    </div>
  );
};