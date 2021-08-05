import './styles.css'
import Component_container from '../Component_container'

export default function Carousel() {
  return (
    <div>
      <Component_container>
        <div className='component-heading' id='avatar-heading'>
          Carousel
        </div>
        <div className='banner'>
          <div className='sliding-img img1' />
          <button
            style={{ backgroundColor: '#f50057' }}
            className='btn-img'
          ></button>
          <button
            style={{ backgroundColor: '#fbcfe8' }}
            className='btn-img'
          ></button>
        </div>
        <iframe
          src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%27banner%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27sliding-img%2520img1%27%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%2520backgroundColor%253A%2520%27%2523f50057%27%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%27btn-img%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%2520backgroundColor%253A%2520%27%2523fbcfe8%27%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520className%253D%27btn-img%27%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%253C%252Fdiv%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </Component_container>
    </div>
  )
}
