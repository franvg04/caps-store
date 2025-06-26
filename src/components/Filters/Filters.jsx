import { useState } from "react";
import "./filters.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../../mocks/caps.json";


export function Filters() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [sort, setSort] = useState("Relevant");
  const [filter, setFilter] = useState({categories: []})


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
    return matchCategory;
  })

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
          <p>Filter and Sort</p>
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
            <h2>Filters</h2>
            <div className="filters-category">
              <div className="filters-categoryFilter">
                <h3>Sort by:</h3>
                <select onChange={handleSortChange} value={sort}>
                  <option>Relevant</option>
                  <option>Price: Lowest to Highest</option>
                  <option>Price: Highest to Lowest</option>
                </select>
              </div>
              <div className="filters-categoryFilter">
                <h3>Categories</h3>
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
                <h3>TEAMS</h3>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("GOLDEN STATE")} 
                  onChange={() => toggleFilter("categories", "GOLDEN STATE")}/>
                  <span>GOLDEN STATE</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("L.A LAKERS")} 
                  onChange={() => toggleFilter("categories", "L.A LAKERS")}/>
                  <span>L.A LAKERS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("NETS")} 
                  onChange={() => toggleFilter("categories", "NETS")}/>
                  <span>NETS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("CHICAGO BULLS")} 
                  onChange={() => toggleFilter("categories", "CHICAGO BULLS")}/>
                  <span>CHICAGO BULLS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("PACERS")} 
                  onChange={() => toggleFilter("categories", "PACERS")}/>
                  <span>PACERS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("OKLAHOMA")} 
                  onChange={() => toggleFilter("categories", "OKLAHOMA")}/>
                  <span>OKLAHOMA</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("CELTICS")} 
                  onChange={() => toggleFilter("categories", "CELTICS")}/>
                  <span>CELTICS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("KNICKS")}
                  onChange={() => toggleFilter("categories", "KNICKS")}/>
                  <span>KNICKS</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      <aside className="filters-filter">
        <h2>Filters</h2>
        <div className="filters-category">
          <div className="filters-categoryFilter">
            <main className="collection">
              <div className="collection-options">
                <div className="options-sort">
                  <label>
                    Sort by:
                    <select onChange={handleSortChange} value={sort}>
                      <option>Relevant</option>
                      <option>Price: Lowest to Highest</option>
                      <option>Price: Highest to Lowest</option>
                    </select>
                  </label>
                </div>
              </div>
            </main>
          </div>
            <div className="filters-category">
              <div className="filters-categoryFilter">
                <h3>Categories</h3>
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
                <h3>TEAMS</h3>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("GOLDEN STATE")} 
                  onChange={() => toggleFilter("categories", "GOLDEN STATE")}/>
                  <span>GOLDEN STATE</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("L.A LAKERS")} 
                  onChange={() => toggleFilter("categories", "L.A LAKERS")}/>
                  <span>L.A LAKERS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("NETS")} 
                  onChange={() => toggleFilter("categories", "NETS")}/>
                  <span>NETS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("CHICAGO BULLS")} 
                  onChange={() => toggleFilter("categories", "CHICAGO BULLS")}/>
                  <span>CHICAGO BULLS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("PACERS")} 
                  onChange={() => toggleFilter("categories", "PACERS")}/>
                  <span>PACERS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("OKLAHOMA")} 
                  onChange={() => toggleFilter("categories", "OKLAHOMA")}/>
                  <span>OKLAHOMA</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("CELTICS")} 
                  onChange={() => toggleFilter("categories", "CELTICS")}/>
                  <span>CELTICS</span>
                </label>
                <label>
                  <input type="checkbox" 
                  checked={filter.categories.includes("KNICKS")}
                  onChange={() => toggleFilter("categories", "KNICKS")}/>
                  <span>KNICKS</span>
                </label>
              </div>
            </div>
        </div>
      </aside>
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
            ></ProductCard>
          );
        })) : (
          <p>No products found!</p>
        )}
      </section>
    </section>
  );
}
