module qmr
{
    export class ServerTime
    {
        /**
         *时间误差，精确到毫秒 
         */
        private static tickOffset: number = 0;


        constructor()
        {

        }

        /**
         * 获取服务器时间，返回当前秒数(本机时间，所有活动计算时差请用getZoneOffsetSeverSecond方法)
         * @return 
         * 
         */
        public static getServerSecond(): number
        {
            return Math.floor((egret.getTimer() + this.tickOffset) / 1000);
        }
        /**
         *  获取服务器时间，返回毫秒
         * @return 
         */
        public static get serverTime(): number
        {
            return (egret.getTimer() + this.tickOffset);
        }
        /**
         * 获得服务器Unix时间，返回Date
         */
        public static getSeverDate(): Date
        {
            return (new Date(this.getServerSecond() * 1000));
        }
        /**
         * 获得服务器显示时间
         */
        public static getZoneOffsetSeverDate(): Date
        {
            return new Date(this.getZoneOffsetSeverSecond() * 1000);
        }
        /**
         * 获得服务器，显示秒
         */
        public static getZoneOffsetSeverSecond(): number
        {
            return this.getServerSecond();
        }

        public static syncServerTime(timeStamp: number): void
        {
            this.tickOffset = timeStamp - egret.getTimer();
            // console.log("tickOffset:",this.tickOffset);
            // console.log("serverTime:",new Date(timeStamp).toString());
            // console.log("ServerSecond:",this.getServerSecond());
        }
    }
}
import ServerTime = qmr.ServerTime;