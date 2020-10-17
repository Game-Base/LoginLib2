module qmr
{
	/**
	 *
	 * @description 系统路径类枚举
	 *
	 */
    export class SystemPath
    {
        public static get LoginRoot():string{
            return "resourceLogin/";
        }
        public static get loginPath(): string {
            return PlatformConfig.webRoot + SystemPath.LoginRoot;
        }
        public static get defaultPath(): string {
            return SystemPath.LoginRoot + "animation/";
        }
        public static get rolePath(): string {
            return PlatformConfig.webRoot + "avatar/role/";
        }
        public static get roleUiPath(): string {
            return PlatformConfig.webRoot + "avatar/uiRole/";
        }
        public static get weaponPath(): string {
            return PlatformConfig.webRoot + "avatar/weapon/"; 
        }
        public static get horsePath(): string {
            return PlatformConfig.webRoot + "avatar/horse/";
        }
        public static get wingPath(): string {
            return PlatformConfig.webRoot + "avatar/wing/";
        }
        public static get bg_music(): string {
            return PlatformConfig.webRoot + "sound/music/"; 
        }
        public static getEffect_musicUrl(musicName: string): string {
            let dirUrl: string = PlatformConfig.webRoot + "sound/effect/";
            return dirUrl + musicName + ".mp3";
        }
        public static get itemIcon(): string {
            return PlatformConfig.webRoot + "icon/item/"; 
        }
        public static getLoginResDir(): string
        {
            let dirUrl: string = SystemPath.LoginRoot;
            if(PlatformConfig.useCdnRes){
                dirUrl = PlatformConfig.webUrl + SystemPath.LoginRoot;
            }
            return dirUrl;
        }
    }
}
