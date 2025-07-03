import { useState } from "react";
import "./filters.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../../mocks/caps.json";
import { IoClose } from "react-icons/io5";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

export function Filters() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [sort, setSort] = useState("Relevant");
  const [filter, setFilter] = useState({categories: [], teams: []});

  const handleToggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value)
  }

  const toggleFilter = (filterType, filterValue) => {
    setFilter((prev) =>({
      ...prev,
      [filterType]: prev[filterType].includes(filterValue)
      ? prev[filterType].filter((item) => item !== filterValue)
      : [...prev[filterType], filterValue],
  }))
  }

  const filteredProducts = products.filter((product) => {
    const matchCategory =
    filter.categories.length === 0 || filter.categories.some((cat) => product.category.includes(cat));

    const matchTeam =
    filter.teams.length === 0 || filter.teams.some((team) => product.team.includes(team));
    return matchTeam && matchCategory;
  }
)

  const sortedProducts = [...filteredProducts].sort((a,b) =>{
    if (sort === "Precio: Menor a Mayor") {
      return a.price - b.price
    } else if (sort === "Precio: Mayor a Menor"){
      return b.price - a.price
    }
    return 0;
  });

  return (
    <section className="filters-content">
      <div className="filters-contentMobile">
        <button className="filter-mobile" onClick={handleToggleMenu}>
          <HiMiniAdjustmentsHorizontal />
          <p>Ordenar y Filtrar</p>
        </button>
      </div>
      {showMobileMenu && (
        <div className="modal-overlay" onClick={() => setShowMobileMenu(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowMobileMenu(false)}
            >
              <IoClose />
            </button>
            <h2>FILTROS</h2>
            <div className="filters-category">
              <div className="filters-categoryFilter">
                <h3>ORDENAR POR:</h3>
                <select onChange={handleSortChange} value={sort}>
                  <option>Por defecto</option>
                  <option>Precio: Menor a Mayor</option>
                  <option>Precio: Mayor a Menor</option>
                </select>
              </div>
              <div className="filters-categoryFilter">
                <h3>CATEGORIAS</h3>
                <label>
                  <input type="checkbox"
                  checked={filter.categories.includes("NBA")} 
                  onChange={() => toggleFilter("categories", "NBA")}/> <span>NBA</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("59FIFTY")} 
                  onChange={() => toggleFilter("categories", "59FIFTY")}/> <span>59FIFTY</span>
                </label>
              </div>
              <div className="filters-categoryFilter">
                <h3>EQUIPOS</h3>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("SPECIAL EDITION")} 
                  onChange={() => toggleFilter("teams", "SPECIAL EDITION")}/>
                  <span>SPECIAL EDITION</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("GOLDEN STATE")} 
                  onChange={() => toggleFilter("teams", "GOLDEN STATE")}/>
                  <span>GOLDEN STATE</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("L.A LAKERS")} 
                  onChange={() => toggleFilter("teams", "L.A LAKERS")}/>
                  <span>L.A LAKERS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("NETS")} 
                  onChange={() => toggleFilter("teams", "NETS")}/>
                  <span>NETS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("CHICAGO BULLS")} 
                  onChange={() => toggleFilter("teams", "CHICAGO BULLS")}/>
                  <span>CHICAGO BULLS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("PACERS")} 
                  onChange={() => toggleFilter("teams", "PACERS")}/>
                  <span>PACERS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("OKLAHOMA")} 
                  onChange={() => toggleFilter("teams", "OKLAHOMA")}/>
                  <span>OKLAHOMA</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("CELTICS")} 
                  onChange={() => toggleFilter("teams", "CELTICS")}/>
                  <span>CELTICS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("KNICKS")}
                  onChange={() => toggleFilter("teams", "KNICKS")}/>
                  <span>KNICKS</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="filters-scroll-container">
      <aside className="filters-filter">
        <h2>FILTROS</h2>
        <div className="filters-category">
          <div className="filters-categoryFilter">
            <main className="collection">
              <div className="collection-options">
                <div className="options-sort">
                  <label>
                    ORDENAR POR:
                    <select onChange={handleSortChange} value={sort}>
                      <option>-</option>
                      <option>Precio: Menor a Mayor</option>
                      <option>Precio: Mayor a Menor</option>
                    </select>
                  </label>
                </div>
              </div>
            </main>
          </div>
            <div className="filters-category">
              <div className="filters-categoryFilter">
                <h3>CATEGORIAS</h3>
                <label>
                  <input type="checkbox"
                  checked={filter.categories.includes("NBA")} 
                  onChange={() => toggleFilter("categories", "NBA")}/> <span>NBA</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("59FIFTY")} 
                  onChange={() => toggleFilter("categories", "59FIFTY")}/> <span>59FIFTY</span>
                </label>
              </div>
              <div className="filters-categoryFilter">
                <h3>EQUIPOS</h3>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("SPECIAL EDITION")} 
                  onChange={() => toggleFilter("teams", "SPECIAL EDITION")}/>
                  <span>SPECIAL EDITION</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("GOLDEN STATE")} 
                  onChange={() => toggleFilter("teams", "GOLDEN STATE")}/>
                  <span>GOLDEN STATE</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("L.A LAKERS")} 
                  onChange={() => toggleFilter("teams", "L.A LAKERS")}/>
                  <span>L.A LAKERS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("NETS")} 
                  onChange={() => toggleFilter("teams", "NETS")}/>
                  <span>NETS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("CHICAGO BULLS")} 
                  onChange={() => toggleFilter("teams", "CHICAGO BULLS")}/>
                  <span>CHICAGO BULLS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("PACERS")} 
                  onChange={() => toggleFilter("teams", "PACERS")}/>
                  <span>PACERS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("OKLAHOMA")} 
                  onChange={() => toggleFilter("teams", "OKLAHOMA")}/>
                  <span>OKLAHOMA</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("CELTICS")} 
                  onChange={() => toggleFilter("teams", "CELTICS")}/>
                  <span>CELTICS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.teams.includes("KNICKS")}
                  onChange={() => toggleFilter("teams", "KNICKS")}/>
                  <span>KNICKS</span>
                </label>
              </div>
            </div>
        </div>
      </aside>
      </div>
      <section className="pr-prd">
        {
        filteredProducts.length > 0 ? (
        sortedProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              productId={product.id}
              productName={product.title}
              productImage={product.thumbnail}
              productPrice={product.price}
              productImagesCar={product.images}
              productTeam = {product.team}
            ></ProductCard>
          );
        })) : (
          <p>No se encontraron productos!</p>
        )}
      </section>
    </section>
  );
}
