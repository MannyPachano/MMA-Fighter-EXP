import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const fightersArray = [
        {
            name: 'Manny',
            expPoints: 0,
            barPoints: 0,
            level: 1,
            dataName: 'manny',
        },
        {
            name: 'Anabella',
            expPoints: 0,
            barPoints: 0,
            level: 1,
            dataName: 'anabella',
        },
        {
            name: 'Adan',
            expPoints: 0,
            barPoints: 0,
            level: 1,
            dataName: 'adan',
        },
        {
            name: 'Nick',
            expPoints: 0,
            barPoints: 0,
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
                        <div class="low-progress-bar-exp" data-name="${fighter.dataName}"></div>
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

function checkLevel(){
    let progressBars = document.querySelectorAll(".fighter-progress-bar")
    
    for (let i = 0; i < progressBars.length; i++) {
        let progressBarPercentage = parseInt(progressBars[i].style.height)
        if ( progressBarPercentage > 99 ){
            for (let fighter of fightersArray){
                if (progressBars[i].dataset.name === fighter.dataName){
                    fighter.barPoints = fighter.barPoints - 100
                    fighter.level = fighter.level + 1
                    getFighters()
                    getProgressBars()
                }
            }
        }   
    }
}



function getProgressBars(){
    let progressBars = document.querySelectorAll(".fighter-progress-bar")
    let lowBarsExp = document.querySelectorAll(".low-progress-bar-exp")
    
    for (let i = 0; i < progressBars.length; i++) {
        for ( let fighter of fightersArray){
                if (progressBars[i].dataset.name === fighter.dataName){
                    
                    progressBars[i].style.height = `${fighter.barPoints}%`
                    if (fighter.expPoints > 0 && fighter.barPoints > 10){
                        progressBars[i].textContent = `${fighter.expPoints} EXP`
                        progressBars[i].style.marginTop = "auto"
                    } else if (fighter.barPoints < 10){
                        progressBars[i].textContent = ""
                        progressBars[i].style.marginTop = ".5em"
                    }
                    
                    if (fighter.barPoints < 10){
                        for ( let bar of lowBarsExp){
                            if (progressBars[i].dataset.name === bar.dataset.name){
                                bar.textContent = `${fighter.expPoints} EXP`
                            }
                        }
                    } else if (fighter.barPoints > 10){
                        for ( let bar of lowBarsExp){
                            if (progressBars[i].dataset.name === bar.dataset.name){
                                bar.textContent = ""
                            }
                        }
                    }
                }
        }   
    }
    
    checkLevel()
}
getProgressBars()

document.addEventListener("click", function(e){
    if (e.target.dataset){
        let fighterName = e.target.dataset.name
        let elementId = e.target.id
        
        for (let fighter of fightersArray){
            if (fighterName === fighter.dataName && (elementId === 'boxing-btn-pos' || elementId === 'jiu-jitsu-btn-pos')){
                fighter.expPoints = fighter.expPoints + 50
                fighter.barPoints = fighter.barPoints + 12.5
            } else if (fighterName === fighter.dataName && elementId === 'muay-thai-btn-pos'){
                fighter.expPoints = fighter.expPoints + 60
                fighter.barPoints = fighter.barPoints + 15
            } else if (fighterName === fighter.dataName && elementId === 'wrestling-btn-pos'){
                fighter.expPoints = fighter.expPoints + 75
                fighter.barPoints = fighter.barPoints + 18.75
            }        
        }  
        getProgressBars()  
    }
})
