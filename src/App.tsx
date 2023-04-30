import { useState } from "react"
import "./App.css"

function App() {
    const [options, setOptions] = useState([""])
    console.log("op", options)
    const handleAdd = () => {
        setOptions((prev) => [...prev, ""])
    }

    const handleRemove = (index: number) => {
        console.log(index, options)
        console.log(options.filter((item, i) => i !== index))
        setOptions(options.filter((item, i) => i !== index))
    }

    const handleOnBlurInput = (e: any, index: number) => {
        const data = options.map((option, i) => {
            if (i === index) {
                return e.target.value
            }

            return option
        })

        setOptions(data)
    }
    return (
        <main className="min-h-screen bg-white flex justify-center">
            <div className="w-3/4">
                <div>
                    <input
                        name="title"
                        type="text"
                        autoComplete="false"
                        className="w-2/4 text-yellow-400 border-b-2 border-black bg-transparent text-center text-3xl outline-none"
                    />
                </div>
                <div className="mt-10 flex flex-col space-y-4 bg-red-400">
                    {options &&
                        options.map((option, index) => (
                            <div className="">
                                <input
                                    key={index}
                                    onBlur={(e) => handleOnBlurInput(e, index)}
                                    name="options[]"
                                    type="text"
                                    className="bg-red-300 border-b-8 border-r-8 border-l-2 border-t-2 border-purple-800 rounded-lg p-4"
                                />

                                <button
                                    className="bg-blue-400 rounded-full p-1 ml-2"
                                    onClick={() => handleRemove(index)}
                                >
                                    ➖
                                </button>
                                {options.length === index + 1 && (
                                    <button
                                        className="bg-pink-400 rounded-full p-1 ml-2"
                                        onClick={handleAdd}
                                    >
                                        ➕
                                    </button>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </main>
    )
}

export default App
