window.onload=function(){
	let nav=document.querySelector(".nav");
	let a=document.querySelectorAll(".nav-right>ul>li>a")
	console.log(a);
	// console.log(nav);
	 let sxhylist=document.querySelector(".sxhylist");
     // console.log(sxhylist);
     let sxli=document.querySelectorAll(".sxhylist>li");
     let p=document.querySelectorAll(".about-contain p");
     console.log(p);

     // console.log(sxli);
    // let odd=document.querySelectorAll(".sxhylist>li:nth-child(odd)");
    // let even=document.querySelectorAll(".sxhylist>li:nth-child(even)");
    // console.log(odd,even);
	window.onscroll=function(){
		let bodytop=document.scrollTop||document.documentElement.scrollTop;
	    if(bodytop!=0){
		    nav.style="background:#fff";
		    for(let i=0;i<a.length;i++){
		    	 a[i].style.color="#333";
		    	 a[0].style.color="#62a8ea";
		    }
	    }
	   if(bodytop==0){
           nav.style="background:rgba(0,0,0,0.15)";
            for(let i=0;i<a.length;i++){
		    	 a[i].style.color="#fff";
		    	 a[0].style.color="#62a8ea";
		    }

	   }
	   // 错误代码
	   // if(bodytop+innerHeight/2>=sxhylist.offsetTop){
	   // 	    odd.forEach((val,index)=>{
	   // 	    	odd[index].style="transform:translateX(100px);";
	   // 	    })
	   // 	    even.forEach((val,index)=>{
	   // 	    	even[index].style="transform:translateX:(-100px)";
	   // 	    })
	   // }
	   sxli.forEach((val,index)=>{
		if(bodytop+innerHeight/2+200>val.offsetTop){
			val.style="transform:translateX(0);opacity:1";

		}
	   })
	    p.forEach((val,index)=>{
		if(bodytop+innerHeight/2+200>val.offsetTop){
			val.style="transform:translateX(0);opacity:1";
		}
	   })
	}

	// 轮播
	// let banner=document.querySelector(".banner");
	// let img=document.querySelectorAll(".banner img");
	// let leftbtn=document.getElementById("twoa");
	// let rightbtn=document.getElementById("threea");
	// let dot=document.querySelectorAll(".quan div");
	// console.log(banner,img,leftbtn,rightbtn);
	// console.log(dot);
	// let now=0;
	// let next=0;
	// let num=0;
	// let t;
	// // console.log(img,leftbtn,rightbtn,dot);
	// dot[0].classList.add("active");
	// img[0].style.opacity=1;
	// // img[0].style.left="10px";
	// for(let i=0;i<dot.length;i++){
	// 	dot[i].onmouseover=function(){
	// 		for(let j=0;j<dot.length;j++){
	// 			dot[j].classList.remove("active");
	// 			img[j].style.opacity=0;
	// 		}
	// 		dot[i].classList.add("active");
	// 		img[i].style.opacity=1;
	// 		num=i;
			
	// 	}
		
	// }
	// // 透明度轮播
	// t=setInterval(move,2000);
		
	// function move(){
	// 	num++;
	// 	if(num==img.length){
	// 		num=0;
	// 	}
	// 	for(let j=0;j<img.length;j++){
	// 		img[j].style.opacity="0";
	// 		dot[j].classList.remove("active");
	// 	}
	// 	img[num].style.opacity="1";
	// 	dot[num].classList.add("active");

	// }
 //    leftbtn.onclick=function(){
 //    	move();
 //    }
 //    rightbtn.onclick=function(){
 //    	movel();
 //    }
 //    function movel() {
 //    	num--;
	// 	if(num==-1){
	// 		num=img.length-1;
	// 	}
	// 	for(let j=0;j<img.length;j++){
	// 		img[j].style.opacity="0";
	// 		dot[j].classList.remove("active");
	// 	}
	// 	img[num].style.opacity="1";
	// 	dot[num].classList.add("active");

 //    }
 //    banner.onmouseover=function(){
	// 		leftbtn.style="background:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);color:rgba(255,255,255,0.6)";
	// 		rightbtn.style="background:linear-gradient(to left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);color:rgba(255,255,255,0.6)";
	// 		clearInterval(t);
	// 	}
	// banner.onmouseout=function(){
	// 	// leftbtn.style="background:linear-gradient(to right,rgba(0,0,0,0) 0,rgba(0,0,0,0) 100%);color:rgba(255,255,255,0)";
	// 	// rightbtn.style="background:linear-gradient(to left,rgba(0,0,0,0) 0,rgba(0,0,0,0) 100%);color:rgba(255,255,255,0)";
	// 	t=setInterval(move,2000);
	// }
	// 平移轮播
	// let left1=document.querySelector(".center-left");
	// let right1=document.querySelector(".center-left:last-child");
	// let ul=document.querySelector(".center-center section");
	// let li=document.querySelector(".center-center section div");
	// let w=parseInt(getComputedStyle(li,null).width)+32;
	// console.log(left1,right1,ul,li,w,)
	// let num1=0;
	// let tt=setInterval(move2,2000);
	// function move2() {
	// 	num1++;
	// 	if(num1==4){
	// 		num1=0;
	// 	}
	// 	ul.style.transform="translateX("+(-w*num1)+"px)";
	// }
 //    let ban=document.querySelector(".center-center");
 //    ban.onmouseover=function(){
 //    	clearInterval(tt);
 //    }
 //     ban.onmouseout=function(){
 //    	tt=setInterval(move2,2000);
 //    }
	// right1.onclick=function(){
	// 	num1++;
	// 	if(num1==4){
	// 		num1=3;
			
	// 		return;
	// 	}
	// 	ul.style.transform="translateX("+(-w*num1)+"px)";
	// 	// right1.style.color="#e0e0e0";
	// 	// left1.style.color="#b0b0b0";
	// }
	// // console.log(left1,right1,ul,w,num1);
	// left1.onclick=function(){
	// 	num1--;
	// 	if(num1<0){
	// 		num1=0;
	// 		return;
	// 	}
	// 	ul.style.transform="translateX("+(-w*num1)+"px)";
	// 	// right1.style.color="#b0b0b0";
	// 	// left1.style.color="#e0e0e0";
	// }
    // let color=left1.style.color;\
    // let color1=getComputedStyle(left1,null).color;
    // console.log(color1);
	// left1.onmouseover=function(){
	// 	if(color1=="rgb(244,244,244)"){
	// 		left1.style.color="#ff6700";
	// 	}
	// }
	
    
}