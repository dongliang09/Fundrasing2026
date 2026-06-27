"use client";

import { useEffect, useState } from "react";

export default function Home() {

    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [viewMode, setViewMode] = useState("grid");

    useEffect(() => {

        fetch("/items.json")
            .then(res => res.json())
            .then(data => setItems(data));

    }, []);

    const categories = [
        "All",
        ...new Set(items.map(item => item.category))
    ];

    const filteredItems =
        selectedCategory === "All"
            ? items
            : items.filter(
                item => item.category === selectedCategory
            );

    return (

        <div className="container">

            <div className="filterBar">

                {categories.map(category => (

                    <button
                        key={category}
                        className={
                            selectedCategory === category
                                ? "category active"
                                : "category"
                        }
                        onClick={() =>
                            setSelectedCategory(category)
                        }
                    >
                        {category}
                    </button>

                ))}

            </div>

            <div className="topBar">

                <span>
                    Showing {filteredItems.length} Items
                </span>

                <div>

                    <button
                        onClick={() => setViewMode("grid")}
                    >
                        Grid
                    </button>

                    <button
                        onClick={() => setViewMode("list")}
                    >
                        List
                    </button>

                </div>

            </div>

            <div
                className={
                    viewMode === "grid"
                        ? "gridView"
                        : "listView"
                }
            >

                {filteredItems.map(item => (

                    <div
                        key={item.id}
                        className="card"
                    >

                        <img
                            src={item.image}
                            alt={item.name}
                        />

                        <div className="info">

                            <h3>{item.name}</h3>

                            <p>${item.price}</p>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}