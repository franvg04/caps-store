import { useState } from "react";
import "./filters.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../../mocks/caps.json";


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
    if (sort === "Price: Lowest to Highest") {
      return a.price - b.price
    } else if (sort === "Price: Highest to Lowest"){
      return b.price - a.price
    }
    return 0;
  });

  return (
    <section className="filters-content">
      <div className="filters-contentMobile">
        <button className="filter-mobile" onClick={handleToggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
          </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
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
