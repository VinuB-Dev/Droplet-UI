import '../index.css'

export default function About() {
  return (
    <div>
      <div class='center-container-component-white-with-margin'>
        <div class='flex-stack-col'>
          <div class='about-heading'>Project Github Link</div>
          <div>
            <a class='link_btn' href='https://github.com/vignesh-bhat1999'>
              <i class='fa fa-github' aria-hidden='true'></i> Github
            </a>
          </div>
          <div class='about-heading'>Reach me at</div>
          <ul class='list-inline'>
            <li>
              <a class='link_btn' href='https://github.com/vignesh-bhat1999'>
                <i class='fa fa-github' aria-hidden='true'></i> Github
              </a>
            </li>
            <li>
              <a class='link_btn' href='https://twitter.com/VigneshBS10'>
                <i class='fa fa-twitter' aria-hidden='true'></i>
                Twitter
              </a>
            </li>
            <li>
              <a
                class='link_btn'
                href='https://www.linkedin.com/in/vignesh-b-s-b7a805152/'
              >
                <i class='fa fa-linkedin-square' aria-hidden='true'></i>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
