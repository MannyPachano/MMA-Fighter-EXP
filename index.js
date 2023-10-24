import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const fightersArray = [
        {
            name: 'Manny',
            expPoints: 0,
            level: 1,
            dataName: 'manny',
        },
        {
            name: 'Anabella',
            expPoints: 0,
            level: 1,
            dataName: 'anabella',
        },
        {
            name: 'Adan',
            expPoints: 0,
            level: 1,
            dataName: 'adan',
        },
        {
            name: 'Nick',
            expPoints: 0,
            level: 1,
            dataName: 'nick',
        },
    ]
    
    
    
const containerMain = document.getElementById('container-main')


function getFighters() {
    let html = ""
    
    for (let fighter of fightersArray) {        
        html += `
            <div class="fighter">
                    <h3 class="fighter-level">Level ${fighter.level}</h3>
                    <div class="progress-bar-container">
                        <div class="fighter-progress-bar" id="fighter-progress-bar" data-name="${fighter.dataName}"></div>
                    </div>                
                    <img src="assets/cat.png">
                    <div class="fighter-name" id="fighter-name">${fighter.name}</div>
                    <div class="toggle-btn-container">
                        <div class="class-name">Boxing</div>
                        <button class="toggle-btn toggle-btn-neg" id="boxing-btn-neg" data-name="${fighter.dataName}">-</button>
                        <button class="toggle-btn toggle-btn-plus" id="boxing-btn-pos" data-name="${fighter.dataName}">+</button>
                    </div>
                <div class="toggle-btn-container">
                        <div class="class-name">Muay Thai</div>
                        <button class="toggle-btn toggle-btn-neg" id="muay-thai-btn-neg" data-name="${fighter.dataName}">-</button>
                        <button class="toggle-btn toggle-btn-plus" id="muay-thai-btn-pos" data-name="${fighter.dataName}">+</button>
                    </div>
                    <div class="toggle-btn-container">
                        <div class="class-name">Wrestling</div>
                        <button class="toggle-btn toggle-btn-neg" id="wrestling-btn-neg" data-name="${fighter.dataName}">-</button>
                        <button class="toggle-btn toggle-btn-plus" id="wrestling-btn-pos" data-name="${fighter.dataName}">+</button>
                    </div>
                    <div class="toggle-btn-container">
                        <div class="class-name">Jiu Jitsu</div>
                        <button class="toggle-btn toggle-btn-neg" id="jiu-jitsu-btn-neg" data-name="${fighter.dataName}">-</button>
                        <button class="toggle-btn toggle-btn-plus" id="jiu-jitsu-btn-pos" data-name="${fighter.dataName}">+</button>
                    </div>
                    
                </div>
            `
        }
    containerMain.innerHTML = html
}
getFighters()

function getProgressBars(){
    let progressBars = document.querySelectorAll(".fighter-progress-bar")
    
    for (let i = 0; i < progressBars.length; i++) {
        for ( let fighter of fightersArray){
                if (progressBars[i].dataset.name === fighter.dataName){
                    progressBars[i].style.height = `${fighter.expPoints / 4}%`
                    if (fighter.expPoints > 0){
                        progressBars[i].textContent = `${fighter.expPoints} EXP`
                    }
                }
        }   
    }
}
getProgressBars()

document.addEventListener("click", function(e){
    if (e.target.dataset){
        let fighterName = e.target.dataset.name
        let elementId = e.target.id
        
        for (let fighter of fightersArray){
            if (fighterName === fighter.dataName && (elementId === 'boxing-btn-pos' || elementId === 'jiu-jitsu-btn-pos')){
                fighter.expPoints = fighter.expPoints + 50
            } else if (fighterName === fighter.dataName && elementId === 'muay-thai-btn-pos'){
                fighter.expPoints = fighter.expPoints + 60
            } else if (fighterName === fighter.dataName && elementId === 'wrestling-btn-pos'){
                fighter.expPoints = fighter.expPoints + 75
            }        
        }  
        getProgressBars()  
    }
})
