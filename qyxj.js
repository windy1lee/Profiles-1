/*
# Surge
# >轻颜相机 #解锁vip#(点击恢复购买）
[script]
http-response ^https:\/\/commerce-.*api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info requires-body=1,max-size=0,script-path=JS/qyxj.js

hostname = commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi
*/
let obj = JSON.parse($response.body);
obj.data.end_time=3725012184;
obj.data.is_cancel_subscribe=false;
obj.data.flag=true;
$done({body: JSON.stringify(obj)});

//轻颜相机