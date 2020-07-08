import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <p className='mt-12 text-center'>
        O Estabelecimento X sempre busca atender melho os seus clientes.<br />
        Por Isso, estamos sempre abertos a sua opiniaão.
      </p>
      <div className='text-center mt-12 mb-12'>
        <Link href=''>
          <a className='bg-gray-700 px-12 py-4  rounded-lg shadow-lg hover:shadow text-white'>Dar opiniaão ou sugestão</a>
        </Link>
      </div>
      <p className='mt-12 text-center'>
        Mensagem do desconto.
      </p>
    </div>
  )
}


export default Index;