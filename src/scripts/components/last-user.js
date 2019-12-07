export default {
  init (lasts) {
    const li = document.querySelectorAll('.last-user__item')

    // let previousUsers = []
    // li.forEach(item => {
    //   previousUsers.push(item.innerText)
    // })

    for (let index = 0; index < 3; index++) {
      const user = '@' + lasts[index].user.screen_name
      // const template = `
      //   <span>${previousUsers[index]}</span>
      //   <span>${user}</span>
      // `
      li[index].innerHTML = user
    }
    // previousUsers = []
  }
}
