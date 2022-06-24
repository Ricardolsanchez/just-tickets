import React, {useState} from 'react'
import './form.css'

const Form = () => {

  const  [enterName,setEnterName] = useState ('')
  const  [enterEmail,setEnterEmail] = useState ('')
  const  [enterMessage,setEnterMessage] = useState ('')

  const submitHandler =(e)=>{
    e.preventDeFault()

    console.log('submitted')
  }

  return (
    <form className='form' onSubmit={submitHandler}>
        <div className="form__input">
            <input type='text' placeholder='Your Name' value={enterName} onChange={(e)=> setEnterName(e.target.value)} />
        </div>
        <div className="form__input">
            <input type='email' placeholder='Your Email' value={enterEmail} onChange={(e)=> setEnterEmail(e.target.value)}/>
        </div>
        <div className="form__input">
            <textarea placeholder='Write A Message!' value={enterMessage} onChange={(e)=> setEnterMessage(e.target.value)} ></textarea>
        </div>

        <button className='submit__btn' type='submit' >Submit</button>
    </form>
  );
};

export default Form