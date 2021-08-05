import '../index.css'
import ComponentContainer from './Component_container'

export default function Button() {
  return (
    <div>
      <ComponentContainer>
        <div class='component-heading' id='avatar-heading'>
          Text box
        </div>
        <div class='flex-stack-col'>
          <div>
            <div>
              <h1>Normal Text Box</h1>
              <input class='input-field' type='text' placeholder='Write here' />
              <h1>Error Text Box</h1>
              <input
                class='input-field error'
                type='text'
                placeholder='Write here'
              />
            </div>
          </div>
        </div>
        <iframe
          title='textbox'
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Ch1%253EText%2520Box%253C%252Fh1%253E%250A%253Cinput%2520class%253D%2522input-field%2522%2520type%253D%2522text%2522%2520placeholder%253D%2522Write%2520here%2522%2520%252F%253E%250A%253Ch1%253EError%2520Text%2520Box%253C%252Fh1%253E%250A%253Cinput%250A%2520%2520class%253D%2522input-field%2520error%2522%250A%2520%2520type%253D%2522text%2522%250A%2520%2520placeholder%253D%2522Write%2520here%2522%250A%252F%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </ComponentContainer>
    </div>
  )
}
