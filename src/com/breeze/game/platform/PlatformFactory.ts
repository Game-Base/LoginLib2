
module qmr
{
	export class PlatformFactory
	{
		public constructor()
		{

		}

		/**
		 * 创建一个平台
		 */
		public static creatPlatform(platformId: number): BasePlatform
		{
			let basePlatform: BasePlatform;
			switch (platformId)
			{
				case PlatformEnum.P_SLOGAME_DEBUG:
					basePlatform = new CommonGamePlatform();
					break;
				case PlatformEnum.P_SLOGAME_WEB:
					basePlatform = new WebGamePlatform();
					break;
				
			}
			return basePlatform;
		}
	}
}