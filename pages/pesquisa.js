import React, { useState } from 'react';

import PageTitle from '../components/pageTitle';

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    WhatsApp: '',
    Nota: 0
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {

    }
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div>
      <div className='pt-6'>
        <PageTitle title='Pesquisa' />
        <h1 className='text-center font-bold mb-4 text-2xl'>Criticas e sugestões</h1>
        <p className='text-center mb-6'>
          O  Estabelecimento X sempre busca atender melhor os seus clientes.<br />
          Por Isso, estamos sempre abertos a sua opinião.
        </p>
      </div>
      {!sucess && <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='p-4 block shadow bg-gray-400 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>Email:</label>
        <input type='text' className='p-4 block shadow bg-gray-400 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>WhatsApp:</label>
        <input type='text' className='p-4 block shadow bg-gray-400 my-2 rounded' placeholder='WhatsApp' onChange={onChange} name='WhatsApp' value={form.WhatsApp} />
        <label className='font-bold'>Nota:</label>
        <div className='flex py-6'>
          {notas.map((nota, key) => {
            return (
              <label key={key} className='block w-1/6 text-center'>
                {nota}<br />
                <input type='radio' name='Nota' value={nota} onChange={onChange} />
              </label>)
          })
          }
        </div>
        <button onClick={save} className='bg-gray-700 px-12 py-4  rounded-lg shadow-lg hover:shadow text-white'>Salvar</button>
      </div>}
      {sucess && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py'>Obrigado por contribuir com sua sugestão!!</p>
        {
          retorno.showCupom && <div className='text-center border p-4 mb-4'>
            Seu Cupom:  <br />
            <span className='font-bold text-xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCupom && <div className='text-center border p-4 mb-4'>
            <span className='font-bold block mb-2'>{retorno.Promo}</span>
            <br />
            <span className='italic'>Tire um print ou foto desta tela e apresente ao garçom</span>
          </div>
        }
      </div>}
    </div>

  )
}

export default Pesquisa;