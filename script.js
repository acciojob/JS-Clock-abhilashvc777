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
hour.style.transform = `rotate(${d}deg)`
setInterval(()=>{
	let date = new Date()
	let sec = date.getSeconds()
	let min = date.getMinutes()
	let hor = date.getHours()
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
		if(b==450){
			let c = 90+hor*5*6
			hour.style.transform = `rotate(${c}deg)`
		}
	}
},1000) 
