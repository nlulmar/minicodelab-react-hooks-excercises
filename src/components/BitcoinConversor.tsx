import { useEffect, useState } from "react"

//La función se declara fuera del componente por no depender de estado ni de props
const getBitcoinValue = async () => {
    const bitcoin = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`)
    const bitcoinToJson = await bitcoin.json();

    return bitcoinToJson.market_data.current_price.eur
}

const BitcoinConversor: React.FC = () => {
    const [bitcoin, setBitcoin] = useState<number>(1)
    const [euro, setEuro] = useState<number>(1000)
    const [bitcoinChange, setBitcoinChange] = useState<number>(35000)

    useEffect(() => {
        setBitcoin(() => euro / bitcoinChange)
    }, [euro, bitcoinChange])

    const getBtcChange = () => getBitcoinValue().then((bitcoinValue) => {
        setBitcoinChange(bitcoinValue)
    })

    useEffect(() => {
        getBtcChange()
    }, [])

    return (
        <div>
            <h2>Convierte Euros a Bitcoins 💶</h2>
            <input
                type="number"
                min={1}
                value={euro}
                onChange={(e) => setEuro(e.target.valueAsNumber)} />
            <h4>El valor actual del Bitcoin es {bitcoinChange} Eur por BTC</h4>
            <button onClick={getBtcChange}>Refrescar valor</button>
            <h4>{euro} EUR</h4>
            <h5>equivalen a</h5>
            <h4>{bitcoin} BTC</h4>
        </div>
    )
}

export default BitcoinConversor