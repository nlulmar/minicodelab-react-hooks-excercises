
const myAvenger = {
    ironMan:
      'https://www.sideshow.com/storage/product-images/500846U/the-invincible-iron-man_marvel_silo_lg.png',
    spiderMan:
      'https://pbs.twimg.com/media/EYbVjfXXgAEe2yG?format=jpg&name=4096x4096',
    blackPanther:
      'https://www.lafuerzararuna.com/files/products/avengers-37-alex-ross-black-panther-timeless-var-7eb333d8eb012e32.jpg?width=600&quality=100'
  };

  const myAvengerKeys = Object.keys(myAvenger)
  const myAvengerValues = Object.values(myAvenger)

export const AvengersPanel: React.FC = () => {

    return (

        <div>
            <h2>Select Avenger</h2>
            {myAvengerKeys.map((key)=><button key={key}>{key}</button>)}

        </div>

    )
    
}