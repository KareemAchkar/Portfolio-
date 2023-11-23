import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Component/Layout/Layout'
import { Home } from './Component/Home/Home'
import { About } from './Component/About/About'
import { Contact } from './Component/Contact/Contact'
import { Portfolio } from './Component/Portfolio/Portfolio'
import { Dashboard } from './Component/Dashboard/Dashboard'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}
