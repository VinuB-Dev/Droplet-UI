import '../index.css'
import card_img from '../images/revolt-164_6wVEHfI-unsplash.jpg'

export default function Card_with_dismiss() {
  return (
    <div>
      <div className='card-with-dismiss'>
        <div className='positioning'>
          <img className='card-img-with-dismiss' src={card_img} alt='' />
          <div className='card-close-btn'>&times;</div>
          <div className='card-desc3'>
            <span className='title2'>Nike Shoes</span>
            <span className='product-desc2'>Best shoes under Rs.3000</span>
            <button className='primary_btn-yellow'>Buy Now</button>
          </div>
        </div>
      </div>
      <div>
        <iframe
          title='card with dismiss'
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card-with-dismiss%2522%253E%250A%2520%2520%253Cdiv%2520class%253D%2522positioning%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520class%253D%2522card-img-with-dismiss%2522%250A%2520%2520%2520%2520%2520%2520src%253D%2522images%252Frevolt-164_6wVEHfI-unsplash.jpg%2522%250A%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-close-btn%2522%253E%2526times%253B%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-desc3%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522title2%2522%253ENike%2520Shoes%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522product-desc2%2522%253EBest%2520shoes%2520under%2520Rs.3000%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary_btn-yellow%2522%253EBuy%2520Now%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </div>
    </div>
  )
}
