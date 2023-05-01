import { useState } from "react"
import "./App.css"
import { motion, AnimatePresence } from "framer-motion"
import imgUrl from "./assets/title.png"
interface Option {
    id: number
    data: string
}

const red = "#FF0000"
const green = "#00A08A"
const yellow = "#F2AD00"
const brown = "#F98400"
const blue = "#5BBCD6"

const initial = [
    {
        id: 1,
        data: "",
    },
    {
        id: 2,
        data: "",
    },
]
const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 }
function App() {
    const [options, setOptions] = useState<Option[]>(initial)

    const handleOnBlurInput = (e: any, id: number) => {
        const data = options.map((option) => {
            if (id === option.id) {
                return {
                    id: option.id,
                    data: e.target.value,
                }
            }

            return option
        })

        setOptions(data)
    }

    const handleOnSwap = () => {
        const newArray = [...options]
        const temp = newArray[0]
        newArray[0] = newArray[1]
        newArray[1] = temp
        setOptions(newArray)
    }

    const handleOnChoose = () => {
        const randomIndex = Math.floor(Math.random() * options.length)
        alert(options[randomIndex].data)
    }

    const animations = {
        layout: true,
        initial: "in",
        animate: "in",
        whileFocus: {
            scale: 1.05,
        },
        transition,
    }

    return (
        <main className="min-h-screen flex justify-center items-center bg-[#F98400] text-center">
            <div className="w-full m-4 px-4 pb-10 mn1                                       ">
                <div className="flex justify-center">
                    <img src={imgUrl} className="h-48 w-auto" />
                </div>
                <div className="mt-10 flex flex-col space-y-4">
                    {options &&
                        options.map((option) => (
                            <div key={option.id}>
                                <motion.input
                                    {...animations}
                                    onBlur={(e) =>
                                        handleOnBlurInput(e, option.id)
                                    }
                                    name="options[]"
                                    type="text"
                                    className="bg-[#F2AD00] text-center shadow-lg rounded-lg border-b-8 border-r-8 border-l-2 border-t-2 border-black  py-4 px-2 outline-none text-xl"
                                />
                            </div>
                        ))}

                    <div className="space-x-2">
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.5 },
                            }}
                            onClick={handleOnChoose}
                            className="p-2 bg-[#00A08A] rounded-lg shadow-lg border-black border-t-2 border-l-2 border-r-4 border-b-4"
                        >
                            Rawak
                        </motion.button>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.5 },
                            }}
                            onClick={handleOnSwap}
                            className="p-2 bg-[#5BBCD6] rounded-lg shadow-lg border-black border-t-2 border-l-2 border-r-4 border-b-4"
                        >
                            Tukar
                        </motion.button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
