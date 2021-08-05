import '../index.css'
import Container from '../components/Container'
import Parallax from '../components/Parallax'

export default function Index() {
  return (
    <div>
      <Parallax />
      <Container>
        <div>
          <div class='about-heading'>Installation</div>
          <div class='justify1'>
            Copy and paste the code in the head tag of your html document and
            browse through the components to check the different styles
            available.
          </div>
          <div>
            <iframe
              src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fdropletui.netlify.app%252Fstyle.css%2522%253E'
              sandbox='allow-scripts allow-same-origin'
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  )
}
