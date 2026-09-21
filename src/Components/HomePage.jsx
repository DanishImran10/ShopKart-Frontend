import TopBar from "./TopBar";
import Product from "./Product";
import "./HomePage.css"

function HomePage(props) {
    return (
        <>
            <TopBar cart={props.cart} />

            {
                props.products.length !== 0 ? (
                    <div className="home-page">
                        <div className="products-grid">
                            {props.products.map((product) => 
                            <Product key={product._id} product={product} loadCart={props.loadCart} />
                        )}
                        </div>
                    </div>
                ) :

                <div className="loading-spinner"></div>
            }
        </>
    )
}

export default HomePage