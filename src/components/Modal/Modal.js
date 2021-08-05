import './styles.css'
import Component_container from '../Component_container'
import { useState } from 'react'

export default function Modal() {
  const [modal, showModal] = useState(0)
  return (
    <div>
      <Component_container>
        <div className='component-heading' id='avatar-heading'>
          Modal
        </div>
        <div className='flex-stack'>
          <div className='modal-display'>
            <div className='modal-display-row'>
              <div className='modal-heading-display'>Heading</div>
              <div className='close-btn-display'>&times;</div>
            </div>
            <div className='modal-content-display'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
        <iframe
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520class%253D%2522avatar-l%2522%2520src%253D%2522images%252Fundraw_male_avatar_323b.svg%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar_number%2522%253E2m%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%253Cimg%2520class%253D%2522avatar-l%2522%2520src%253D%2522images%252Fundraw_male_avatar_323b.svg%2522%252F%253E%250A%2520%2520%2520%253Cdiv%2520class%253D%2522avatar_active%2522%253E%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </Component_container>
      <div className='modal' style={{ display: modal ? 'block' : 'none' }}>
        <div className='modal-heading'>Heading</div>
        <div className='close-btn' onClick={() => showModal(!modal)}>
          &times;
        </div>
        <div className='modal-content'>This is the content</div>
      </div>
    </div>
  )
}
