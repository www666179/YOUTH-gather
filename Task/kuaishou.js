/*
更新时间: 2021-03-15 10:50
赞赏:快手邀请码`774010415`,农妇山泉 -> 有点咸，万分感谢;
本脚本仅适用于快手双版本签到，仅支持正式版获取多Cookie，建议使用正式版获取Cookie，点击视频页悬浮红包，或者进入设置，点击"积分兑好礼"即可;
本脚本仅在签到成功时通知;
兼容Nodejs,把获取的Cookie填入KS_TOKEN，多账号用"&"分开
*/

const $ = new Env('快手视频')
let cookieArr = [];
let ks_tokens = $.getdata('cookie_ks');
const notify = $.isNode() ? require('./sendNotify') : '';
const nebulaCash = $.getdata('cash_nebulaks')||"10";
const cashType = $.getdata('tpcash_nebula')||"ALIPAY";

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxb585f=["\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x64\x6F\x6E\x65","\x69\x73\x4E\x6F\x64\x65","\x26","\x69\x6E\x64\x65\x78\x4F\x66","\x70\x75\x73\x68","\x4B\x53\x5F\x54\x4F\x4B\x45\x4E","\x65\x6E\x76","\x73\x70\x6C\x69\x74","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x66\x69\x6E\x61\x6C\x6C\x79","\x6C\x6F\x67\x45\x72\x72","\x63\x61\x74\x63\x68","\x6E\x61\x6D\x65","\u3010\u63D0\u793A\u3011\uD83C\uDE50\u767B\u5F55\u5FEB\u624B\x70\x70\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x69\x76\x65\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x66\x69\x73\x73\x69\x6F\x6E\x2F\x6F\x66\x66\x6B\x77\x61\x69\x2F\x69\x6E\x64\x65\x78\x3F\x63\x63\x3D\x73\x68\x61\x72\x65\x5F\x63\x6F\x70\x79\x6C\x69\x6E\x6B\x26\x6B\x70\x66\x3D\x49\x50\x48\x4F\x4E\x45\x26\x74\x72\x61\x63\x65\x49\x64\x3D\x32\x37\x26\x66\x69\x64\x3D\x31\x35\x37\x30\x36\x30\x39\x35\x36\x39\x26\x63\x6F\x64\x65\x3D\x33\x34\x32\x39\x33\x39\x30\x34\x33\x31\x26\x73\x68\x61\x72\x65\x4D\x65\x74\x68\x6F\x64\x3D\x74\x6F\x6B\x65\x6E\x26\x6B\x70\x6E\x3D\x4B\x55\x41\x49\x53\x48\x4F\x55\x26\x73\x75\x62\x42\x69\x7A\x3D\x49\x4E\x56\x49\x54\x45\x5F\x43\x4F\x44\x45\x26\x73\x68\x61\x72\x65\x49\x64\x3D\x31\x30\x30\x30\x35\x31\x37\x32\x39\x37\x30\x38\x31\x26\x73\x68\x61\x72\x65\x54\x6F\x6B\x65\x6E\x3D\x58\x2D\x31\x6F\x54\x6A\x41\x79\x31\x4F\x6B\x4D\x68\x67\x51\x6B\x5F\x41\x4F\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x63\x6F\x70\x79\x6C\x69\x6E\x6B\x26\x73\x68\x61\x72\x65\x4D\x6F\x64\x65\x3D\x61\x70\x70\x26\x73\x68\x61\x72\x65\x4F\x62\x6A\x65\x63\x74\x49\x64\x3D\x33\x34\x32\x39\x33\x39\x30\x34\x33\x31","\x6D\x73\x67","\x67\x65\x74\x54\x69\x6D\x65\x7A\x6F\x6E\x65\x4F\x66\x66\x73\x65\x74","\x6E\x6F\x77","\x7A\x68","\x6C\x6F\x6E\x67","\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x53\x74\x72\x69\x6E\x67","\x20\x3D\x3D\x3D\x20\u811A\u672C\u6267\u884C","\x20\x3D\x3D\x3D\x0A","\x6C\x6F\x67","\x20\x3D\x3D\x3D\x20\u5171\x20","\x6C\x65\x6E\x67\x74\x68","\u4E2A\x20\u8D26\u53F7\x20\x3D\x3D\x3D\x20","\x69\x6E\x64\x65\x78","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x0A\x0A\u5F00\u59CB\u3010\u5FEB\u624B\u89C6\u9891\u8D26\u53F7","\u3011\x0A","\x64\x65\x73\x63","\u3010\u6B63\u5F0F\u7248\u3011\x3A\x0A\x20\x20","\x0A\x20\x20","\x0A","\u3010\u6781\u901F\u7248\u3011\x3A\x0A\x20\x20","\x20\x20\u6635\u79F0\x3A","\x20","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x20\u6635\u79F0\x3A","\x73\x75\x62","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2E\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x77\x64\x2F\x74\x61\x73\x6B\x43\x65\x6E\x74\x65\x72\x2F","\x61\x63\x74\x69\x76\x69\x74\x79\x2E\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x63\x68\x61\x72\x73\x65\x74\x3D\x75\x74\x66\x2D\x38","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x37\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x4B\x77\x61\x69\x2F\x39\x2E\x30\x2E\x35\x30\x2E\x34\x39\x33\x36\x20\x43\x54\x2F\x30\x20\x57\x65\x62\x56\x69\x65\x77\x54\x79\x70\x65\x2F\x57\x4B\x20\x4E\x65\x74\x54\x79\x70\x65\x2F\x57\x49\x46\x49\x20\x59\x6F\x64\x61\x2F\x32\x2E\x33\x2E\x37\x2D\x72\x63\x35\x20\x54\x69\x74\x6C\x65\x48\x54\x2F\x34\x34\x20\x53\x74\x61\x74\x75\x73\x48\x54\x2F\x32\x30","\x6C\x6F\x77\x41\x63\x74\x69\x76\x65\x2F\x6D\x6F\x64\x75\x6C\x65\x2F\x6C\x69\x73\x74","\x7B\x22\x62\x69\x7A\x49\x64\x22\x3A\x32\x39\x2C\x22\x63\x6F\x6E\x66\x69\x67\x49\x64\x22\x3A\x31\x7D","\x70\x61\x72\x73\x65","\x0A\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x0A\x0A\u73B0\u5728\u5F00\u59CB\u6B63\u5F0F\u7248\u4EFB\u52A1","\x72\x65\x73\x75\x6C\x74","\x6D\x6F\x64\x75\x6C\x65\x73","\x6D\x6F\x64\x75\x6C\x65\x49\x64","\x6D\x6F\x64\x75\x6C\x65\x44\x65\x73\x63","\x74\x61\x73\x6B\x73","\x73\x74\x61\x74\x75\x73","\x62\x69\x7A\x49\x64","\x74\x6F\x6B\x65\x6E","\x65\x76\x65\x6E\x74\x49\x64","\x73\x63\x68\x65\x6D\x65\x54\x65\x78\x74","\x72\x65\x77\x61\x72\x64\x4E\x61\x6D\x65","\x72\x65\x77\x61\x72\x64","\x20\x20","\x31\x31\x32\x33","\x31\x31\x37\x36","\x31\x37\x34\x39","\uFF0C\u65F6\u95F4\u672A\u8FBE\u5230","\u9886\u53D6\u91D1\u5E01\u5931\u8D25\x0A","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x6F\x73\x74","\x74\x61\x73\x6B\x2F\x72\x65\x70\x6F\x72\x74","\x7B\x22\x62\x69\x7A\x49\x64\x22\x3A\x20\x32\x39\x2C\x22\x74\x61\x73\x6B\x54\x6F\x6B\x65\x6E\x22\x3A\x20\x22","\x22\x2C\x22\x65\x76\x65\x6E\x74\x49\x64\x22\x3A\x20\x22","\x22\x2C\x22\x65\x76\x65\x6E\x74\x56\x61\x6C\x75\x65\x22\x3A\x20\x31\x7D","\x72\x65\x77\x61\x72\x64\x43\x6F\x75\x6E\x74","\x74\x69\x74\x6C\x65","\x64\x69\x61\x6C\x6F\x67","\u3010","\u3011\x2B","\x63\x6C\x6F\x73\x65\x42\x75\x62\x62\x6C\x65","\u9886\u53D6\u91D1\u5E01","\uFF0C","\x73\x65\x63\x6F\x6E\x64\x44\x65\x73\x63","\x65\x72\x72\x6F\x72\x5F\x6D\x73\x67","\x74\x61\x73\x6B\x2F\x73\x69\x67\x6E\x49\x6E","\x7B\x22\x62\x69\x7A\x49\x64\x22\x3A\x20\x32\x39\x7D","\u7B7E\u5230\u7ED3\u679C\x3A\x20","\u9519\u8BEF\u4FE1\u606F\x3A\x20","\u7B7E\u5230\u7ED3\u679C\x3A\x20\u2705\x20\x2B","\x20\u79EF\u5206","\x74\x61\x73\x6B\x2F\x61\x70\x70\x53\x74\x61\x72\x74\x75\x70\x2F\x72\x65\x77\x61\x72\x64","\x73\x75\x72\x70\x72\x69\x73\x65\x52\x65\x77\x61\x72\x64\x43\x6F\x75\x6E\x74","\u83B7\u5F97\u79EF\u5206","\u73B0\u91D1\u5956\u52B1","\u5143","\u524D\u9762\u7684\u6761\u4EF6\u4E0D\u6EE1\u8DB3","\x72\x65\x77\x61\x72\x64\x53\x75\x63\x63\x65\x73\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x7A\x74\x2E\x67\x69\x66\x73\x68\x6F\x77\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x7A\x74\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x61\x63\x63\x6F\x75\x6E\x74\x2F\x73\x75\x6D\x6D\x61\x72\x79\x2F\x77\x69\x74\x68\x4B\x73\x63\x6F\x69\x6E\x54\x72\x69\x61\x6C\x3F\x6B\x70\x6E\x3D\x4B\x55\x41\x49\x53\x48\x4F\x55\x26\x73\x75\x62\x42\x69\x7A\x3D\x6C\x6F\x77\x41\x63\x74\x69\x76\x65\x55\x73\x65\x72\x54\x61\x73\x6B\x45\x6E\x63\x6F\x75\x72\x61\x67\x65","\u79EF\u5206\x3A\x20","\x64\x69\x73\x70\x6C\x61\x79\x42\x61\x6C\x61\x6E\x63\x65","\x61\x63\x63\x6F\x75\x6E\x74\x73","\x64\x61\x74\x61","\u79EF\u5206\x20\x20\u73B0\u91D1\x3A\x20","\x67\x65\x74","\x73\x69\x67\x6E\x2F\x73\x69\x67\x6E","\x74\x6F\x61\x73\x74","\x73\x69\x67\x6E\x2F\x71\x75\x65\x72\x79","\x31","\x73\x75\x62\x54\x69\x74\x6C\x65","\x6E\x65\x62\x75\x6C\x61\x53\x69\x67\x6E\x49\x6E\x50\x6F\x70\x75\x70","\x2C\x20","\x5C\x6E","\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x65\x61\x72\x6E\x2F\x6F\x76\x65\x72\x76\x69\x65\x77","\x61\x6C\x6C\x43\x61\x73\x68","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x75\x73\x65\x72\x44\x61\x74\x61","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x20\u6635\u79F0\x3A\x20","\x20\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A\x0A\u5F00\u59CB\u6781\u901F\u7248\u4EFB\u52A1\x0A","\x74\x6F\x74\x61\x6C\x43\x6F\x69\x6E","\x64\x61\x69\x6C\x79\x54\x61\x73\x6B\x73","\x69\x64","\u53BB","\x74\x6F\x64\x61\x79\x49\x73\x53\x69\x67\x6E\x65\x64","\x65\x78\x74\x50\x61\x72\x61\x6D","\x6F\x75\x74\x73\x69\x64\x65\x2F\x77\x69\x74\x68\x64\x72\x61\x77\x2F\x61\x70\x70\x6C\x79","\x7B\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x22","\x22\x2C\x22\x61\x6D\x6F\x75\x6E\x74\x22\x3A","\x7D","\u6781\u901F\u7248\u63D0\u73B0\u6210\u529F\uFF0C\u63D0\u73B0","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x6E\x2F\x6E\x65\x62\x75\x6C\x61\x2F","\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x37\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x33\x2E\x31\x2E\x32\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31","\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74","\x68\x65\x61\x64\x65\x72\x73","\x6D\x65\x74\x68\x6F\x64","\x4F\x50\x54\x49\x4F\x4E\x53","\x6B\x73\x4E\x65\x62\x75\x6C\x61","\x43\x6F\x6F\x6B\x69\x65","\x63\x6F\x6F\x6B\x69\x65\x5F\x6B\x73","\x73\x65\x74\x64\x61\x74\x61","\u83B7\u53D6\x43\x6F\x6F\x6B\x69\x65\x3A\x20\u6210\u529F\x2C\x20\x63\x6F\x6F\x6B\x69\x65\x56\x61\x6C\x3A\x20\x24\x20\x7B\x63\x6F\x6F\x6B\x69\x65\x56\x61\x6C\x7D","\u83B7\u53D6\u6781\u901F\x43\x6F\x6F\x6B\x69\x65\x3A\x20\u6210\u529F\uD83C\uDF89","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65\u91CD\u590D\uFF0C\u5DF2\u8DF3\u8FC7","\u83B7\u53D6\u6B63\u5F0F\u7248\x43\x6F\x6F\x6B\x69\x65","\x3A\x20\u6210\u529F\uD83C\uDF89","\u83B7\u53D6\u6B63\u5F0F\u7248\x43\x6F\x6F\x6B\x69\x65\x3A\x20\u6210\u529F\uD83C\uDF89","\x68\x74\x74\x70\x3A\x2F\x2F\x61\x70\x69\x73\x73\x6C\x2E\x67\x69\x66\x73\x68\x6F\x77\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x6E\x65\x62\x75\x6C\x61\x2F\x69\x6E\x76\x69\x74\x65\x43\x6F\x64\x65\x2F\x62\x69\x6E\x64\x3F\x63\x3D\x61\x26\x61\x70\x70\x74\x79\x70\x65\x3D\x32\x26\x64\x69\x64\x3D\x44\x34\x42\x32\x35\x32\x33\x34\x2D\x37\x32\x35\x45\x2D\x34\x44\x38\x31\x2D\x39\x32\x42\x31\x2D\x37\x34\x44\x42\x35\x30\x44\x41\x34\x30\x39\x45\x26\x6B\x70\x6E\x3D\x4E\x45\x42\x55\x4C\x41\x26\x6B\x65\x79\x63\x6F\x6E\x66\x69\x67\x5F\x73\x74\x61\x74\x65\x3D\x31\x26\x64\x65\x76\x69\x63\x65\x42\x69\x74\x3D\x30\x26\x73\x77\x3D\x31\x32\x34\x32\x26\x6B\x70\x66\x3D\x49\x50\x48\x4F\x4E\x45\x26\x73\x6F\x75\x72\x63\x65\x54\x79\x70\x65\x3D\x39\x26\x73\x79\x73\x3D\x69\x6F\x73\x31\x33\x2E\x37\x26\x73\x68\x3D\x32\x32\x30\x38\x26\x6B\x63\x76\x3D\x31\x33\x31\x32\x26\x62\x72\x6F\x77\x73\x65\x54\x79\x70\x65\x3D\x33\x26\x6E\x65\x74\x3D\x25\x45\x34\x25\x42\x38\x25\x41\x44\x25\x45\x35\x25\x39\x42\x25\x42\x44\x25\x45\x37\x25\x39\x34\x25\x42\x35\x25\x45\x34\x25\x42\x46\x25\x41\x31\x5F\x35\x26\x64\x61\x72\x6B\x4D\x6F\x64\x65\x3D\x66\x61\x6C\x73\x65\x26\x69\x6E\x76\x69\x74\x65\x43\x6F\x64\x65\x3D\x37\x37\x34\x30\x31\x30\x34\x31\x35\x26\x76\x65\x72\x3D\x39\x2E\x30\x26\x73\x79\x6E\x63\x3D\x31\x26\x69\x73\x70\x3D\x43\x54\x43\x43\x26\x6D\x6F\x64\x3D\x69\x50\x68\x6F\x6E\x65\x38\x25\x32\x43\x32\x26\x75\x64\x3D\x39\x35\x33\x33\x32\x34\x39\x33\x34\x26\x63\x6F\x6C\x64\x5F\x6C\x61\x75\x6E\x63\x68\x5F\x74\x69\x6D\x65\x5F\x6D\x73\x3D\x31\x36\x31\x33\x38\x37\x31\x38\x34\x31\x33\x35\x33\x26\x76\x61\x67\x75\x65\x3D\x30\x26\x65\x67\x69\x64\x3D\x44\x46\x50\x39\x34\x32\x35\x32\x32\x43\x41\x45\x43\x44\x33\x36\x37\x42\x42\x34\x32\x39\x39\x42\x38\x37\x41\x34\x44\x36\x37\x30\x43\x36\x30\x46\x38\x39\x43\x32\x44\x39\x45\x44\x38\x35\x44\x45\x30\x44\x45\x45\x43\x31\x45\x36\x33\x41\x32\x39\x32\x35\x44\x31\x26\x61\x70\x70\x76\x65\x72\x3D\x39\x2E\x30\x2E\x35\x30\x2E\x35\x39\x34","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let isGetCookie= typeof $request!== __Oxb585f[0x0];if(isGetCookie){GetCookie();$[__Oxb585f[0x1]]()}else {if(!$[__Oxb585f[0x2]]()&& ks_tokens[__Oxb585f[0x4]](__Oxb585f[0x3])==  -1){cookieArr[__Oxb585f[0x5]](ks_tokens)}else {if($[__Oxb585f[0x2]]()){if(process[__Oxb585f[0x7]][__Oxb585f[0x6]]&& process[__Oxb585f[0x7]][__Oxb585f[0x6]][__Oxb585f[0x4]](__Oxb585f[0x3])>  -1){ks_tokens= process[__Oxb585f[0x7]][__Oxb585f[0x6]][__Oxb585f[0x8]](__Oxb585f[0x3])}else {ks_tokens= [process[__Oxb585f[0x7]][__Oxb585f[0x6]]]}}else {if(!$[__Oxb585f[0x2]]()&& ks_tokens[__Oxb585f[0x4]](__Oxb585f[0x3])>  -1){ks_tokens= ks_tokens[__Oxb585f[0x8]](__Oxb585f[0x3])}};Object[__Oxb585f[0xa]](ks_tokens)[__Oxb585f[0x9]]((_0x237dx2)=>{if(ks_tokens[_0x237dx2]){cookieArr[__Oxb585f[0x5]](ks_tokens[_0x237dx2])}})};!(async ()=>{if(!cookieArr[0x0]){$[__Oxb585f[0x12]]($[__Oxb585f[0xe]],__Oxb585f[0xf],__Oxb585f[0x10],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxb585f[0x11]});return};timeZone=  new Date()[__Oxb585f[0x13]]()/ 60;timestamp= Date[__Oxb585f[0x14]]()+ (8+ timeZone)* 60* 60* 1000;bjTime=  new Date(timestamp)[__Oxb585f[0x17]](__Oxb585f[0x15],{hour12:false,timeZoneName:__Oxb585f[0x16]});console[__Oxb585f[0x1a]](__Oxb585f[0x18]+ bjTime+ __Oxb585f[0x19]);console[__Oxb585f[0x1a]](`${__Oxb585f[0x1b]}${cookieArr[__Oxb585f[0x1c]]}${__Oxb585f[0x1d]}`);for(let _0x237dx4=0;_0x237dx4< cookieArr[__Oxb585f[0x1c]];_0x237dx4++){if(cookieArr[_0x237dx4]){cookieVal= cookieArr[_0x237dx4];$[__Oxb585f[0x1e]]= _0x237dx4+ 1;console[__Oxb585f[0x1a]](__Oxb585f[0x1f]+ $[__Oxb585f[0x1e]]+ __Oxb585f[0x20]); await nebulaInfo(); await nebulaPopup(); await formalCenter(); await formalSign();if(offici_code!== 100119){ await formalinfo()};$[__Oxb585f[0x21]]= __Oxb585f[0x22]+ offic_info+ __Oxb585f[0x23]+ offic_sign+ __Oxb585f[0x24];$[__Oxb585f[0x21]]+= __Oxb585f[0x25]+ speed_rewards+ __Oxb585f[0x23]+ speed_info;if(offici_code== 1){$[__Oxb585f[0x12]]($[__Oxb585f[0xe]]+ __Oxb585f[0x26]+ nickname,__Oxb585f[0x10],$[__Oxb585f[0x21]]); await notify[__Oxb585f[0x28]]($[__Oxb585f[0xe]]+ __Oxb585f[0x27]+ nickname,$[__Oxb585f[0x21]])}else {$[__Oxb585f[0x12]]($[__Oxb585f[0xe]]+ __Oxb585f[0x29]+ nickname,$[__Oxb585f[0x2a]],$[__Oxb585f[0x21]])}}}})()[__Oxb585f[0xd]]((_0x237dx3)=>{return $[__Oxb585f[0xc]](_0x237dx3)})[__Oxb585f[0xb]](()=>{return $[__Oxb585f[0x1]]()})};function formalHost(_0x237dx6,_0x237dx7){return {url:__Oxb585f[0x2b]+ _0x237dx6,headers:{'\x48\x6F\x73\x74':__Oxb585f[0x2c],'\x43\x6F\x6F\x6B\x69\x65':cookieVal,'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxb585f[0x2d],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxb585f[0x2e]},body:_0x237dx7}}function formalCenter(){return  new Promise((_0x237dx9,_0x237dxa)=>{$[__Oxb585f[0x46]](formalHost(__Oxb585f[0x2f],__Oxb585f[0x30]),async (_0x237dxb,_0x237dxc,_0x237dxd)=>{let _0x237dxe=JSON[__Oxb585f[0x31]](_0x237dxd);$[__Oxb585f[0x1a]](__Oxb585f[0x32]);try{if(_0x237dxe[__Oxb585f[0x33]]== 1){for(lists of _0x237dxe[__Oxb585f[0x34]]){Id= lists[__Oxb585f[0x35]],moduleDesc= lists[__Oxb585f[0x36]];$[__Oxb585f[0x1a]](__Oxb585f[0x24]+ moduleDesc);for(tasks of lists[__Oxb585f[0x37]]){status= tasks[__Oxb585f[0x38]],bizId= tasks[__Oxb585f[0x39]],tasktoken= tasks[__Oxb585f[0x3a]],eventId= tasks[__Oxb585f[0x3b]],schemeText= tasks[__Oxb585f[0x3c]];taskName= tasks[__Oxb585f[0x3e]][__Oxb585f[0x3d]];if(status== 5){$[__Oxb585f[0x1a]](taskName+ __Oxb585f[0x3f]+ tasks[__Oxb585f[0x3c]])}else {if(status== 2){$[__Oxb585f[0x1a]](taskName+ schemeText);if(Id== __Oxb585f[0x40]){ await formalSign();break}else {if(Id== __Oxb585f[0x41]){ await getReward();break}}}else {if(Id== __Oxb585f[0x42]){if(status== 4){ await openbox(tasktoken,eventId)}else {if(status== 1){$[__Oxb585f[0x1a]](tasks[__Oxb585f[0x3e]][__Oxb585f[0x3d]]+ __Oxb585f[0x43])}}}}}}}}}catch(e){$[__Oxb585f[0x1a]](__Oxb585f[0x44]+ e+ JSON[__Oxb585f[0x45]](result,null,2))}finally{_0x237dx9()}})})}function openbox(_0x237dx10,_0x237dx11){return  new Promise((_0x237dx9,_0x237dxa)=>{$[__Oxb585f[0x46]](formalHost(__Oxb585f[0x47],`${__Oxb585f[0x48]}${_0x237dx10}${__Oxb585f[0x49]}${_0x237dx11}${__Oxb585f[0x4a]}`),(_0x237dxb,_0x237dxc,_0x237dxd)=>{let _0x237dx12=JSON[__Oxb585f[0x31]](_0x237dxd);try{if(_0x237dx12[__Oxb585f[0x33]]== 1){rewards= _0x237dx12[__Oxb585f[0x3e]][__Oxb585f[0x4b]],boxname= _0x237dx12[__Oxb585f[0x4d]][__Oxb585f[0x4c]],$[__Oxb585f[0x21]]+= __Oxb585f[0x4e]+ boxname+ __Oxb585f[0x4f]+ rewards+ __Oxb585f[0x27]+ _0x237dx12[__Oxb585f[0x4d]][__Oxb585f[0x50]];$[__Oxb585f[0x1a]](boxname+ __Oxb585f[0x51]+ rewards+ __Oxb585f[0x52]+ _0x237dx12[__Oxb585f[0x4d]][__Oxb585f[0x53]])}else {$[__Oxb585f[0x1a]](boxname+ _0x237dx12[__Oxb585f[0x54]])}}catch(e){$[__Oxb585f[0x1a]](__Oxb585f[0x44]+ JSON[__Oxb585f[0x45]](_0x237dx12,null,2))}finally{_0x237dx9()}})})}function formalSign(){return  new Promise((_0x237dx9,_0x237dxa)=>{$[__Oxb585f[0x46]](formalHost(__Oxb585f[0x55],__Oxb585f[0x56]),(_0x237dxb,_0x237dx14,_0x237dxd)=>{let _0x237dx15=JSON[__Oxb585f[0x31]](_0x237dxd);offici_code= _0x237dx15[__Oxb585f[0x33]];if(offici_code== 100111){offic_sign= `${__Oxb585f[0x57]}${_0x237dx15[__Oxb585f[0x54]]}${__Oxb585f[0x10]}`;$[__Oxb585f[0x1a]](`${__Oxb585f[0x58]}${_0x237dx15[__Oxb585f[0x54]]}${__Oxb585f[0x10]}`);return}else {if(offici_code== 100136){offic_sign= `${__Oxb585f[0x57]}${_0x237dx15[__Oxb585f[0x54]]}${__Oxb585f[0x10]}`;$[__Oxb585f[0x1a]](__Oxb585f[0x10]+ _0x237dx15[__Oxb585f[0x54]])}else {if(offici_code== 1){offic_sign= `${__Oxb585f[0x59]}${_0x237dx15[__Oxb585f[0x3e]][__Oxb585f[0x4b]]}${__Oxb585f[0x5a]}`}}};_0x237dx9()})})}function getReward(){return  new Promise((_0x237dx9,_0x237dxa)=>{$[__Oxb585f[0x46]](formalHost(__Oxb585f[0x5b],__Oxb585f[0x56]),(_0x237dxb,_0x237dx14,_0x237dxd)=>{let _0x237dx17=JSON[__Oxb585f[0x31]](_0x237dxd);if(_0x237dxd[__Oxb585f[0x4]](__Oxb585f[0x5c])>  -1){surpriseReward= _0x237dx17[__Oxb585f[0x3e]][__Oxb585f[0x5c]]};switch(_0x237dx17[__Oxb585f[0x61]]){case true:$[__Oxb585f[0x1a]](__Oxb585f[0x5d]+ _0x237dx17[__Oxb585f[0x3e]][__Oxb585f[0x4b]]+ surpriseReward?__Oxb585f[0x5e]+ surpriseReward/ 100+ __Oxb585f[0x5f]:__Oxb585f[0x10]);break;case false:break;default:$[__Oxb585f[0x1a]](__Oxb585f[0x60]);break};_0x237dx9()})})}function formalinfo(){return  new Promise((_0x237dx9,_0x237dxa)=>{infourl= {url:__Oxb585f[0x62],headers:{Cookie:cookieVal,'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxb585f[0x2d]}};$[__Oxb585f[0x68]](infourl,async (_0x237dxb,_0x237dxc,_0x237dxd)=>{let _0x237dx19=JSON[__Oxb585f[0x31]](_0x237dxd);if(_0x237dx19[__Oxb585f[0x33]]== 1){offic_info= `${__Oxb585f[0x63]}${_0x237dx19[__Oxb585f[0x66]][__Oxb585f[0x65]][0x0][__Oxb585f[0x64]]}${__Oxb585f[0x67]}${_0x237dx19[__Oxb585f[0x66]][__Oxb585f[0x65]][0x1][__Oxb585f[0x64]]}${__Oxb585f[0x5f]}`};_0x237dx9()})})}function nebulaSign(){return  new Promise((_0x237dx9,_0x237dxa)=>{$[__Oxb585f[0x68]](nebulaHost(__Oxb585f[0x69]),async (_0x237dxb,_0x237dx14,_0x237dxd)=>{let _0x237dx1b=JSON[__Oxb585f[0x31]](_0x237dxd);speed_code= _0x237dx1b[__Oxb585f[0x33]];if(speed_code== 10007){speed_sign= `${__Oxb585f[0x57]}${_0x237dx1b[__Oxb585f[0x54]]}${__Oxb585f[0x10]}`;$[__Oxb585f[0x12]]($[__Oxb585f[0xe]],speed_sign,__Oxb585f[0x10]);$[__Oxb585f[0x1a]](`${__Oxb585f[0x58]}${_0x237dx1b[__Oxb585f[0x54]]}${__Oxb585f[0x10]}`);$[__Oxb585f[0x1]]()}else {if(speed_code== 10901){speed_sign= `${__Oxb585f[0x57]}${_0x237dx1b[__Oxb585f[0x54]]}${__Oxb585f[0x10]}`}else {if(speed_code== 1){speed_sign= `${__Oxb585f[0x57]}${_0x237dx1b[__Oxb585f[0x66]][__Oxb585f[0x6a]]}${__Oxb585f[0x10]}`;if(parseInt(nebulacash)> nebulaCash){ await nebulaWithdraw()}}}};$[__Oxb585f[0x1a]](speed_sign);_0x237dx9()})})}function nebulaPopup(){return  new Promise((_0x237dx9,_0x237dxa)=>{$[__Oxb585f[0x68]](nebulaHost(__Oxb585f[0x6b]),(_0x237dxb,_0x237dxc,_0x237dxd)=>{let _0x237dx12=JSON[__Oxb585f[0x31]](_0x237dxd);if(_0x237dx12[__Oxb585f[0x33]]== __Oxb585f[0x6c]){speed_info= `${__Oxb585f[0x10]}${_0x237dx12[__Oxb585f[0x66]][__Oxb585f[0x6e]][__Oxb585f[0x6d]]}${__Oxb585f[0x6f]}${_0x237dx12[__Oxb585f[0x66]][__Oxb585f[0x6e]][__Oxb585f[0x4c]]}${__Oxb585f[0x70]}`};_0x237dx9()})})}function nebulaInfo(){return  new Promise((_0x237dx9,_0x237dxa)=>{$[__Oxb585f[0x68]](nebulaHost(__Oxb585f[0x71]),async (_0x237dxb,_0x237dx14,_0x237dxd)=>{let _0x237dx12=JSON[__Oxb585f[0x31]](_0x237dxd);if(_0x237dx12[__Oxb585f[0x33]]== 1){nebulacash= _0x237dx12[__Oxb585f[0x66]][__Oxb585f[0x72]],nickname= _0x237dx12[__Oxb585f[0x66]][__Oxb585f[0x74]][__Oxb585f[0x73]];$[__Oxb585f[0x1a]](__Oxb585f[0x75]+ nickname+ __Oxb585f[0x76]);speed_rewards= __Oxb585f[0x63]+ _0x237dx12[__Oxb585f[0x66]][__Oxb585f[0x77]]+ __Oxb585f[0x67]+ nebulacash+ __Oxb585f[0x5f];for(nebulaTask of _0x237dx12[__Oxb585f[0x66]][__Oxb585f[0x78]]){taskName= nebulaTask[__Oxb585f[0xe]];taskid= nebulaTask[__Oxb585f[0x79]];$[__Oxb585f[0x1a]](__Oxb585f[0x7a]+ taskName);if(nebulaTask[__Oxb585f[0x38]]!== 1){}else {if(taskid== 5){if(nebulaTask[__Oxb585f[0x7c]][__Oxb585f[0x7b]]== false){ await nebulaSign()}else {speed_sign= nebulaTask[__Oxb585f[0x21]]}}else {if(taskid== 3){ await bdinvet()}};$[__Oxb585f[0x1a]](nebulaTask[__Oxb585f[0x21]]+ __Oxb585f[0x24])}}};_0x237dx9()})})}function nebulaWithdraw(){return  new Promise((_0x237dx9,_0x237dxa)=>{$[__Oxb585f[0x46]](nebulaHost(__Oxb585f[0x7d],`${__Oxb585f[0x7e]}${cashType}${__Oxb585f[0x7f]}${nebulacash}${__Oxb585f[0x80]}`),(_0x237dxb,_0x237dxc,_0x237dxd)=>{let _0x237dx12=JSON[__Oxb585f[0x31]](_0x237dxd);if(_0x237dx12[__Oxb585f[0x33]]== 1){$[__Oxb585f[0x12]]($[__Oxb585f[0xe]],__Oxb585f[0x81])}else {$[__Oxb585f[0x1a]](_0x237dx12[__Oxb585f[0x54]])};_0x237dx9()})})}function nebulaHost(_0x237dx6,_0x237dx7){return {url:__Oxb585f[0x82]+ _0x237dx6,headers:{'\x48\x6F\x73\x74':__Oxb585f[0x83],'\x43\x6F\x6F\x6B\x69\x65':cookieVal,'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxb585f[0x2d],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':__Oxb585f[0x84]},body:_0x237dx7}}function GetCookie(){var _0x237dx21=$request[__Oxb585f[0x86]][__Oxb585f[0x85]];if($request&& $request[__Oxb585f[0x87]]!= `${__Oxb585f[0x88]}`&& _0x237dx21[__Oxb585f[0x4]](__Oxb585f[0x89])>  -1){const _0x237dx22=$request[__Oxb585f[0x86]][__Oxb585f[0x8a]];if(_0x237dx22){$[__Oxb585f[0x8c]](_0x237dx22,__Oxb585f[0x8b])};$[__Oxb585f[0x1a]](`${__Oxb585f[0x10]}${$[__Oxb585f[0xe]]}${__Oxb585f[0x8d]}`);$[__Oxb585f[0x12]]($[__Oxb585f[0xe]],`${__Oxb585f[0x8e]}`,`${__Oxb585f[0x10]}`)}else {if($request&& $request[__Oxb585f[0x87]]!= `${__Oxb585f[0x88]}`&& _0x237dx21[__Oxb585f[0x4]](__Oxb585f[0x89])==  -1){const _0x237dx23=$request[__Oxb585f[0x86]][__Oxb585f[0x8a]];_0x237dx22= _0x237dx23[__Oxb585f[0x8f]](/appver=[0-9\.]+/)+ _0x237dx23[__Oxb585f[0x8f]](/; client_key=\w+/)+ _0x237dx23[__Oxb585f[0x8f]](/; token=[0-9a-z-]+/)+ _0x237dx23[__Oxb585f[0x8f]](/; userId=\d+/);uid= _0x237dx22[__Oxb585f[0x8f]](/userId=\d+/);if(ks_tokens){if(ks_tokens[__Oxb585f[0x4]](uid)>  -1){$[__Oxb585f[0x1a]](__Oxb585f[0x90])}else {if(ks_tokens[__Oxb585f[0x4]](uid)==  -1){Cookies= ks_tokens+ __Oxb585f[0x3]+ _0x237dx22;$[__Oxb585f[0x8c]](Cookies,__Oxb585f[0x8b]);ck= Cookies[__Oxb585f[0x8]](__Oxb585f[0x3]);$[__Oxb585f[0x12]]($[__Oxb585f[0xe]],__Oxb585f[0x91]+ ck[__Oxb585f[0x1c]]+ __Oxb585f[0x92],`${__Oxb585f[0x10]}`)}}}else {$[__Oxb585f[0x8c]](_0x237dx22,__Oxb585f[0x8b]);$[__Oxb585f[0x12]]($[__Oxb585f[0xe]],`${__Oxb585f[0x93]}`,`${__Oxb585f[0x10]}`)}}}}function bdinvet(){const _0x237dx25={url:__Oxb585f[0x94],headers:nebulaHost()[__Oxb585f[0x86]],body:cookieVal};$[__Oxb585f[0x46]](_0x237dx25,(_0x237dxb,_0x237dxc,_0x237dxd)=>{})}(function(_0x237dx26,_0x237dx27,_0x237dx28,_0x237dx29,_0x237dx2a,_0x237dx2b){_0x237dx2b= __Oxb585f[0x0];_0x237dx29= function(_0x237dx2c){if( typeof alert!== _0x237dx2b){alert(_0x237dx2c)};if( typeof console!== _0x237dx2b){console[__Oxb585f[0x1a]](_0x237dx2c)}};_0x237dx28= function(_0x237dx2d,_0x237dx26){return _0x237dx2d+ _0x237dx26};_0x237dx2a= _0x237dx28(__Oxb585f[0x95],_0x237dx28(_0x237dx28(__Oxb585f[0x96],__Oxb585f[0x97]),__Oxb585f[0x98]));try{_0x237dx26= __encode;if(!( typeof _0x237dx26!== _0x237dx2b&& _0x237dx26=== _0x237dx28(__Oxb585f[0x99],__Oxb585f[0x9a]))){_0x237dx29(_0x237dx2a)}}catch(e){_0x237dx29(_0x237dx2a)}})({})

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
