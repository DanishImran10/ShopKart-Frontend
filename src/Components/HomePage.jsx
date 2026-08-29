import TopBar from "./TopBar";
import Product from "./Product";
import products from "../assets/products.js"
import "./HomePage.css"

function HomePage() {
    return (
        <>
            <TopBar />
            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => 
                    <Product key={product.id} product={product} />
                )}
                </div>
            </div>
        </>
    )
}

export default HomePage