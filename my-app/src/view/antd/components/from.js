export default function XFrom() {
  const onsubmit = (e) => {
    console.log(e)
  }
  return (
    <div className='xfrom'>
      <input className='name_input' placeholder='please input ur name' />
      <input className='pwd_input' placeholder='please input ur passwoed' />
      <button className='xfrom-btn' onClick={onsubmit}>提叫</button>
    </div>
  )
}
