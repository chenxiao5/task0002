
	//判断arr是否为一个数组，返回一个bool值
	function isArray(obj){
		return Object.prototype.toString.apply(obj)==='[object Array]';
	}
	//判断fn是否为一个函数，返回一个bool值
	function isFunction(obj){
		return Object.prototype.toString.apply(obj)==='[object Function]';
	}
	//深度克隆
	function cloneObject(src){
		// 返回目标的具体类型
		function isClass(src){
			if(src===null) return 'Null';
			if(src===undefined) return 'Undefined';
			return Object.prototype.toString.apply(src).slice(8,-1); 
		};
		var result,iClass=isClass(src);
		if(iClass==='Object') 
			result={};
		else if(iClass==='Array') 
			result=[];
		else 
			return src;
		for(var key in src){
			if(isClass(src[key])==='Object')
				result[key]=arguments.callee(src[key]);
			else if(isClass(src[key])==='Array')
				result[key]=arguments.callee(src[key]);
			else
				result[key]=src[key];
		}
		return result;
	}
	// //测试用例
	// var srcObj = {
	//     a: 1,
	//     b: {
	//         b1: ["hello", "hi"],
	//         b2: "JavaScript"
	//     }
	// };
	// var abObj = srcObj;
	// var tarObj = cloneObject(srcObj);

	// srcObj.a = 2;
	// srcObj.b.b1[0] = "Hello";

	// console.log(abObj.a);
	// console.log(abObj.b.b1[0]);

	// console.log(tarObj.a);      // 1
	// console.log(tarObj.b.b1[0]);  //hello

	//对数组去重，效率最高1、4、5；
	function uniqArray1(arr) {
		var hash={},result=[],type;
		for(var i=0;i<arr.length;i++){
			if(!hash[arr[i]]){
				hash[arr[i]]=[arr[i]];
				result.push(arr[i]);
			}else if(hash[arr[i]].indexOf(arr[i])<0){
				hash[arr[i]].push(arr[i]);
				result.push(arr[i]);
			}
		}
		return result;
	}
	function uniqArray2(arr){
		var result=[];
		for(var i=0;i<arr.length;i++){
			if(result.indexOf(arr[i])<0)
				result.push(arr[i]);
		}
		return result;
	}
	function uniqArray3(arr){
		var result=[];
		for(var i=0;i<arr.length;i++){
			if(arr.indexOf(arr[i])==i)
				result.push(arr[i]);
		}
		return result;
	}
	function uniqArray4(arr){
		var result=[arr[0]];
		arr.sort();
		for(var i=1;i<arr.length;i++){
			if (arr[i] !==result[result.length-1]) 
				result.push(arr[i]);
		}
		return result;
	}
	function uniqArray5(arr){
		var result=arr;
		var _arr=arr.concat().sort();
		_arr.sort(function(a,b){
			if(a==b){
				var n=resule.indexOf(a);
				result.splice(n,1);
			}
		});
		return result;
	}
	//Ecmascript5
	function uniqArray6(arr){
		return arr.reduce(function(p,c){
			if (p.indexOf(c)<0) p.push(c);
			return p;
		},[]);
	}

	// // 使用示例
	// var a = [1, 3, 5, 7, 5, 3];
	// var b = uniqArray1(a);
	// console.log(b); // [1, 3, 5, 7]


	// 实现一个trim函数，用于去除一个字符串，头部和尾部的空白字符
	function trim1(str){
		var copy,whiteSpace=new String(" \t\r\n");
		if((copy=str)=='') return '';
		while(true){
			if(whiteSpace.indexOf(copy.charAt(0))!=-1) copy=copy.substring(1,parseInt(copy.length));
			else if(parseInt(copy.length)!=0&&whiteSpace.indexOf(copy.charAt(parseInt(copy.length)-1))!=-1) copy=copy.substring(0,parseInt(copy.length)-1);
			else return copy;
		}
	}
	function trim2(str){
		var copy=str.replace(/(^\s*)|(\s*&)/g,'');
		return copy;
	}
	//使用实例
	// var str = '   hi!  ';
	// str = trim2(str);
	// console.log(str); // 'hi!'

	//实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
	function each(arr,fn){
		for(var i=0;i<arr.length;i++){
			fn(arr[i],i);
		}
	}
	// // 使用示例
	// var arr = ['java', 'c', 'php', 'html'];
	// function output(item) {
	//     console.log(item)
	// }
	// each(arr, output);  // java, c, php, html

	// 使用示例
	// var arr = ['java', 'c', 'php', 'html'];
	// function output(item, index) {
	//     console.log(index + ': ' + item)
	// }
	// each(arr, output);  // 0:java, 1:c, 2:php, 3:html

	//获取一个对象里面第一层元素的数量，返回一个整数
	function getObjectLength(obj){
		var length=0,key;
		for(key in obj){
			if(obj.hasOwnProperty(key))
				length++;
		}
		return length;
	}
	//使用实例
	// var obj = {
	//     a: 1,
	//     b: 2,
	//     c: {
	//         c1: 3,
	//         c2: 4
	//     }
	// };
	// console.log(getObjectLength(obj)); // 3

	// 判断是否为邮箱地址
	function isEmail(emailStr) {
	    var reg=/^\w+[@][\w.]+$/;
	    return reg.test(emailStr);
	}
	// 判断是否为手机号
	function isMobilePhone(phone) {
	    var reg=/^(0|86|17951)?(13[0-9]|15[0-9]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	    return reg.test(phone);
	}


	// 为element增加一个样式名为newClassName的新样式
	function addClass(element, newClassName) {
		var ClassNames=element.className;
		var classArray=ClassNames.split(' ');
		if(index=classArray.indexOf(oldClassName)<0){
			element.className+=' 'newClassName;
		}else{
			return false;
		}
	     return newClassName;
	}

	// 移除element中的样式oldClassName
	function removeClass(element, oldClassName) {
	    var index,ClassNames=element.className;
	    var classArray=ClassNames.split(' ');
	    if(index=classArray.indexOf(oldClassName)<0){
		 return false;
	    }else{
	    	classArray.splice(index,1);
	    	element.className=classArray.join(' ');
	    }
	    return oldClassName;
	}

	// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
	function isSiblingNode(element, siblingNode) {
	    while(element!=undefined&&element!=null&&element.tagName.toUpperCase()!='BODY'&&siblingNode!=undefined&&siblingNode!=null&&siblingNode.tagName.toUpperCase()!='BODY'){
	    		if(element==siblingNode)
	    			return true;
	    		element=element.parentNode;
	    		siblingNode=element.parentNode;
	    }
	    return false;
	}

	// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
	function getPosition(element) {
		var x=0,y=0,result={};
	    	while(element !=document.body){
	    		x +=element.offsetLeft;
	    		y +=element.offsetTop;
	    		element=element.offsetParent;
	    	}
	    	result[x]=x;
	    	result[y]=y;
	    	return result;
	}



	// 实现一个简单的Query
	function $(selector) {
					return $.fn.init(selector);
				}
			$.fn=$.prototype;
			$.fn.init=function(selector){
				var ele,
					 selector_array,
					 length;
				function get_element(selector,context){
					context=context||document;
					var symbol=selector.slice(0,1),
						 last_symbol=selector.charAt(selector.length-1);
					if(symbol=='#'){
						return context.getElementById(selector.substring(1));
					}else if(symbol=='.'){
						var aaa;
						if(document.getElementsByClassName) aaa=context.getElementsByClassName(selector.substring(1));
						else {
							var all_ele=context.getElementsByTagName('*'),
								 testClass = new RegExp("(^|\s)" + obj + "(\s|$)"),
								 ele_array=[];
								
							for(var i=0;i<all_ele.length;i++){
								if(testClass.test(all_ele[i].className)){
									ele_array.push(all_ele[i]);
								}
							}
							aaa=ele_array;
						}
						return aaa[0];
					}else if(symbol=='['&&last_symbol==']'){
						var data_name=selector.slice(1,-1).split('='),
							 all_ele=context.getElementsByTagName('*'),
							 ele_array=[];
						for(var i=0;i<all_ele.length;i++){
							if(all_ele[i].attributes[data_name[0]]){
								if(data_name.length==1)
									ele_array.push(all_ele[i]);
								else if(all_ele[i].attributes[data_name[0]].nodeValue==data_name[1])
									ele_array.push(all_ele[i]);
							}
						}
						return ele_array[0];
					}else{
						return context.getElementsByTagName(selector)[0];
					}
				};
				if(!selector){
					return this;
				}
				if(typeof selector =='string'){
					selector_array=selector.split(' ');
					length=selector_array.length;
					if((selector.slice(0,1)=='#'||selector.slice(0,1)=='.')&&length>1){
						var context_element=document;
						for(var i=0;i<length;i++){
							context_element=get_element(selector_array[i],context_element);
						}
						ele=context_element;
						return ele;
					}else
						return get_element(selector);
				}
			};
	// console.log($('#divbox'));
	// console.log($('div'));
	// console.log($('.mydiv1'));
	// console.log($('#divbox .mydiv2'));
	//console.log($('[data-null]'));
	//console.log($('[data-time=2015]'));

	// 给一个element绑定一个针对event事件的响应，响应函数为listener
	function addEvent(element,event,listener){
		if(window.addEventListener){
			element.addEventListener(event, listener,false);
		}else if(window.attachEvent){
			element.attachEvent('on'+event,listener);
		}else{
			element['on'+event]=listener;
		}
	}
	// 移除element对象对于event事件发生时执行listener的响应
	function removeEvent(element,event,listener){
		if(window.removeEventListener){
			element.removeEventListener(event,listener,false);
		}else if(window.detachEvent){
			element.detachEvent('on'+event,listener);
		}else{
			element['on'+event]=null;
		}
	}
	//实现click事件的绑定
	function addClickEvent(element,listener){
		addEvent(element,'click',listener);
	}
	// 实现对于按Enter键时的事件绑定
	function addEnterEvent(element,listener){
		addEvent(element,'keydown',function(event){
			event=event||window.event;
			if((event.keyCode||event.which)==13){
				listener();
			}
		});
	}


	