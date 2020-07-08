import React from 'react';
import Link from 'next/link';

const Pesquisa = () => {
  return (
    <div>
      <div className='pt-6'>
        <h1 className='text-center font-bold mb-4 text-2xl'>Criticas e sugestões</h1>
        <p className='text-center mb-6'>
          O  Estabelecimento X sempre busca atender melhor os seus clientes.<br />
          Por Isso, estamos sempre abertos a sua opinião.
        </p>
      </div>
      <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='p-4 block shadow bg-gray-400 my-2 rounded' />
      </div>
    </div>

  )
}

export default Pesquisa;