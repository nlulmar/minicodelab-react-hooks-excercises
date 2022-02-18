import { useEffect, useState } from "react"

const ONE_SEC_IN_MS = 1000

const ChangeName: React.FC = () => {
    const [name, setName] = useState<string>('MiniCodeLab')
    const [nameUpperCase, setNameUpperCase] = useState<string | undefined>(undefined)

    useEffect(() => {
        setTimeout(() => setName('MaxiCodeLab'), 2 * ONE_SEC_IN_MS)
    }, [])

    useEffect(() => {nameUpperCase && setName(nameUpperCase)}, [nameUpperCase])

    return (
        <div>
            <h1>El nombre es: {name}</h1>
            <input type="text" value={name} onChange={(e) => setNameUpperCase(e.target.value.toUpperCase())} />
        </div>
    )
}

export default ChangeName;