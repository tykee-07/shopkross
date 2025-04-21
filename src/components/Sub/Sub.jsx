import React from 'react'
import "./sub.css"
function Sub() {
  return (
    <div>
        <div className="pol">

            <div className='sub'>
                <h3>Подпишитесь на рассылку</h3>
                <p>Получайте уведомления о скидках, акциях и новинках!</p>
            </div>
            <div className="email">
                <h3>Ваш E-mail ?</h3>
                <input type="text" />
                <button>Подписаться</button>
            </div>
        </div>
    </div>
  )
}

export default Sub
