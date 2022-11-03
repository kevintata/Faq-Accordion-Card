let button = document.getElementsByClassName('articlediv');
let buttontxt = document.getElementsByClassName('button')
let answer = document.getElementsByClassName('answer');
let arrow = document.getElementsByClassName('arrow');
let border = document.querySelector('article')

for(let i=0; i<button.length; i++){
    button[i].addEventListener('click', ()=>{
        if( parseInt(answer[i].style.height) != answer[i].scrollHeight){
            answer[i].style.height = '56px'
            buttontxt[i].style.color = '#1d1e35'
            buttontxt[i].style.fontWeight = '900'
            arrow[i].style.transform = 'rotate(180deg)'
            answer[i].style.position = 'relative'
            answer[i].style.top = '-15px'
        }
        else{
            answer[i].style.height = "0px";
            arrow[i].style.transform = 'rotate(0deg)'
            buttontxt[i].style.color = '#787887'
            buttontxt[i].style.fontWeight = '300'
        }

        for(let j=0; j<answer.length; j++){
            if(j!==i){
                answer[j].style.height = "0px";
                answer[j].style.height = "0px";
                arrow[j].style.transform = 'rotate(0deg)'
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