// Mes Selecteurs
let iciYatout = document.querySelector(".rectangle");
let btnW = document.querySelector(".W");
let btnR = document.querySelector(".R");
let btnG = document.querySelector(".G");
let btnB = document.querySelector(".B");
let btnFullSolid = document.querySelector(".btn1");
let btnFullDashed = document.querySelector(".btn2");
let btnMiniDashed = document.querySelector(".btn3");
let btnNotopBorder = document.querySelector(".TOP");
let btntopBorder = document.querySelector(".TOP2");
let btntopMassBorder = document.querySelector(".TOP3");
let btnBorderColor = document.querySelector(".btnbg");
let btnInputFullBorder = document.querySelector(".input1");
let btnInputTopBorder = document.querySelector(".input2");
let btnInputRigthBorder = document.querySelector(".input3");
let btnInputBottomBorder = document.querySelector(".input4");
let btnInputLeftBorder = document.querySelector(".input5");
let btnInputFullRaduisBorder = document.querySelector(".input11");
let btnInputTopleftRaduisBorder = document.querySelector(".input22");
let btnInputTopRigthRaduisBorder = document.querySelector(".input33");
let btnInputBottomRigthRaduisBorder = document.querySelector(".input44");
let btnInputBottomLeftRaduisBorder = document.querySelector(".input55");
// ---------------------------------------------------------------------------
// Mes events

// Boutton Blanc
btnW.addEventListener("click", () => {
    iciYatout.style.backgroundColor = "white"
})
// Boutton Rouge
btnR.addEventListener("click", () => {
    iciYatout.style.backgroundColor = "red"
})
// Boutton Vert
btnG.addEventListener("click", () => {
    iciYatout.style.backgroundColor = "green"
})
// Boutton Bleu
btnB.addEventListener("click", () => {
    iciYatout.style.backgroundColor = "blue"
})
// Boutton full Border Solid
btnFullSolid.addEventListener("click", () => {
    iciYatout.style.border = "solid black 5px"
})
// Boutton full Border dashed
btnFullDashed.addEventListener("click", () => {
    iciYatout.style.border = "dashed black 5px"
})
// Boutton full Border Mini dashed
btnMiniDashed.addEventListener("click", () => {
    iciYatout.style.border = "dotted black 2px"
})
// Boutton no border Top
btnNotopBorder.addEventListener("click", () => {
    iciYatout.style.borderTop = "none"
})
// Boutton border Top
    btntopBorder.addEventListener('click', () => {
        let solidTop = getComputedStyle(iciYatout).borderBottomStyle;
        let dashedTop = getComputedStyle(iciYatout).borderBottomStyle;
        let dottedTop = getComputedStyle(iciYatout).borderBottomStyle;

        if (solidTop == "solid") {
            iciYatout.style.borderTop = "5px solid"    
        }
        if (dashedTop == "dashed") {
            iciYatout.style.borderTop = "5px dashed"
        }
        if (dottedTop == "dotted") {
            iciYatout.style.borderTop = "2px dotted"
        }
})
// Boutton border massive Top
btntopMassBorder.addEventListener('click', () => {
    let solidTop = getComputedStyle(iciYatout).borderBottomStyle;
    let dashedTop = getComputedStyle(iciYatout).borderBottomStyle;
    let dottedTop = getComputedStyle(iciYatout).borderBottomStyle;
    
    if (solidTop == 'solid') {
        iciYatout.style.borderTop = '10px solid'
    }
    if (dashedTop  == 'dashed') {
        iciYatout.style.borderTop = '10px dashed'
    }
    if (dottedTop == 'dotted') {
        iciYatout.style.borderTop = '10px dotted'
    }
})
// Boutton border Color
btnBorderColor.addEventListener("click", () => {
    iciYatout.style.borderColor  = btnBorderColor.value
})
// Boutton full border value
    btnInputFullBorder.addEventListener("click", () => {
        iciYatout.style.borderWidth = ` ${btnInputFullBorder.value}px`
    })
// Boutton Top border value
    btnInputTopBorder.addEventListener("click", () => {
        iciYatout.style.borderTopWidth = ` ${btnInputTopBorder.value}px`
    })
// Boutton Rigth border value
    btnInputRigthBorder.addEventListener("click", () => {
    iciYatout.style.borderRightWidth  = ` ${btnInputRigthBorder.value}px`
})
// Boutton Bottom border value
    btnInputBottomBorder.addEventListener("click", () => {
    iciYatout.style.borderBottomWidth  = ` ${btnInputBottomBorder.value}px`
})
// Boutton Left border value
    btnInputLeftBorder.addEventListener("click", () => {
    iciYatout.style.borderLeftWidth  = ` ${btnInputLeftBorder.value}px`
})
// Boutton Full border radius value
    btnInputFullRaduisBorder.addEventListener("click", () => {
    iciYatout.style.borderRadius   = ` ${btnInputFullRaduisBorder.value}px`
})  
// Boutton  border top/left radius value
    btnInputTopleftRaduisBorder.addEventListener("click", () => {
    iciYatout.style.borderTopLeftRadius   = ` ${btnInputTopleftRaduisBorder.value}px`
})  
// Boutton  border top/rigth radius value
    btnInputTopRigthRaduisBorder.addEventListener("click", () => {
    iciYatout.style.borderTopRightRadius   = ` ${btnInputTopRigthRaduisBorder.value}px`
})  
// Boutton  border Bottom/rigth radius value
    btnInputBottomRigthRaduisBorder.addEventListener("click", () => {
    iciYatout.style.borderBottomRightRadius   = ` ${btnInputBottomRigthRaduisBorder.value}px`
})  
// Boutton  border Bottom/Left radius value
    btnInputBottomLeftRaduisBorder.addEventListener("click", () => {
    iciYatout.style.borderBottomLeftRadius   = ` ${btnInputBottomLeftRaduisBorder.value}px`
})  
