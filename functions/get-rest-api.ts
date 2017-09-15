import fetch from 'node-fetch'

const url ='https://raw.githubusercontent.com/vtex-apps/functions-getting-started/master/manifest.json'

export default async function (args, context) {
  return fetch(url).then((res) => res.json())
}
