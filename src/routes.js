import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Filme from "./pages/Filme"
import Header from "./pages/components/Header/Header"
import Erro from "./pages/Erro"
import Favoritos from "./pages/Favoritos/Favoritos"

function RoutesApp(){
    return(
    <BrowserRouter>
    <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/filme/:id" element={<Filme></Filme>}></Route>
            <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>

            <Route path="*" element={<Erro></Erro>}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp