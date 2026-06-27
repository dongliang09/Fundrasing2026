import ProductCard from "./ProductCard";
import ProductListItem from "./ProductListItem";

export default function ProductGrid({products,view}) {

    if (view === "list") {
        return (
            <div className="space-y-4">
                {products.map((product)=> <ProductListItem key={product.id} product={product}/>)}
            </div>
        );
    }
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product)=>
                <ProductCard key={product.id} product={product}/>
            )}
        </div>

    );

}