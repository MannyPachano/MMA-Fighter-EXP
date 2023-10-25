import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const fightersArray = [
        {
            name: 'Manny',
            expPoints: 0,
            barPoints: 0,
            level: 1,
            classesBoxing: 0,
            classesMuayThai: 0,
            classesWrestling: 0,
            classesJiuJitsu: 0,
            dataName: 'manny',
        },
        {
            name: 'Anabella',
            expPoints: 0,
            barPoints: 0,
            level: 1,
            classesBoxing: 0,
            classesMuayThai: 0,
            classesWrestling: 0,
            classesJiuJitsu: 0,
            dataName: 'anabella',
        },
        {
            name: 'Adan',
            expPoints: 0,
            barPoints: 0,
            level: 1,
            classesBoxing: 0,
            classesMuayThai: 0,
            classesWrestling: 0,
            classesJiuJitsu: 0,
            dataName: 'adan',
        },
        {
            name: 'Nick',
            expPoints: 0,
            barPoints: 0,
            level: 1,
            classesBoxing: 0,
            classesMuayThai: 0,
            classesWrestling: 0,
            classesJiuJitsu: 0,
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
                        <div class="class-container">
                            <div class="class-name">Boxing</div>
                            <div class="num-classes num-classes-boxing" id="num-classes-boxing" data-name="${fighter.dataName}"></div>
                        </div>
                        <button class="toggle-btn toggle-btn-neg" id="boxing-btn-neg" data-name="${fighter.dataName}">-</button>
                        <button class="toggle-btn toggle-btn-plus" id="boxing-btn-pos" data-name="${fighter.dataName}">+</button>
                    </div>
                <div class="toggle-btn-container">
                        <div class="class-container">
                            <div class="class-name">Muay Thai</div>
                            <div class="num-classes num-classes-muay-thai" id="num-classes-muay-thai" data-name="${fighter.dataName}"></div>
                        </div>
                        <button class="toggle-btn toggle-btn-neg" id="muay-thai-btn-neg" data-name="${fighter.dataName}">-</button>
                        <button class="toggle-btn toggle-btn-plus" id="muay-thai-btn-pos" data-name="${fighter.dataName}">+</button>
                    </div>
                    <div class="toggle-btn-container">
                        <div class="class-container">
                            <div class="class-name">Wrestling</div>
                            <div class="num-classes num-classes-wrestling" id="num-classes-wrestling" data-name="${fighter.dataName}"></div>
                        </div>
                        <button class="toggle-btn toggle-btn-neg" id="wrestling-btn-neg" data-name="${fighter.dataName}">-</button>
                        <button class="toggle-btn toggle-btn-plus" id="wrestling-btn-pos" data-name="${fighter.dataName}">+</button>
                    </div>
                    <div class="toggle-btn-container">
                        <div class="class-container">
                            <div class="class-name">Jiu Jitsu</div>
                            <div class="num-classes num-classes-jiu-jitsu" id="num-classes-jiu-jitsu" data-name="${fighter.dataName}"></div>
                        </div>
                        <button class="toggle-btn toggle-btn-neg" id="jiu-jitsu-btn-neg" data-name="${fighter.dataName}">-</button>
                        <button class="toggle-btn toggle-btn-plus" id="jiu-jitsu-btn-pos" data-name="${fighter.dataName}">+</button>
                    </div>
                    
                </div>
            `
        }
    containerMain.innerHTML = html
}
getFighters()

function getClassNumbers(){
    let htmlBoxing = ""
    let htmlMuayThai = ""
    let htmlWrestling = ""
    let htmlJiuJitsu = ""
    const numClassesBoxingHtml = document.getElementsByClassName('num-classes-boxing')
    const numClassesMuayThaiHtml = document.getElementsByClassName('num-classes-muay-thai')
    const numClassesWrestlingHtml = document.getElementsByClassName('num-classes-wrestling')
    const numClassesJiuJitsuHtml = document.getElementsByClassName('num-classes-jiu-jitsu')
    
    for (let htmls of numClassesBoxingHtml){
        for (let fighter of fightersArray) {        
            function getNumBoxingClasses(){
                if (fighter.classesBoxing == 1){
                        return 'class'
                    } else {
                        return 'classes'
                        }
                }
            htmlBoxing = `${fighter.classesBoxing} ${getNumBoxingClasses()}`
            if (htmls.dataset.name === fighter.dataName ){
                htmls.innerHTML = htmlBoxing 
                }
            
        }
    }
    
    for (let htmls of numClassesMuayThaiHtml){
        for (let fighter of fightersArray) {
            function getNumMuayThaiClasses(){
                if (fighter.classesMuayThai == 1){
                        return 'class'
                    } else {
                        return 'classes'
                        }
                }   
            htmlMuayThai = `${fighter.classesMuayThai} ${getNumMuayThaiClasses()}`
            
            if (htmls.dataset.name === fighter.dataName ){
                htmls.innerHTML = htmlMuayThai 
                }
                
        }
    }
    
    for (let htmls of numClassesWrestlingHtml){
        for (let fighter of fightersArray) {
    
            function getNumWrestlingClasses(){
                if (fighter.classesWrestling == 1){
                        return 'class'
                    } else {
                        return 'classes'
                        }
                } 
            htmlWrestling = `${fighter.classesWrestling} ${getNumWrestlingClasses()}`
            if (htmls.dataset.name === fighter.dataName ){
                htmls.innerHTML = htmlWrestling
                }
            
        }
    }
    
    for (let htmls of numClassesJiuJitsuHtml){
        for (let fighter of fightersArray) {
            
            function getNumJiuJitsuClasses(){
                if (fighter.classesJiuJitsu == 1){
                        return 'class'
                    } else {
                        return 'classes'
                        }
                }
            htmlJiuJitsu = `${fighter.classesJiuJitsu} ${getNumJiuJitsuClasses()}` 
            if (htmls.dataset.name === fighter.dataName ){
                htmls.innerHTML = htmlJiuJitsu
                }
            
        }
    }
}
getClassNumbers()

function checkLevel(){
    let progressBars = document.querySelectorAll(".fighter-progress-bar")
    
    for (let i = 0; i < progressBars.length; i++) {
        let progressBarPercentage = parseInt(progressBars[i].style.height)
        if ( progressBarPercentage > 100 ){
            for (let fighter of fightersArray){
                if (progressBars[i].dataset.name === fighter.dataName){
                    fighter.barPoints = fighter.barPoints - 100
                    fighter.level = fighter.level + 1
                    // console.log(fighter.barPoints)
                    getFighters()
                    getProgressBars()
                }
            }
        }   
        
        for (let fighter of fightersArray){
            if (fighter.barPoints < 0 && fighter.level > 1){
                fighter.barPoints = fighter.barPoints + 100
                fighter.level = fighter.level - 1
                // console.log(fighter.barPoints)
                getFighters()
                getProgressBars()
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
    toggleNegBtn()
}
getProgressBars()


function toggleNegBtn(){
    const negBtns = document.getElementsByClassName('toggle-btn-neg')    

        for (let btn of negBtns){
            
            for (let fighter of fightersArray){
                if (btn.dataset.name === fighter.dataName && fighter.barPoints <= 0){
                    btn.classList.add('disabled')
                } 
                
                if (btn.dataset.name === fighter.dataName && fighter.barPoints > 0){
                    btn.classList.remove('disabled')
                    
                }
            }
        } 
}
toggleNegBtn()

document.addEventListener("click", function(e){
    if (e.target.dataset){
        let fighterName = e.target.dataset.name
        let elementId = e.target.id
        const divisibleNum = 1.5
        
        for (let fighter of fightersArray){
            
            // if (fighter.level == 1){
            
                    if (fighterName === fighter.dataName && elementId === 'boxing-btn-pos' ){
                        fighter.expPoints = fighter.expPoints + 20
                        
                        if (fighter.level == 1){
                            fighter.barPoints = fighter.barPoints + 20
                        } else if (fighter.level == 2){
                            fighter.barPoints = fighter.barPoints + (20/divisibleNum)
                        } else if (fighter.level == 3){
                            fighter.barPoints = fighter.barPoints + (20/(divisibleNum*2))
                        } else if (fighter.level == 4){
                            fighter.barPoints = fighter.barPoints + (20/(divisibleNum*3))
                        } else {
                            fighter.barPoints = fighter.barPoints + (20/(divisibleNum*4))
                        }
                        
                        fighter.classesBoxing = fighter.classesBoxing + 1
                    } else if (fighterName === fighter.dataName && elementId === 'muay-thai-btn-pos'){
                        fighter.expPoints = fighter.expPoints + 25
                        if (fighter.level == 1){
                            fighter.barPoints = fighter.barPoints + 25
                        } else if (fighter.level == 2){
                            fighter.barPoints = fighter.barPoints + (25/divisibleNum)
                        } else if (fighter.level == 3){
                            fighter.barPoints = fighter.barPoints + (25/(divisibleNum*2))
                        } else if (fighter.level == 4){
                            fighter.barPoints = fighter.barPoints + (25/(divisibleNum*3))
                        } else {
                            fighter.barPoints = fighter.barPoints + (25/(divisibleNum*4))
                        }
                        fighter.classesMuayThai = fighter.classesMuayThai + 1
                    } else if (fighterName === fighter.dataName && elementId === 'wrestling-btn-pos'){
                        fighter.expPoints = fighter.expPoints + 30
                        if (fighter.level == 1){
                            fighter.barPoints = fighter.barPoints + 30
                        } else if (fighter.level == 2){
                            fighter.barPoints = fighter.barPoints + (30/divisibleNum)
                        } else if (fighter.level == 3){
                            fighter.barPoints = fighter.barPoints + (30/(divisibleNum*2))
                        } else if (fighter.level == 4){
                            fighter.barPoints = fighter.barPoints + (30/(divisibleNum*3))
                        } else {
                            fighter.barPoints = fighter.barPoints + (30/(divisibleNum*4))
                        }
                        fighter.classesWrestling = fighter.classesWrestling + 1
                    } else if (fighterName === fighter.dataName && elementId === 'jiu-jitsu-btn-pos'){
                        fighter.expPoints = fighter.expPoints + 20
                        if (fighter.level == 1){
                            fighter.barPoints = fighter.barPoints + 20
                        } else if (fighter.level == 2){
                            fighter.barPoints = fighter.barPoints + (20/divisibleNum)
                        } else if (fighter.level == 3){
                            fighter.barPoints = fighter.barPoints + (20/(divisibleNum*2))
                        } else if (fighter.level == 4){
                            fighter.barPoints = fighter.barPoints + (20/(divisibleNum*3))
                        } else {
                            fighter.barPoints = fighter.barPoints + (20/(divisibleNum*4))
                        }
                        fighter.classesJiuJitsu = fighter.classesJiuJitsu + 1
                    } else if (fighterName === fighter.dataName && elementId === 'boxing-btn-neg'){
                        fighter.expPoints = fighter.expPoints - 20
                        if (fighter.level == 1){
                            fighter.barPoints = fighter.barPoints - 20
                        } else if (fighter.level == 2){
                            fighter.barPoints = fighter.barPoints - (20/divisibleNum)
                        } else if (fighter.level == 3){
                            fighter.barPoints = fighter.barPoints - (20/(divisibleNum*2))
                        } else if (fighter.level == 4){
                            fighter.barPoints = fighter.barPoints - (20/(divisibleNum*3))
                        } else {
                            fighter.barPoints = fighter.barPoints - (20/(divisibleNum*4))
                        }
                        fighter.classesBoxing = fighter.classesBoxing - 1
                    } else if (fighterName === fighter.dataName && elementId === 'muay-thai-btn-neg'){
                        fighter.expPoints = fighter.expPoints - 25
                        if (fighter.level == 1){
                            fighter.barPoints = fighter.barPoints - 25
                        } else if (fighter.level == 2){
                            fighter.barPoints = fighter.barPoints - (25/divisibleNum)
                        } else if (fighter.level == 3){
                            fighter.barPoints = fighter.barPoints - (25/(divisibleNum*2))
                        } else if (fighter.level == 4){
                            fighter.barPoints = fighter.barPoints - (25/(divisibleNum*3))
                        } else {
                            fighter.barPoints = fighter.barPoints - (25/(divisibleNum*4))
                        }
                        fighter.classesMuayThai = fighter.classesMuayThai - 1
                    } else if (fighterName === fighter.dataName && elementId === 'wrestling-btn-neg'){
                        fighter.expPoints = fighter.expPoints - 30
                        if (fighter.level == 1){
                            fighter.barPoints = fighter.barPoints - 30
                        } else if (fighter.level == 2){
                            fighter.barPoints = fighter.barPoints - (30/divisibleNum)
                        } else if (fighter.level == 3){
                            fighter.barPoints = fighter.barPoints - (30/(divisibleNum*2))
                        } else if (fighter.level == 4){
                            fighter.barPoints = fighter.barPoints - (30/(divisibleNum*3))
                        } else {
                            fighter.barPoints = fighter.barPoints - (30/(divisibleNum*4))
                        }
                        fighter.classesWrestling = fighter.classesWrestling - 1
                    } else if (fighterName === fighter.dataName && elementId === 'jiu-jitsu-btn-neg'){
                        fighter.expPoints = fighter.expPoints - 20
                        if (fighter.level == 1){
                            fighter.barPoints = fighter.barPoints - 20
                        } else if (fighter.level == 2){
                            fighter.barPoints = fighter.barPoints - (20/divisibleNum)
                        } else if (fighter.level == 3){
                            fighter.barPoints = fighter.barPoints - (20/(divisibleNum*2))
                        } else if (fighter.level == 4){
                            fighter.barPoints = fighter.barPoints - (20/(divisibleNum*3))
                        } else {
                            fighter.barPoints = fighter.barPoints - (20/(divisibleNum*4))
                        }
                        fighter.classesJiuJitsu = fighter.classesJiuJitsu - 1
                    }
            
            if (fighter.expPoints < 0 ){
                fighter.expPoints = 0
            }                   
        }  
        getProgressBars()  
        getClassNumbers()
        e.preventDefault()
        
    }
})
