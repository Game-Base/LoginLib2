module qmr
{
	export class TipManagerCommon
	{
		private static instance: TipManagerCommon;
		/**
		 * @desc 获取一个单例
		 */
		public static getInstance(): TipManagerCommon
		{
			if (TipManagerCommon.instance == null)
			{
				TipManagerCommon.instance = new TipManagerCommon();
			}
			return TipManagerCommon.instance;
		}

		private commonMessInfo: Array<{ mess: string, color: number, yPos: number}>;	/** 同上 */

		private isConmmoning: boolean;

		/*------操作上的提示--带背景-----*/
		private commonTips: Array<CommonTip>;
		//多个飘字的间隔时间
		private commonTipCdTime: number = 500;

		public constructor()
		{
			this.commonMessInfo = [];

			this.isConmmoning = false;

			this.commonTips = [];
		}

		public getmsg(...arg): string
		{
			var s: string = arg.shift();
			for (var key in arg)
			{
				var value: any = arg[key];
				s = s.replace(/\{\d+\}/, value);
			}
			return s;
		}

		/**
		 * 提示文字，包含多语言文字提示功能
		 * @param id 多语言编号
		 * @param args 需要替换的参数
		 */
		public showLanTip(id: string, ...args):string
		{
			let t = this;
			let clientCfg:ClientCnCfg = ConfigManager.getConf(ConfigEnumBase.CLIENTCN, id);
			if(!clientCfg){
				console.error("缺少语言配置id："+id);
				return;
			}
			let msg: string = GlobalConfig.isCN ? clientCfg.value:clientCfg.en_value;
			if (args && args.length > 0)
			{
				args.unshift(msg);
				msg = this.getmsg(...args);
			}
			t.createCommonTip(msg);
		}

		/**
		 * ----------------------------添加飘字内容-------------------------------
		 * 添加了新的背景，所有的颜色只能用白色  2017-04-01 by Don
		 */
		public createCommonTip(msg: string, msgColor: number = 0xffffff, yPos: number = 0): void
		{
			let flag: boolean = false;
			for (let item of this.commonMessInfo)
			{
				if (item.mess == msg)
				{
					flag = true;
					break;
				}
			}
			if (!flag)
			{
				this.commonMessInfo.push({ mess: msg, color: msgColor, yPos: yPos});
			}
			if (!this.isConmmoning)
			{
				this.isConmmoning = true;
				this.showCommonTip();
			}
		}

		public recycleCommonTip(commonTip: CommonTip): void
		{
			this.commonTips.push(commonTip);
		}

		/**
		 * 在界面显示飘字内容
		 */
		private showCommonTip(): void
		{
			if (!this.isConmmoning) return;
			let messInfo = this.commonMessInfo.shift();
			if (!messInfo) return;
			let commonTip: CommonTip = this.commonTips.shift();
			if (!commonTip)
			{
				commonTip = new CommonTip();
			}
			LayerManager.instance.addDisplay(commonTip, LayerConst.TOP);
			commonTip.showTip(messInfo);
			egret.setTimeout(() =>
			{
				if (!this.commonMessInfo.length)
				{
					this.isConmmoning = false;
				} else
				{
					this.showCommonTip();
				}
			}, this, this.commonTipCdTime);
		}
	}
}