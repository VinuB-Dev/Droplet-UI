import '../index.css'
import card_img from '../images/c-d-x-PDX_a_82obo-unsplash.jpg'

export default function Card2() {
  return (
    <div>
      <div className='card2'>
        <div>
          <img className='card-img2' src={card_img} />
        </div>
        <div className='card-desc2'>
          <span className='title2'>Headphones</span>
          <span className='product-desc2'>
            Awesome headphones with noise cancellation technology
          </span>
          <span className='bold'>Rs.1200</span>
          <span className='actual-price'>Rs.2000</span>
          <button className='primary_btn-yellow product-desc'>Buy Now</button>
        </div>
      </div>
      <div>
        <iframe
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card2%2522%253E%250A%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520class%253D%2522card-img2%2522%250A%2520%2520%2520%2520%2520%2520src%253D%2522images%252Fc-d-x-PDX_a_82obo-unsplash.jpg%2522%250A%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522card-desc2%2522%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522title2%2522%253EHeadphones%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522product-desc2%2522%250A%2520%2520%2520%2520%2520%2520%253EAwesome%2520headphones%2520with%2520noise%2520cancellation%2520technology%253C%252Fspan%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522bold%2522%253ERs.1200%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522actual-price%2522%253ERs.2000%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary_btn-yellow%2520product-desc%2522%253EBuy%2520Now%253C%252Fbutton%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </div>
    </div>
  )
}
