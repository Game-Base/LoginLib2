module qmr
{
	/**
	 * 掉线模块
	 */
	export class DisConnectView extends SuperBaseModule
	{
		public txt_tip: eui.Label;
		public txt_code: eui.Label;
		public btn_refresh: eui.Button;

		public constructor()
		{
			super();
			this.qmrSkinName = "DisConnectSkin";
			this.isNeedMask = true;
			this.isClickHide = false;
			this.isCenter = true;
		}
		/** 初始化事件,需被子类继承 */
		protected initListener(): void
		{
			super.initListener();
			this.addEvent(this.btn_refresh, egret.TouchEvent.TOUCH_TAP, this.onRefresh, this);
		}
		/**
		 * @description 请求刷新页面
		 */
		private onRefresh(): void
		{
			GameLoadingView.getInstance().closeVitureProgress();
			PlatformManager.instance.platform.reloadGame();
		}
        /**
         * @description 初始化数据,需被子类继承
         */
		protected initData(): void
		{
			super.initData();
			let data = this.data;
			if (data)
			{
				this.txt_tip.text = data.msg + "";
				this.txt_code.visible = false;
				if (data.code != -1)
				{
					this.txt_code.text = "错误码: " + data.code;
					this.txt_code.visible = true;
				}
			} else
			{
				this.txt_tip.text = "服务器链接不上";
				this.txt_code.text = "请稍后重试";
			}
		}

		/**
		 * dispose
		 */
		public dispose()
		{
			LogUtil.log("DisConnectView被释放了");

			super.dispose();
		}
	}
}