import { useState } from "react";
import { RiAddLine, RiArrowDownSLine, RiCloseLine, RiMenu3Fill, RiPieChartLine, RiSearch2Line, RiUser3Line } from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar";

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <Sidebar showMenu={showMenu} />
        {/* Mobile Menu */}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 py-2  px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          <button className="p-2">
            <RiUser3Line />
          </button>
          <button className="p-2">
            <RiAddLine />
          </button>
          <button className="p-2">
            <RiPieChartLine />
          </button>
          <button onClick={toggleMenu} className="text-[#f8fafc]">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </nav>
        <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4">
          <div className="lg:col-span-6">
            {/* Header */}
            <header>
              {/* Title, date and search engine */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl text-gray-300">9420 Bar</h1>
                  <p className="text-gray-500">24 mayo 2023</p>
                </div>
                {/* Search engine */}
                <form>
                  <div className="w-full relative">
                    <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input type="text" placeholder="Buscar" className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none" />
                  </div>
                </form>
              </div>
              {/* Tabs */}
              <nav className="text-gray-500 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
                <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#f8fafc] before:left-0 before:rounded-full before:-bottom-[1px] text-[#f8fafc]">Entradas</a>
                <a href="#" className="py-2 pr-4">Platos</a>
                <a href="#" className="py-2 pr-4">Postres</a>
                <a href="#" className="py-2">Bebidas</a>
              </nav>
            </header>
            {/* Title content */}
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-xl text-gray-600">Elija su plato</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                Todo <RiArrowDownSLine />
              </button>
            </div>
            {/* Content */}
            <div>
              {/* Card */}
              <div className="bg-[#1F1D2B] p-10 rounded-xl flex flex-col items-center gap-2 text-gray-300">
                <img src="/pizzas/pizza-hongos.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
                <p className="text-xl">Pizza de jamón y hongos</p>
                <span className="text-gray-400">$3000</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 fixed lg:static right-0">

          </div>
        </main>
      </div>
    </>
  )
}

export default App
