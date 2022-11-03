let toggles = document.getElementsByClassName('articlediv');
let buttontxt = document.getElementsByClassName('button')
let contentDiv = document.getElementsByClassName('answer');
let icons = document.getElementsByClassName('arrow');
let border = document.querySelector('article')

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = '56px'
            buttontxt[i].style.color = '#1d1e35'
            buttontxt[i].style.fontWeight = '900'
            icons[i].style.transform = 'rotate(180deg)'
            contentDiv[i].style.position = 'relative'
            contentDiv[i].style.top = '-15px'
        }
        else{
            contentDiv[i].style.height = "0px";
            icons[i].style.transform = 'rotate(0deg)'
            buttontxt[i].style.color = '#787887'
            buttontxt[i].style.fontWeight = '300'
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                contentDiv[j].style.height = "0px";
                icons[j].style.transform = 'rotate(0deg)'
                buttontxt[j].style.color = '#787887'
                buttontxt[j].style.fontWeight = '300'
            }
        }
    });
}

// button.forEach((question) => {
//         question.addEventListener("click", () =>{
//             answer.classList.remove('hidden')
//             buttontxt.style.color = '#1d1e35'
//             buttontxt.style.fontWeight = '900'
//             arrow.style.transform = 'rotate(180deg)'
//             arrow.style.marginTop = '-85px'
//             arrow.style.hover
//         })
//         arrow.addEventListener("mouseenter", () =>{
//             arrow.style.cursor = 'pointer'
//         })
//     })



// function clicked(){
//     answer.classList.remove('hidden')
// }



// button.array.forEach(question => {
//     question.addEventListener("click", () =>{

//     })
// });



// button.addEventListener('click', () => {
//     answer.style.display = 'block';
// })