

export default function Home({ posts }) {

  return (
    <div>
      <h1>Welcome to My Home </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div >
  )
}

let URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10";
//URL = "http://localhost:8080/api/post";


//SSR : Server Side Rendering  : 요청이 올 때 마다 해당하는 HTML 문서를 그때 그때 생성하여 반환한다.
// export const getServerSideProps = async () => {
//   const posts = await fetch(URL).then(res => res.json()).then(data => data)

//   return {
//     props: {
//       posts
//     }
//   }
// }

export const getStaticProps = async () => {
  const posts = await fetch(URL).then(res => res.json()).then(data => data)

  return {
    props: {
      posts
    },
    //처음 접속한 후 20초지난 시점부터 언제든지 접속이 일어나면 파일을 새롭게 생성 
    revalidate: 20
  }
}