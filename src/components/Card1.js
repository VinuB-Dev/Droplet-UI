import '../index.css'

export default function Card1() {
  return (
    <div className='content-wrap'>
      <div className='card1'>
        <img
          className='card-img1'
          src='https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/productimage/2021/1/25/37779253-9c18-473e-8600-8c0a6761b18a1611571984783-1.jpg'
          alt=''
        />
        <div className='card-desc1'>
          <span className='bold'>Cavallo by linen club</span>
          <span className='product-desc'>Men Casual shirt</span>
          <span className='bold'>Rs.1200</span>
          <span className='actual-price'>Rs.2000</span>
        </div>
        <div className='card-left-badge'>40% discount</div>
        <div className='card-right-badge'>
          <i
            className='fa fa-heart fa-2x'
            aria-hidden='true'
            style={{ color: '#da4444' }}
          ></i>
        </div>
      </div>
      <br />
      <div>
        <iframe
          title='card1'
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card1%2522%253E%250A%2520%2520%253Cimg%250A%2520%2520%2520%2520class%253D%2522card-img1%2522%250Asrc%253D%2522https%253A%252F%252Fassets.myntassets.com%252Ffl_progressive%252Fh_960%252Cq_80%252Cw_720%252Fv1%252Fassets%252Fimages%252Fproductimage%252F2021%252F1%252F25%252F37779253-9c18-473e-8600-8c0a6761b18a1611571984783-1.jpg%2522%250A%2520%2520%252F%253E%250A%2520%2520%253Cdiv%2520class%253D%2522card-desc1%2522%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522bold%2522%253ECavallo%2520by%2520linen%2520club%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522product-desc%2522%253EMen%2520Casual%2520shirt%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522bold%2522%253ERs.1200%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522actual-price%2522%253ERs.2000%253C%252Fspan%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522card-left-badge%2522%253E40%2525%2520discount%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520class%253D%2522card-right-badge%2522%253E%250A%2520%2520%2520%2520%253Ci%250A%2520%2520%2520%2520%2520%2520class%253D%2522fa%2520fa-heart%2520fa-2x%2522%250A%2520%2520%2520%2520%2520%2520aria-hidden%253D%2522true%2522%250A%2520%2520%2520%2520%2520%2520style%253D%2522color%253A%2520%2523da4444%2522%250A%2520%2520%2520%2520%253E%253C%252Fi%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
      </div>
    </div>
  )
}
