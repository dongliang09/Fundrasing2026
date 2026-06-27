import Image from "next/image";

export default function ProductCard(product) {

    return (

        <div className="rounded-xl border bg-white overflow-hidden">
            {product.image!=="" && <Image
                src={product.image}
                width={400}
                height={300}
                alt={product.name}
                className="aspect-square object-cover"
            />}
            <div className="p-4">
                <h3 className="font-semibold">
                    {product.name}
                </h3>
                <p className="text-green-600 font-bold">
                    ${product.price}
                </p>
            </div>
        </div>
    );
}