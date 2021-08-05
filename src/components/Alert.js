import '../index.css'
import ComponentContainer from './Component_container'

export default function Alert() {
  return (
    <div>
      <ComponentContainer>
        <div className='component-heading' id='avatar-heading'>
          Alerts
        </div>
        <div className='flex-stack'>
          <div className='alert success'>
            Success Message <span className='close-btn'>&times;</span>
          </div>
          <div className='alert failure'>
            Failure Message <span className='close-btn'>&times;</span>
          </div>
          <div className='alert warning'>
            Warning Message <span className='close-btn'>&times;</span>
          </div>
          <div className='alert info'>
            Info Message <span className='close-btn'>&times;</span>
          </div>
        </div>
        <iframe
          title='alert'
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522alert%2520success%2522%253E%250A%2520%2520Success%2520Message%2520%253Cspan%2520class%253D%2522close-btn%2522%253E%2526times%253B%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522alert%2520failure%2522%253E%250A%2520%2520Failure%2520Message%2520%253Cspan%2520class%253D%2522close-btn%2522%253E%2526times%253B%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522alert%2520warning%2522%253E%250A%2520%2520Warning%2520Message%2520%253Cspan%2520class%253D%2522close-btn%2522%253E%2526times%253B%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522alert%2520info%2522%253E%250A%2520%2520Info%2520Message%2520%253Cspan%2520class%253D%2522close-btn%2522%253E%2526times%253B%253C%252Fspan%253E%250A%253C%252Fdiv%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </ComponentContainer>
    </div>
  )
}
