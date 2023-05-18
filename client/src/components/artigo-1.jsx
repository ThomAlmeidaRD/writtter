
function Artigo1() {

  document.body.onload = function () {

    var url = 'http://localhost:3000/api/artigos/artigo-1'

    // eslint-disable-next-line react/prop-types
    fetch(url)
      .then(response => response.json())
      .then(dados => {

        console.log(dados)
        var article = document.createElement('article')
        var main = document.querySelector('main')


        for (var i = 0; i < dados.length; i++) {
          if (dados[i].type == 0) {
            var article_item_title = document.createElement('h2')
            article_item_title.innerText = dados[i].content
            article.appendChild(article_item_title)
          } else if (dados[i].type == 1) {
            var article_item_text = document.createElement('p')
            article_item_text.innerHTML = dados[i].content
            article.appendChild(article_item_text)
          } else {
            var article_item_link
            article_item_link.innerHTML = `
      <a href="${dados[i].link}" target="blank">${dados[i].content}</a>
      `
            article.appendChild(article_item_link)

          }

          main.appendChild(article)

        }
      })

  }

  return (
    <>
     
      <main>

      </main>

    </>
  )

}


export default Artigo1
