import Image from "next/image";

export default function ProductListItem({ product }) {

    return (
        <div className="flex gap-4 border rounded-xl p-4">
            <Image
                src={product.image} width={120} height={120} alt={product.name} className="rounded-lg"
            />

            <div className="flex-1">
                <h2 className="font-bold text-lg">
                    {product.name}
                </h2>
                <p className="text-green-600 text-xl">
                    ${product.price}
                </p>
                <p className="text-gray-500">
                    {product.category}
                </p>
            </div>
        </div>
    );
}