clockobj=document.getElementById('clock');
setInterval(function(){
	time=new Date();
	// year=time.getFullYear();
	// month=time.getMonth()+1;
	// date=time.getDate();
	hours=time.getHours();
	minutes=time.getMinutes();
	seconds=time.getSeconds();
	if(hours==0){
		hours='00'
	}else if(hours>0&&hours<10){
		hours='0'+hours;
	}

	if(minutes==0){
		minutes='00'
	}else if(minutes>0&&minutes<10){
		minutes='0'+minutes;
	}

	if(seconds==0){
		seconds='00'
	}else if(seconds>0&&seconds<10){
		seconds='0'+seconds;
	}
	clock.innerHTML=hours+':'+minutes+':'+seconds;
},1000);
contentobj=document.getElementById('content');
eduobj=document.getElementById('edu');
eduobj.onmouseover=function(){
	this.style.color='#00f';
}
eduobj.onmouseout=function(){
	this.style.color='#000';
}
eduobj.onclick=function(){
	contentobj.innerHTML='2012.9-2016.6</br>湖北理工学院  机电学院  机械设计制造及其自动化</br>2008.9-2011.6</br>高中   蕲春县第一高级中学';
}

objectobj=document.getElementById('object');
objectobj.onmouseover=function(){
	this.style.color='#00f';
}
objectobj.onmouseout=function(){
	this.style.color='#000';
}
objectobj.onclick=function(){
	contentobj.innerHTML='<h3>本科阶段主修</h3>高等数学、线性代数、数据统计与概率论、工程力学、材料力学、单片机应用技术、数控技术、计算机辅助设计（CAD）、大学物理、电工学、C语言程序设计、计算机基础、计算机辅助制造（CAM）、大学英语';
}

workexpobj=document.getElementById('workexp');
workexpobj.onmouseover=function(){
	this.style.color='#00f';
}
workexpobj.onmouseout=function(){
	this.style.color='#000';
}
workexpobj.onclick=function(){
contentobj.innerHTML='2016年3月1日-2016年5月1日：</br>单位：湖北众达智能停车设备有限公司采购部  </br>职位：采购助理';
}
fameobj=document.getElementById('fame');
fameobj.onmouseover=function(){
	this.style.color='#00f';
}
fameobj.onmouseout=function(){
	this.style.color='#000';
}
fameobj.onclick=function(){
	 contentobj.style.font='100px';
	contentobj.innerHTML='2016.5：2016届机电学院优秀毕业生;</br> 2013.3：2012-2013学年校级丙等奖学金</br>2015.3：2014-2015学年校级丙等奖学金</br>2016.3：2015届全国大学生数学竞赛（非数学类）三等奖</br'>}
evaluateobj=document.getElementById('evaluate');
evaluateobj.onmouseover=function(){
	this.style.color='#00f';
}
evaluateobj.onmouseout=function(){
	this.style.color='#000';
}
evaluateobj.onclick=function(){
	contentobj.innerHTML='&nbsp;&nbsp;&nbsp;1、热爱编程。熟练使用HTML+CSS+JavaScript设计精美实用的网页，对intel的DPDK深有研究，熟练运用linux命令+vim+gcc+qt编程，精通C语言，熟悉C++、Python、shell等语言。</BR>	&nbsp;&nbsp;&nbsp;2、喜欢钻研技术。对自己以后职业发展有帮助的技术努力去深入研究，在Github、CSDN等开源社区与其他人一起探讨技术问题。</BR>	&nbsp;&nbsp;&nbsp;3、热爱软件开发。看到别人使用我参与开发的软件减少工作量，我非常有自豪感，我期待自己3年后能成为公司独当一面的后端工程师。';
}
