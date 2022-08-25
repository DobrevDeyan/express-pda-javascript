export function validEmailCheck(input) {
  input.addEventListener("keyup", function (e) {
    if (e.target.value === "") {
      return
    }
    if (validateEmail(e.target.value)) {
      e.target.parentNode.classList.remove("error")
      e.target.parentNode.classList.add("success")
    } else {
      e.target.parentNode.classList.remove("success")
      e.target.parentNode.classList.add("error")
    }
  })
  input.onkeyup = function (e) {
    if (this.value.length === 0) {
      e.target.parentNode.classList.remove("success")
      e.target.parentNode.classList.remove("error")
    }
  }
  input.onblur = function (e) {
    if (e.target.value === "") {
      return
    }
    if (validateEmail(e.target.value)) {
      e.target.parentNode.classList.remove("error")
      e.target.parentNode.classList.add("success")
    } else {
      e.target.parentNode.classList.remove("success")
      e.target.parentNode.classList.add("error")
    }
  }

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  }
}
