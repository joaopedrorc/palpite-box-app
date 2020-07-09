import { GoogleSpreadsheet } from 'google-spreadsheet';

import credentials from '../../credentials.json';
import moment from 'moment'

const doc = new GoogleSpreadsheet('1n5UGEoWhl1KNIMuNwmC1hF4WaGaTCuFnLl7eRPCxcLA')


export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)


    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')

    const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
    const textoCell = sheetConfig.getCell(1, 1)

    let Cupom = ''
    let Promo = ''
    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      // gerar cupom
      Cupom = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16)
      Promo = textoCell.value
    }

    //Nome	Email	WhatsApp	Cupom	Promo

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      WhatsApp: data.WhatsApp,
      Nota: 5,
      'Data do Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
      Cupom,
      Promo
    })
    res.end(req.body)
  } catch (err) {
    console.log(err)
    res.end('error')
  }
}