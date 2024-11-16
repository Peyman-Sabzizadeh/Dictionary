
const info = document.querySelector(".info")
const wordInput = document.querySelector(".word-input")
const findBtn = document.querySelector(".find-btn")
const mainURL = "https://api.dictionaryapi.dev/api/v2/entries/en/"

function playVoice(data) {
    let audioFile = new Audio(data[0].phonetics[0].audio)
    audioFile.play()
}

window.addEventListener("load", () => {
    wordInput.focus()
});
function searchWord () {
    fetch(`${mainURL}${wordInput.value}`)
    .then(res => res.json())
        .then(data => 
            info.insertAdjacentHTML("beforeend", `
                <div class="flex items-center justify-around">
                    <h4 class="font-PoppinsBold text-4xl mt-4">${data[0].word}</h4>
                    <span onclick='playVoice(${JSON.stringify(data)})'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>
                    </span>
                </div>
            `)
        )
    // test fetch
    // fetch(`${mainURL}${wordInput.value}`)
    //     .then(test => test.json())
    //     .then(ali => console.log(ali[0]))
    wordInput.value = ""
}
findBtn.addEventListener("click", searchWord)
wordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchWord()
    }
})