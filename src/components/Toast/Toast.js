import './styles.css'
import ComponentContainer from '../Component_container'

export default function Toast() {
  return (
    <div>
      <ComponentContainer>
        <div className='component-heading' id='avatar-heading'>
          Toast
        </div>
        <div class='toast'>Disguised Toast</div>
        <iframe
          title='toast'
          src='https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%27toast%27%253EDisguised%2520Toast%253C%252Fdiv%253E'
          style={{ transform: 'scale(1)', overflow: 'hidden', height: '100px' }}
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </ComponentContainer>
    </div>
  )
}

// function CreateNotification() {
//   const toasts = document.getElementById('toasts')
//   const notif = document.createElement('div')
//   notif.classList.add('toast')
//   notif.innerHTML = 'Droplet UI'
//   toasts.appendChild(notif)

//   setTimeout(() => {
//     notif.remove()
//   }, 3000)
// }

/* <div id='toasts'></div>
        <button class='btn' onClick={CreateNotification}>
          Show Notification
        </button> */
