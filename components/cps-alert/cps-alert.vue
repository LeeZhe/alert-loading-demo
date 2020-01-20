<template>
	<uni-popup ref="showtip" :type="type" :mask-click="true">
		<view class="cps-alert-wrapper">
			<view class="cps-alert-content">
				<text>{{content}}</text>
			</view>
			<view class="cps-alert-titles">
				<button hover-class="button-hover" class="cps-alert-bt" type="primary" v-for="(item, index) in titles" :key='index' :class="{'cps-alert-sure' : isAlertSure}" @click="confirm({index:index,title:item})">{{item}}</button>
			</view>
			<button hover-class="button-hover" type="primary" class="cps-alert-cancel" @click.native="cancel">{{cancelTitle}}</button>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				content: '测试',
				titles: [
					"OK"
				],
				cancelTitle: '取消',
				// isAlertSure:false,
				type: 'bottom',
			}
		},
		methods: {
			confirm(e) {
				var _this = this;
				setTimeout(function() {
					_this.$refs.showtip.close();
					_this.ok(e);
				}, 0)
			},
			ok(e) {

			},
			cancel(){
				var _this = this;
				setTimeout(function() {
					_this.$refs.showtip.close();
				}, 0)
				this.dismiss();
			},
			dismiss() {

			},
			change(e) {
				console.log('是否打开:' + e.show)
			},
			show() {
				this.$refs.showtip.open();
			}
		},
		computed:{
			isAlertSure: function() {
				return this.titles.length === 1;
			}
		}
	}
</script>

<style>
	.cps-alert-wrapper {
		background: #fff;
		border-radius: 20rpx 20rpx 0px 0px;
		min-height: 200rpx;
	}

	.cps-alert-content {
		padding: 55rpx 30rpx;
		color: #818692;
		line-height: 28rpx;
		text-align: center;
		font-size: 28rpx;
	}

	.cps-alert-titles {}

	.cps-alert-bt {
		background: #fff;
		font-size: 32rpx;
		line-height: 100rpx;
		height: 100rpx;
		color: #272F43;
		border: none;
	}

	.cps-alert-bt::after {
		border-radius: 0rpx;
		border: none;
		border-top: 1rpx solid #EFEFEF;
		border-radius: 0rpx;
	}
	.cps-alert-sure {
		color: #FF3B3D;
	}
	.cps-alert-cancel {
		background: #fff;
		line-height: 120rpx;
		color: #272F43;
		border: none;
		font-size: 32rpx;
	}
	
	.button-hover {
		background: #F2F2F2;
	}

	button {
		border-radius: 0;
	}

	.cps-alert-cancel::after {
		border: none;
		border-top: 20rpx solid #EFEFEF;
		border-radius: 0rpx;
	}
</style>
