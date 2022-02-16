import { useEffect, useState } from "react"

export const BitcoinConversor: React.FC = () => {
    const [bitcoin, setBitcoin] = useState<number>(1)
    const [euro, setEuro] = useState<number>(1000)
    const [bitcoinChange, setBitcoinChange] = useState<number>(35000)

    useEffect(() => {
        setBitcoin(() => euro / bitcoinChange)
    }, [euro,bitcoinChange])

    useEffect(() => {
        const getBitcoinValue = async () => {
            const bitcoin = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`)
            const bitcoinToJson = await bitcoin.json();

            return bitcoinToJson.market_data.current_price.eur
        }
        getBitcoinValue().then((bitcoinValue) => setBitcoinChange(bitcoinValue))
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
            <button onClick = {()=> console.log('quiero refrescar pero no tengo ni idea')}>Refrescar valor</button>
            <h4>{euro} EUR</h4>
            <h5>equivalen a</h5>
            <h4>{bitcoin} BTC</h4>
        </div>
    )
}