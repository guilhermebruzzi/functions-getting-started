import fetch from 'node-fetch'

const url ='https://api.vtexcrm.com.br/semparar/dataentities/LM/search?_fields=codigo,nomedamarca,destaques&_sort=nomedamarca'

export default async function (args, context) {
  return fetch(url).then((res) => res.json())
}
