import '../index.css'
import ComponentContainer from './Component_container'
import avatar_m from '../images/undraw_male_avatar_323b.svg'
import avatar_f from '../images/undraw_female_avatar_w3jk.svg'

export default function Avatar_badge() {
  return (
    <div>
      <ComponentContainer>
        <div className='component-heading' id='avatar-heading'>
          Avatar with badge
        </div>
        <div className='flex-stack'>
          <div className='badge'>
            <img className='avatar-l' src={avatar_m} alt='' />
            <div className='avatar_number'>2m</div>
          </div>
          <div className='badge'>
            <img className='avatar-l' src={avatar_f} alt='' />
            <div className='avatar_active'></div>
          </div>
        </div>
        <iframe
          title='avatar badge'
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520class%253D%2522avatar-l%2522%2520src%253D%2522images%252Fundraw_male_avatar_323b.svg%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar_number%2522%253E2m%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%253Cimg%2520class%253D%2522avatar-l%2522%2520src%253D%2522images%252Fundraw_male_avatar_323b.svg%2522%252F%253E%250A%2520%2520%2520%253Cdiv%2520class%253D%2522avatar_active%2522%253E%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
        <div id='alerts'></div>
      </ComponentContainer>
    </div>
  )
}
