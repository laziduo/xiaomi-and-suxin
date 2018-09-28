// 1透明轮播图
// 参数：
// 参数1：轮播点元素集合
// 参数2：图片元素集合
// 参数3：banner盒子元素
// 参数4：左箭头元素
// 参数5：右箭元素
// 参数6：轮播选中的类名 是一个字符串“”；
// 参数7：自动播放的时间  类型是number  单位是ms
function lunbo(dot,img,banner,lbtn,rbtn,active,second){


    img[0].style.zIndex=2;
    // 对应的轮播点改变样式
    // dot[0].style.background="#fff";
     dot[0].classList.add(active);

    for(let i=0;i<dot.length;i++){

        dot[i].onmouseover=function(){
            // 其余图片层级变回1/其余的轮播点样式改变
            for(let j=0;j<img.length;j++){
                img[j].style.zIndex=1;
                // dot[j].style.background="#333";
                dot[j].classList.remove(active);
            }
            // 对应的图片层级提高
            img[i].style.zIndex=2;
            // 对应轮播点样式改变
            // dot[i].style.background="#fff";
            dot[i].classList.add(active);
            // 当鼠标移走后，继续轮播
            num=i;
        }


    }
    // 实现自动轮播
    let num=0;
     let t=setInterval(move,second);
     function move(){
        num++;
        if(num==dot.length){
            num=0;
            // num=dot.length-1;
            // return;
        }
        for(let j=0;j<img.length;j++){
                img[j].style.zIndex=1;
                // dot[j].style.background="#333";
                  dot[j].classList.remove(active);
        }
        img[num].style.zIndex=2;
        // dot[num].style.background="#fff";
         dot[num].classList.add(active);



     }
     // 鼠标移入，暂停轮播
     banner.onmouseover=function(){
        clearInterval(t);
     }
     // 鼠标移出，继续轮播
     banner.onmouseout=function(){
        t=setInterval(move,second);
     }
     // 点击右箭头
     rbtn.onclick=function(){
        move();
     }
     // 点击左箭头
     lbtn.onclick=function(){
        movel();
     }
     function movel() {
        num--;
        if(num<0){
            num=dot.length-1;
            // num=0;
            // return;
        }
        for(let j=0;j<img.length;j++){
                img[j].style.zIndex=1;
                // dot[j].style.background="#333";
                dot[j].classList.remove(active);
        }
        img[num].style.zIndex=2;
        // dot[num].style.background="#fff";
         dot[num].classList.add(active);
     }
     // 窗口失去焦点时，暂停时间间隔函数
     window.onblur=function(){
        clearInterval(t);
     }
     window.onfocus=function(){
        t=setInterval(move,second);
     }
}
function zuoyou(dot,img,lbtn,rbtn,widths,active){
	let t;
	let now=0;
	let next=0;
	// let flag=true;
	// console.log(lbtn,rbtn);
	// 初始状态：让第一张图片显示/层级提高
	// for(let a=0;a<img.length;a++){
	// 	img[a].style.left=0;
	// }
	img[0].style.left=0;
	dot[0].classList.add(active);
	for(let i=0;i<dot.length;i++){
		dot[i].onmouseover=function(){
			for(let j=0;j<dot.length;j++){
				dot[j].classList.remove(active);
				img[j].style.left=widths+"px";
			}
            dot[i].classList.add(active);
            img[i].style.left=0;
            now=i;
            next=i;
	    }
	}
	//  t=setInterval(move,1500);
	 function move(){
		next++;
		// if(next==dot.length){
		// 	// 右
		// 	// next=img.length-1；
		// 	// return;
		// 	next=0;
		// }
		if(next==img.length){
			// 
			next=img.length-1;
			return;
		}
		img[now].style.left=0;
		img[next].style.left=widths+"px";
		animate(img[now],{left:-widths},function(){
			for(let j=0;j<dot.length;j++){
                 dot[j].classList.remove(active);
                 
			}
			// flag=true;
		});
		animate(img[next],{left:0},function(){
			dot[next].classList.add(active);
			// flag=true;
		})
		now=next;
	}
	// banner.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// banner.onmouseout=function(){
	// 	t=setInterval(move,1500);
	// }
    lbtn.onclick=function(){
    	// if(!flag){
     //        return;
    	// }
    	// flag=false;
    	movel();
    }
    function movel(){

    	next--;
		// if(next==-1){
		// 	// 右
		// 	// next=img.length-1；
		// 	// return;
		// 	next=dot.length-1;
		// }
		if(next==-1){
			next=0;
			return;

		}
		img[now].style.left=0;
		img[next].style.left=-widths+"px";
		animate(img[now],{left:widths},function(){
			for(let j=0;j<dot.length;j++){
                 dot[j].classList.remove(active);
                
			}
			 // flag=true;
		});
		animate(img[next],{left:0},function(){
			dot[next].classList.add(active);
			// flag=true;
		})
		now=next;
    }
    rbtn.onclick=function(){
     //    if(!flag){
    	// 	return;
    	// }
    	// flag=false;
    	move();
    }
}