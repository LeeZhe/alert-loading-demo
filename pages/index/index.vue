<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button type="primary" @click="testSheets" style="width: 90%;">test sheets</button>
		<button type="primary" @click="testLoading" style="width: 90%;margin-top: 40rpx;">test loading</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
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
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
