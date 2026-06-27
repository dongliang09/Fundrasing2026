export default function CategoryFilter({
    categories,
    selected,
    onSelect
}) {

    return (

        <div className="flex flex-wrap gap-3 mb-6">

            {categories.map(category => (

                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`px-4 py-2 rounded-full transition
                    ${
                        selected === category
                            ? "bg-green-600 text-white"
                            : "bg-gray-100 hover:bg-gray-200"
                    }`}
                >
                    {category}
                </button>

            ))}

        </div>

    );

}