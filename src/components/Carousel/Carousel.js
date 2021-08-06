import './styles.css'
import ComponentContainer from '../Component_container'

export default function Carousel() {
  return (
    <div>
      <ComponentContainer>
        <div className='component-heading' id='avatar-heading'>
          Carousel
        </div>
        <div className='banner'>
          <div className='selected-img img1' />
          <button className='btn-img-1'></button>
          <button className='btn-img-2'></button>
        </div>
        <iframe
          title='carousel'
          src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=16px&lh=154%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%27banner%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27selected-img%2520img1%27%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%27btn-img-1%27%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%27btn-img-2%27%253E%253C%252Fbutton%253E%250A%253C%252Fdiv%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </ComponentContainer>
    </div>
  )
}
