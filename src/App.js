import Main from "./Main";
import Projects from "./Projects";
import { Routes, Route } from 'react-router-dom';
export default function App() {
    return (
        <Routes>
            <Route path="/" element = {<Main/>} />
            <Route path="projects" element={<Projects/>} />
        </Routes>
    )   
}