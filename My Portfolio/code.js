const textDisplay = document.getElementById("text")
const phrases=['Hello, my name is','Musab Shoaib']
let i=0
let j=0
let currentPhrase=[]
let isDeleting= false

function loop() {
    textDisplay.innerHTML = currentPhrase.join('')

    if(i< phrases.length) {
        
        if(!isDeleting && j<= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            console.log('add a letter',j)
        }
        if(isDeleting && j <= phrases[i].length){
            currentPhrase.pop(phrases[i][j])
            j--
            console.log('remove a letter',j)
        }
        if(j==phrases[i].length){
            isDeleting= true
        }
        if(isDeleting && j === 0){
            currentPhrase=[]
            isDeleting=false
            i++
            if(i == phrases.length){
                i=0
            }
        }
    }
    setTimeout(loop,200)
}
loop()