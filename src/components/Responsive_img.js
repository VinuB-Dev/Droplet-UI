import '../index.css'
import ComponentContainer from './Component_container'
import img from '../images/asa-rodger-B8xmtKWLrVo-unsplash.jpg'

export default function Responsive_img() {
  return (
    <div>
      <ComponentContainer>
        <div class='component-heading' id='avatar-heading'>
          Images
        </div>
        <div class='flex-stack-col'>
          <div>
            <h2>Responsive</h2>
            <img class='responsive-img' src={img} alt='' />
          </div>
          <div>
            <h2>Round</h2>
            <img class='round-img' src={img} alt='' />
          </div>
        </div>
        <iframe
          title='responsive-img'
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Ch2%253EResponsive%253C%252Fh2%253E%250A%253Cimg%250A%2520%2520class%253D%2522responsive-img%2522%250A%2520%2520src%253D%2522images%252Fasa-rodger-B8xmtKWLrVo-unsplash.jpg%2522%250A%2520%2520alt%253D%2522%2522%250A%252F%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%253E%250A%253Ch2%253ERound%253C%252Fh2%253E%250A%253Cimg%250A%2520%2520class%253D%2522round-img%2522%250A%2520%2520src%253D%2522images%252Fasa-rodger-B8xmtKWLrVo-unsplash.jpg%2522%250A%2520%2520alt%253D%2522%2522%250A%252F%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </ComponentContainer>
    </div>
  )
}
