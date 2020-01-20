# alert-loading-demo
基于uni-app，仿微信弹窗动画，可定制，简易动画loading，可定制

使用方法：
1. 将components，ckAlert中的组件拉到自己的项目中
2. 在main.js 中 
```javascript
import alert from './ckAlert.js'
Vue.prototype.alert = alert;
```
3. 对应使用的vue页面中

```javascript
testSheets() {
    this.alert.showSheets("确认提交？", ['OK']).then(res => {
		console.log('res', res);
	})
},
testLoading() {
	this.alert.show('loading...')
	var _this = this;
	setTimeout(function() {
		_this.alert.dismiss()
	}, 3000)
}
```
