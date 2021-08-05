import '../index.css'
import Component_container from './Component_container'
import avatar_m from '../images/undraw_male_avatar_323b.svg'
import avatar_f from '../images/undraw_female_avatar_w3jk.svg'

export default function Avatar() {
  return (
    <div id='avatars'>
      <Component_container>
        <div className='component-heading'>Avatar</div>
        <div className='flex-stack'>
          <img className='avatar-s' src={avatar_m} />
          <img className='avatar-m' src={avatar_m} />
          <img className='avatar-l' src={avatar_m} />
          <img className='avatar-l' src={avatar_f} />
          <img className='avatar-m' src={avatar_f} />
          <img className='avatar-s' src={avatar_f} />
        </div>

        <iframe
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520class%253D%2522avatar-s%2522%2520src%253D%2522images%252Fundraw_male_avatar_323b.svg%2522%2520%252F%253E%250A%253Cimg%2520class%253D%2522avatar-m%2522%2520src%253D%2522images%252Fundraw_male_avatar_323b.svg%2522%2520%252F%253E%250A%253Cimg%2520class%253D%2522avatar-l%2522%2520src%253D%2522images%252Fundraw_male_avatar_323b.svg%2522%2520%252F%253E%250A%253Cimg%2520class%253D%2522avatar-l%2522%2520src%253D%2522images%252Fundraw_female_avatar_w3jk.svg%2522%2520%252F%253E%250A%253Cimg%2520class%253D%2522avatar-m%2522%2520src%253D%2522images%252Fundraw_female_avatar_w3jk.svg%2522%2520%252F%253E%250A%253Cimg%2520class%253D%2522avatar-s%2522%2520src%253D%2522images%252Fundraw_female_avatar_w3jk.svg%2522%2520%252F%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
        <div id='badges'></div>
      </Component_container>
    </div>
  )
}
