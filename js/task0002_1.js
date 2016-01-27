function init(){
	var input=$('#myinput'),
		 addBtn=$('#add'),
		 addBox=$('.addBox')[0],
		 itemsBox=$('.itemsBox')[0],
		 isAdd=false;//判断是否已有单选
	function createEle(item,index){
		var itemBox=document.createElement('div'),
			 itemInput=document.createElement('input'),
			 itemLabel=document.createElement('label');
		itemBox.setAttribute('class', 'itemBox');
		itemInput.setAttribute('id','item'+(index+1));
		itemInput.setAttribute('type','checkbox');
		itemLabel.setAttribute('for', 'item'+(index+1));
		itemLabel.innerHTML=item;
		itemBox.appendChild(itemInput);
		itemBox.appendChild(itemLabel);
		if(isAdd)
			itemsBox.innerHTML='';
		itemsBox.appendChild(itemBox);
		isAdd=false;
	};
	function show(){
		var result=[],
			 inputArray=uniqArray1(trim1(input.value).replace(/[，、\s\n]{1}/g, ',').split(','));
		if(input.value!==''){
			if(inputArray.length>0){
				inputArray=inputArray.map(trim2);
				inputArray.map(function(item,index){
					createEle(item,index);
					return;
				});
				isAdd=true;
			}
		}else{
			if($('.itemsBox .myp').length==0){
				var myp=document.createElement('p');
				myp.setAttribute('class', 'myp');
				myp.innerHTML='';
				myp.innerHTML='请输入兴趣爱好';
				itemsBox.appendChild(myp);
			}
		}
	};
	function rule(){
		var error;
		inputArray=uniqArray1(trim1(input.value).replace(/[，、\s\n]{1}/g, ',').split(','));
		if(inputArray!= null&&inputArray.length>10){
			addBtn.disabled=true;
			error=document.createElement('div');
			error.setAttribute('class','error');
			error.innerHTML='爱好数量不能超过10个';
			if($('.addBox .error').length==0){
				addBox.insertBefore(error,input);
			}
			$.un(addBtn,'click',show);
		}else{
			if($('.addBox .error').length!=0)
				addBox.removeChild($('.addBox .error')[0]);
			addBtn.disabled=false;
			$.click(addBtn,show);
		}
	};
	$.click(addBtn,show);
	$.on(input,'input',rule);
}
// var str='aaa,ddd，ccc、ddd fff';
// var a=str.replace(/[，、\s\n]{1}/g, ',');
// console.log(a);
init();