// JavaScript Document
var junjunHtmlText="";
var junjunID;
var junjunListlength;
var musiclistarr;
var mymusicurl;
for(i=1;i<10;i++){
	junjunHtmlText+="<div id=\"lrctxt"+i+"\"></div>";
}
function $(id){ return document.getElementById(id)}

function junjunPrevMusic(){
	if(junjunID>0 && junjunID<junjunListlength){
		this.location.href="Player_"+(musiclistarr[junjunID-1].split('|||')[0])+".html";
	}
	return false;
}
function junjunNextMusic(){
	if(junjunID>=0 && junjunID<junjunListlength){
		this.location.href="Player_"+(musiclistarr[junjunID+1].split('|||')[0])+".html";		
	}
	return false;
}
function setCookie(name,value){
	var exp = new Date(); 
	exp.setTime(exp.getTime() + 24*3600*1000);	
	document.cookie = name + "="+ escape (value) + ";path=/;expires=" + exp.toGMTString();
}
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)) return unescape(arr[2]);
	else return null;
}

function junjunPlayer(){
}


function randomurl(){
}

function playerobj(){	
	randomurl();
	var myhtmlplayer;
	myhtmlplayer='<iframe id="movie_player" src="http://player.youku.com/embed/'+mymusicurl+'" width="100%" height="200" frameborder="0"></iframe>'; 

	$('myplayer').innerHTML=myhtmlplayer;
}
function onPlayerComplete(){
	junjunNextMusic();
}
function changeErr(){
	alert("为了您能正常听歌，请先安装Flash播放器。");
	$('myplayer').innerHTML='<br><br><br><br><br><br><br><br><center><font size="6"><b>你没有安装Flash播放器</b><br><br><a href="../setuPlayer_Flash.htm" target="_help"><font color="#FF0000"><b>请点击这里开始安装</b></font></font></a></p></center>';
}
function DeleteCookie(name) {
   var date = new Date();
   date.setTime(date.getTime() - 10000); //删除一个cookie，就是将其过期时间设定为一个过去的时间
   document.cookie = name + "=删除" + "; expires=" + date.toUTCString();
}

function chkAll(frm){
	for (var i=0;i<frm.elements.length;i++){
		var junjunFrm = frm.elements[i];
		     junjunFrm.checked = true;
	}
	return false;
}
function chkOthers(frm){
	for (var i=0;i<frm.elements.length;i++){
		var junjunFrm = frm.elements[i];
		     junjunFrm.checked = false;
	}
	return false;
}

function chkPlayer(frm){
	var junjunUrlArr=[];
	var isnull=false;
	for (var i=0;i<frm.elements.length;i++){
		var junjunFrm = frm.elements[i];
		if(junjunFrm.checked&&junjunFrm.type!="button"){
			junjunUrlArr.push(junjunFrm.musicid+"|||"+junjunFrm.musicname+"|||"+junjunFrm.musicar)
			//junjunUrlArr.push(junjunFrm.musicid)			
			isnull=true;
		}
	}	
	if(!isnull){
		alert("请选上一首！"); 
		return false;
	}
	setCookie("ok166com",junjunUrlArr);
	
	if(frm.name=="frm"){
		location.href="/MusicHtmlPlay/Player_"+junjunUrlArr[0].split('|||')[0]+".html";	
	}else{		
		parent.frames['junjunRightFrame'].frames['junjunRight'].location.href="/MusicHtmlPlay/Player_"+junjunUrlArr[0].split('|||')[0]+".html";		
	}
	return false;
}


function junjunIsStop(){//单个歌曲播放是否完毕，如果完毕则1秒后实行下一首歌曲
	if(junjunPlayerID.playState==1){junjunNextMusic();}
	setTimeout("junjunIsStop();",1000);
	return false;
}
function onerrUrl(){
	if(junjunPlayerID.playState==10){junjunNextMusic();}
	return false;
}