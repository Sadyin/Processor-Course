console.log("JavaScript file is being read.");

const currButton = document.getElementById('currButton')
const toastLiveExample = document.getElementById('liveToast')

if (currButton) {
    currButton.addEventListener('click', () => {
      //  console.log("clicked")
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
  }

const pricButton = document.getElementById("pricButton")
const priceModal = document.getElementById("exampleModal")

if (pricButton) {
    pricButton.addEventListener('click', () => {
    //    console.log("Clicked on Price1!")
        const priceShow = new bootstrap.Modal(priceModal)
        priceShow.show()

    })
}

const regButton = document.getElementById("regButton")
regModal = document.getElementById("exampleModalToggle")

if (regButton) {
    regButton.addEventListener('click', () => {
        console.log("Clicked on Register!")
        const regShow = new bootstrap.Modal(regModal)
        regShow.show()
    })
}