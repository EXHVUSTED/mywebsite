import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Examples from './pages/Examples'
import Order from './pages/Order'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <Router>
      <header style={{padding:16,background:'#f7f7f7',borderBottom:'1px solid #e1e1e1'}}>
        <h1 style={{margin:0,fontSize:20}}>Мой сайт услуг</h1>
        <nav style={{marginTop:8}}>
          <Link to="/" style={{marginRight:12}}>Главная</Link>
          <Link to="/examples" style={{marginRight:12}}>Примеры работ</Link>
          <Link to="/order" style={{marginRight:12}}>Заказать</Link>
          <Link to="/contact">Контакты</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}
