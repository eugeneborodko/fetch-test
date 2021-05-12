const button = document.querySelector('.button')

const post = {
  id: 2,
  title: 'my awesome post'
}

async function addData() {
  const response = await fetch('http://my-json-server.typicode.com/eugeneborodko/fetch-test/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(post)
  })
  const json = await response.json()
  console.log('json: ', json)
  return json
}

function insertData(data) {
  let html = `
    <div>
      <div>${data.id}</div>
      <div>${data.title}</div>
    </div>
  `
  button.insertAdjacentHTML('afterend', html)
}

button.addEventListener('click', () => addData().then((res) => insertData(res)))