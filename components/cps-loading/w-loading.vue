<template>
	<view class="mask" :class="mask == 'true' || mask == true ? 'mask-show' : ''" v-if="show" @touchmove.stop.prevent="preventTouchMove">

		<view class="box">
			<!-- 加载动画开始 -->
			<!-- loading1~loading30挑选任意一个替换下方html 且替换对应css -->
			<view class="loading14">
				<view></view>
				<view></view>
				<view></view>
				<view></view>
			</view>
			<!-- 加载动画结束 -->
			<view class="title"><text>{{text}}</text></view>
		</view>

	</view>
	<!-- 遮罩层-->
</template>

<script scoped="true">
	export default {
		name: "w-loading",
		props: {
			mask: {
				type: Boolean,
				default: false,
			},
			click: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				show: false,
				text: '加载中...',
			};
		},
		methods: {
			preventTouchMove() {
				console.log('stop user scroll it!');
			},
			open() {
				this.show = true
			},
			close() {
				this.show = false
			}
		}
	};
</script>

<style>
	.mask {
		/* pointer-events: none; */
		position: fixed;
		z-index: 99999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.mask.mask-show {
		background: rgba(7, 17, 27, .3);
	}

	.title {
		padding-top: 20rpx;
		color: #fff;
		font-size: 28rpx;
		line-height: 28rpx;
		text-align: center;
		max-width: 300rpx;
		word-break: break-all;
		white-space: normal;
	}

	.box {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		/* min-width: 100rpx; */
		padding: 30rpx;
		background: rgba(0, 0, 0, 0.7);
		border-radius: 8rpx;
	}



	.loading14 {
		position: relative;
		width: 40rpx;
		height: 40rpx;
		/* padding-top: 30rpx; */
	}

	.loading14 view {
		position: absolute;
		display: block;
		bottom: 0upx;
		width: 20upx;
		height: 20upx;
		background:linear-gradient(315deg,rgba(162,70,255,1) 0%,rgba(62,115,255,1) 100%);
	}

	.loading14 view:nth-child(1) {
		-webkit-animation: loading14-1 1.5s infinite ease-in-out;
		animation: loading14-1 1.5s infinite ease-in-out;
	}

	.loading14 view:nth-child(2) {
		left: 20upx;
		-webkit-animation: loading14-2 1.5s infinite ease-in-out;
		animation: loading14-2 1.5s infinite ease-in-out;
	}

	.loading14 view:nth-child(3) {
		top: 0upx;
		-webkit-animation: loading14-3 1.5s infinite ease-in-out;
		animation: loading14-3 1.5s infinite ease-in-out;
	}

	.loading14 view:nth-child(4) {
		top: 0upx;
		left: 20upx;
		-webkit-animation: loading14-4 1.5s infinite ease-in-out;
		animation: loading14-4 1.5s infinite ease-in-out;
	}

	@-webkit-keyframes loading14-1 {
		0% {
			-webkit-transform: translateX(0) translateY(0) rotate(0);
			transform: translateX(0) translateY(0) rotate(0);
			border-radius: 0;
		}

		50% {
			-webkit-transform: translateX(-20upx) translateY(-10upx) rotate(-180deg);
			transform: translateX(-20upx) translateY(-10upx) rotate(-180deg);
			border-radius: 50%;
			background: #3498db;
		}

		80% {
			-webkit-transform: translateX(0) translateY(0) rotate(-360deg);
			transform: translateX(0) translateY(0) rotate(-360deg);
			border-radius: 0;
		}

		100% {
			-webkit-transform: translateX(0) translateY(0) rotate(-360deg);
			transform: translateX(0) translateY(0) rotate(-360deg);
			border-radius: 0;
		}
	}

	@keyframes loading14-1 {
		0% {
			-webkit-transform: translateX(0) translateY(0) rotate(0);
			transform: translateX(0) translateY(0) rotate(0);
			border-radius: 0;
		}

		50% {
			-webkit-transform: translateX(-20upx) translateY(-10upx) rotate(-180deg);
			transform: translateX(-20upx) translateY(-10upx) rotate(-180deg);
			border-radius: 50%;
			background: #3498db;
		}

		80% {
			-webkit-transform: translateX(0) translateY(0) rotate(-360deg);
			transform: translateX(0) translateY(0) rotate(-360deg);
			border-radius: 0;
		}

		100% {
			-webkit-transform: translateX(0) translateY(0) rotate(-360deg);
			transform: translateX(0) translateY(0) rotate(-360deg);
			border-radius: 0;
		}
	}

	@-webkit-keyframes loading14-2 {
		0% {
			-webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
			transform: translateX(0upx) translateY(0upx) rotate(0deg);
			border-radius: 0;
		}

		50% {
			-webkit-transform: translateX(20upx) translateY(-10upx) rotate(180deg);
			transform: translateX(20upx) translateY(-10upx) rotate(180deg);
			border-radius: 50%;
			background: #f1c40f;
		}

		80% {
			-webkit-transform: translateX(0) translateY(0) rotate(360deg);
			transform: translateX(0) translateY(0) rotate(360deg);
			border-radius: 0;
		}

		100% {
			-webkit-transform: translateX(0) translateY(0) rotate(360deg);
			transform: translateX(0) translateY(0) rotate(360deg);
			border-radius: 0;
		}
	}

	@keyframes loading14-2 {
		0% {
			-webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
			transform: translateX(0upx) translateY(0upx) rotate(0deg);
			border-radius: 0;
		}

		50% {
			-webkit-transform: translateX(20upx) translateY(-10upx) rotate(180deg);
			transform: translateX(20upx) translateY(-10upx) rotate(180deg);
			border-radius: 50%;
			background: #f1c40f;
		}

		80% {
			-webkit-transform: translateX(0) translateY(0) rotate(360deg);
			transform: translateX(0) translateY(0) rotate(360deg);
			border-radius: 0;
		}

		100% {
			-webkit-transform: translateX(0) translateY(0) rotate(360deg);
			transform: translateX(0) translateY(0) rotate(360deg);
			border-radius: 0;
		}
	}

	@-webkit-keyframes loading14-3 {
		0% {
			-webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
			transform: translateX(0upx) translateY(0upx) rotate(0deg);
			border-radius: 0;
		}

		50% {
			-webkit-transform: translateX(-20upx) translateY(10upx) rotate(-180deg);
			transform: translateX(-20upx) translateY(10upx) rotate(-180deg);
			border-radius: 50%;
			background: #2ecc71;
		}

		80% {
			-webkit-transform: translateX(0) translateY(0) rotate(-360deg);
			transform: translateX(0) translateY(0) rotate(-360deg);
			border-radius: 0;
		}

		100% {
			-webkit-transform: translateX(0) translateY(0) rotate(-360deg);
			transform: translateX(0) translateY(0) rotate(-360deg);
			border-radius: 0;
		}
	}

	@keyframes loading14-3 {
		0% {
			-webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
			transform: translateX(0upx) translateY(0upx) rotate(0deg);
			border-radius: 0;
		}

		50% {
			-webkit-transform: translateX(-20upx) translateY(10upx) rotate(-180deg);
			transform: translateX(-20upx) translateY(10upx) rotate(-180deg);
			border-radius: 50%;
			background: #2ecc71;
		}

		80% {
			-webkit-transform: translateX(0) translateY(0) rotate(-360deg);
			transform: translateX(0) translateY(0) rotate(-360deg);
			border-radius: 0;
		}

		100% {
			-webkit-transform: translateX(0) translateY(0) rotate(-360deg);
			transform: translateX(0) translateY(0) rotate(-360deg);
			border-radius: 0;
		}
	}

	@-webkit-keyframes loading14-4 {
		0% {
			-webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
			transform: translateX(0upx) translateY(0upx) rotate(0deg);
			border-radius: 0;
		}

		50% {
			-webkit-transform: translateX(20upx) translateY(10upx) rotate(180deg);
			transform: translateX(20upx) translateY(10upx) rotate(180deg);
			border-radius: 50%;
			background: #e74c3c;
		}

		80% {
			-webkit-transform: translateX(0) translateY(0) rotate(360deg);
			transform: translateX(0) translateY(0) rotate(360deg);
			border-radius: 0;
		}

		100% {
			-webkit-transform: translateX(0) translateY(0) rotate(360deg);
			transform: translateX(0) translateY(0) rotate(360deg);
			border-radius: 0;
		}
	}

	@keyframes loading14-4 {
		0% {
			-webkit-transform: translateX(0upx) translateY(0upx) rotate(0deg);
			transform: translateX(0upx) translateY(0upx) rotate(0deg);
			border-radius: 0;
		}

		50% {
			-webkit-transform: translateX(20upx) translateY(10upx) rotate(180deg);
			transform: translateX(20upx) translateY(10upx) rotate(180deg);
			border-radius: 50%;
			background: #e74c3c;
		}

		80% {
			-webkit-transform: translateX(0) translateY(0) rotate(360deg);
			transform: translateX(0) translateY(0) rotate(360deg);
			border-radius: 0;
		}

		100% {
			-webkit-transform: translateX(0) translateY(0) rotate(360deg);
			transform: translateX(0) translateY(0) rotate(360deg);
			border-radius: 0;
		}
	}
</style>
