import Card from '../card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   // console.log(characters)
   // const {characters}  = props;
   const {characters,onClose} = props
   // console.log(characters)
   return (
      <div className={style.Cards}>
            {characters.map((char) => (
                  <Card 
                  key={char.name}
                  id={char.id}
                  name = {char.name}
                  species = {char.species}
                  gender = {char.gender}
                  image = {char.image}
                  onClose = {() => onClose(char.id)}
                   />
            ))}
   </div>
   );
}
