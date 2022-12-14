import api from "../../services/api"
import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
import "./Home.css"


function Home(){

    const [filmes,setFilmes] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        async function loadFilmes(){

            const response = await api.get("movie/now_playing",{
                params:{
                    api_key:'63bee72475f8fa4dc04ee795ffdefc7a',
                    language:"pt-BR",
                    page:1
                }
            })
            console.log(response.data.results)
            setFilmes(response.data.results.slice(0,10))
            setLoading(false)
        }

        loadFilmes()
    },[])

    if(loading){
        return(
            <div className="loading">
              <h2>Carregando Filmes ...</h2>  
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {
                    filmes.map((filme)=>{
                        return(
                            <article key={filme.id}>
                                <strong>{filme.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                                
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home