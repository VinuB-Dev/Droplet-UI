import '../index.css'

export default function TextCard() {
  return (
    <div>
      <div className='card-with-text'>
        <div className='text-title'>Text Card</div>
        <div id='text-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          voluptas tempora laborum illum accusamus. Quam, illo. Saepe eveniet
          quas rerum obcaecati ipsa nihil, itaque architecto, repellendus, esse
          at modi asperiores.
        </div>
        <button className='primary_btn-yellow'>Read more</button>
      </div>
      <div>
        <iframe
          title='textcard'
          src='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card-with-text%2522%253E%250A%2520%2520%253Cdiv%2520class%253D%2522text-title%2522%253EText%2520Card%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520id%253D%2522text-desc%2522%253E%250A%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Laboriosam%250A%2520%2520%2520%2520voluptas%2520tempora%2520laborum%2520illum%2520accusamus.%2520Quam%252C%2520illo.%2520Saepe%2520eveniet%250A%2520%2520%2520%2520quas%2520rerum%2520obcaecati%2520ipsa%2520nihil%252C%2520itaque%2520architecto%252C%2520repellendus%252C%2520esse%250A%2520%2520%2520%2520at%2520modi%2520asperiores.%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cbutton%2520class%253D%2522primary_btn-yellow%2522%253ERead%2520more%253C%252Fbutton%253E%250A%253C%252Fdiv%253E'
          sandbox='allow-scripts allow-same-origin'
        ></iframe>
        <div id='images'></div>
      </div>
    </div>
  )
}
