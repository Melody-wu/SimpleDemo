(function($){
	$.extend({
		getLocalLoginData:function(){
			// 获取本地的json数据,现在很多人还是这样调试，主要是方便
			// 控制台的console就是返回的数据它是一个对象，json文件夹里面的数据必须是正确的json格式
			var result;
			$.ajax({
				url:"/Json/test.json",
				type:"GET",
				dataType:"json",
				async:false,
				success:function(res){
					var data=res;
					console.log(res);
					//作为以后的验证可以存到localstorage中,之前如果获取的是JSON对象
					// 得把它转化成JSON字符串
					data=JSON.stringify(res);
					result=data;
					localStorage.setItem("userInfo",data)
				},	
				error:function(error){
					console.log("请求失败");
				}
			})
			return result;
		},
		getLoginData:function(){
			// 获取服务器的数据,一样的原理只是它是请求的api,例如/api/login
			// 控制台的console就是返回的数据它是一个对象，json文件夹里面的数据必须是正确的json格式
			$.ajax({
				url:"/api/login",
				type:"GET",
				dataType:"json",
				success:function(res){
					console.log(res);
				},	
				error:function(error){
					console.log("请求失败");
				}
			})
		},
		getDataWay2:function(callback){
			// 获取服务器的数据,一样的原理只是它是请求的api,例如/api/login
			// 控制台的console就是返回的数据它是一个对象，json文件夹里面的数据必须是正确的json格式
			$.ajax({
				url:"/Json/test.json",
				type:"GET",
				dataType:"json",
				success:function(res){
					callback(res);
				},	
				error:function(error){
					console.log("请求失败");
				}
			})
		},
	})
})(jQuery)