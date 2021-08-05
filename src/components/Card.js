import '../index.css'
import ComponentContainer from './Component_container'
import Card1 from './Card1'
import Card2 from './Card2'
import CardWithDismiss from './Card_with_dismiss'
import TextCard from './Text_card'

export default function Card() {
  return (
    <div>
      <ComponentContainer>
        <div className='component-heading' id='avatar-heading'>
          Cards
        </div>
        <Card1 />
        <Card2 />
        <CardWithDismiss />
        <TextCard />
      </ComponentContainer>
    </div>
  )
}
