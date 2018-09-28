// window.onload=function(){
// 	// 1、购物车下拉效果
// 	let cart =document.querySelector(".cart")
// 	let cartlist =document.querySelector(".cart-list");
// 	console.log(cart,cartlist);
// 	cart.onmouseover=function(){
// 		cartlist.style.height="100px";
// 		cartlist.style.boxShadow="0 10px 0 rgba(0,0,0,0.3)";
// 		cartlist.style.background="#fff";
// 		cart.style.backgroud="#fff"
// 		cart.style.color="#ff6700"
// 	}
// 	cart.onmouseout=function(){
// 	    cartlist.style.height="0";
// 	    cartlist.style.boxShadow="";

// 	}
// }
window.onload=function(){
	// 购物车下拉效果
	let cart=document.querySelector(".top-cart");
	console.log(cart);
	let cartmenu=document.querySelector(".cart-menu");
	console.log(cartmenu);
	cart.onmouseover=function(){
		cartmenu.style.height="100px";
		cartmenu.style.background="#fff";
		cartmenu.style.lineHeight="100px";
		cartmenu.style.fontSize="16px";
		cartmenu.style.borderRadius="3px"
		cartmenu.style.boxShadow="0 0px 10px 0px rgba(0,0,0,0.3)";
		cartmenu.innerHTML="购物车还没有商品，赶快选购吧";
		cart.style="background:#fff;color:#ff6700;"
	}
	cart.onmouseout=function(){
		cartmenu.style="height:0;boxShadow:0;"
		cartmenu.innerHTML="";
		cart.style="background:#424242;color:none;"
	}
	// 修改前的container
	// let nav=document.querySelectorAll(".container-nav>li>a");
	// console.log(nav);
	// let navlist=document.querySelectorAll(".container-list");
	// console.log(navlist);
	// let span=document.querySelectorAll(".container-list>li>a>span")
	// console.log(span);
	// let timer;
	// for(let i=0;i<nav.length;i++){
	// 	nav[i].onmouseover=function(){
	// 		nav[i].style.background="#ff6700";
	// 		for(let j=0;j<navlist.length;j++){
	// 			navlist[j].style.display="none";
	// 		}
	// 		navlist[i].style.display="flex";
	// 		clearTimeout(timer);
	// 	}
	// 	nav[i].onmouseout=function(){
	// 		nav[i].style.background="none";
	// 		// navlist[i].style.display="none";
	// 		timer=setTimeout(delay,500);
	// 		function delay(){
	// 			navlist[i].style.display="none";
	// 		}
	// 	}
	// 	// navlist[i].onmouseenter=function(){
	// 	// 	clearTimeout(timer);
	// 	// }
	// 	// navlist[i].onmouseout=function(){
	// 	// 	navlist[i].style.display="none";
	// 	// }
	// }
	// 修改后的container鼠标事件
	let nav=document.querySelectorAll(".container-nav>li");
	console.log(nav);
	let navlist=document.querySelectorAll(".container-list");
	console.log(navlist);
	// let span=document.querySelectorAll(".container-list>li>a>span")
	// console.log(span);
	// let timer;
	for(let i=0;i<nav.length;i++){
		nav[i].onmouseover=function(){
			nav[i].style.background="#ff6700";
			for(let j=0;j<navlist.length;j++){
				navlist[j].style.display="none";
			}
			navlist[i].style.display="flex";
			// clearTimeout(timer);
		}
		nav[i].onmouseout=function(){
			nav[i].style.background="none";
			navlist[i].style.display="none";
			// timer=setTimeout(delay,500);
			// function delay(){
			// 	navlist[i].style.display="none";
			// }
		}
		// navlist[i].onmouseenter=function(){
		// 	clearTimeout(timer);
		// }
		// navlist[i].onmouseout=function(){
		// 	navlist[i].style.display="none";
		// }
	}
	// 头部下拉
	let headerNav=document.querySelectorAll(".header-nav>li>a");
	console.log(headerNav);
	let headerList=document.querySelectorAll(".header-nav>li>a>.child");
	console.log(headerList);
	for(let i=1;i<headerNav.length;i++){
		headerNav[i].onmouseover=function(){
			for(let j=1;j<headerList.length;j++){
				headerList[j].style.display="none";
			}
			headerList[i].style.display="block";
		}
		headerNav[i].onmouseout=function(){
			headerList[i].style.display="none";
		}
	}

	// rightBar变化
	let rightBar=document.querySelectorAll(".rightBar li a");
	console.log(rightBar);
	let rightBarImg=document.querySelectorAll(".rightBar li a div img:last-child");
	console.log(rightBarImg);
	let rightBarImg1=document.querySelectorAll(".rightBar li a div img:first-child");
	// console.log(rightBarImg1);
	let p=document.querySelectorAll(".rightBar li a p");
	console.log(p);
	for(let i=0;i<rightBar.length;i++){
		rightBar[i].onmouseover=function(){
			for(let j=0;j<rightBar.length;j++){
				rightBarImg[i].style.zIndex="-999";
			}
			rightBarImg1[i].style.zIndex="999";
			p[i].style.color="#ff6700";

		}
		rightBar[i].onmouseout=function(){
			p[i].style.color="#757575";
			rightBarImg[i].style.zIndex="999";
			rightBarImg1[i].style.zIndex="-999";
		}

	}
	//点击回到顶部事件
	let top=document.querySelector(".rightBar li:last-child a");
	console.log(top);
// 	function top1(){
// 		if(window.scrollBy(0,200)){
// 	top.style.display="block";
	top.onclick=function(){
		let res=document.body.scrollTop||document.documentElement.scrollTop;
	    animate(document.body,{scrollTop:0});
	    animate(document.documentElement,{scrollTop:0});
	}
// 	}
// }
// top1();
	
	// 家电下拉
	let phoneTop=document.querySelectorAll(".phoneTop>ul>li");
	console.log(phoneTop);
	let phoneList=document.querySelectorAll(".phoneList-right.right");
	console.log(phoneList);
	for(let i=0;i<phoneTop.length;i++){
		phoneTop[i].onmouseover=function(){
			for(let j=0;j<phoneList.length;j++){
				phoneList[j].style.zIndex="-999";
				phoneTop[j].style.borderBottom="0";
				phoneTop[j].style.color="#333";
			}
			phoneList[i].style.zIndex="999";
			phoneTop[i].style.borderBottom="2px solid #ff6700";
			phoneTop[i].style.color="#ff6700";

		}
		// phoneTop[i].onmouseout=function(){
		// 	phoneTop[i].style.borderBottom="0";
		// }

	}
	// 轮播
	//移入轮播点后，图片和轮播点发生变化
	let dots=document.querySelectorAll(".container .container-pager a");
	let imgs=document.querySelectorAll(".container>img");
	let banner=document.querySelector(".container");
	let left=document.querySelector(".container a:nth-child(7)");
	let right=document.querySelector(".container a:nth-child(8)");
	console.log(left,right,dots,imgs,banner);
	lunbo(dots,imgs,banner,left,right,"active",2000);
	// console.log(dots,imgs,banner);
	// dots[0].style.background="#fff";
	// imgs[0].style.zIndex=2;
	// for(let i=0;i<dots.length;i++){
	// 	dots[i].onmouseover=function(){
	// 		for(let j=0;j<imgs.length;j++){
	// 			imgs[j].style.zIndex=1;
	// 			dots[j].style.background="#333";
	// 		}
	// 		dots[i].style.background="#fff";
	// 		imgs[i].style.zIndex=2;
	// 		// num=i;
	// 	}
	// }
	
	// let num=0;
	// let t=setInterval(move,1500);
	// function move(){
	// 	num++;
	// 	if(num==5){
	// 		num=0;
	// 	}
	// 	for(let j=0;j<imgs.length;j++){
	// 		imgs[j].style.zIndex=1;
	// 		dots[j].style.background="#333";

	// 	}
		
	// 	imgs[num].style.zIndex=2;
	// 	dots[num].style.background="#fff";
	// }
	// banner.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// banner.onmouseout=function(){
	// 	t=setInterval(move,1500);
	// }
    let dot=document.querySelectorAll(".contentList>li:first-child>ul>li");
	let img=document.querySelectorAll(".contentList>li:first-child>section");
	let banners=document.querySelector(".contentList>li:first-child");
	let lbtn=document.querySelector(".contentList>li:first-child>div:nth-child(3)");
	console.log(lbtn);
	let rbtn=document.querySelector(".contentList>li:first-child>div:nth-child(4)");
	let widths=parseInt(getComputedStyle(banners,null).width);
	console.log(widths);
	console.log(banners);
	zuoyou(dot,img,lbtn,rbtn,widths,"active");

	 let dot2=document.querySelectorAll(".contentList>li:nth-child(2)>ul>li");
	 let img2=document.querySelectorAll(".contentList>li:nth-child(2)>section");
	 let banners2=document.querySelector(".contentList>li:nth-child(2)");
	 let lbtn2=document.querySelector(".contentList>li:nth-child(2)>div:nth-child(3)");
	 let rbtn2=document.querySelector(".contentList>li:nth-child(2)>div:nth-child(4)");
	 let widths2=parseInt(getComputedStyle(banners2,null).width);
	 zuoyou(dot2,img2,lbtn2,rbtn2,widths2,"active");
	
	 let dot3=document.querySelectorAll(".contentList>li:nth-child(3)>ul>li");
	 let img3=document.querySelectorAll(".contentList>li:nth-child(3)>section");
	 let banners3=document.querySelector(".contentList>li:nth-child(3)");
	 let lbtn3=document.querySelector(".contentList>li:nth-child(3)>div:nth-child(3)");
	 let rbtn3=document.querySelector(".contentList>li:nth-child(3)>div:nth-child(4)");
	 let widths3=parseInt(getComputedStyle(banners3,null).width);
	 zuoyou(dot3,img3,lbtn3,rbtn3,widths3,"active");

	 let dot4=document.querySelectorAll(".contentList li:nth-child(4) ul li");
	 let img4=document.querySelectorAll(".contentList li:nth-child(4) section");
	 let banners4=document.querySelector(".contentList li:nth-child(4)");
	 let lbtn4=document.querySelector(".contentList li:nth-child(4) div:nth-child(3)");
	 let rbtn4=document.querySelector(".contentList li:nth-child(4) div:nth-child(4)");
	 let widths4=parseInt(getComputedStyle(banners4,null).width);
	 zuoyou(dot4,img4,lbtn4,rbtn4,widths4,"active");



// 平移轮播
	let left1=document.querySelector(".flashBuy-top ul li:first-child");
	let right1=document.querySelector(".flashBuy-top ul li:last-child");
	let ul=document.querySelector(".flashBuy-contain>div ul");
	let w=parseInt(getComputedStyle(ul,null).width)/2;
	let num1=0;
	right1.onclick=function(){
		num1++;
		if(num1==2){
			num1=1;
			
			return;
		}
		ul.style.transform="translateX("+(-w*num1)+"px)";
		right1.style.color="#e0e0e0";
		left1.style.color="#b0b0b0";
	}
	console.log(left1,right1,ul,w,num1);
	left1.onclick=function(){
		num1--;
		if(num1<0){
			num1=0;
			return;
		}
		ul.style.transform="translateX("+(-w*num1)+"px)";
		right1.style.color="#b0b0b0";
		left1.style.color="#e0e0e0";
	}
    // let color=left1.style.color;\
    let color1=getComputedStyle(left1,null).color;
    console.log(color1);
	left1.onmouseover=function(){
		if(color1=="rgb(244,244,244)"){
			left1.style.color="#ff6700";
		}
	}
}
	