import '../index.css'

import { useButton } from '../Context/ButtonContext'

export default function Avatar() {
  const { setButtonId } = useButton()
  return (
    <div>
      <ul className='side-bar'>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(1)
            }}
          >
            Avatar
          </button>
        </li>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(2)
            }}
          >
            Badges
          </button>
        </li>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(3)
            }}
          >
            Alert
          </button>
        </li>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(4)
            }}
          >
            Button
          </button>
        </li>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(5)
            }}
          >
            Card
          </button>
        </li>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(6)
            }}
          >
            Images
          </button>
        </li>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(7)
            }}
          >
            Text Box
          </button>
        </li>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(8)
            }}
          >
            Toast
          </button>
        </li>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(9)
            }}
          >
            Modal
          </button>
        </li>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(10)
            }}
          >
            Carousel
          </button>
        </li>
        <li>
          <button
            className='link_btn-side-bar'
            onClick={() => {
              setButtonId(11)
            }}
          >
            Loader
          </button>
        </li>
      </ul>
    </div>
  )
}
