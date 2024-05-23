import './App.css';
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider, } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Program from "./pages/Program";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import Blogs from "./pages/Blogs";
import Donate from "./pages/Donate";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/program" element={<Program />} />
      <Route path="/media" element={<Media />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/donate" element={<Donate />} />
    </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
