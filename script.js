let btn = document.querySelector(".btn")
let result = document.querySelector(".result")
let select1 = document.querySelector(".select1")
let select2 = document.querySelector(".select2")
let input = document.querySelector(".inp")


btn.addEventListener("click", ()=>{
    if(select1.value == "uz" && select2.value=="ru"){
        result.innerHTML = `${Number(input.value)*0.0065}`
    }else if(select1.value == "ru" && select2.value=="uz"){
         result.innerHTML = `${Number(input.value)*153.29}`
    }else if(select1.value == "uz" && select2.value=="usd"){
        result.innerHTML = `${Number(input.value)*0.000077}`
    }else if(select1.value == "usd" && select2.value=="uz"){
        result.innerHTML = `${Number(input.value)*12980.83}`
    }else if(select1.value == "usd" && select2.value=="ru"){
        result.innerHTML = `${Number(input.value)*82.32}`
    }else if(select1.value == "ru" && select2.value=="usd"){
        result.innerHTML = `${Number(input.value)*0.012}`
    }else if(select1.value == "eur" && select2.value=="uz"){
        result.innerHTML = `${Number(input.value)*14713}`
    }else if(select1.value == "eur" && select2.value=="ru"){
        result.innerHTML = `${Number(input.value)*93.09}`
    }else if(select1.value == "eur" && select2.value=="usd"){
        result.innerHTML = `${Number(input.value)*1.13}`
    }else if(select1.value == "uz" && select2.value=="eur"){
        result.innerHTML = `${Number(input.value)*0.000068}`
    }else if(select1.value == "ru" && select2.value=="eur"){
        result.innerHTML = `${Number(input.value)*0.011}`
    }else if(select1.value == "usd" && select2.value=="eur"){
        result.innerHTML = `${Number(input.value)*0.88}`
    }
})
