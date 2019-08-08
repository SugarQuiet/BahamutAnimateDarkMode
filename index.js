"use strict";
const primaryBackgroundColor = '#272727'
const secondaryBackgroundColor = '#121212'
const secondaryTextColor = '#aaaaaa'
const linkColor = '#3ea6ff'
const white = 'white'
const transparent = 'transparent'

document.body.style.background = secondaryBackgroundColor;
document.getElementsByClassName('sky')[0].style.background = primaryBackgroundColor
document.getElementsByClassName('mainmenu')[0].style.backgroundColor = primaryBackgroundColor
var toggles = Array.from(document.querySelectorAll('.mainmenu > div > ul > li'));
toggles.forEach(element => {
    element.style.backgroundColor = transparent
});
// 付費方案
Array.from(document.querySelectorAll('.mainmenu > div > ul > li > a'))[4].style.color = '#fd8200'

var animeTitle =  Array.from(document.querySelectorAll('.anime-title'))
animeTitle.forEach(element => {
    element.style.backgroundColor = secondaryBackgroundColor
});

// 觀看人數
var view = Array.from(document.querySelectorAll('.newanime-count > span'))
view.forEach(element => {
    element.style.color = secondaryTextColor
});

var materialIcons = Array.from(document.getElementsByClassName('material-icons'))
materialIcons.forEach(element => {
    element.style.color = white
}); 

var i = Array.from(document.getElementsByTagName('i'))
i.forEach(element => {
    element.style.color = white
    element.style.backgroundColor = transparent
});
/*
i = Array.from(document.querySelectorAll('.news_big li a span i'))
i.forEach(element => {
    element.style.backgroundColor = transparent
});*/

var arrange =  Array.from(document.querySelectorAll('.arrange > a > span'))
arrange.forEach(element => {
    element.style.color = secondaryTextColor
});

var data = Array.from(document.getElementsByClassName('data'))
data.forEach(element => {
    element.style.backgroundColor = secondaryBackgroundColor
});

// h1, h2, h3
const heads = [ 'h1', 'h2', 'h3']
heads.forEach(
    head =>{
        Array.from(document.getElementsByTagName(head)).forEach(element => {
            element.style.color = white
        });
    }
) 

var p = Array.from(document.getElementsByTagName('p'));
p.forEach(element => {
    element.style.color = secondaryTextColor
});

var data_type = Array.from(document.querySelectorAll('.data_type > li > span'));
data_type.forEach(element => {
    element.style.backgroundColor = transparent
});

var acgPresent = Array.from(document.querySelectorAll('.ACG-persent > li > span'));
acgPresent.forEach(element => {
    element.style.color = secondaryTextColor
});

var li = Array.from(document.getElementsByTagName('li'));
li.forEach(element => {
    element.style.color = secondaryTextColor
});

var a = Array.from(document.getElementsByTagName('a'));
a.forEach(element => {
    element.style.backgroundColor = transparent
});

// 集數
var episodeBorder = Array.from(document.querySelectorAll('.season > ul > li'));
episodeBorder.forEach(element => {
    element.style.borderColor = linkColor
});

var episodeLink = Array.from(document.querySelectorAll('.season > ul > li > a'));
episodeLink.forEach(element => {
    element.style.color = linkColor
});

var playing = Array.from(document.querySelectorAll('.playing'))
playing.forEach(element => {
    element.style.color = secondaryTextColor
    element.style.borderColor = transparent
});

playing = Array.from(document.querySelectorAll('.playing > a'))
playing.forEach(element => {
    element.style.color = white
});

var bluebtn = Array.from(document.getElementsByClassName('bluebtn'))
bluebtn.forEach(element => {
    element.style.color = linkColor
    element.style.backgroundColor = transparent
});

var anime_info_detail = Array.from(document.querySelector(".anime_info_detail > p"))
anime_info_detail.forEach(element => {
    element.style.color = secondaryTextColor
})

// 彈幕
var bulletSend = Array.from(document.querySelectorAll(".bullet-send"))
bulletSend && bulletSend.forEach(element => {
    element.style.backgroundColor = secondaryBackgroundColor
    element.style.borderColor = transparent
})

var bulletSendButtons = Array.from(document.querySelectorAll(".bullet-send > button"))
bulletSendButtons && bulletSendButtons.forEach(element => {
    element.style.backgroundColor = transparent
    element.style.borderColor = transparent
})

var subTilte = document.querySelector(".subtitle")
if(subTilte){
    subTilte.style.borderColor = transparent
    subTilte.style.backgroundColor = '#191919'
}

const sub_top = document.querySelector(".sub_top")
sub_top && (sub_top.style.background = secondaryBackgroundColor)

var aniTabs = Array.from(document.querySelectorAll(".ani-tabs-link"))
aniTabs && aniTabs.forEach(element => {
    element.style.color = white
})

var inputField = document.getElementById("danmutxt")
if(inputField){
    inputField.style.backgroundColor = '#191919'
    inputField.style.color = white
}

var sub_list = Array.from(document.getElementsByClassName("sub_list"))
subTilte && (subTilte.style.color = secondaryTextColor)

document.querySelector(".whilebg").style.backgroundColor = secondaryBackgroundColor

