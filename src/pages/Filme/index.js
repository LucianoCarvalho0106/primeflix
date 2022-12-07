import {useEffect,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import api from '../../services/api'
import "./Filme.css"
import {toast} from "react-toastify"


function Filme(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [filme,setFilme] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:"63bee72475f8fa4dc04ee795ffdefc7a",
                    language:"pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{
                navigate("/",{replace:true})
                return
            })
        }

        loadFilme()


    },[navigate,id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix")

        let filmesSalvos = JSON.parse(minhaLista) || []
        const hasFilme = filmesSalvos.some((filmesalvo) => filmesalvo.id === filme.id)

        if(hasFilme){
            toast.warning("Filme Já Cadastrado")
            return
        }
        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix",JSON.stringify(filmesSalvos))
        toast.success("Filme Salvo Com Sucesso!")
    }
    

    if(loading){
        return(
            <div><h1>Carregando Detalhes</h1></div>
        )
    }

    return(
        
             <div className="filme-info">
                <h1>{filme.title}</h1>
                     <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>
                     <h3>Sinopse</h3>
                     <span>{filme.overview}</span>
                    <span>Avaliação: {filme.vote_average} /10</span>
                    <div className='area-buttons'>
                        <button onClick={salvarFilme}>Salvar</button>
                        <a rel='external' target="blank" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                    </div>
            </div>
        
    )
}

export default Filme