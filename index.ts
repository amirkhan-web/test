interface ResData {
  userId: number
  id: number
  title: string
  body: string
}

class FifteenthTitle {
  static #URL = 'https://jsonplaceholder.typicode.com/posts'
  static #ID = 15

  static #get() {
    fetch(FifteenthTitle.#URL).then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(resData => FifteenthTitle.#getTitleFromJson(resData))
      .then(title => console.log(title))
      .catch(({ message }) => console.error(message))
  }

  static #getTitleFromJson(resData: ResData[]) {
    const itemWithTitle = resData.find(item => item.id === FifteenthTitle.#ID)
    // здесь потенциальная ошибка. Я не стал ничего исправлять и сделал как в задание. 
    // Если решить эту ошибку, то вот так itemWithTitle!.title 
    const title = itemWithTitle.title
    console.log(itemWithTitle)

    return title
  }

  run() {
    FifteenthTitle.#get()
  }
}

const fifteenthTitle = new FifteenthTitle()
fifteenthTitle.run()
