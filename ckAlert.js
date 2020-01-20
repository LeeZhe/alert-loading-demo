import Vue from 'vue'
import Alert from '@/components/cps-alert/cps-alert.vue'
import Loading from '@/components/cps-loading/w-loading.vue'
/* 
* loading
*/
	let LoadingConstructor = Vue.extend(Loading);
	let loadingInstance = null;
	let defaults = {
		text: '载入中...',
	}


	const createInstance = function() {
		loadingInstance = new LoadingConstructor({
			el: document.createElement('div'),
			data: Object.assign({}, defaults)
		});
		loadingInstance.onHide = function() {
			if (loadingInstance) {
				loadingInstance.$el.parentNode.removeChild(loadingInstance.$el);
				loadingInstance = null;
			}
		}
		return loadingInstance;
	}
	let loading = {
		show(text = '加载中...') {
			if (!loadingInstance) {
				loadingInstance = createInstance();
				document.body.appendChild(loadingInstance.$el);
			}
			loadingInstance.text = text;
			loadingInstance.open();
		},
		hide() {
			if (loadingInstance) loadingInstance.close();
		}
	}
	
	/**
	 * actionSheet
	 */
	let SheetConstructor  = Vue.extend(Alert);
	let alertIns = null;
	let alertDefaults = {
		titles: ["确定"],
		mask:true,
		cancelTitle: '取消',
		content:"确定此操作?",
	}
	
	const createAlertIns = function(e) {
		alertIns = new SheetConstructor({
			el: document.createElement('div'),
			data: Object.assign({}, alertDefaults)
		});
		
		alertIns.onHide = function() {
			if (alertIns) {
				alertIns.$el.parentNode.removeChild(alertIns, $el);
			}
		}
		return alertIns;
	}
	
	let alerts = {
		show(e) {
			if (!alertIns) {
				alertIns= createAlertIns();
				document.body.appendChild(alertIns.$el);	
			}
			alertIns.ok = e.ok || null;
			alertIns.dismiss = e.dismiss || null;
			alertIns.content = e.content;
			alertIns.titles = e.titles;
			alertIns.cancelTitle = e.cancelTitle;
			alertIns.show();
		},
		hide() {
			// if (alertIns) alertIns.close();
		}
	}
	
	
export default {
	/** 
	 * 类似微信确认框,
	 *  title: 描述内容
	 * titles: length 为1时为红色, length > 1 时 正常色
	 * res: {index: 按钮index, title: 按钮title}
	 * */
	showSheets: function(title = 'Title', d_titles = ['确定'], cancelTitle= '取消') {
		this.dismiss();
		return new Promise( (resolve, reject) => {
			alerts.show({
				ok(e){
					resolve(e);
				},
				dismiss() {
					reject();
				},
				content:title,
				titles: d_titles,
				cancelTitle:  cancelTitle,
			});
		});
	},
	
	/*
	 *  show loading 的方法
	 *  @param: 默认为加载中...
	 */
	show: function(msg = '加载中...') {
		// uni.showLoading({
		// 	mask: true,
		// 	title: msg,
		// })
		loading.show(msg);
	},

	showSuc: function(msg, icon = 'success', duration = 3000) {
		this.dismiss();
		uni.showToast({
			title: msg,
			icon: icon,
			duration: duration,
		})
	},

	showError: function(msg, icon = 'none', duration = 3000) {
		this.dismiss();
		uni.showToast({
			title: msg,
			icon: icon,
			duration: duration,
		})
	},

	dismiss() {
		loading.hide();
	},

	showAlert: function(content, title = '提示', sureTitle = '确定', cancelTitle = '返回') {
		this.dismiss();
		return new Promise((resolve, reject) => {
			uni.showModal({
				title: title,
				content: content,
				sureTitle: sureTitle,
				cancelText: cancelTitle,
				success: function(res) {
					resolve(res);
				}
			});
		});
	}

}
