var colors = [ '#bdbb99', '#9b59b6', '#2c3e50', '#16a085', '#472e32', '#e74c3c', '#fb6964', '#77b1a9', '#27ae60', '#73a857', '#f39c12', '#004de6','#ff6699','#cc66ff','#669900','#ff99cc'] 
// alert (colors.length);     16个

var lyrics = [
				{ lyric:'谁会愿意生活都被胁迫，被卷进漩涡也不低头',
				  song:'《蜉蝣》'},
				{ lyric:'Let you go，别阻挡我，我只要燃烧不在乎陨落',
				  song:'《Let You Go》'},
			    { lyric:'好景多长，路上还有暗香。天色渐淡，迎面还有风凉。世界多广，转身还有故乡',
				  song:'《寻》'},
				{ lyric:'就像青春期的小孩会被大人酷刑，理由是逼迫15岁的心灵比成人要理性',
				  song:'《无聊人》'},
				{ lyric:'原来一无所有就叫做齐天大圣',
				  song:'《齐天》'},
				{ lyric:'爱在地图上剥落，我离孤单几公里，看着天对自己说，不要怕，往前走',
			      song:'《我离孤单几公里》'},
			    { lyric:'他明白，他明白，我给不起，于是转身向山里走去',
			      song:'《山海》'},
			    { lyric:'我想要用我余生换夜空繁星闪耀，我想要张开双手给世界一个拥抱',
			      song:'《地球之盐》'},
			    { lyric:'年轻就是要随心所欲高举你的手臂，拿出你的勇气，不要再恐惧，只有依赖好战的心才能够拯救你',
			      song:'《异类》'},
			    { lyric:'你眼中倒映的星河烂漫，是不曾见过的世外梦幻，万水千山，你陪我看',
			      song:'《梦回还》'},
			    { lyric:'凛冽的风，撕裂的痛，只要我期待，振作起来，任暴雨袭来，海阔天空',
			      song:'《闪耀》'},
			    { lyric:'我不相信掀不起惊人的波澜，也不怕四面楚歌艰难和挫败，我不知天高地厚刀山跟火海，超越极限超越极限',
			      song:'《超越极限》'},
			    { lyric:'在梅边落花似雪纷纷绵绵谁人怜，在柳边风吹悬念生生死死随人愿',
			      song:'《在梅边》'},
			    { lyric:'每当我找不到存在的意义，每当我迷失在黑夜里，夜空中最亮的星，请照亮我前行',
			      song:'《夜空中最亮的星》'},
			    { lyric:'你我同属一种生物，用肌肤掩饰住真面目，你是谁不清楚，默契确认无误',
			      song:'《异类的同类》'},
			    { lyric:'雨水流过的泥土，味道很浓厚，操场的青草香，不时飘到我梦中',
			      song:'《香草吧噗》'},
			    { lyric:'孩子们眼中的希望，是什么形状？是否院子有秋千可以荡，口袋里有糖',
			      song:'《止战之殇》'},
			    { lyric:'如果漂泊是成长必经的路牌，你迷醒岁月中那贫瘠的未来，像遗憾季节里未结果的爱',      
			      song:'《理想三旬》'},
			    { lyric:'得不到的永远在骚动，被偏爱的都有恃无恐',      
			      song:'《红玫瑰》'},
			    { lyric:'今生的约，说了再见，怎样的挥别，都是纪念因为思念',     
			      song:'《心术》'},
			    { lyric:'我曾经失落失望失掉所有方向，直到看见平凡才是唯一的答案',     
			      song:'《平凡之路》'}];
// alert(lyrics.length);                  21条


var lyric = document.getElementById('lyric');
var song = document.getElementById('song');
var change = document.getElementById('change');
var weibo = document.getElementById('weibo');
var qq = document.getElementById('qq');
var container = document.getElementById('container');
var lyricText = lyric.innerHTML;
var songText = song.innerHTML;
var timer = null;


//加载后开始定时切换
window.onload = function() {
	timer = setInterval(randomLyric,3000);
};


//鼠标移入暂停	
container.onmouseover = function() {
	clearInterval(timer);
};


//鼠标移出开始
container.onmouseout = function() {
	timer = setInterval(randomLyric,3000)
};


//点击按钮切换歌词和颜色
change.onclick = function() {
	randomLyric();
};


//切换歌词和颜色
function randomLyric() {
	//利用随机数产生索引
	var songIndex = Math.floor(Math.random()*colors.length);
	var colorIndex = Math.floor(Math.random()*lyrics.length);
	lyric.innerHTML = lyricText + lyrics[songIndex].lyric;
	song.innerHTML = songText + lyrics[songIndex].song;
	lyric.style.color = colors[colorIndex];
	song.style.color = colors[colorIndex];
	document.body.style.background = colors[colorIndex];
	change.style.background = colors[colorIndex];
	qq.style.background = colors[colorIndex];
	weibo.style.background = colors[colorIndex];
}


//分享
weibo.onclick = function() {
	var url = "http://service.weibo.com/share/share.php?title=" + encodeURIComponent(lyric.innerText) + encodeURIComponent(song.innerText);
	window.open(url);
};

qq.onclick = function() {
	var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(url) + encodeURIComponent(lyric.innerText) + encodeURIComponent(song.innerText);
	window.open(url);
}