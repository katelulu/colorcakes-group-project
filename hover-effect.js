let candleFlicker1 = document.getElementById(`hover1`);

 candleFlicker1.addEventListener("mouseover", () => {
    const candle1a = document.getElementById(`candle1a`);
    const candle1b = document.getElementById(`candle1b`);
    
    let candleHoverEffect = () => {
        if (candle1a.classList.contains("off")) {
            candle1a.classList.remove("off");
            candle1b.classList.add("off");
        } else { 
            candle1a.classList.add("off");
            candle1b.classList.remove("off");
        }
    }
    let flicker = setInterval(candleHoverEffect, 200);
    candleFlicker1.addEventListener("mouseout", () => {clearInterval(flicker);}); 
    //why do I need to do an arrow function on the line above?
});


let candleFlicker2 = document.getElementById(`hover2`);

 candleFlicker2.addEventListener("mouseover", () => {
    const candle1a = document.getElementById(`candle2a`);
    const candle1b = document.getElementById(`candle2b`);
    
    let candleHoverEffect = () => {
        if (candle1a.classList.contains("off")) {
            candle1a.classList.remove("off");
            candle1b.classList.add("off");
        } else { 
            candle1a.classList.add("off");
            candle1b.classList.remove("off");
        }
    }
    let flicker = setInterval(candleHoverEffect, 200);
    candleFlicker2.addEventListener("mouseout", () => {clearInterval(flicker);}); 
    //why do I need to do an arrow function on the line above?
});

let candleFlicker3 = document.getElementById(`hover3`);

 candleFlicker3.addEventListener("mouseover", () => {
    const candle1a = document.getElementById(`candle3a`);
    const candle1b = document.getElementById(`candle3b`);
    
    let candleHoverEffect = () => {
        if (candle1a.classList.contains("off")) {
            candle1a.classList.remove("off");
            candle1b.classList.add("off");
        } else { 
            candle1a.classList.add("off");
            candle1b.classList.remove("off");
        }
    }
    let flicker = setInterval(candleHoverEffect, 200);
    candleFlicker3.addEventListener("mouseout", () => {clearInterval(flicker);}); 
    //why do I need to do an arrow function on the line above?
});

let candleFlicker4 = document.getElementById(`hover4`);

 candleFlicker4.addEventListener("mouseover", () => {
    const candle1a = document.getElementById(`candle4a`);
    const candle1b = document.getElementById(`candle4b`);
    
    let candleHoverEffect = () => {
        if (candle1a.classList.contains("off")) {
            candle1a.classList.remove("off");
            candle1b.classList.add("off");
        } else { 
            candle1a.classList.add("off");
            candle1b.classList.remove("off");
        }
    }
    let flicker = setInterval(candleHoverEffect, 200);
    candleFlicker4.addEventListener("mouseout", () => {clearInterval(flicker);}); 
    //why do I need to do an arrow function on the line above?
});





/*
let candleFunction = (hover1, candle1a, candle1b) =>
{
let candleFlicker = document.getElementById(`${hover1}`);
candleFlicker.addEventListener("mouseover", (candle1a, candle1b) => {
    const candle1a = document.getElementById(`${candle1a}`);
    const candle1b = document.getElementById(`${candle1b}`);
    
    let candleHoverEffect = () => {
        if (candle1a.classList.contains("off")) {
            candle1a.classList.remove("off");
            candle1b.classList.add("off");
        } else { 
            candle1a.classList.add("off");
            candle1b.classList.remove("off");
        }
    }
    let flicker = setInterval(candleHoverEffect, 200);
    candleFlicker.addEventListener("mouseout", () => {clearInterval(flicker);}); 
    //why do I need to do an arrow function on the line above?
});
}

candleFunction(hover1, candle1a, candle1b);
*/