import '../index.css'
import Component_container from './Component_container'
import Card1 from './Card1'
import Card2 from './Card2'
import Card_with_dismiss from './Card_with_dismiss'
import Text_card from './Text_card'

export default function Card() {
  return (
    <div>
      <Component_container>
        <div className='component-heading' id='avatar-heading'>
          Cards
        </div>
        <Card1 />
        <Card2 />
        <Card_with_dismiss />
        <Text_card />
      </Component_container>
    </div>
  )
}
