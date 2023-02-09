import axios from 'axios'
//const BASE = 'https://jsonplaceholder.typicode.com';
const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicodse.com'
})

export const api = {
    getAllPosts: async () => {
        let response = await axiosInstance.get('/posts')
        //let response = await axios.get(`${BASE}/posts`) - USANDO BASE
        return response.data;

        /* FORMA SEM AXIOS
        let response = await fetch(`${BASE}/posts`);
        let json = await response.json();
        return json;
        */
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let response = await axiosInstance.post(`/posts`, {
            title, body, userId
        });
        // let response = await axios.post(`${BASE}/posts`, { - UTILIZANDO O BASE
        //     title, body, userId
        // });
        return response.data
        /*
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body:  JSON.stringify({
              title,
              body,
              userId
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          let json = await response.json();
          return json //retorna a resposta, ou seja o post que foi adicionado
          */
    }
}

//sempre que utilizarmos uma API, devemos utiliza o async e await para que a api carregue e seja exibida 