import '../index.css'
import Avatar from '../components/Avatar'
import Avatar_badge from '../components/Avatar_badge'
import Alert from '../components/Alert'
import Button from '../components/Button'
import Card from '../components/Card'
import TextBox from '../components/Textbox'
import Responsive_img from '../components/Responsive_img'
import Toast from '../components/Toast/Toast'
import Sidebar from '../components/Sidebar'
import Modal from '../components/Modal/Modal'
import Carousel from '../components/Carousel/Carousel'
import { useButton } from '../Context/ButtonContext'

export default function Components() {
  const { buttonId } = useButton()
  return (
    <div>
      <Sidebar />
      {buttonId === 1 && <Avatar />}
      {buttonId === 2 && <Avatar_badge />}
      {buttonId === 3 && <Alert />}
      {buttonId === 4 && <Button />}
      {buttonId === 5 && <Card />}
      {buttonId === 6 && <Responsive_img />}
      {buttonId === 7 && <TextBox />}
      {buttonId === 8 && <Toast />}
      {buttonId === 9 && <Modal />}
      {buttonId === 10 && <Carousel />}
    </div>
  )
}
