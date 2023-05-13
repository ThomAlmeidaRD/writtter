

fetch('http://localhost:3000/api/artigos/artigo-2')
  .then(response => response.json())
  .then(dados => {

    var article = document.createElement('article')
    var main = document.querySelector('main')


    for (var i = 0; i < dados.length; i++) {
      if (dados[i].type == 0) {
        var article_item = document.createElement('h2')
        article_item.innerText = dados[i].content
        article.appendChild(article_item)
      } else if (dados[i].type == 1) {
        var article_item = document.createElement('p')
        article_item.innerText = dados[i].content
        article.appendChild(article_item)
      } else {
        var article_item = document.createElement('a')
        article_item.innerHTML = `
        <a href="${dados[i].link}" target="blank">${ dados[i].content}</a>
        `
        article.appendChild(article_item)

      }

      main.appendChild(article)

    }
  })


function Artigos() {


  return (
    <>
      <h1></h1>
      <main>

      </main>
    </>
  )

}


export default Artigos
