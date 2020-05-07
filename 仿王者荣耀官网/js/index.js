var x=0;
var sliderContent=document.getElementById("slider-content");
var sliderContentLi=sliderContent.getElementsByTagName("li");
var sliderNav=document.getElementById("slider-Nav");
var sliderNavLi=sliderNav.getElementsByTagName("li");
var ann_slider = document.getElementById("ann-slider");
var ann_sliderLi=ann_slider.getElementsByTagName("li");
var newsList1=document.getElementsByClassName("newsList1");
var Mmiddle=document.getElementById("M-middle");
var MmiddleA=Mmiddle.getElementsByTagName("a");
var item_subnav=document.getElementById("item_subnav");
var item_subnavA=item_subnav.getElementsByTagName("a");
var title=document.getElementById("tik");
var titleA=title.getElementsByTagName("a");

window.onload=function(){
    // 轮播图
    window.setInterval(function(){change()},2000);
    for(var i=0;i<this.sliderNavLi.length;i++){
        this.sliderNavLi[i].index=i;
        this.sliderNavLi[i].onmouseover=function(){
            for(var i=0;i<sliderNavLi.length;i++){
                sliderNavLi[i].className="";
            }
            this.className="on";
            for(var i=0;i<sliderContentLi.length;i++){
                sliderContentLi[i].style.display="none";
            }
            sliderContentLi[this.index].style.display="block";
        }
    }
    // message
    for(var i=0;i<this.ann_sliderLi.length-1;i++){
        this.ann_sliderLi[i].index=i;
        this.ann_sliderLi[i].onmouseover=function(){
            for(var i=0;i<ann_sliderLi.length-1;i++){
                ann_sliderLi[i].className="";
            }
            this.className="show";
            for(var i=0;i<newsList1.length;i++){
                newsList1[i].style.display="none";
            }
            newsList1[this.index].style.display="block";
        }
    }

    // M-content
    for(var i=0;i<this.MmiddleA.length;i++){
        this.MmiddleA[i].index=i;
        item_subnavA[i].index=i;
        this.MmiddleA[i].onmouseover=function(){
            for(var i=0;i<MmiddleA.length;i++){
                MmiddleA[i].className="";
            }
            this.className="Mon";
        }

        this.item_subnavA[i].onmouseover=function(){
            for(var i=0;i<item_subnavA.length;i++){
                item_subnavA[i].className="";
            }
            this.className="Mon";
        }
    }

    // 
    for(var i=0;i<this.titleA.length;i++){
        titleA[i].index=i;
        this.titleA[i].onmouseover=function(){
            for(var i=0;i<titleA.length;i++){
                titleA[i].className="";
            }
            this.className="Ton";
        }
    }
}

function change(){
    if(x==sliderNavLi.length){
        x=0;
    }
    sliderNavLi[x].index=x;
    for(var j=0;j<sliderNavLi.length;j++){
        sliderNavLi[j].className="";
    }
    sliderNavLi[x].className="on";
    for(var k=0;k<sliderContentLi.length;k++){
        sliderContentLi[k].style.display="none";
    }
    sliderContentLi[sliderNavLi[x].index].style.display="block";
    x++;
}