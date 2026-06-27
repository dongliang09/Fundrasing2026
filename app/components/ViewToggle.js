import { Grid2X2, List } from "lucide-react";

export default function ViewToggle({view, onChange}) {

    return (
        <div className="flex justify-end mb-6">
            <div className="flex rounded-lg border">
                <button
                    onClick={() => onChange("grid")}
                    className={`p-3 ${
                        view=="grid" && "bg-green-500 text-white"
                    }`}
                >
                    <Grid2X2 />
                </button>
                <button
                    onClick={() => onChange("list")}
                    className={`p-3 ${
                        view=="list" && "bg-green-500 text-white"
                    }`}
                >
                    <List />
                </button>
            </div>
        </div>
    );
}