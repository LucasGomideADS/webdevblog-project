import React, { useEffect, useRef, useState } from 'react'

import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {

  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSucessMessage, setShowSucessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  // useEffect(() => {
  //   nameEl.current.value = window.localStorage.getItem('name')
  //   emailEl.current.value = window.localStorage.getItem('email')
  // })

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if(!comment || !name || !email){
      setError(true)
      return
    }

    const commentObj = { name, email, comment, slug }

    if(storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSucessMessage(true)

        setTimeout(() => {
          setShowSucessMessage(false)
        }, 3000)
      })
  }

  return (
    // className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'
    <div>
      {/* <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Escreva um comentário</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text" ref={nameEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Nome'
          name='name'
        />

        <input
          type="text" ref={emailEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='email'
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Comentário'
          name='comment'
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true'/>
          <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>Salvar meu e-mail para o próximo comentário</label>
        </div>
      </div>

      {error && <p className='text-xs text-red-500'>Preencha todos os campos!</p>}
    
      <div className='mt-8'>
        <button type='button' className='transition duration-400 ease hover:bg-yellow-500 inline-block bg-black text-lg rounded-full text-white px-8 py-3 cursor-pointer' onClick={handleCommentSubmission}>
          Enviar
        </button>
      </div>

      {showSucessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comentário enviado!</span>} */}
    </div>
  )
}

export default CommentsForm