import { useState } from "react";

const myAvenger = {
  ironMan:
    'https://www.sideshow.com/storage/product-images/500846U/the-invincible-iron-man_marvel_silo_lg.png',
  spiderMan:
    'https://pbs.twimg.com/media/EYbVjfXXgAEe2yG?format=jpg&name=4096x4096',
  blackPanther:
    'https://www.lafuerzararuna.com/files/products/avengers-37-alex-ross-black-panther-timeless-var-7eb333d8eb012e32.jpg?width=600&quality=100'
};

const myAvengerArray = Object.entries(myAvenger)

type Props = {
  name: string;
  url: string;
  key: number;
}

const AvengerButton = ({ name, url }: Props) => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <>
      <button onClick={() => setVisible(!visible)}>{name}</button>
      {visible && <figure>
        <img src={url} alt={name} width={200} />
        <figcaption>{name}</figcaption>
      </figure>}
    </>
  )
}

const AvengersPanel: React.FC = () => {
  return (
    <div>
    <h2>Select Avenger</h2>
    {myAvengerArray.map((avenger, i) => <AvengerButton name={avenger[0]} url={avenger[1]} key={i} />)}    
  </div>
  )
}

export default AvengersPanel