import React from 'react'

import Link from 'next/link'
import useSWR from 'swr';
import PageTitle from '../components/pageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div>
      <PageTitle title='Seja Bem-Vindo' />
      <p className='mt-12 text-center'>
        O Estabelecimento X sempre busca atender melho os seus clientes.<br />
        Por Isso, estamos sempre abertos a sua opiniaão.
      </p>
      <div className='text-center mt-12 mb-12'>
        <Link href='/pesquisa'>
          <a className='bg-gray-700 px-12 py-4  rounded-lg shadow-lg hover:shadow text-white'>Dar opiniaão ou sugestão</a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='mb-10 mt-12 te text-center'>
          {data.message}
        </p>
      }
    </div >
  )
}

export default Index;