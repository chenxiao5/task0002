window.onload=function(){
		function $(id){
			return document.getElementById(id)
		}
		function add(num1,num2){
			return num1+num2;
		}
		function renderResult(result){
			$("result").innerText=result;
		}
		function addEventHandle(){
			var num1=parseInt($("number1").value);
			var num2=parseInt($("number2").value);
			var result=add(num1,num2);
			renderResult(result);
		}
		function initEvent(){
			$("addbtn").addEventListener("click", addEventHandle,false);
		}
		initEvent();
	}