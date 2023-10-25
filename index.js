import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import fightersArray from '/data.js'

    
    
const containerMain = document.getElementById('container-main')
let html = ""

// Get Initial Html
function getFighters() {
    
    for (let fighter of fightersArray) {
        html += `
            <div class="fighter">
                    <h3 class="fighter-level" data-name="${fighter.dataName}">Level ${fighter.level}</h3>
                    <div class="progress-bar-container">
                        <div class="low-progress-bar-exp" data-name="${fighter.dataName}"></div>
                        <div class="fighter-progress-bar" id="fighter-progress-bar" data-name="${fighter.dataName}"></div>
                    </div>                
                    <div class="title-container">
                        <div class="fighter-name" id="fighter-name">${fighter.name}</div>
                        <img src="assets/cat.png" class="fighter-img" id="fighter-img" data-name="${fighter.dataName}">
                    </div>
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

// Get number of classes completed for each fighting style
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

// Handle Level changes, ex: level 1, level 2, etc.
function checkLevel(){
    let levelHtmls = document.querySelectorAll(".fighter-level")
    
    for (let fighter of fightersArray){
        for (let html of levelHtmls){
            if (fighter.level >= 1 & fighter.dataName === html.dataset.name){
                html.innerHTML = `Level ${fighter.level}`
            }
               
        }
    }  
}


// Handle progress bar heights
function getProgressBars(){
    let progressBars = document.querySelectorAll(".fighter-progress-bar")
    let lowBarsExp = document.querySelectorAll(".low-progress-bar-exp")
    const fighterImg = document.getElementsByClassName('fighter-img')
    
    for (let i = 0; i < progressBars.length; i++) {
        for ( let fighter of fightersArray){
                if (progressBars[i].dataset.name === fighter.dataName){

                    if (fighter.expPoints < 100){
                        progressBars[i].style.height = `${fighter.expPoints}%`
                        fighter.level = 1
                        for (let img of fighterImg){
                            if (fighter.dataName === img.dataset.name){ 
                                img.setAttribute('src', "/assets/cat.png") 
                            }
                        }
                    } else if (fighter.expPoints >= 100 && fighter.expPoints < 250 ){
                        progressBars[i].style.height = `${(fighter.expPoints - 100 )/ 1.5}%`
                        fighter.level = 2 
                        for (let img of fighterImg){
                            if (fighter.dataName === img.dataset.name){ 
                                img.setAttribute('src', "/assets/lion-ninja.png") 
                            }
                        }
                    } else if (fighter.expPoints >= 250 && fighter.expPoints < 550 ){
                        progressBars[i].style.height = `${(fighter.expPoints - 250 )/ 3}%`
                        fighter.level = 3 
                    } else if (fighter.expPoints >= 550 && fighter.expPoints < 1000 ){
                        progressBars[i].style.height = `${(fighter.expPoints - 550 )/ 4.5}%`
                        fighter.level = 4
                    } else if (fighter.expPoints >= 1000 && fighter.expPoints < 1600){
                        progressBars[i].style.height = `${(fighter.expPoints - 1000 )/ 6}%`
                        fighter.level = 5
                    } else if (fighter.expPoints >= 1600){
                        fighter.level = 6 + Math.floor((fighter.expPoints-1600)/600)
                        progressBars[i].style.height = `${( ( (fighter.expPoints - 1600) / 600) - Math.floor( (fighter.expPoints-1600) / 600) ) * 100}%`
                    }
                    
                    
                    
                    if (parseInt(progressBars[i].style.height) > 15){
                        progressBars[i].textContent = `${fighter.expPoints} EXP`
                        progressBars[i].style.marginTop = "auto"
                    } else {
                        progressBars[i].textContent = ""
                        progressBars[i].style.marginTop = ".5em"
                    }
                    
                    if (parseInt(progressBars[i].style.height) < 15){
                        for ( let bar of lowBarsExp){
                            if (progressBars[i].dataset.name === bar.dataset.name){
                                bar.textContent = `${fighter.expPoints} EXP`
                            }
                        }
                    } else if (parseInt(progressBars[i].style.height) > 15){
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

// handle toggling of negative buttons, disable/enable
function toggleNegBtn(){
    const negBtns = document.getElementsByClassName('toggle-btn-neg')    

        for (let btn of negBtns){
            
            for (let fighter of fightersArray){
                if (btn.dataset.name === fighter.dataName && fighter.barPoints <= 0 && fighter.level === 1){
                    btn.classList.add('disabled')
                }
                
                if (fighter.classesBoxing === 0 && btn.id === 'boxing-btn-neg' && btn.dataset.name === fighter.dataName){
                    btn.classList.add('disabled')                              /*come here to fix*/
                }
                
                if (btn.dataset.name === fighter.dataName && btn.id === 'boxing-btn-neg' && fighter.classesBoxing > 0){
                    btn.classList.remove('disabled')
                    
                }
                
                if (fighter.classesMuayThai === 0 && btn.id === 'muay-thai-btn-neg' && btn.dataset.name === fighter.dataName){
                    btn.classList.add('disabled')                              /*come here to fix*/
                }
                
                if (btn.dataset.name === fighter.dataName && btn.id === 'muay-thai-btn-neg' && fighter.classesMuayThai > 0){
                    btn.classList.remove('disabled')
                    
                }
                
                if (fighter.classesWrestling === 0 && btn.id === 'wrestling-btn-neg' && btn.dataset.name === fighter.dataName){
                    btn.classList.add('disabled')                              /*come here to fix*/
                }
                
                if (btn.dataset.name === fighter.dataName && btn.id === 'wrestling-btn-neg' && fighter.classesWrestling > 0){
                    btn.classList.remove('disabled')
                    
                }
                
                if (fighter.classesJiuJitsu === 0 && btn.id === 'jiu-jitsu-btn-neg' && btn.dataset.name === fighter.dataName){
                    btn.classList.add('disabled')                              /*come here to fix*/
                }
                
                if (btn.dataset.name === fighter.dataName && btn.id === 'jiu-jitsu-btn-neg' && fighter.classesJiuJitsu > 0){
                    btn.classList.remove('disabled')
                    
                }
            }
        } 
}
toggleNegBtn()

// handle button functionality
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
                        if (fighter.classesBoxing < 0){
                                fighter.classesBoxing = 0
                                
                            }
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
                        if (fighter.classesMuayThai < 0){
                                fighter.classesMuayThai = 0
                                
                            }
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
                        if (fighter.classesWrestling < 0){
                                fighter.classesWrestling = 0
                                
                            }
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
                        if (fighter.classesJiuJitsu < 0){
                                fighter.classesJiuJitsu = 0
                                
                            }
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
