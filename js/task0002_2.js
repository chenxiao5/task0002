(function() {
	var input=$('#input'),//输入框
		 btn=$('#btn'),//计算按钮
		 showBox=$('.showBox')[0];//展示块

	var timer=null;//存储定时器

	//基数
	var DAY_RADIX=1000*60*60*24,//天数
		 HOUR_RADIX=1000*60*60,//小时
		 MINUTE_RADIX=1000*60,//分钟
		 SECOND_RADIX=1000;//秒

	//格式化输入时间
	function getDate(date) {
		if (date.length !== 3) {
			return false;
		}
		try {
			date=new Date(date[0], date[1]-1, date[2]);
			return date;
		}catch (err) {
			return false;
		}
	};

	//计算时间差值
	function getRemainDate(curDate,finalDate) {
		var _remain = finalDate-curDate;

		var days = 0,
			 hours = 0,
			 minutes = 0,
			 seconds = 0;

		days = Math.floor(_remain/DAY_RADIX);
		_remain = _remain%DAY_RADIX;

		hours = Math.floor(_remain/HOUR_RADIX);
		_remain = _remain%HOUR_RADIX;

		minutes = Math.floor(_remain/MINUTE_RADIX);
		_remain = _remain%MINUTE_RADIX;

		seconds = Math.floor(_remain/SECOND_RADIX);

		return {
			day : days,
			hour : hours,
			minute : minutes,
			second : seconds
		};
	};

	//生成展示内容
	function getShowStr(remainDate,finalDate) {
		var _res = '距离' +finalDate.getFullYear()+ '年' +(finalDate.getMonth()+1)+ '月' +finalDate.getDate()+ '日还有';
		_res += remainDate.day+ '天' +remainDate.hour+ '小时' +remainDate.minute+ '分钟' +remainDate.second+ '秒';
		return _res;
	};

	//启动定时器
	function start(finalDate) {
		if(timer != null){
			clearInterval(timer);
			timer = null;
		}
		show(finalDate);
		setInterval(function() {
			show(finalDate);
		},1000);
	};

	//展示状态
	function show(finalDate) {
		var _curDate=new Date();
		if(_curDate >= finalDate) {
			clearInterval(timer);
			timer = null;
			showBox.innerHTML = getShowStr({ day:0, hour:0, minute:0, second:0 }, finalDate);
		}
		var remainTime = getRemainDate(_curDate,finalDate);
		showBox.innerHTML = getShowStr(remainTime, finalDate);
	};

	//执行操作
	function calculate() {
		var _date=null,
			 inputValue=input.value;//输入的日期
		if(!inputValue) {
			return;
		}
		_date=getDate(inputValue.split('-'));
		if(_date instanceof Date) {
			if(new Date > _date){
				alert('您输入的日期已过期！');
				return ;
			}
			start(_date);
		}
	};

	//绑定事件
	$.click(btn,calculate);
})();