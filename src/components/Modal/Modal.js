import './styles.css'
import ComponentContainer from '../Component_container'
import { useState } from 'react'

export default function Modal() {
  const [modal, showModal] = useState(0)
  return (
    <div>
      <ComponentContainer>
        <div className='component-heading' id='avatar-heading'>
          Modal
        </div>
        <button class='btn' onClick={() => showModal(!modal)}>
          Show Modal
        </button>
        <div className='flex-stack'>
          {/* <div className='modal-display'>
            <div className='modal-display-row'>
              <div className='modal-heading-display'>Heading</div>
              <div className='close-btn-display'>&times;</div>
            </div>
            <div className='modal-content-display'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div> */}
        </div>
        <iframe
          title='modal'
          src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=16px&lh=154%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%27modal%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27modal-heading%27%253EHeading%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27close-btn%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2526times%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27modal-content%27%253EThis%2520is%2520the%2520content%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </ComponentContainer>
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
