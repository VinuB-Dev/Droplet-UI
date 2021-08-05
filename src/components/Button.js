import '../index.css'
import ComponentContainer from './Component_container'

export default function Button() {
  return (
    <div>
      <ComponentContainer>
        <div className='component-heading' id='avatar-heading'>
          Buttons
        </div>
        <div className='flex-stack'>
          <button className='primary_btn-blue'>Primary Button 1</button>
          <button className='primary_btn-yellow'>Primary Button 2</button>
          <button className='secondary_btn'>Secondary Button</button>
          <a className='link_btn' href='.'>
            Link Button
          </a>
          <button className='float-button'>
            <i className='fa fa-times fa-2x' aria-hidden='true'></i>
          </button>
          <button className='float-button'>
            <i className='fa fa-adjust fa-2x' aria-hidden='true'></i>
          </button>
        </div>
        <iframe
          title='buttons'
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522primary_btn-blue%2522%253EPrimary%2520Button%25201%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522primary_btn-yellow%2522%253EPrimary%2520Button%25202%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522secondary_btn%2522%253ESecondary%2520Button%253C%252Fbutton%253E%250A%253Ca%2520class%253D%2522link_btn%2522%2520href%253D%2522%2522%253ELink%2520Button%253C%252Fa%253E%250A%253Cbutton%2520class%253D%2522float-button%2522%253E%250A%2520%2520%253Ci%2520class%253D%2522fa%2520fa-times%2520fa-2x%2522%2520aria-hidden%253D%2522true%2522%253E%253C%252Fi%253E%250A%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522float-button%2522%253E%250A%2520%2520%253Ci%2520class%253D%2522fa%2520fa-adjust%2520fa-2x%2522%2520aria-hidden%253D%2522true%2522%253E%253C%252Fi%253E%250A%253C%252Fbutton%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </ComponentContainer>
    </div>
  )
}
