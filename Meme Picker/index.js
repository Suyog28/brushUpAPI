import { catsData } from "../data.js"


const emotionRadios = document.getElementById('emotion-radios')
const getBtnEl = document.getElementById("get-image-btn")

getBtnEl.addEventListener("click", getSelectedEmotionBtn)

function getSelectedEmotionBtn() {
    const getChecked = document.querySelector('input[type="radio"]:checked')
    console.log(getChecked.value)
}



emotionRadios.addEventListener("change", highlightEmotionItem)

function highlightEmotionItem(e) {
    let highlightRadioBtns = document.getElementsByClassName("radio")
    for (let radio of highlightRadioBtns) {
        radio.classList.remove("highlight")
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}



function getemotionalArray(cats) {
    let emotionsOfCat = []
    for (let cat of cats) {
        for (let emotionTag of cat.emotionTags) {
            if (!emotionsOfCat.includes(emotionTag)) {
                emotionsOfCat.push(emotionTag)
            }

        }
    }
    return emotionsOfCat
}


function renderCats(cats) {
    let radioItems = ""
    const items = getemotionalArray(cats)
    for (let item of items) {
        radioItems += `  <div class="radio">
        <label for="${item}">${item}</label>
        <input
        type="radio"
        id="${item}"
        name="radioBtn"
        value="${item}"
        >
      </div>`
        emotionRadios.innerHTML = radioItems
    }
}

renderCats(catsData)