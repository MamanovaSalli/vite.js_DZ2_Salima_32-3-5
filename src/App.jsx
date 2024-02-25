import {Routes, Route} from "react-router-dom";
import './App.css'

import Posts from "./pages/Posts.jsx";
import Layout from "./pages/Layout.jsx";
import NextPage from "./pages/NextPage.jsx";
import Menu from "./pages/Menu.jsx";

function App() {


    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={< Menu/>}/>
                    <Route path="posts" element={<Posts/>}/>
                    <Route path="/post" element={<NextPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
