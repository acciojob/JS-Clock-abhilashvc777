//your code here
const hour = document.querySelector(".hour-hand")
const minute = document.querySelector(".min-hand")
const second = document.querySelector(".second-hand") 
let date = new Date()
let sec = date.getSeconds()
let min = date.getMinutes()
let hor = date.getHours()
let b = 90+6*min
minute.style.transform = `rotate(${b}deg)`
if(hor>12){
	hor = hor-12
}
let d = 90+hor*5*6
if(min>=1 && min<=15){
	d = 90+hor*5*6+6
}else if(min>=16 && min<=30){
	d =  90+hor*5*6+12
}else if(min>=31 && min<=45){
	d = 90+hor*5*6+18
}else if(min>=45 && min<=59){
	d = 90+hor*5*6+24
} else{
	d = 90+hor*5*6
}
console.log(d)
hour.style.transform = `rotate(${d}deg)`
setInterval(()=>{
	let date = new Date()
	let sec = date.getSeconds()
	let min = date.getMinutes()
	// let hor = date.getHours()
	if(sec==0){
		sec=60
	}
	let a = 90+6*sec
	second.style.transform = `rotate(${a}deg)`
	if(a==450){
	   if(min==0){
			min = 60
		}
	let b = 90+6*min
	minute.style.transform = `rotate(${b}deg)`
	}
	console.log(hor)
	let c = 90+hor*5*6
	    if(min>=1 && min<=15){
	      c = 90+hor*5*6+6
         }else if(min>=16 && min<=30){
	      c =  90+hor*5*6+12
         }else if(min>=31 && min<=45){
	      c = 90+hor*5*6+18
        } else if(min>=45 && min<=59){
	      c = 90+hor*5*6+24
        } else{
	      c = 90+hor*5*6
       }
			console.log(c)
			hour.style.transform = `rotate(${c}deg)`
},1000) 
