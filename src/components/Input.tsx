import { motion } from "framer-motion"
import { RefObject, FocusEvent } from "react"

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 }

const animations = {
    layout: true,
    initial: "in",
    animate: "in",
    whileFocus: {
        scale: 1.05,
    },
    transition,
}

type TInputProps = {
    id: number
    reference: RefObject<HTMLInputElement>
    isLock: boolean
    name: string
    onBlur: (e: FocusEvent<HTMLInputElement>, id: number) => void
}
const Input = (props: TInputProps) => {
    const { id, reference, isLock, name, onBlur } = props

    return (
        <motion.input
            {...animations}
            onBlur={(e) => onBlur(e, id)}
            name={name}
            type="text"
            ref={reference}
            readOnly={isLock}
            className="w-auto rounded-lg border-b-8 border-l-2 border-r-8 border-t-2 border-black bg-[#F2AD00] px-2 py-4 text-center text-xl font-semibold shadow-lg outline-none md:w-6/12 md:max-w-xl"
        />
    )
}

export default Input
