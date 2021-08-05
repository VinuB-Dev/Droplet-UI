import '../index.css'

export default function Container({ children }) {
  return (
    <div className='center-container-component-white-margin-below'>
      <div className='flex-stack-col'>{children}</div>
    </div>
  )
}
