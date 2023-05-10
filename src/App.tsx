import "./App.css"
import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState, FocusEvent } from "react"
import {
    HiArrowPathRoundedSquare,
    HiLockClosed,
    HiArrowPath,
} from "react-icons/hi2"
import Input from "./components/Input"
interface Option {
    id: number
    data: string
}

//colors = ["#FF0000", "#00A08A", "#F2AD00", "#F98400", "#5BBCD6"]

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

const App = () => {
    const [options, setOptions] = useState<Option[]>(initial)
    const [isLock, setLock] = useState<boolean>(false)
    const firstRef = useRef<HTMLInputElement>(null)
    const secondRef = useRef<HTMLInputElement>(null)
    const ref = useRef<HTMLDivElement>(null)

    const handleOnBlurInput = (e: FocusEvent<HTMLInputElement>, id: number) => {
        const data = options.map((option) => {
            if (id === options[0].id) {
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

    const handleOnReset = () => {
        setOptions((prev) =>
            prev.map((item) => {
                return {
                    id: item.id,
                    data: "",
                }
            })
        )

        if (firstRef.current && secondRef.current) {
            firstRef.current.value = ""
            secondRef.current.value = ""
        }

        setLock(false)
    }

    const handleOnLock = () => {
        setLock(true)
    }

    return (
        <main
            className="flex min-h-screen items-center justify-center bg-[#F98400] text-center"
            ref={ref}
        >
            <div className="m-4 w-full px-4 pb-16 md:pb-10">
                <div className="flex justify-center">
                    <img src="/title.png" className="h-48 w-auto md:h-56" />
                </div>
                <div className="mt-10 flex flex-col space-y-5 md:space-y-6">
                    <div key={options[0].id}>
                        <Input
                            id={options[0].id}
                            onBlur={handleOnBlurInput}
                            name="options[]"
                            reference={firstRef}
                            isLock={isLock}
                        />
                    </div>
                    <div key={options[1].id}>
                        <Input
                            id={options[1].id}
                            onBlur={handleOnBlurInput}
                            name="options[]"
                            reference={secondRef}
                            isLock={isLock}
                        />
                    </div>
                    <div className="space-x-4">
                        <AnimatePresence>
                            {!isLock && (
                                <motion.button
                                    key="tukar"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.5 },
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={handleOnSwap}
                                    className="w-32 rounded-lg border-b-4 border-l-2 border-r-4 border-t-2 border-black bg-[#00A08A] p-2 shadow-lg"
                                >
                                    <p className="inline-flex items-center font-medium">
                                        Tukar
                                        <HiArrowPathRoundedSquare className="ml-1 h-6 w-auto" />
                                    </p>
                                </motion.button>
                            )}
                        </AnimatePresence>
                        {!isLock && (
                            <motion.button
                                key="kunci"
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.5 },
                                }}
                                onClick={handleOnLock}
                                className="w-32 rounded-lg border-b-4 border-l-2 border-r-4 border-t-2 border-black bg-[#FF0000] p-2 font-medium shadow-lg"
                            >
                                <p className="inline-flex items-center font-medium">
                                    Kunci
                                    <HiLockClosed className="ml-1 h-6 w-auto" />
                                </p>
                            </motion.button>
                        )}
                        {isLock && (
                            <motion.button
                                key="semula"
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.5 },
                                }}
                                onClick={handleOnReset}
                                className="w-32 rounded-lg border-b-4 border-l-2 border-r-4 border-t-2 border-black bg-[#5BBCD6] p-2 font-medium shadow-lg"
                            >
                                <p className="inline-flex items-center font-medium">
                                    Semula
                                    <HiArrowPath className="ml-1 h-6 w-auto" />
                                </p>
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 w-full pb-4 text-center">
                <p className="font-mono text-sm font-medium">
                    Made with ❤️ by{" "}
                    <a
                        href="https://www.farhanhadi.com"
                        target="_blank"
                        className="font-semibold underline"
                    >
                        Farhan
                    </a>
                </p>
            </div>
            <div className="fixed right-0 top-0 p-4">
                <div className="flex flex-col space-y-2">
                    <a href="https://twitter.com/heyfarhanhadi" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="currentColor"
                            style={{ color: "#1d6cf2" }}
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/xitox97/choose-one"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="currentColor"
                            style={{ color: "#333" }}
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default App
