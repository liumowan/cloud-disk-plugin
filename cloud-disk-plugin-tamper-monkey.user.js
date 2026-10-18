// ==UserScript==
// @name         网盘文件批量重命名
// @namespace    cloud-disk-plugin
// @version      1.4.4
// @author       afeireal
// @description  网盘文件批量重命名插件，支持百度网盘、阿里云盘、夸克网盘、PikPak云盘。
// @license      MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAACUpJREFUeJzlm3lzU2UUxnEZxhH1f78AX6AK7oIi4gAuuO+iMygqyqKOS10HUUSxilKoIDsFtYCgoixSWWQVrFWg+5KUdN/bdD+e35sbTdPc9jZNm3RyZs6khOTe9znvOc9Z3psRIwZZEt7Pulx1mupc1UWqG1T3qZ5Vrbf0rPXeBuszc63vXD7Y64u46KLPVx2rOl81Q1UGqBnWtbjm+dHGZyu6uEtVX1ItiABoOy2w7nFptPH+J7qYi1VfVq0YRODBWmHd8+JoAj9P9WFV1xACD1aXtYbzhhr8aNX0KAIPVtYyeqjAz1RtjgHQwcqaZg4m8ItU18UA0L6UNV4UafCjVPfGADinylpHRQr8hao7YwBUf5U1XxgJAyTHAJhwNXmg4GfGAIiBanjEqF8co9oaAwAGqmAY01/wl6nmxcDiI6Vguaw/Blg51Iu8ckGW3JmcL69tPSdLfq2QjceqZeff9fLDX3Xy9aEqmf9jqczc4JLbv8yXqxdmh3OPlU7BT1DtGirgYz7IkqfWFsu6I9VyvLBJCqtapaKhXRpaOqWto0ta27uktrlDSmraJLusRU4WN8u2P2tl1ia3XL8opz/3AtOEvsCPVM0aKvATk3LNbv/papY6b4d0dolUNXbIX26v7D3TIJtP1Mg3qvz9d4nXGKZDP9Tc1ik55S2y/mi13JdSoEZ07BFgG9mbAeYMFfgHviqUradqpazeByqvolVW/14lsze75ZGvi+TuZQUy+Yt8o/z9qL43Y71LFu0qMwZrUc+oU884nN9kQuMa52Exxw78JQlD1NI+tqpI9uiu4uZNrZ2SdrJWntvokkmf5cmtqk8r0Hd/KJWl6RWyZF+FvLHtnPnOTYtzZbwqBlpxsEo8de3SqmGCQWasK5arPnRkBDBeEsoA8yIF8NqPcmSqktX0NcXyfKrbLH7ykjxDXnfo+7/8U2+A4+6AvCu5QG77PM8Q3b6sBskqbRG3xnxlY7tx+yLlhX/OeeX3vEb5XEMGIuTzb37vkbzyVsMVB3Mb5f6UQrligaM1zgsGf4Fq0UCB46qLd5fL3rMNhqxOe7ySo8TF4v8oapZf9f392Y2G1NCkveVm1wmHLRoOLgUNGDvp0v8qV4NwjWfU7Sd8mms8BWN5lRfWHq4213OwVrBeEGiAKQMBfoOy8Yc/l5l4JKbbO30giFPcvMP6N68A5JXF4hWPrCySXafrzefsoXcXrgFRYoSJSXmySrmjpqlDyvXec78tcZompwQaIDVc8OM/yZWU/ZVSXNVmgJdqXH6vaQp3flEJ7VmNbXI7ufxYQZPUezslUxl9+uoimaIE92NmnTRqOPRXMCJuf+/yAhNCR/XaGIbagRBxsPbUwNRXH16sZ8uy3yrFU+tz3d26k/N0B1jAdcoDGIdY5RXXfHBFoTHGLOWFcZ/kyKd7ys2uhSu4/dL0SuMFeCDGr9HQgnfG9p0awTwSA4wLd/ff3u6RgspWs/PbM+oM2QEMFielHchplBMa+7x+daBSntBdxxi4KIY5oiHjD49wJV/TJ/edqt6UodmAyyXrptys/OAAwzgMkBgOeNz3kLIyOw87T19dbFJYigKlaCFH+7HxWq0xiuu/s8NjjESswu4DFYz//k+l5prUFWQXSPjOpY7CIBEDpPUXPNZdrO4L4QH01S3nzAKwPLnZblNhcUC/klYiq5QTSIORkE3Ha4xHUVWSOsk6ZBYHWNIwQKYT0JSbVGPLlfBwaWrzdt19/ib94fZnPC224APlkJIXhNjY0n/yCyXUFXfoji/YWWp4gLB4eKUjA2RigBon7o5rU3Gxa8QtCoF9vKvcVGjsvtMdxU3xHhqdSMhPmkkg3kW/lJnr0jQ9tMKRAWowQK+dH2UnN/ADz9XK69s/auQtJUB2fZK6Ht5B2+ptcw6I2O2KDH5JPeYLATYJrjmlRdh9KY4M0DWitw/cr3G054yvbCXWUzXWaDzwiBs/zpFpyb4mhVwMEbb3UsUNplB9wkH0FKzVVd0mL39XYkryvoxga4AbFCA7TYUGsZCzqe9hekiPtEe5C+FkuJtNaRupHe2PsOM0UuR9higUWmQm+okFmh0Iz7AMQKNBdUecLlPiw9UZXFC5FWrupwiJzn53F0JvqlX5QcYLtSCCjDECPcJHygu9GSGkAfhCunZltJr7leVJKQweaGYYRsSSAJadf0+bIkLxlqRc0xqzbjaJcKAkt+sPQpLg7G/cZjTFBRK3eUy807zg5rEm7DT8xG5TdVJqU21SHUKG8JI/TdqRYI80SOMCWDoudp+LEesDrFoHXVgfNUCihi9G8PcHjNueXFNsmwZ7FEIwP5aFVWlZ/fl1uAgECF8xTsMrMAzjNLtCqEcpTGsJo9PAEFNMbLHicJGOTt/aJ2rGokwmk9kYIC1kM8R4GoH9mbps1EKD9DKchCELcU/PwhTJxgCJIdthGJSqD3Yl/X2xjyZj+HgAstsywAc7fTxgY4BxIQcizONxG/r1e5b7Gh3G1sNJ/OUxQ9TK0B7gG4iEGolR59PtEfdzNCXerHUBvXY4o6toCLNIRumcHPl6lJAckGo7FMVy8ABh4J+xUfNT+rbHei4UX/z7+5TTmr67QmeBbkPRbmNxDioXWqkPL6DlJRvQCDGI9MZYNRgobBxgqWY3H/eRN6U70+cA8N3H4qEORkghtMF0V0xx3t7hMRmBwihJmRUrk2+5ASVzWxSVucRv2Q0m3h/Xoo3KlSLIbZ0zcPgSNCPsfjBidzSGC1FIABArUiHScOAN0/SVm+EVTGFnRVFnrHOZPoBdp1X/UgH7h7X0L7T1V/5/YhT6aCzU4SgtJocPFEYQC60nLrZeC6P52mqSHUg1pMqoqXoqmYpxPFMpRnS+U2QxBzU0RkGNUOjD0YAzgm7H4xw44gk0Q+RTrAovkCUIARoOvOSEGiZayjicHoCpFc0P66OMp/4POjXu/XjcMkKPByQ4cCQzcHTNvP+oWpbCKJYSAuO4Mx6vAf66doRkrrHdT4v7fkAiwAghH5Hhgv7DTNz/hU1u02vHgvpPoTkgYdev6Ll+Z4/IWAaI74ekLCPE72NyAUaI3wclA4wQv4/KWgaI74elLSPE7+PyAUaI3x9MBBkiPn8yE2SE+P3RVIAR4vdnc0GGiM8fTgZLQrz+dDZYEuL1x9N2khDjP5//F09WbW9U5XehAAAAAElFTkSuQmCC
// @homepageURL  https://github.com/afeireal/cloud-disk-plugin
// @homepage     https://github.com/afeireal/cloud-disk-plugin
// @source       https://github.com/afeireal/cloud-disk-plugin
// @supportURL   https://github.com/afeireal/cloud-disk-plugin/issues
// @updateURL    https://raw.githubusercontent.com/afeireal/cloud-disk-plugin/main/cloud-disk-plugin-tamper-monkey.user.js
// @downloadURL  https://raw.githubusercontent.com/afeireal/cloud-disk-plugin/main/cloud-disk-plugin-tamper-monkey.user.js
// @match        https://pan.quark.cn/*
// @match        https://pan.baidu.com/*
// @match        https://www.alipan.com/*
// @match        https://www.aliyundrive.com/*
// @match        https://mypikpak.com/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.4.38/dist/vue.global.prod.js
// @grant        none
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const o=document.createElement("style");o.textContent=e,document.head.append(o)})(' .fade-enter-from,.fade-leave-to{opacity:0}.fade-enter-to,.fade-leave-from{opacity:1}.fade-enter-active,.fade-leave-active{transition:opacity var(--cdp-transition-default)}.fade-bottom-enter-from,.fade-bottom-leave-to{opacity:0;transform:translateY(10%)}.fade-bottom-enter-to,.fade-bottom-leave-from{opacity:1;transform:none}.fade-bottom-enter-active,.fade-bottom-leave-active{transition:opacity .3s,transform .3s ease}:root{--cdp-color-white: var(--cdp-color-gray-0);--cdp-color-black: var(--cdp-color-gray-1000);--cdp-color-gray: var(--cdp-color-gray-500);--cdp-color-gray-0: #ffffff;--cdp-color-gray-50: #f2f2f2;--cdp-color-gray-100: #e6e6e6;--cdp-color-gray-200: #cccccc;--cdp-color-gray-300: #b3b3b3;--cdp-color-gray-400: #989898;--cdp-color-gray-500: #808080;--cdp-color-gray-600: #656565;--cdp-color-gray-700: #4d4d4d;--cdp-color-gray-800: #333333;--cdp-color-gray-900: #1a1a1a;--cdp-color-gray-950: #0d0d0d;--cdp-color-gray-1000: #000000;--cdp-color-red: var(--cdp-color-red-500);--cdp-color-red-50: #fef2f2;--cdp-color-red-100: #fee2e2;--cdp-color-red-200: #fecaca;--cdp-color-red-300: #fca5a5;--cdp-color-red-400: #f87171;--cdp-color-red-500: #ef4444;--cdp-color-red-600: #dc2626;--cdp-color-red-700: #b91c1c;--cdp-color-red-800: #991b1b;--cdp-color-red-900: #7f1d1d;--cdp-color-red-950: #450a0a;--cdp-color-blue: var(--cdp-color-blue-500);--cdp-color-blue-50: #eff6ff;--cdp-color-blue-100: #dbeafe;--cdp-color-blue-200: #bfdbfe;--cdp-color-blue-300: #93c5fd;--cdp-color-blue-400: #60a5fa;--cdp-color-blue-500: #3b82f6;--cdp-color-blue-600: #2563eb;--cdp-color-blue-700: #1d4ed8;--cdp-color-blue-800: #1e40af;--cdp-color-blue-900: #1e3a8a;--cdp-color-blue-950: #172554;--cdp-color-green: var(--cdp-color-green-500);--cdp-color-green-50: #f0fdf4;--cdp-color-green-100: #dcfce7;--cdp-color-green-200: #bbf7d0;--cdp-color-green-300: #86efac;--cdp-color-green-400: #4ade80;--cdp-color-green-500: #22c55e;--cdp-color-green-600: #16a34a;--cdp-color-green-700: #15803d;--cdp-color-green-800: #166534;--cdp-color-green-900: #14532d;--cdp-color-green-950: #052e16;--cdp-color-yellow: var(--cdp-color-yellow-500);--cdp-color-yellow-50: #fefce8;--cdp-color-yellow-100: #fef9c3;--cdp-color-yellow-200: #fef08a;--cdp-color-yellow-300: #fde047;--cdp-color-yellow-400: #facc15;--cdp-color-yellow-500: #eab308;--cdp-color-yellow-600: #ca8a04;--cdp-color-yellow-700: #a16207;--cdp-color-yellow-800: #854d0e;--cdp-color-yellow-900: #713f12;--cdp-color-yellow-950: #422006;--cdp-font-size: var(--cdp-font-size-base);--cdp-font-size-xs: 10px;--cdp-font-size-sm: 12px;--cdp-font-size-base: 14px;--cdp-font-size-lg: 16px;--cdp-font-size-xl: 18px;--cdp-line-height: var(--cdp-line-height-base);--cdp-line-height-xs: 12px;--cdp-line-height-sm: 16px;--cdp-line-height-base: 20px;--cdp-line-height-lg: 24px;--cdp-line-height-xl: 28px;--cdp-gutter: 10px;--cdp-box-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / .05);--cdp-box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--cdp-box-shadow-md: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--cdp-box-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--cdp-box-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--cdp-box-shadow-around: 0px 0px 5px 0px rgb(0 0 0 / .1);--cdp-box-shadow-around-hover: 0px 0px 7px 2px rgb(0 0 0 / .1);--cdp-transition-all: all var(--cdp-transition-default);--cdp-transition-default: var(--cdp-transition-duration) var(--cdp-transition-timing-function);--cdp-transition-duration: .3s;--cdp-transition-timing-function: ease-in-out}.component-message-area{left:0;right:0;padding:5px;display:flex;z-index:20000;position:fixed;overflow:hidden;flex-wrap:nowrap;box-sizing:border-box;transition:var(--cdp-transition-all);pointer-events:none;flex-direction:column}.component-message-area.is-top-left,.component-message-area.is-top-center,.component-message-area.is-top-right{top:0}.component-message-area.is-top-left{align-items:flex-start}.component-message-area.is-top-center{align-items:center}.component-message-area.is-top-right{align-items:flex-end}.component-message-area.is-center{top:0;bottom:0;align-items:center;justify-content:center}.component-message-area.is-bottom-left,.component-message-area.is-bottom-center,.component-message-area.is-bottom-right{bottom:0;justify-content:flex-end}.component-message-area.is-bottom-left{align-items:flex-start}.component-message-area.is-bottom-center{align-items:center}.component-message-area.is-bottom-right{align-items:flex-end}.component-message-area.has-mask{top:0;bottom:0;z-index:99999;pointer-events:all;-webkit-backdrop-filter:blur(calc(var(--cdp-gutter) / 2));backdrop-filter:blur(calc(var(--cdp-gutter) / 2))}.component_icon[data-v-28ac915e]{width:1em;height:1em;display:inline-block}.component-message[data-v-9e7f2ba3]{margin:calc(var(--cdp-gutter) / 2);transition:var(--cdp-transition-all);flex-shrink:0}.component-message-content[data-v-9e7f2ba3]{display:flex;padding:var(--cdp-gutter);min-width:150px;max-width:500px;font-size:var(--cdp-font-size);box-sizing:border-box;box-shadow:var(--cdp-box-shadow);transition:var(--cdp-transition-all);align-items:center;border-radius:calc(var(--cdp-gutter) / 2);pointer-events:all;justify-content:space-between;background-color:var(--cdp-color-white)}.component-message-content[data-v-9e7f2ba3]:hover{box-shadow:var(--cdp-box-shadow-md)}.component-message-content-icon[data-v-9e7f2ba3]{font-size:var(--cdp-font-size);flex-shrink:0;margin-right:var(--cdp-gutter)}.component-message-content-message[data-v-9e7f2ba3]{flex-grow:1;line-height:var(--cdp-line-height)}.component-message-content-close[data-v-9e7f2ba3]{color:var(--cdp-color-gray);cursor:pointer;transition:var(--cdp-transition-all);margin-left:var(--cdp-gutter);flex-shrink:0}.component-message-content-close[data-v-9e7f2ba3]:hover{color:var(--cdp-color-red)}.component-message-enter-from[data-v-9e7f2ba3]{opacity:0;transform:translateY(-20px)}.component-message-enter-to[data-v-9e7f2ba3]{opacity:1;transform:translateY(0)}.component-message-leave-from[data-v-9e7f2ba3]{opacity:1;margin-top:0}.component-message-leave-to[data-v-9e7f2ba3]{opacity:0;margin-top:calc(0px - (var(--cdp-gutter) * 2) - var(--cdp-line-height))}.component-input[data-v-c7ef63ba]{--cdp-component-input-size: 6px;--cdp-component-label-size: 12px;color:var(--cdp-color-gray);display:flex;position:relative;font-size:inherit;box-sizing:border-box;margin-top:var(--cdp-component-input-size);padding-top:calc(var(--cdp-component-input-size) + var(--cdp-component-label-size));margin-bottom:var(--cdp-component-input-size);border-bottom:1px solid var(--cdp-color-gray);padding-bottom:var(--cdp-component-input-size);background-color:transparent}.component-input.is-focus[data-v-c7ef63ba]{border-bottom-color:var(--cdp-color-blue)}.component-input-input[data-v-c7ef63ba],.component-input-textarea[data-v-c7ef63ba]{color:var(--cdp-color-gray-700);width:100%;padding:0;outline:none;font-size:inherit;vertical-align:middle;transition:border-bottom-color var(--cdp-transition-default);box-sizing:content-box;line-height:calc(var(--cdp-component-input-size) + 1em);background-color:transparent;border-block-end-width:0;border-inline-end-width:0;border-block-start-width:0;border-inline-start-width:0}.component-input.is-focus .component-input-input[data-v-c7ef63ba],.component-input.is-focus .component-input-textarea[data-v-c7ef63ba]{border-bottom-color:var(--cdp-color-blue);border-block-end-color:var(--cdp-color-blue)}.component-input.is-disabled .component-input-input[data-v-c7ef63ba],.component-input.is-disabled .component-input-textarea[data-v-c7ef63ba]{color:var(--cdp-color-gray)}.component-input-label[data-v-c7ef63ba]{top:calc(var(--cdp-component-label-size) + var(--cdp-component-input-size) * 1.5);left:calc(var(--cdp-component-input-size) * 2);color:var(--cdp-color-gray-700);position:absolute;transition:top var(--cdp-transition-default),left var(--cdp-transition-default),color var(--cdp-transition-default),font-size var(--cdp-transition-default);line-height:1;background-color:transparent}.component-input.is-active .component-input-label[data-v-c7ef63ba]{top:0;left:0;color:var(--cdp-color-gray-900);font-size:var(--cdp-component-label-size)}.component-input.is-focus .component-input-label[data-v-c7ef63ba]{color:var(--cdp-color-blue)}.component-input.is-disabled .component-input-label[data-v-c7ef63ba]{color:var(--cdp-color-gray-300)}.component-radio[data-v-ec21e00f]{--cdp-component-radio-color: var(--cdp-color-blue);cursor:pointer;font-size:inherit}.component-radio.radio[data-v-ec21e00f]{display:inline-flex;min-width:1em;min-height:1em;white-space:nowrap;align-items:center}.component-radio.is-disabled[data-v-ec21e00f]{--cdp-component-radio-color: var(--cdp-color-gray)}.component-radio.is-disabled .component-radio-label[data-v-ec21e00f]{color:var(--cdp-color-gray-300)}.component-checkbox+.component-radio[data-v-ec21e00f],.component-radio.radio+.component-radio.radio[data-v-ec21e00f]{margin-left:.5em}.component-radio.radio .component-radio-input[data-v-ec21e00f]{width:1em;height:1em;display:inline-block;position:relative}.component-radio.radio .component-radio-input[data-v-ec21e00f]:before{width:100%;height:100%;border:2px solid var(--cdp-component-radio-color);content:"";display:block;box-sizing:border-box;transition:var(--cdp-transition-all);border-radius:50%;background-color:transparent}.component-radio.radio .component-radio-input[data-v-ec21e00f]:after{top:50%;left:50%;width:0;height:0;content:"";display:block;position:absolute;transform:translate(-50%,-50%);box-sizing:border-box;transition:var(--cdp-transition-all);border-radius:50%;background-color:var(--cdp-component-radio-color)}.component-radio.radio.is-checked .component-radio-input[data-v-ec21e00f]:after{width:50%;height:50%}.component-radio.radio .component-radio-input-original[data-v-ec21e00f]{top:0;left:0;width:0;height:0;margin:0;z-index:-1;opacity:0;outline:none;position:absolute}.component-radio.radio .component-radio-label[data-v-ec21e00f]{margin-left:.5em}.component-radio.button[data-v-ec21e00f]{color:var(--cdp-color-gray-900);height:auto;border:1px solid var(--cdp-color-gray-300);padding:.5em 1em;transition:var(--cdp-transition-all);line-height:1;border-radius:var(--cdp-gutter);background-color:var(--cdp-color-white)}.component-radio.button[data-v-ec21e00f]:has(+.component-radio.button){border-right:none;border-top-right-radius:0;border-bottom-right-radius:0}.component-radio.button+.component-radio.button[data-v-ec21e00f]{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.component-radio.button.is-checked[data-v-ec21e00f]{color:var(--cdp-color-gray-50);border-color:var(--cdp-component-radio-color);background-color:var(--cdp-component-radio-color)}.component-radio.button .component-radio-input-original[data-v-ec21e00f]{top:0;left:0;width:0;height:0;margin:0;z-index:-1;opacity:0;outline:none;position:absolute}*:has(>.component-loading){position:relative}.component-loading[data-v-00f21b74]{top:0;left:0;right:0;bottom:0;margin:0;z-index:2000;display:flex;position:absolute;transition:opacity var(--cdp-el-transition-default);align-items:center;justify-content:center;background-color:#ffffffe6}.component-loading-icon[data-v-00f21b74]{font-size:calc(var(--cdp-font-size) * 2)}.component-checkbox[data-v-10a800aa]{--cdp-component-checkbox-color: var(--cdp-color-blue);cursor:pointer;display:inline-flex;font-size:inherit;min-width:1em;min-height:1em;white-space:nowrap;align-items:center}.component-checkbox.is-disabled[data-v-10a800aa]{--cdp-component-checkbox-color: var(--cdp-color-gray)}.component-checkbox.is-disabled .component-checkbox-label[data-v-10a800aa]{color:var(--cdp-color-gray-300)}.component-radio+.component-checkbox[data-v-10a800aa],.component-checkbox+.component-checkbox[data-v-10a800aa]{margin-left:.5em}.component-checkbox-input[data-v-10a800aa]{width:1em;height:1em;display:inline-block;position:relative}.component-checkbox-input[data-v-10a800aa]:before{width:100%;height:100%;content:"";display:block;box-sizing:border-box;transition:var(--cdp-transition-all);border-top:2px solid var(--cdp-component-checkbox-color);border-left:2px solid var(--cdp-component-checkbox-color);border-right:2px solid var(--cdp-component-checkbox-color);border-bottom:2px solid var(--cdp-component-checkbox-color);border-radius:2px;background-color:transparent}.component-checkbox .component-checkbox-input[data-v-10a800aa]:after{top:50%;left:50%;width:0;height:0;content:"";display:block;position:absolute}.component-checkbox:not(.is-indeterminate) .component-checkbox-input[data-v-10a800aa]:after{top:30%;left:50%;width:40%;height:75%;content:"";display:block;position:absolute;transform:rotate(45deg);box-sizing:border-box;transition:var(--cdp-transition-all);border-right:2px solid transparent;border-bottom:2px solid transparent;transform-origin:100% 0}.component-checkbox.is-checked .component-checkbox-input[data-v-10a800aa]:before{background-color:var(--cdp-component-checkbox-color)}.component-checkbox.is-checked:not(.is-indeterminate) .component-checkbox-input[data-v-10a800aa]:after{border-right-color:#fff;border-bottom-color:#fff}.component-checkbox.is-indeterminate .component-checkbox-input[data-v-10a800aa]:before{background-color:var(--cdp-component-checkbox-color)}.component-checkbox.is-indeterminate .component-checkbox-input[data-v-10a800aa]:after{top:50%;left:50%;width:60%;height:2px;content:"";display:block;position:absolute;transform:translate(-50%,-50%);box-sizing:border-box;transition:var(--cdp-transition-all);background-color:var(--cdp-color-white)}.component-checkbox-input-original[data-v-10a800aa]{top:0;left:0;width:0;height:0;margin:0;z-index:-1;outline:none;opacity:0;position:absolute}.component-checkbox-label[data-v-10a800aa]{margin-left:.5em}.rename-control[data-v-f61e63a1]{padding:var(--cdp-gutter);background:linear-gradient(180deg,var(--cdp-color-gray-50) 0%,var(--cdp-color-gray-100) 100%);box-shadow:var(--cdp-box-shadow-md);transition:box-shadow var(--cdp-transition-default);border-radius:var(--cdp-gutter)}.rename-control[data-v-f61e63a1]:hover{box-shadow:var(--cdp-box-shadow-xl)}.rename-control-header[data-v-f61e63a1]{display:flex;align-items:top;justify-content:space-between}.rename-control-header-content[data-v-f61e63a1]{font-size:var(--cdp-font-size-lg)}.rename-control-header-local-version[data-v-f61e63a1]{display:flex}.rename-control-header-local-version[data-v-f61e63a1],.rename-control-header-remote-version[data-v-f61e63a1]{cursor:pointer;font-size:var(--cdp-font-size-xs)}.rename-control-header-local-version[data-v-f61e63a1]:hover,.rename-control-header-remote-version[data-v-f61e63a1]:hover{text-decoration:underline}.rename-control-header-remote-version[data-v-f61e63a1]{color:var(--cdp-color-red)}.rename-control-body[data-v-f61e63a1]{display:grid;grid-gap:var(--cdp-gutter);align-items:end;grid-template-columns:1fr 1fr}.rename-control-footer[data-v-f61e63a1]{display:grid;grid-gap:var(--cdp-gutter);margin-top:var(--cdp-gutter);grid-template-columns:1fr auto auto}.rename-control-footer-option[data-v-f61e63a1]{display:flex;align-items:center}.rename-control-footer-button[data-v-f61e63a1]{border:none;cursor:pointer;padding:0;font-size:var(--cdp-font-size);transition:var(--cdp-transition-all);line-height:1;background-color:transparent}.rename-control-footer-button.reset[data-v-f61e63a1]{color:var(--cdp-color-gray-900)}.rename-control-footer-button.reset[data-v-f61e63a1]:hover{color:var(--cdp-color-gray-700)}.rename-control-footer-button.confirm[data-v-f61e63a1]{color:var(--cdp-color-blue)}.rename-control-footer-button.confirm[data-v-f61e63a1]:hover{color:var(--cdp-color-blue-700)}.rename-control-footer-button[disabled][data-v-f61e63a1]{color:var(--cdp-color-gray-300);cursor:not-allowed}.rename-control-footer-button[disabled][data-v-f61e63a1]:hover{color:var(--cdp-color-gray-400)}.rename-preview[data-v-a9f69e19]{height:100%;display:grid;grid-template-rows:auto minmax(200px,1fr)}.rename-preview-status[data-v-a9f69e19]{margin:0 calc(0px - var(--cdp-gutter) / 2);display:flex;flex-wrap:wrap;font-size:var(--cdp-font-size-sm);align-items:center;line-height:var(--cdp-line-height-sm)}.rename-preview-status-item[data-v-a9f69e19]{margin:calc(var(--cdp-gutter) / 2);display:flex;align-items:center}.rename-preview-status-item.blue[data-v-a9f69e19]{color:var(--cdp-color-blue)}.rename-preview-status-item.red[data-v-a9f69e19]{color:var(--cdp-color-red)}.rename-preview-status-item.gray[data-v-a9f69e19]{color:var(--cdp-color-gray)}.rename-preview-status-item.green[data-v-a9f69e19]{color:var(--cdp-color-green)}.rename-preview-status-item.yellow[data-v-a9f69e19]{color:var(--cdp-color-yellow)}.rename-preview-status-item-icon[data-v-a9f69e19]{color:inherit;font-size:var(--cdp-font-size)}.rename-preview-content[data-v-a9f69e19]{width:100%;height:100%;margin:0 calc(0px - var(--cdp-gutter) / 2);overflow:auto;max-height:50vh}.rename-preview-content-table[data-v-a9f69e19]{width:100%;position:relative;font-size:var(--cdp-font-size-sm);line-height:var(--cdp-font-size-sm)}.rename-preview-content-table-header[data-v-a9f69e19]{top:0;z-index:1;position:sticky;margin-bottom:var(--cdp-gutter);background-color:var(--cdp-color-white)}.rename-preview-content-table-header th[data-v-a9f69e19]{padding:var(--cdp-gutter) calc(var(--cdp-gutter) / 2);text-align:left;box-sizing:border-box}.rename-preview-content-table-body td[data-v-a9f69e19]{padding:calc(var(--cdp-gutter) / 4) calc(var(--cdp-gutter) / 2);box-sizing:border-box}.rename-preview-content-table-item[data-v-a9f69e19]{color:var(--cdp-color-gray-300);transition:color var(--cdp-transition-default);background-color:var(--cdp-color-white)}.rename-preview-content-table-item.is-checked[data-v-a9f69e19]{color:var(--cdp-color-gray-600)}.rename-preview-content-table-item.is-checked.is-change[data-v-a9f69e19]{color:var(--cdp-color-gray-900)}.rename-preview-content-table-item.is-checked.is-error[data-v-a9f69e19]{color:var(--cdp-color-red)}.rename-preview-content-table-item-placeholder[data-v-a9f69e19]{background-color:var(--cdp-color-blue-400)}.rename-preview-content-table-item-dragged[data-v-a9f69e19]{display:flex}.rename-preview-content-table-item-checkbox[data-v-a9f69e19]{width:calc(var(--cdp-gutter) + 1em)}.rename-preview-content-table-item-index[data-v-a9f69e19]{width:5rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.rename-preview-content-table-item-index-reset-sort[data-v-a9f69e19]{cursor:pointer}.rename-preview-content-table-item-index-reset-sort:hover .rename-preview-content-table-item-index-reset-sort-static[data-v-a9f69e19],.rename-preview-content-table-item-index-reset-sort-hover[data-v-a9f69e19]{display:none}.rename-preview-content-table-item-index-reset-sort:hover .rename-preview-content-table-item-index-reset-sort-hover[data-v-a9f69e19]{display:inline-block}.rename-preview-content-table-item.allow-drop .rename-preview-content-table-item-index-handler[data-v-a9f69e19]{cursor:grab}.rename-preview-content-table-item.block-drop .rename-preview-content-table-item-index-handler[data-v-a9f69e19]{display:none}.rename-preview-content-table-item-index-content[data-v-a9f69e19]{display:inline-block}.rename-preview-content-table-item-old-file-name[data-v-a9f69e19],.rename-preview-content-table-item-new-file-name[data-v-a9f69e19],.rename-preview-content-table-item-new-file-status[data-v-a9f69e19]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.rename-preview-content-table-item.is-checked .rename-preview-content-table-item-old-file-name[data-v-a9f69e19] .removed{color:var(--cdp-color-red)}.rename-preview-content-table-item-old-file-name[data-v-a9f69e19] .removed{background-color:var(--cdp-color-red-100)}.rename-preview-content-table-item.is-checked .rename-preview-content-table-item-new-file-name[data-v-a9f69e19] .added{color:var(--cdp-color-green)}.rename-preview-content-table-item-new-file-name[data-v-a9f69e19] .added{background-color:var(--cdp-color-green-100)}.rename-preview-content-table-item-right-arrow[data-v-a9f69e19]{width:calc(var(--cdp-gutter) + 1em);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rename-preview-content-table-item-new-file-status[data-v-a9f69e19]{width:calc(var(--cdp-gutter) + 1em);text-align:right}.rename-panel[data-v-7601d892]{top:0;left:0;right:0;z-index:10000;display:flex;position:fixed;font-size:var(--cdp-font-size);align-items:end;justify-content:center}.rename-panel[data-v-7601d892]:has(.rename-panel-container){height:100vh}.rename-panel-mask[data-v-7601d892]{width:100vw;height:100vh;position:absolute;-webkit-backdrop-filter:blur(calc(var(--cdp-gutter) / 2));backdrop-filter:blur(calc(var(--cdp-gutter) / 2))}.rename-panel-container[data-v-7601d892]{z-index:1}.rename-panel-container-content[data-v-7601d892]{display:grid;padding:var(--cdp-gutter);grid-gap:var(--cdp-gutter);overflow:hidden;max-width:100vw;min-width:33vw;max-height:90vh;min-height:60vh;box-sizing:border-box;box-shadow:var(--cdp-box-shadow-around);transition:box-shadow var(--cdp-transition-default);background-color:var(--cdp-color-white);grid-template-rows:auto minmax(200px,1fr);border-top-left-radius:var(--cdp-gutter);border-top-right-radius:var(--cdp-gutter)}.rename-panel-container-content[data-v-7601d892]:hover{box-shadow:var(--cdp-box-shadow-around-hover)}.enter-component[data-v-cc07e1db]{margin-top:8px}.enter-component-button[data-v-cc07e1db]{color:var(--cdp-color-blue);width:60px;border:none;cursor:pointer;display:flex;padding:2px 6px;position:relative;transition:all .3s ease;min-height:61px;font-weight:400;align-items:center;border-radius:8px;flex-direction:column;justify-content:center;background-color:transparent}.enter-component-button[data-v-cc07e1db]:hover{background-color:var(--divider_tertiary)}.enter-component-button[data-v-cc07e1db]:active{background-color:var(--divider_secondary)}.enter-component-button[disabled][data-v-cc07e1db]{color:var(--cdp-color-blue-700);cursor:not-allowed}.enter-component-button-icon[data-v-cc07e1db]{width:28px;height:28px;display:flex;font-size:26px;align-items:center;justify-content:center}.enter-component-button-text[data-v-cc07e1db]{overflow:hidden;font-size:12px;text-align:center;font-weight:500;white-space:nowrap;text-overflow:ellipsis}.enter-component[data-v-37f4bd16]{padding-top:2px;margin-bottom:1px}.enter-component-button[data-v-37f4bd16]{width:58px;color:var(--cdp-color-blue);cursor:pointer;display:inline-block;position:relative;font-size:11px;margin-top:0;min-height:60px;border-radius:8px;background-color:transparent}.enter-component-button[data-v-37f4bd16]:hover{background-color:#f1f3f8}.enter-component-button-icon[data-v-37f4bd16]{display:flex;font-size:24px;margin-top:6px;justify-content:center}.enter-component-button-text[data-v-37f4bd16]{display:block;overflow:hidden;max-width:80px;margin-top:4px;white-space:nowrap;text-overflow:ellipsis}#ice-container .section-main>.section-header.list-header>.btn-operate>.btn-main{display:flex;align-items:center}.enter-component[data-v-4c1d814d]{margin-right:12px}.enter-component-button[data-v-4c1d814d]{color:var(--cdp-color-blue);cursor:pointer;height:36px;border:1px solid #ddd;padding:0 14px;outline:none;display:inline-block;position:relative;font-size:14px;text-align:center;box-shadow:0 2px #00000004;transition:all .3s cubic-bezier(.645,.045,.355,1);font-weight:700;-webkit-user-select:none;user-select:none;line-height:1.499;white-space:nowrap;touch-action:manipulation;border-radius:8px;background-image:none;background-color:transparent}.enter-component-button-icon[data-v-4c1d814d]{width:16px;height:16px;display:inline-block;font-size:16px;margin-right:3px;vertical-align:-.2em}.enter-component-button-text[data-v-4c1d814d]{display:inline-block;transition:margin-left .3s cubic-bezier(.645,.045,.355,1);pointer-events:none}.enter-component-button[data-v-5f911f59]{width:100%;color:var(--cdp-color-blue);height:44px;border:none;cursor:pointer;display:flex;padding:0 8px 0 20px;transition:all var(--transition-delay) var(--transition-animation);align-items:center;border-radius:4px;background-color:transparent}.enter-component-button[data-v-5f911f59]:hover{background-color:#ebebf0}.enter-component-content-icon[data-v-5f911f59]{flex:0 0 24px;width:24px;height:24px;display:flex;font-size:24px}.enter-component-content-text[data-v-5f911f59]{line-height:18px;margin-left:12px} .rename-control-footer-button.history{color:var(--cdp-color-gray-600)} .rename-control-footer-button.history:hover{color:var(--cdp-color-gray-900)} .rename-history-panel-wrap{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:99999;display:flex;align-items:center;justify-content:center;padding:24px} .rename-history-panel{background:var(--cdp-color-gray-0);border-radius:12px;width:560px;max-width:94vw;max-height:80vh;display:flex;flex-direction:column;box-shadow:0 12px 40px rgba(0,0,0,.18);overflow:hidden} .rename-history-panel-header{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid var(--cdp-color-gray-100);font-size:15px;font-weight:600} .rh-header-actions{display:flex;gap:8px} .rh-btn{border:none;cursor:pointer;font-size:12px;padding:5px 10px;border-radius:6px;line-height:1;transition:var(--cdp-transition-all);background:var(--cdp-color-gray-50);color:var(--cdp-color-gray-700)} .rh-btn:hover{background:var(--cdp-color-gray-100)} .rh-btn.apply{background:var(--cdp-color-blue-50);color:var(--cdp-color-blue)} .rh-btn.apply:hover{background:var(--cdp-color-blue-100)} .rh-btn.copy{background:var(--cdp-color-green-50);color:var(--cdp-color-green-600)} .rh-btn.copy:hover{background:var(--cdp-color-green-100)} .rh-btn.del{background:var(--cdp-color-red-50);color:var(--cdp-color-red-500)} .rh-btn.del:hover{background:var(--cdp-color-red-100)} .rh-btn.clear{background:var(--cdp-color-red-50);color:var(--cdp-color-red-500)} .rh-btn.clear:hover{background:var(--cdp-color-red-100)} .rh-btn.close{background:transparent;font-size:14px;color:var(--cdp-color-gray-400)} .rh-btn.close:hover{color:var(--cdp-color-gray-700)} .rename-history-panel-body{overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:10px} .rename-history-panel-empty{color:var(--cdp-color-gray-400);text-align:center;padding:40px 0;font-size:14px} .rename-history-panel-item{border:1px solid var(--cdp-color-gray-100);border-radius:8px;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;gap:12px;transition:var(--cdp-transition-all)} .rename-history-panel-item:hover{border-color:var(--cdp-color-gray-200);box-shadow:0 2px 8px rgba(0,0,0,.04)} .rename-history-panel-item-info{min-width:0;flex:1;display:flex;flex-direction:column;gap:6px} .rename-history-panel-item-meta{display:flex;gap:10px;align-items:center;font-size:12px;color:var(--cdp-color-gray-500)} .rename-history-panel-item-mode{background:var(--cdp-color-blue-50);color:var(--cdp-color-blue);padding:2px 6px;border-radius:4px;font-size:11px} .rename-history-panel-item-count{color:var(--cdp-color-green-600)} .rename-history-panel-item-pattern,.rename-history-panel-item-replace{display:flex;gap:8px;align-items:center;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis} .rename-history-panel-item-pattern .label,.rename-history-panel-item-replace .label{color:var(--cdp-color-gray-400);font-size:12px;flex-shrink:0} .rename-history-panel-item-pattern code,.rename-history-panel-item-replace code{background:var(--cdp-color-gray-50);padding:2px 6px;border-radius:4px;font-family:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:280px} .rename-history-panel-item-actions{display:flex;gap:6px;flex-shrink:0} .rename-control-search{display:flex;gap:8px;align-items:center;padding:0 16px 10px} .rename-control-search-input{flex:1;border:1px solid var(--cdp-color-gray-200);border-radius:6px;padding:6px 10px;font-size:13px;outline:none;transition:var(--cdp-transition-all);background:var(--cdp-color-gray-50);color:var(--cdp-color-gray-900);min-width:0} .rename-control-search-input:focus{border-color:var(--cdp-color-blue);background:var(--cdp-color-gray-0);box-shadow:0 0 0 2px rgba(59,130,246,.15)} .rename-control-search-input::placeholder{color:var(--cdp-color-gray-400)} .rename-control-search-btn{border:none;cursor:pointer;padding:6px 12px;border-radius:6px;font-size:13px;line-height:1;transition:var(--cdp-transition-all);background:var(--cdp-color-blue-50);color:var(--cdp-color-blue);flex-shrink:0;white-space:nowrap} .rename-control-search-btn:hover{background:var(--cdp-color-blue-100)} .rename-control-search-btn.back{background:var(--cdp-color-gray-50);color:var(--cdp-color-gray-700)} .rename-control-search-btn.back:hover{background:var(--cdp-color-gray-100)} .rename-control-footer-button.ad{background:var(--cdp-color-blue-50);color:var(--cdp-color-blue)} .rename-control-footer-button.ad:hover{background:var(--cdp-color-blue-100)} .ad-panel-wrap{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px} .ad-panel{width:520px;max-width:100%;max-height:85vh;background:var(--cdp-color-gray-0,#fff);border-radius:12px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.2)} .ad-panel-header{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid var(--cdp-color-gray-100,#e6e6e6)} .ad-panel-title{font-size:15px;font-weight:600;color:var(--cdp-color-gray-900,#1a1a1a)} .ad-panel-close{cursor:pointer;font-size:20px;line-height:1;color:var(--cdp-color-gray-500,#808080);padding:2px 6px;border-radius:4px} .ad-panel-close:hover{background:var(--cdp-color-gray-50,#f2f2f2)} .ad-panel-settings{display:flex;gap:10px;align-items:flex-end;padding:14px 18px;flex-wrap:wrap;border-bottom:1px solid var(--cdp-color-gray-50,#f2f2f2)} .ad-panel-field{display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--cdp-color-gray-700,#4d4d4d)} .ad-panel-field input{width:70px;border:1px solid var(--cdp-color-gray-200,#cccccc);border-radius:4px;padding:4px 6px;font-size:13px;outline:none} .ad-panel-field input:focus{border-color:var(--cdp-color-blue,#3b82f6)} .ad-panel-scan{margin-left:auto;padding:7px 16px;border:none;border-radius:6px;background:var(--cdp-color-blue,#3b82f6);color:#fff;font-size:13px;cursor:pointer;white-space:nowrap} .ad-panel-scan:hover{background:#2563eb} .ad-panel-scan:disabled{opacity:.6;cursor:not-allowed} .ad-panel-status{padding:8px 18px;font-size:12px;color:var(--cdp-color-gray-500,#808080);border-bottom:1px solid var(--cdp-color-gray-50,#f2f2f2)} .ad-panel-results{flex:1;overflow-y:auto;padding:8px 18px;min-height:120px} .ad-panel-empty,.ad-panel-loading{text-align:center;color:var(--cdp-color-gray-400,#989898);font-size:13px;padding:40px 0} .ad-panel-item{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:6px;cursor:pointer;transition:background .15s} .ad-panel-item:hover{background:var(--cdp-color-gray-50,#f2f2f2)} .ad-panel-item input{width:16px;height:16px;cursor:pointer} .ad-item-text{flex:1;font-size:13px;color:var(--cdp-color-gray-800,#333);word-break:break-all} .ad-item-count{font-size:12px;color:var(--cdp-color-gray-500,#808080);background:var(--cdp-color-gray-50,#f2f2f2);padding:2px 8px;border-radius:10px;white-space:nowrap} .ad-panel-footer{display:flex;gap:10px;justify-content:flex-end;padding:12px 18px;border-top:1px solid var(--cdp-color-gray-100,#e6e6e6)} .ad-panel-footer button{padding:7px 16px;border:none;border-radius:6px;font-size:13px;cursor:pointer;transition:background .15s} .ad-panel-clear{background:var(--cdp-color-blue,#3b82f6);color:#fff} .ad-panel-clear:hover{background:#2563eb} .ad-panel-clear:disabled{opacity:.5;cursor:not-allowed} .ad-panel-select-all{background:var(--cdp-color-gray-100,#e6e6e6);color:var(--cdp-color-gray-800,#333)} .ad-panel-select-all:hover{background:var(--cdp-color-gray-200,#cccccc)} .ad-panel-select-all:disabled{opacity:.5;cursor:not-allowed} ');

(function (vue) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var _a;
  const down = {
    type: "svg",
    props: {
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z"
      }
    }
  };
  const edit = {
    type: "svg",
    props: {
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "64 64 896 896"
    },
    children: {
      type: "path",
      props: {
        d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
      }
    }
  };
  const editCircle = {
    type: "svg",
    props: {
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "64 64 896 896"
    },
    children: [
      {
        type: "path",
        props: {
          d: "M712.533333 288c-25.6-25.6-66.133333-25.6-89.6 0L362.666667 546.133333c-6.4 6.4-12.8 14.933333-17.066667 23.466667l-53.333333 117.333333c-14.933333 32 19.2 66.133333 51.2 51.2l117.333333-53.333333c8.533333-4.266667 17.066667-10.666667 23.466667-17.066667l258.133333-258.133333c25.6-25.6 25.6-66.133333 0-89.6l-29.866667-32zM448 631.466667c-2.133333 2.133333-6.4 4.266667-10.666667 6.4l-85.333333 38.4 38.4-85.333334c2.133333-4.266667 4.266667-6.4 6.4-10.666666l194.133333-194.133334 49.066667 49.066667-192 196.266667z m258.133333-258.133334l-27.733333 27.733334-49.066667-49.066667 27.733334-27.733333c4.266667-4.266667 12.8-4.266667 17.066666 0l29.866667 29.866666c6.4 4.266667 6.4 12.8 2.133333 19.2z"
        }
      },
      {
        type: "path",
        props: {
          d: "M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m0 802.133334c-206.933333 0-375.466667-168.533333-375.466667-375.466667S305.066667 136.533333 512 136.533333 887.466667 305.066667 887.466667 512 718.933333 887.466667 512 887.466667z"
        }
      }
    ]
  };
  const info = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-blue)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 224m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0ZM544 392h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z"
      }
    }
  };
  const infoCircle = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-blue)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zM512 336m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
      }
    }
  };
  const infoCircleFilled = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-blue)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
      }
    }
  };
  const check = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-green)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474c-6.1-7.7-15.3-12.2-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1 0.4-12.8-6.3-12.8z"
      }
    }
  };
  const checkCircle = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-green)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8c12.7 17.7 39 17.7 51.7 0l210.6-292c3.9-5.3 0.1-12.7-6.4-12.7zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }
  };
  const checkCircleFilled = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-green)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m193.5 301.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
      }
    }
  };
  const close = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-red)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
      }
    }
  };
  const closeCircle = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-red)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 0.3L512 465.6l-99.3-118.4-66.1-0.3c-4.4 0-8 3.5-8 8 0 1.9 0.7 3.7 1.9 5.2l130.1 155L340.5 670c-1.2 1.5-1.9 3.3-1.9 5.2 0 4.4 3.6 8 8 8l66.1-0.3L512 564.4l99.3 118.4 66 0.3c4.4 0 8-3.5 8-8 0-1.9-0.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2zM512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }
  };
  const closeCircleFilled = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-red)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
      }
    }
  };
  const error = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-red)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 720m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM480 416v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48z m-783.5-27.9L512 239.9l339.8 588.2H172.2z"
      }
    }
  };
  const errorFilled = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-red)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416z m32 352c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
      }
    }
  };
  const warning = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-yellow)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 804m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0ZM480 636h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z"
      }
    }
  };
  const warningCircle = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-yellow)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zM512 688m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"
      }
    }
  };
  const warningCircleFilled = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-yellow)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
      }
    }
  };
  const timeCircle = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-blue)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zM686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
      }
    }
  };
  const timeCircleFilled = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-blue)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m176.5 585.7l-28.6 39c-2.6 3.6-7.6 4.3-11.2 1.7L483.3 569.8c-2.1-1.5-3.3-3.9-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"
      }
    }
  };
  const frown = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-red)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M336 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM688 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2-44.3-18.7-84.1-45.6-118.3-79.8-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8c18.7-44.3 45.6-84.1 79.8-118.3 34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2 44.3 18.7 84.1 45.6 118.3 79.8 34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8c-18.7 44.3-45.6 84.1-79.8 118.2zM512 533c-85.5 0-155.6 67.3-160 151.6-0.2 4.6 3.4 8.4 8 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4C420 636.1 461.5 597 512 597s92.1 39.1 95.8 88.6c0.3 4.2 3.9 7.4 8.1 7.4H664c4.6 0 8.2-3.8 8-8.4-4.4-84.3-74.5-151.6-160-151.6z"
      }
    }
  };
  const frownFilled = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-red)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-0.3 4.2-3.9 7.4-8.1 7.4H360c-4.6 0-8.2-3.8-8-8.4 4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6c0.2 4.6-3.4 8.4-8 8.4z m24-224c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
      }
    }
  };
  const meh = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-yellow)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M336 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM688 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2-44.3-18.7-84.1-45.6-118.3-79.8-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8c18.7-44.3 45.6-84.1 79.8-118.3 34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2 44.3 18.7 84.1 45.6 118.3 79.8 34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8c-18.7 44.3-45.6 84.1-79.8 118.2zM664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
      }
    }
  };
  const mehFilled = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-yellow)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m384 200c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v48z m16-152c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
      }
    }
  };
  const smile = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-green)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M336 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM688 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2-44.3-18.7-84.1-45.6-118.3-79.8-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8c18.7-44.3 45.6-84.1 79.8-118.3 34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2 44.3 18.7 84.1 45.6 118.3 79.8 34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8c-18.7 44.3-45.6 84.1-79.8 118.2zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-0.3-4.2-3.9-7.4-8.1-7.4H360c-4.6 0-8.2 3.8-8 8.4 4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6c0.2-4.6-3.4-8.4-8-8.4z"
      }
    }
  };
  const smileFilled = {
    type: "svg",
    props: {
      fill: "var(--cdp-color-green)",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m224 272c-85.5 0-155.6-67.3-160-151.6-0.2-4.6 3.4-8.4 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c0.3-4.2 3.9-7.4 8.1-7.4H664c4.6 0 8.2 3.8 8 8.4-4.4 84.3-74.5 151.6-160 151.6z m176-224c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
      }
    }
  };
  const copyDocument = {
    type: "svg",
    props: {
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: [
      {
        type: "path",
        props: {
          d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64z"
        }
      },
      {
        type: "path",
        props: {
          d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64"
        }
      }
    ]
  };
  const rank = {
    type: "svg",
    props: {
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
      }
    }
  };
  const sort = {
    type: "svg",
    props: {
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
      }
    }
  };
  const dCaret = {
    type: "svg",
    props: {
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      version: "1.1",
      viewBox: "0 0 1024 1024"
    },
    children: {
      type: "path",
      props: {
        d: "m512 128 288 320H224zM224 576h576L512 896z"
      }
    }
  };
  const loading = {
    type: "svg",
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 50 50"
    },
    children: [
      {
        type: "g",
        props: {
          fill: "none",
          strokeLinecap: "round"
        },
        children: [
          {
            type: "circle",
            props: {
              r: "20",
              cx: "25",
              cy: "25",
              stroke: "var(--cdp-color-gray-50)",
              "stroke-width": "3.5"
            }
          },
          {
            type: "circle",
            props: {
              r: "20",
              cx: "25",
              cy: "25",
              stroke: "var(--cdp-color-blue)",
              "stroke-width": "3.5",
              strokeDasharray: "90, 150",
              strokeDashoffset: "0"
            },
            children: [
              {
                type: "animate",
                props: {
                  dur: "1.5s",
                  values: "1,200;90,150;90,150",
                  repeatCount: "indefinite",
                  attributeName: "stroke-dasharray"
                }
              },
              {
                type: "animate",
                props: {
                  dur: "1.5s",
                  values: "0;-40;-120",
                  repeatCount: "indefinite",
                  attributeName: "stroke-dashoffset"
                }
              },
              {
                type: "animateTransform",
                props: {
                  to: "360 25 25",
                  dur: "2s",
                  type: "rotate",
                  from: "0 25 25",
                  repeatCount: "indefinite",
                  attributeName: "transform"
                }
              }
            ]
          }
        ]
      }
    ]
  };
  const icons = {
    down,
    edit,
    editCircle,
    info,
    infoCircle,
    infoCircleFilled,
    check,
    checkCircle,
    checkCircleFilled,
    close,
    closeCircle,
    closeCircleFilled,
    error,
    errorFilled,
    warning,
    warningCircle,
    warningCircleFilled,
    timeCircle,
    timeCircleFilled,
    frown,
    frownFilled,
    meh,
    mehFilled,
    smile,
    smileFilled,
    copyDocument,
    rank,
    sort,
    dCaret,
    loading
  };
  const is = (val, type) => Object.prototype.toString.call(val) === `[object ${type}]`;
  const isArray = (val) => is(val, "Array");
  const isString = (val) => is(val, "String");
  const isNumber = (val) => is(val, "Number");
  const isBoolean = (val) => is(val, "Boolean");
  const isFunction = (val) => is(val, "Function");
  const isNull = (val) => val === null;
  const isUndefined = (val) => val === void 0;
  const isVoid = (val) => isNull(val) || isUndefined(val);
  const isEmpty = (val) => isVoid(val) || val === "";
  const render = (option2, props) => {
    if (isArray(option2)) {
      const result = [];
      option2.forEach((item) => {
        const res = render(item);
        return isArray(res) ? result.push(...res) : result.push(res);
      });
      return result;
    }
    return vue.h(
      option2.type,
      { ...option2.props, ...props },
      option2.children ? render(option2.children) : void 0
    );
  };
  const _sfc_main$d = vue.defineComponent({
    name: "ComponentIcon",
    props: {
      name: {
        type: String,
        default: ""
      },
      fill: {
        type: String
      }
    },
    setup(props, { attrs }) {
      return () => {
        var _a2;
        const icon = icons[props.name];
        if (!icon) {
          return;
        }
        return vue.h(
          icon.type,
          {
            ...icon.props,
            ...attrs,
            name: props.name,
            fill: props.fill || ((_a2 = icon.props) == null ? void 0 : _a2.fill),
            class: "component_icon"
          },
          render(icon.children)
        );
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const ComponentIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-28ac915e"]]);
  const _sfc_main$c = vue.defineComponent({
    name: "ComponentMessage",
    components: {
      ComponentIcon
    },
    props: {
      id: {
        type: String
      },
      type: {
        type: String,
        validator(value) {
          return ["info", "success", "warning", "error", "loading"].includes(value);
        }
      },
      icon: {
        type: String
      },
      message: {
        type: [String, Object, Function]
      },
      duration: {
        type: Number,
        default: 3e3
      },
      showClose: {
        type: Boolean,
        default: false
      },
      customClass: {
        type: String
      },
      dangerouslyUseHTMLString: {
        type: Boolean,
        default: false
      }
    },
    emits: ["close", "destroy"],
    setup(props, { emit, slots, expose }) {
      const timer = vue.ref();
      const visible = vue.ref(true);
      const computedIcon = vue.computed(() => {
        if (props.icon) {
          return props.icon;
        }
        switch (props.type) {
          case "info":
            return "infoCircleFilled";
          case "success":
            return "checkCircleFilled";
          case "warning":
            return "warningCircleFilled";
          case "error":
            return "errorFilled";
          case "loading":
            return "loading";
          default:
            return "";
        }
      });
      const computedMessageType = vue.computed(() => {
        if (props.dangerouslyUseHTMLString) {
          return "html";
        } else if (vue.isVNode(props.message) || isFunction(props.message)) {
          return "vnode";
        } else if (slots.default) {
          return "slot";
        }
        return "message";
      });
      const onClose = () => {
        clearTimer();
        visible.value = false;
      };
      const startTimer = () => {
        if (props.duration > 0) {
          timer.value = setTimeout(onClose, props.duration);
        }
      };
      const clearTimer = () => {
        if (timer.value) {
          clearTimeout(timer.value);
          timer.value = void 0;
        }
      };
      const onMouseenter = () => {
        if (props.duration > 0) {
          clearTimer();
        }
      };
      const onMouseleave = () => {
        if (props.duration > 0) {
          startTimer();
        }
      };
      const onAfterLeave = () => {
        emit("destroy");
      };
      const onBeforeLeave = () => {
        emit("close");
      };
      vue.onBeforeMount(() => {
        clearTimer();
      });
      vue.onMounted(() => {
        startTimer();
      });
      vue.onUnmounted(() => {
        clearTimer();
      });
      expose({
        close: onClose
      });
      return {
        visible,
        computedIcon,
        computedMessageType,
        onClose,
        onMouseenter,
        onMouseleave,
        onAfterLeave,
        onBeforeLeave
      };
    }
  });
  const _hoisted_1$c = ["id"];
  const _hoisted_2$a = {
    key: 0,
    class: "component-message-content"
  };
  const _hoisted_3$a = {
    key: 1,
    class: "component-message-content-message"
  };
  const _hoisted_4$3 = {
    key: 2,
    class: "component-message-content-message"
  };
  const _hoisted_5$3 = ["innerHTML"];
  const _hoisted_6$2 = {
    key: 4,
    class: "component-message-content-message"
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_component_icon = vue.resolveComponent("component-icon");
    return vue.openBlock(), vue.createBlock(vue.Transition, {
      name: "component-message",
      appear: "",
      onAfterLeave: _ctx.onAfterLeave,
      onBeforeLeave: _ctx.onBeforeLeave
    }, {
      default: vue.withCtx(() => [
        _ctx.visible ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          id: _ctx.id,
          class: vue.normalizeClass(["component-message", _ctx.customClass]),
          onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.onMouseenter && _ctx.onMouseenter(...args)),
          onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.onMouseleave && _ctx.onMouseleave(...args))
        }, [
          _ctx.visible ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$a, [
            _ctx.computedIcon ? (vue.openBlock(), vue.createBlock(_component_component_icon, {
              key: 0,
              name: _ctx.computedIcon,
              class: "component-message-content-icon"
            }, null, 8, ["name"])) : vue.createCommentVNode("", true),
            _ctx.computedMessageType === "message" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$a, vue.toDisplayString(_ctx.message), 1)) : _ctx.computedMessageType === "vnode" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$3, [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.message)))
            ])) : _ctx.computedMessageType === "html" ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 3,
              innerHTML: _ctx.message,
              class: "component-message-content-message"
            }, null, 8, _hoisted_5$3)) : _ctx.computedMessageType === "slot" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$2, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])) : vue.createCommentVNode("", true),
            _ctx.showClose ? (vue.openBlock(), vue.createBlock(_component_component_icon, {
              key: 5,
              name: "close",
              fill: "currentColor",
              class: "component-message-content-close",
              onClick: _ctx.onClose
            }, null, 8, ["onClick"])) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ], 42, _hoisted_1$c)) : vue.createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["onAfterLeave", "onBeforeLeave"]);
  }
  const ComponentMessage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-9e7f2ba3"]]);
  const MESSAGE_TYPE_INFO = "info";
  const MESSAGE_TYPE_ERROR = "error";
  const MESSAGE_TYPE_SUCCESS = "success";
  const MESSAGE_TYPE_WARNING = "warning";
  const MESSAGE_TYPE_LOADING = "loading";
  const instances = [];
  const containers = {};
  const defaultOptions = {
    zIndex: 2e3,
    position: "top-center"
  };
  let globalOptions = {};
  let seed = 0;
  const message = (options) => {
    const id = "component-message-" + seed++;
    const { zIndex, hasMask, position, ...props } = {
      ...defaultOptions,
      ...globalOptions,
      ...options
    };
    const maskKey = hasMask ? "hasMask" : "noMask";
    if (!containers[position]) {
      containers[position] = {};
    }
    const positionContainer = containers[position];
    const hsaPositionMaskContainer = !!positionContainer[maskKey];
    if (!hsaPositionMaskContainer) {
      const customClass = ["component-message-area", "is-" + position];
      if (hasMask) {
        customClass.push("has-mask");
      }
      const el = document.createElement("div");
      el.className = customClass.join(" ");
      document.body.appendChild(el);
      positionContainer[maskKey] = { el, count: 1 };
    }
    const positionMaskContainer = positionContainer[maskKey];
    if (hsaPositionMaskContainer) {
      positionMaskContainer.count++;
    }
    if (zIndex) {
      positionMaskContainer.el.style.zIndex = String(options.zIndex);
    }
    const onDestroy = props.onDestroy;
    props.onDestroy = () => {
      positionMaskContainer.count--;
      if (positionMaskContainer.count === 0) {
        delete positionContainer[maskKey];
        positionMaskContainer.el.remove();
      }
      if (onDestroy) {
        onDestroy();
      }
      vue.render(null, div);
    };
    const vm = vue.createVNode(ComponentMessage, props);
    const div = document.createElement("div");
    vm.appContext = options.ctx || message._context || null;
    vue.render(vm, div);
    if (position.startsWith("bottom") && positionMaskContainer.el.firstChild) {
      positionMaskContainer.el.insertBefore(
        div.firstElementChild,
        positionMaskContainer.el.firstChild
      );
    } else {
      positionMaskContainer.el.appendChild(div.firstElementChild);
    }
    const instance = {
      id,
      type: props.type,
      message: props.message,
      close() {
        var _a2, _b;
        (_b = (_a2 = vm == null ? void 0 : vm.component) == null ? void 0 : _a2.exposed) == null ? void 0 : _b.close();
      }
    };
    instances.push(instance);
    return instance;
  };
  const messageFunction = message;
  message.info = (message2, options) => messageFunction({ ...options, type: MESSAGE_TYPE_INFO, message: message2 });
  message.error = (message2, options) => messageFunction({ ...options, type: MESSAGE_TYPE_ERROR, message: message2 });
  message.success = (message2, options) => messageFunction({ ...options, type: MESSAGE_TYPE_SUCCESS, message: message2 });
  message.warning = (message2, options) => messageFunction({ ...options, type: MESSAGE_TYPE_WARNING, message: message2 });
  message.loading = (message2, options) => messageFunction({ ...options, type: MESSAGE_TYPE_LOADING, message: message2 });
  message.closeAll = () => {
    for (let i = instances.length - 1; i >= 0; i--) {
      instances[i].close();
    }
  };
  message.setDefault = (options) => {
    globalOptions = { ...options };
  };
  const oneDay = 864e5;
  const regexp$1 = /@version\s+(.+)\n/;
  const updateHref = "https://update.greasyfork.org/scripts/488421/%E7%BD%91%E7%9B%98%E6%96%87%E4%BB%B6%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D.user.js";
  const localVersion = "1.4.4";
  const useVersion = () => {
    const remoteVersion = vue.ref(localStorage.getItem("cdp_remoteVersion"));
    const compareVersions = vue.computed(() => {
      if (!remoteVersion.value || !localVersion) {
        return 0;
      }
      const localVersionList = localVersion.split(".").map((item) => parseInt(item) || 0);
      const remoteVersionList = remoteVersion.value.split(".").map((item) => parseInt(item) || 0);
      const len = Math.max(localVersionList.length, remoteVersionList.length);
      for (let index2 = 0; index2 < len; index2++) {
        if (localVersionList[index2] < remoteVersionList[index2]) {
          return 1;
        } else if (localVersionList[index2] > remoteVersionList[index2]) {
          return -1;
        }
      }
      return 0;
    });
    const hasNewVersion = vue.computed(() => compareVersions.value === 1);
    const versionLoading = vue.ref(false);
    let checkVersionTime = parseInt(localStorage.getItem("cdp_checkVersionTime") || "0");
    let getRemoteVersionInstance;
    const getRemoteVersion = () => {
      if (versionLoading.value) {
        return getRemoteVersionInstance;
      }
      versionLoading.value = true;
      const now = Date.now();
      getRemoteVersionInstance = fetch(`${"https://update.greasyfork.org/scripts/488421/%E7%BD%91%E7%9B%98%E6%96%87%E4%BB%B6%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D.meta.js"}?t=${now}`).then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          return Promise.reject(new Error("getRemoteVersion error"));
        }
      }).then((res) => {
        var _a2;
        checkVersionTime = now;
        localStorage.setItem("cdp_checkVersionTime", checkVersionTime + "");
        remoteVersion.value = ((_a2 = regexp$1.exec(res)) == null ? void 0 : _a2[1]) || "";
        localStorage.setItem("cdp_remoteVersion", remoteVersion.value);
      }).finally(() => {
        versionLoading.value = false;
      });
      return getRemoteVersionInstance;
    };
    let checkVersionInstance;
    const checkVersion = () => {
      if (versionLoading.value) {
        return checkVersionInstance;
      }
      checkVersionInstance = getRemoteVersion().then(() => {
        message.success(
          compareVersions.value === 1 ? `发现新版本：${remoteVersion.value}` : compareVersions.value === -1 ? "当前版本已超过最新版本" : "当前版本已是最新版本"
        );
      }).catch(() => {
        message.error("查询更新失败");
      });
      return checkVersionInstance;
    };
    vue.onMounted(() => {
      if (!checkVersionTime || Date.now() - new Date(checkVersionTime).setHours(0, 0, 0, 0) > oneDay) {
        getRemoteVersion();
      }
    });
    return {
      updateHref,
      localVersion,
      remoteVersion,
      hasNewVersion,
      versionLoading,
      versionVisible: true,
      checkVersion
    };
  };
  const _sfc_main$b = vue.defineComponent({
    name: "ComponentInput",
    props: {
      modelValue: {
        type: [String, Number],
        default: ""
      },
      label: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "textarea"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ""
      }
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
      const computedValue = vue.computed({
        get: () => props.modelValue,
        set: (val) => {
          if (!props.disabled && !props.readonly) {
            emit("update:modelValue", val);
          }
        }
      });
      const computedPlaceholder = vue.computed(() => props.label ? "" : props.placeholder);
      const isFocus = vue.ref(false);
      const isActive = vue.computed(() => !isEmpty(props.modelValue) || isFocus.value);
      const inputRef = vue.ref();
      const textareaRef = vue.ref();
      const textareaStyle = vue.ref({});
      const onInputBlur = () => {
        isFocus.value = false;
      };
      const onInputFocus = () => {
        isFocus.value = true;
      };
      const onTextareaBlur = () => {
        isFocus.value = false;
        calcTextareaStyle();
      };
      const onTextareaFocus = () => {
        isFocus.value = true;
        calcTextareaStyle();
      };
      const calcTextareaStyle = () => {
        textareaStyle.value.height = "auto";
        vue.nextTick(() => {
          var _a2;
          textareaStyle.value.height = ((_a2 = textareaRef.value) == null ? void 0 : _a2.value) ? textareaRef.value.scrollHeight + "px" : "auto";
        });
      };
      vue.watch(
        () => [props.type, props.modelValue],
        ([_type]) => {
          if (_type === "textarea") {
            calcTextareaStyle();
          }
        }
      );
      vue.onMounted(() => {
        if (props.type === "textarea") {
          calcTextareaStyle();
        }
      });
      return {
        computedValue,
        computedPlaceholder,
        isFocus,
        isActive,
        inputRef,
        textareaRef,
        textareaStyle,
        onInputBlur,
        onInputFocus,
        onTextareaBlur,
        onTextareaFocus
      };
    }
  });
  const _hoisted_1$b = {
    key: 0,
    class: "component-input-label"
  };
  const _hoisted_2$9 = ["type", "value", "disabled", "readonly", "placeholder"];
  const _hoisted_3$9 = ["disabled", "readonly", "placeholder"];
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass(["component-input", {
        "is-focus": _ctx.isFocus,
        "is-active": _ctx.isActive,
        "is-disabled": _ctx.disabled
      }])
    }, [
      _ctx.label ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, vue.toDisplayString(_ctx.label), 1)) : vue.createCommentVNode("", true),
      _ctx.type !== "textarea" ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
        key: 1,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.computedValue = $event),
        ref: "inputRef",
        class: "component-input-input",
        type: _ctx.type,
        value: _ctx.modelValue,
        disabled: _ctx.disabled,
        readonly: _ctx.readonly,
        placeholder: _ctx.computedPlaceholder,
        onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onInputBlur && _ctx.onInputBlur(...args)),
        onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.onInputFocus && _ctx.onInputFocus(...args))
      }, null, 40, _hoisted_2$9)), [
        [vue.vModelDynamic, _ctx.computedValue]
      ]) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", {
        key: 2,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.computedValue = $event),
        ref: "textareaRef",
        rows: "1",
        class: "component-input-textarea",
        style: vue.normalizeStyle(_ctx.textareaStyle),
        disabled: _ctx.disabled,
        readonly: _ctx.readonly,
        placeholder: _ctx.computedPlaceholder,
        onBlur: _cache[4] || (_cache[4] = (...args) => _ctx.onTextareaBlur && _ctx.onTextareaBlur(...args)),
        onFocus: _cache[5] || (_cache[5] = (...args) => _ctx.onTextareaFocus && _ctx.onTextareaFocus(...args))
      }, null, 44, _hoisted_3$9)), [
        [vue.vModelText, _ctx.computedValue]
      ])
    ], 2);
  }
  const ComponentInput = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-c7ef63ba"]]);
  const _sfc_main$a = vue.defineComponent({
    name: "ComponentRadio",
    props: {
      modelValue: {
        type: [String, Number, Boolean],
        default: false
      },
      label: {
        type: [String, Number, Boolean],
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: "radio"
      }
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
      const isChecked = vue.computed(() => props.modelValue === props.label);
      const onChange = () => {
        if (!props.disabled && !props.readonly) {
          emit("update:modelValue", props.label);
        }
      };
      return {
        isChecked,
        onChange
      };
    }
  });
  const _hoisted_1$a = { class: "component-radio-input" };
  const _hoisted_2$8 = ["value", "checked"];
  const _hoisted_3$8 = {
    key: 0,
    class: "component-radio-label"
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass(["component-radio", {
        "is-checked": _ctx.isChecked,
        "is-disabled": _ctx.disabled,
        "is-readonly": _ctx.readonly,
        [_ctx.type]: true
      }]),
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
    }, [
      vue.createElementVNode("span", _hoisted_1$a, [
        vue.createElementVNode("input", {
          class: "component-radio-input-original",
          type: "radio",
          value: _ctx.label,
          checked: _ctx.isChecked
        }, null, 8, _hoisted_2$8)
      ]),
      _ctx.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$8, [
        !_ctx.$slots.default && _ctx.label ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
        ], 64)) : vue.createCommentVNode("", true),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("", true)
    ], 34);
  }
  const ComponentRadio = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-ec21e00f"]]);
  const _sfc_main$9 = vue.defineComponent({
    name: "ComponentLoading",
    components: {
      ComponentIcon
    }
  });
  const _hoisted_1$9 = { class: "component-loading" };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_component_icon = vue.resolveComponent("component-icon");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
      vue.createVNode(_component_component_icon, {
        class: "component-loading-icon",
        name: "loading"
      })
    ]);
  }
  const ComponentLoading = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-00f21b74"]]);
  const _sfc_main$8 = vue.defineComponent({
    name: "ComponentCheckbox",
    props: {
      modelValue: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      indeterminate: {
        type: Boolean,
        default: false
      }
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
      const onChange = () => {
        if (!props.disabled && !props.readonly) {
          emit("update:modelValue", !props.modelValue);
        }
      };
      return {
        onChange
      };
    }
  });
  const _hoisted_1$8 = { class: "component-checkbox-input" };
  const _hoisted_2$7 = ["checked"];
  const _hoisted_3$7 = {
    key: 0,
    class: "component-checkbox-label"
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("label", {
      class: vue.normalizeClass(["component-checkbox", {
        "is-checked": _ctx.modelValue,
        "is-disabled": _ctx.disabled,
        "is-readonly": _ctx.readonly,
        "is-indeterminate": _ctx.indeterminate
      }]),
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onChange && _ctx.onChange(...args))
    }, [
      vue.createElementVNode("span", _hoisted_1$8, [
        vue.createElementVNode("input", {
          class: "component-checkbox-input-original",
          type: "checkbox",
          checked: _ctx.modelValue
        }, null, 8, _hoisted_2$7)
      ]),
      _ctx.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$7, [
        !_ctx.$slots.default && _ctx.label ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
        ], 64)) : vue.createCommentVNode("", true),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("", true)
    ], 34);
  }
  const ComponentCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-10a800aa"]]);
  // 重命名历史弹窗：原生 DOM 实现，避免影响 Vue 渲染
  function showRenameHistoryPanel(provider) {
    const oldPanel = document.querySelector(".rename-history-panel-wrap");
    if (oldPanel) {
      oldPanel.remove();
      return;
    }
    const wrap = document.createElement("div");
    wrap.className = "rename-history-panel-wrap";
    const modeMap = {
      pattern: "正则",
      series: "系列"
    };
    const render = () => {
      // 懒加载：从 localStorage 读取历史
      if (!provider._historyList || !provider._historyList.length) {
        provider._historyList = provider._loadHistory() || [];
      }
      const list = provider._historyList || [];
      const rowsHtml = list.length ? list.map((item) => {
        const modeText = modeMap[item.mode] || "正则";
        const patternText = item.pattern || "";
        const replaceText = item.replace || "";
        const count = item.successCount || 0;
        const encodedPattern = encodeURIComponent(patternText);
        return `<div class="rename-history-panel-item">
          <div class="rename-history-panel-item-info">
            <div class="rename-history-panel-item-meta">
              <span class="rename-history-panel-item-time">${item.time || ""}</span>
              <span class="rename-history-panel-item-mode">${modeText}</span>
              <span class="rename-history-panel-item-count">成功 ${count} 个</span>
            </div>
            <div class="rename-history-panel-item-pattern" title="${patternText.replace(/"/g, '&quot;')}">
              <span class="label">查找</span><code>${patternText || "(空)"}</code>
            </div>
            <div class="rename-history-panel-item-replace" title="${replaceText.replace(/"/g, '&quot;')}">
              <span class="label">替换</span><code>${replaceText || "(空)"}</code>
            </div>
          </div>
          <div class="rename-history-panel-item-actions">
            <button class="rh-btn apply" data-act="apply" data-id="${item.id}">一键应用</button>
            <button class="rh-btn copy" data-act="copy" data-id="${item.id}">复制查找</button>
            <button class="rh-btn del" data-act="del" data-id="${item.id}">删除</button>
          </div>
        </div>`;
      }).join("") : `<div class="rename-history-panel-empty">暂无重命名历史</div>`;
      wrap.innerHTML = `
        <div class="rename-history-panel">
          <div class="rename-history-panel-header">
            <span>重命名历史</span>
            <div class="rh-header-actions">
              <button class="rh-btn clear" data-act="clear">清空</button>
              <button class="rh-btn close" data-act="close">✕</button>
            </div>
          </div>
          <div class="rename-history-panel-body">${rowsHtml}</div>
        </div>`;
      // 事件绑定
      wrap.querySelector(".rename-history-panel-body").addEventListener("click", (e) => {
        const btn = e.target.closest(".rh-btn");
        if (!btn) return;
        const act = btn.getAttribute("data-act");
        if (act === "close" || act === "clear") return;
        const id = btn.getAttribute("data-id");
        const item = list.find((i) => i.id === Number(id));
        if (act === "apply" && item) {
          provider.applyHistory(item);
          wrap.remove();
          message.success("已应用规则，请检查预览");
        } else if (act === "copy" && item) {
          provider.copyText(item.pattern);
        } else if (act === "del" && id) {
          provider.deleteHistory(Number(id));
          render();
        }
      });
      wrap.querySelector(".rename-history-panel-header").addEventListener("click", (e) => {
        const btn = e.target.closest(".rh-btn");
        if (!btn) return;
        const act = btn.getAttribute("data-act");
        if (act === "clear") {
          provider.clearHistory();
          render();
        } else if (act === "close") {
          wrap.remove();
        }
      });
    };
    // 点击遮罩关闭
    wrap.addEventListener("click", (e) => {
      if (e.target === wrap) wrap.remove();
    });
    document.body.appendChild(wrap);
    render();
  }
  // 新增：广告词检测面板（原生 DOM）
  function showAdDetectPanel(provider) {
    const wrap = document.createElement("div");
    wrap.className = "ad-panel-wrap";
    wrap.innerHTML = `<div class="ad-panel">
      <div class="ad-panel-header">
        <span class="ad-panel-title">广告词检测</span>
        <span class="ad-panel-close" title="关闭">×</span>
      </div>
      <div class="ad-panel-settings">
        <label class="ad-panel-field">扫描深度 <input type="number" class="ad-depth" value="2" min="1" max="5"></label>
        <label class="ad-panel-field">最小出现次数 <input type="number" class="ad-min-count" value="5" min="2"></label>
        <label class="ad-panel-field">最小片段长度 <input type="number" class="ad-min-len" value="3" min="2" max="20"></label>
        <button class="ad-panel-scan">开始扫描</button>
      </div>
      <div class="ad-panel-status">提示：扫描当前目录及子目录（深度按上方设置），自动提取重复片段并标记疑似广告。</div>
      <div class="ad-panel-results">
        <div class="ad-panel-empty">点击"开始扫描"检测疑似广告词</div>
      </div>
      <div class="ad-panel-footer">
        <button class="ad-panel-clear" disabled>清除选中项</button>
        <button class="ad-panel-select-all" disabled>全选</button>
      </div>
    </div>`;
    const $ = (sel) => wrap.querySelector(sel);
    const depthInput = $(".ad-depth");
    const minCountInput = $(".ad-min-count");
    const minLenInput = $(".ad-min-len");
    const scanBtn = $(".ad-panel-scan");
    const clearBtn = $(".ad-panel-clear");
    const selectAllBtn = $(".ad-panel-select-all");
    const resultsEl = $(".ad-panel-results");
    const statusEl = $(".ad-panel-status");
    const closeBtn = $(".ad-panel-close");
    closeBtn.addEventListener("click", () => wrap.remove());
    wrap.addEventListener("click", (e) => {
      if (e.target === wrap) wrap.remove();
    });
    let currentAds = [];
    const renderResults = (ads) => {
      currentAds = ads || [];
      if (!currentAds.length) {
        resultsEl.innerHTML = `<div class="ad-panel-empty">未检测到疑似广告词（可调低"最小出现次数"再试）</div>`;
        clearBtn.disabled = true;
        selectAllBtn.disabled = true;
        return;
      }
      resultsEl.innerHTML = currentAds.map((item, i) => `<label class="ad-panel-item" data-idx="${i}">
        <input type="checkbox" class="ad-item-check" checked>
        <span class="ad-item-text">${item.text}</span>
        <span class="ad-item-count">×${item.count}</span>
      </label>`).join("");
      clearBtn.disabled = false;
      selectAllBtn.disabled = false;
      selectAllBtn.textContent = "全选";
    };
    // 修复：原来这两个监听写在 renderResults 里，每扫描一次就多绑一份，
    // 点一次"清除"会触发多次、且闭包里的 ads 是旧的。改为只绑定一次。
    selectAllBtn.addEventListener("click", () => {
      const boxes = Array.from(resultsEl.querySelectorAll(".ad-item-check"));
      if (!boxes.length) return;
      const allChecked = boxes.every((b) => b.checked);
      boxes.forEach((b) => { b.checked = !allChecked; });
      selectAllBtn.textContent = allChecked ? "全选" : "全不选";
    });
    clearBtn.addEventListener("click", () => {
      const selected = currentAds.filter((_, i) => {
        const box = resultsEl.querySelector(`.ad-panel-item[data-idx="${i}"] .ad-item-check`);
        return box && box.checked;
      });
      if (!selected.length) {
        message.warning("请先勾选要清除的广告词");
        return;
      }
      provider.applyAdPattern(selected);
      message.success(`已填入 ${selected.length} 个广告词，请在面板确认后点"应用"`);
      wrap.remove();
    });
    scanBtn.addEventListener("click", async () => {
      const depth = parseInt(depthInput.value) || 2;
      const minCount = parseInt(minCountInput.value) || 5;
      const minLen = parseInt(minLenInput.value) || 3;
      scanBtn.disabled = true;
      scanBtn.textContent = "扫描中...";
      statusEl.textContent = "正在扫描全盘文件...";
      resultsEl.innerHTML = `<div class="ad-panel-loading">正在扫描...</div>`;
      try {
        const files = await provider.scanAllFiles(depth, 10000);
        statusEl.textContent = `扫描完成：共 ${files.length} 个文件，正在分析广告词...`;
        const ads = provider.detectAdPatterns(files, minCount, minLen);
        statusEl.textContent = `扫描完成：${files.length} 个文件，检测到 ${ads.length} 个疑似广告词`;
        renderResults(ads);
      } catch (e) {
        statusEl.textContent = "扫描失败，请重试";
        resultsEl.innerHTML = `<div class="ad-panel-empty">扫描失败，请重试</div>`;
      } finally {
        scanBtn.disabled = false;
        scanBtn.textContent = "开始扫描";
      }
    });
    document.body.appendChild(wrap);
  }
  const _sfc_main$7 = vue.defineComponent({
    name: "RenameControl",
    components: {
      ComponentIcon,
      ComponentInput,
      ComponentRadio,
      ComponentLoading,
      ComponentCheckbox
    },
    setup() {
      const version2 = useVersion();
      const providerRef2 = vue.inject("providerRef");
      const isDisabled = vue.computed(
        () => (providerRef2 == null ? void 0 : providerRef2.value.replaceParamsDisabled) || false
      );
      const onResetClick = () => {
        providerRef2 == null ? void 0 : providerRef2.value.reset();
      };
      const onConfirmClick = () => {
        providerRef2 == null ? void 0 : providerRef2.value.batchRename();
      };
      const onHistoryClick = () => {
        const p = providerRef2 == null ? void 0 : providerRef2.value;
        if (!p) return;
        showRenameHistoryPanel(p);
      };
      const searchKeyword = vue.ref("");
      const isSearchMode = vue.ref(false);
      const onSearchClick = () => {
        const kw = searchKeyword.value.trim();
        if (!kw) return;
        isSearchMode.value = true;
        providerRef2 == null ? void 0 : providerRef2.value.searchAllFiles(kw);
      };
      const onResetToListClick = () => {
        searchKeyword.value = "";
        isSearchMode.value = false;
        providerRef2 == null ? void 0 : providerRef2.value.resetToList();
      };
      const onAdDetectClick = () => {
        const p = providerRef2 == null ? void 0 : providerRef2.value;
        if (!p) return;
        showAdDetectPanel(p);
      };
      return {
        ...version2,
        providerRef: providerRef2,
        isDisabled,
        onResetClick,
        onConfirmClick,
        onHistoryClick,
        onAdDetectClick,
        searchKeyword,
        isSearchMode,
        onSearchClick,
        onResetToListClick
      };
    }
  });
  const _withScopeId$5 = (n) => (vue.pushScopeId("data-v-f61e63a1"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$7 = {
    key: 0,
    class: "rename-control"
  };
  const _hoisted_2$6 = { class: "rename-control-header" };
  const _hoisted_3$6 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "rename-control-header-content" }, "批量重命名当前目录下所有文件", -1));
  const _hoisted_4$2 = ["href"];
  const _hoisted_5$2 = {
    key: 0,
    class: "rename-control-body"
  };
  const _hoisted_6$1 = { class: "rename-control-body-item" };
  const _hoisted_7$1 = { class: "rename-control-body-item" };
  const _hoisted_8$1 = { class: "rename-control-body-item" };
  const _hoisted_9$1 = { class: "rename-control-body-item" };
  const _hoisted_10$1 = { class: "rename-control-footer" };
  const _hoisted_11$1 = { class: "rename-control-footer-option" };
  const _hoisted_12$1 = ["disabled"];
  const _hoisted_13$1 = ["disabled"];
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_component_icon = vue.resolveComponent("component-icon");
    const _component_component_input = vue.resolveComponent("component-input");
    const _component_component_radio = vue.resolveComponent("component-radio");
    const _component_component_checkbox = vue.resolveComponent("component-checkbox");
    const _component_component_loading = vue.resolveComponent("component-loading");
    return _ctx.providerRef ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [
      vue.createElementVNode("div", _hoisted_2$6, [
        _hoisted_3$6,
        _ctx.versionVisible ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          _ctx.hasNewVersion ? (vue.openBlock(), vue.createElementBlock("a", {
            key: 0,
            href: _ctx.updateHref,
            target: "_blank",
            class: "rename-control-header-remote-version"
          }, " 发现新版本：" + vue.toDisplayString(_ctx.remoteVersion) + " 点击更新 ", 9, _hoisted_4$2)) : (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            class: "rename-control-header-local-version",
            title: "点击检查更新",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.checkVersion && _ctx.checkVersion(...args))
          }, [
            _ctx.versionLoading ? (vue.openBlock(), vue.createBlock(_component_component_icon, {
              key: 0,
              name: "loading"
            })) : vue.createCommentVNode("", true),
            vue.createTextVNode(" 当前版本：" + vue.toDisplayString(_ctx.localVersion), 1)
          ]))
        ], 64)) : vue.createCommentVNode("", true)
      ]),
      _ctx.providerRef.replaceParams ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$2, [
        _ctx.providerRef.replaceParams.renameMode === "series" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createElementVNode("div", _hoisted_6$1, [
            vue.createVNode(_component_component_input, {
              modelValue: _ctx.providerRef.replaceParams.title,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.providerRef.replaceParams.title = $event),
              label: "剧名",
              disabled: _ctx.isDisabled
            }, null, 8, ["modelValue", "disabled"])
          ]),
          vue.createElementVNode("div", _hoisted_7$1, [
            vue.createVNode(_component_component_input, {
              modelValue: _ctx.providerRef.replaceParams.season,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.providerRef.replaceParams.season = $event),
              label: "季数",
              type: "number",
              disabled: _ctx.isDisabled
            }, null, 8, ["modelValue", "disabled"])
          ])
        ], 64)) : vue.createCommentVNode("", true),
        _ctx.providerRef.replaceParams.renameMode === "pattern" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createElementVNode("div", _hoisted_8$1, [
            vue.createVNode(_component_component_input, {
              modelValue: _ctx.providerRef.replaceParams.pattern,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.providerRef.replaceParams.pattern = $event),
              label: "正则",
              disabled: _ctx.isDisabled
            }, null, 8, ["modelValue", "disabled"])
          ]),
          vue.createElementVNode("div", _hoisted_9$1, [
            vue.createVNode(_component_component_input, {
              modelValue: _ctx.providerRef.replaceParams.replace,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.providerRef.replaceParams.replace = $event),
              label: "替换文本",
              disabled: _ctx.isDisabled
            }, null, 8, ["modelValue", "disabled"])
          ])
        ], 64)) : vue.createCommentVNode("", true)
      ])) : vue.createCommentVNode("", true),
      vue.createElementVNode("div", _hoisted_10$1, [
        vue.createElementVNode("div", _hoisted_11$1, [
          vue.createVNode(_component_component_radio, {
            modelValue: _ctx.providerRef.replaceParams.renameMode,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.providerRef.replaceParams.renameMode = $event),
            label: "series",
            disabled: _ctx.isDisabled
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" 剧集模式 ")
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          vue.createVNode(_component_component_radio, {
            modelValue: _ctx.providerRef.replaceParams.renameMode,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.providerRef.replaceParams.renameMode = $event),
            label: "pattern",
            disabled: _ctx.isDisabled
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" 正则模式 ")
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          vue.createVNode(_component_component_checkbox, {
            modelValue: _ctx.providerRef.replaceParams.autoEpisode,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.providerRef.replaceParams.autoEpisode = $event),
            disabled: _ctx.isDisabled
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" 自动集数 ")
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          vue.createVNode(_component_component_checkbox, {
            modelValue: _ctx.providerRef.replaceParams.sortChecked,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.providerRef.replaceParams.sortChecked = $event),
            disabled: _ctx.isDisabled
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" 排序已选 ")
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          vue.createVNode(_component_component_checkbox, {
            modelValue: _ctx.providerRef.replaceParams.autoEscape,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.providerRef.replaceParams.autoEscape = $event),
            disabled: _ctx.isDisabled
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode(" 转义特殊字符 ")
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])
        ]),
        vue.createElementVNode("div", { class: "rename-control-search" }, [
          vue.createElementVNode("input", {
            class: "rename-control-search-input",
            type: "text",
            value: _ctx.searchKeyword,
            placeholder: "搜索关键词；留空直接点右侧按钮 = 加载全盘所有文件",
            onInput: _cache[20] || (_cache[20] = ($event) => _ctx.searchKeyword = $event.target.value),
            onKeyup: _cache[21] || (_cache[21] = ($event) => { if ($event.key === "Enter") _ctx.onSearchClick && _ctx.onSearchClick(); })
          }, null, 8),
          vue.createElementVNode("button", {
            class: "rename-control-search-btn",
            onClick: _cache[22] || (_cache[22] = (...args) => _ctx.onSearchClick && _ctx.onSearchClick(...args))
          }, " 搜索全盘 ", 8),
          _ctx.isSearchMode ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            class: "rename-control-search-btn back",
            onClick: _cache[23] || (_cache[23] = (...args) => _ctx.onResetToListClick && _ctx.onResetToListClick(...args))
          }, " 返回目录 ", 8)) : vue.createCommentVNode("", true)
        ]),
        vue.createElementVNode("button", {
          class: "rename-control-footer-button reset",
          disabled: _ctx.isDisabled,
          onClick: _cache[9] || (_cache[9] = (...args) => _ctx.onResetClick && _ctx.onResetClick(...args))
        }, " 重置 ", 8, _hoisted_12$1),
        vue.createElementVNode("button", {
          class: "rename-control-footer-button history",
          onClick: _cache[19] || (_cache[19] = (...args) => _ctx.onHistoryClick && _ctx.onHistoryClick(...args))
        }, " 历史 ", 8),
        vue.createElementVNode("button", {
          class: "rename-control-footer-button ad",
          onClick: _cache[24] || (_cache[24] = (...args) => _ctx.onAdDetectClick && _ctx.onAdDetectClick(...args))
        }, " 广告 ", 8),
        vue.createElementVNode("button", {
          class: "rename-control-footer-button confirm",
          // 修复：不再用 shouldContinue 控制 disabled。
          // 之前状态计算一旦出错（或残留旧状态），按钮就永久灰白且无法自愈。
          // 现在只有"正在重命名中"才禁用；没有可改动的文件时点击会给出明确提示。
          disabled: _ctx.isDisabled,
          onClick: _cache[10] || (_cache[10] = (...args) => _ctx.onConfirmClick && _ctx.onConfirmClick(...args))
        }, " 应用 ", 8, _hoisted_13$1)
      ]),
      _ctx.providerRef.isControlLoading ? (vue.openBlock(), vue.createBlock(_component_component_loading, { key: 1 })) : vue.createCommentVNode("", true)
    ])) : vue.createCommentVNode("", true);
  }
  const RenameControl = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-f61e63a1"]]);
  function Diff() {
  }
  Diff.prototype = {
    diff: function diff(oldString, newString) {
      var _options$timeout;
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var callback = options.callback;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      var self = this;
      function done(value) {
        value = self.postProcess(value, options);
        if (callback) {
          setTimeout(function() {
            callback(value);
          }, 0);
          return true;
        } else {
          return value;
        }
      }
      oldString = this.castInput(oldString, options);
      newString = this.castInput(newString, options);
      oldString = this.removeEmpty(this.tokenize(oldString, options));
      newString = this.removeEmpty(this.tokenize(newString, options));
      var newLen = newString.length, oldLen = oldString.length;
      var editLength = 1;
      var maxEditLength = newLen + oldLen;
      if (options.maxEditLength != null) {
        maxEditLength = Math.min(maxEditLength, options.maxEditLength);
      }
      var maxExecutionTime = (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : Infinity;
      var abortAfterTimestamp = Date.now() + maxExecutionTime;
      var bestPath = [{
        oldPos: -1,
        lastComponent: void 0
      }];
      var newPos = this.extractCommon(bestPath[0], newString, oldString, 0, options);
      if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
        return done(buildValues(self, bestPath[0].lastComponent, newString, oldString, self.useLongestToken));
      }
      var minDiagonalToConsider = -Infinity, maxDiagonalToConsider = Infinity;
      function execEditLength() {
        for (var diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
          var basePath = void 0;
          var removePath = bestPath[diagonalPath - 1], addPath = bestPath[diagonalPath + 1];
          if (removePath) {
            bestPath[diagonalPath - 1] = void 0;
          }
          var canAdd = false;
          if (addPath) {
            var addPathNewPos = addPath.oldPos - diagonalPath;
            canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
          }
          var canRemove = removePath && removePath.oldPos + 1 < oldLen;
          if (!canAdd && !canRemove) {
            bestPath[diagonalPath] = void 0;
            continue;
          }
          if (!canRemove || canAdd && removePath.oldPos < addPath.oldPos) {
            basePath = self.addToPath(addPath, true, false, 0, options);
          } else {
            basePath = self.addToPath(removePath, false, true, 1, options);
          }
          newPos = self.extractCommon(basePath, newString, oldString, diagonalPath, options);
          if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
            return done(buildValues(self, basePath.lastComponent, newString, oldString, self.useLongestToken));
          } else {
            bestPath[diagonalPath] = basePath;
            if (basePath.oldPos + 1 >= oldLen) {
              maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
            }
            if (newPos + 1 >= newLen) {
              minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
            }
          }
        }
        editLength++;
      }
      if (callback) {
        (function exec() {
          setTimeout(function() {
            if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
              return callback();
            }
            if (!execEditLength()) {
              exec();
            }
          }, 0);
        })();
      } else {
        while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
          var ret = execEditLength();
          if (ret) {
            return ret;
          }
        }
      }
    },
    addToPath: function addToPath(path, added, removed, oldPosInc, options) {
      var last = path.lastComponent;
      if (last && !options.oneChangePerToken && last.added === added && last.removed === removed) {
        return {
          oldPos: path.oldPos + oldPosInc,
          lastComponent: {
            count: last.count + 1,
            added,
            removed,
            previousComponent: last.previousComponent
          }
        };
      } else {
        return {
          oldPos: path.oldPos + oldPosInc,
          lastComponent: {
            count: 1,
            added,
            removed,
            previousComponent: last
          }
        };
      }
    },
    extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath, options) {
      var newLen = newString.length, oldLen = oldString.length, oldPos = basePath.oldPos, newPos = oldPos - diagonalPath, commonCount = 0;
      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(oldString[oldPos + 1], newString[newPos + 1], options)) {
        newPos++;
        oldPos++;
        commonCount++;
        if (options.oneChangePerToken) {
          basePath.lastComponent = {
            count: 1,
            previousComponent: basePath.lastComponent,
            added: false,
            removed: false
          };
        }
      }
      if (commonCount && !options.oneChangePerToken) {
        basePath.lastComponent = {
          count: commonCount,
          previousComponent: basePath.lastComponent,
          added: false,
          removed: false
        };
      }
      basePath.oldPos = oldPos;
      return newPos;
    },
    equals: function equals(left, right, options) {
      if (options.comparator) {
        return options.comparator(left, right);
      } else {
        return left === right || options.ignoreCase && left.toLowerCase() === right.toLowerCase();
      }
    },
    removeEmpty: function removeEmpty(array) {
      var ret = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          ret.push(array[i]);
        }
      }
      return ret;
    },
    castInput: function castInput(value) {
      return value;
    },
    tokenize: function tokenize(value) {
      return Array.from(value);
    },
    join: function join(chars) {
      return chars.join("");
    },
    postProcess: function postProcess(changeObjects) {
      return changeObjects;
    }
  };
  function buildValues(diff2, lastComponent, newString, oldString, useLongestToken) {
    var components = [];
    var nextComponent;
    while (lastComponent) {
      components.push(lastComponent);
      nextComponent = lastComponent.previousComponent;
      delete lastComponent.previousComponent;
      lastComponent = nextComponent;
    }
    components.reverse();
    var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
    for (; componentPos < componentLen; componentPos++) {
      var component = components[componentPos];
      if (!component.removed) {
        if (!component.added && useLongestToken) {
          var value = newString.slice(newPos, newPos + component.count);
          value = value.map(function(value2, i) {
            var oldValue = oldString[oldPos + i];
            return oldValue.length > value2.length ? oldValue : value2;
          });
          component.value = diff2.join(value);
        } else {
          component.value = diff2.join(newString.slice(newPos, newPos + component.count));
        }
        newPos += component.count;
        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = diff2.join(oldString.slice(oldPos, oldPos + component.count));
        oldPos += component.count;
      }
    }
    return components;
  }
  var characterDiff = new Diff();
  function diffChars(oldStr, newStr, options) {
    return characterDiff.diff(oldStr, newStr, options);
  }
  function longestCommonPrefix(str1, str2) {
    var i;
    for (i = 0; i < str1.length && i < str2.length; i++) {
      if (str1[i] != str2[i]) {
        return str1.slice(0, i);
      }
    }
    return str1.slice(0, i);
  }
  function longestCommonSuffix(str1, str2) {
    var i;
    if (!str1 || !str2 || str1[str1.length - 1] != str2[str2.length - 1]) {
      return "";
    }
    for (i = 0; i < str1.length && i < str2.length; i++) {
      if (str1[str1.length - (i + 1)] != str2[str2.length - (i + 1)]) {
        return str1.slice(-i);
      }
    }
    return str1.slice(-i);
  }
  function replacePrefix(string, oldPrefix, newPrefix) {
    if (string.slice(0, oldPrefix.length) != oldPrefix) {
      throw Error("string ".concat(JSON.stringify(string), " doesn't start with prefix ").concat(JSON.stringify(oldPrefix), "; this is a bug"));
    }
    return newPrefix + string.slice(oldPrefix.length);
  }
  function replaceSuffix(string, oldSuffix, newSuffix) {
    if (!oldSuffix) {
      return string + newSuffix;
    }
    if (string.slice(-oldSuffix.length) != oldSuffix) {
      throw Error("string ".concat(JSON.stringify(string), " doesn't end with suffix ").concat(JSON.stringify(oldSuffix), "; this is a bug"));
    }
    return string.slice(0, -oldSuffix.length) + newSuffix;
  }
  function removePrefix(string, oldPrefix) {
    return replacePrefix(string, oldPrefix, "");
  }
  function removeSuffix(string, oldSuffix) {
    return replaceSuffix(string, oldSuffix, "");
  }
  function maximumOverlap(string1, string2) {
    return string2.slice(0, overlapCount(string1, string2));
  }
  function overlapCount(a, b) {
    var startA = 0;
    if (a.length > b.length) {
      startA = a.length - b.length;
    }
    var endB = b.length;
    if (a.length < b.length) {
      endB = a.length;
    }
    var map = Array(endB);
    var k = 0;
    map[0] = 0;
    for (var j = 1; j < endB; j++) {
      if (b[j] == b[k]) {
        map[j] = map[k];
      } else {
        map[j] = k;
      }
      while (k > 0 && b[j] != b[k]) {
        k = map[k];
      }
      if (b[j] == b[k]) {
        k++;
      }
    }
    k = 0;
    for (var i = startA; i < a.length; i++) {
      while (k > 0 && a[i] != b[k]) {
        k = map[k];
      }
      if (a[i] == b[k]) {
        k++;
      }
    }
    return k;
  }
  var extendedWordChars = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";
  var tokenizeIncludingWhitespace = new RegExp("[".concat(extendedWordChars, "]+|\\s+|[^").concat(extendedWordChars, "]"), "ug");
  var wordDiff = new Diff();
  wordDiff.equals = function(left, right, options) {
    if (options.ignoreCase) {
      left = left.toLowerCase();
      right = right.toLowerCase();
    }
    return left.trim() === right.trim();
  };
  wordDiff.tokenize = function(value) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var parts;
    if (options.intlSegmenter) {
      if (options.intlSegmenter.resolvedOptions().granularity != "word") {
        throw new Error('The segmenter passed must have a granularity of "word"');
      }
      parts = Array.from(options.intlSegmenter.segment(value), function(segment) {
        return segment.segment;
      });
    } else {
      parts = value.match(tokenizeIncludingWhitespace) || [];
    }
    var tokens = [];
    var prevPart = null;
    parts.forEach(function(part) {
      if (/\s/.test(part)) {
        if (prevPart == null) {
          tokens.push(part);
        } else {
          tokens.push(tokens.pop() + part);
        }
      } else if (/\s/.test(prevPart)) {
        if (tokens[tokens.length - 1] == prevPart) {
          tokens.push(tokens.pop() + part);
        } else {
          tokens.push(prevPart + part);
        }
      } else {
        tokens.push(part);
      }
      prevPart = part;
    });
    return tokens;
  };
  wordDiff.join = function(tokens) {
    return tokens.map(function(token, i) {
      if (i == 0) {
        return token;
      } else {
        return token.replace(/^\s+/, "");
      }
    }).join("");
  };
  wordDiff.postProcess = function(changes, options) {
    if (!changes || options.oneChangePerToken) {
      return changes;
    }
    var lastKeep = null;
    var insertion = null;
    var deletion = null;
    changes.forEach(function(change) {
      if (change.added) {
        insertion = change;
      } else if (change.removed) {
        deletion = change;
      } else {
        if (insertion || deletion) {
          dedupeWhitespaceInChangeObjects(lastKeep, deletion, insertion, change);
        }
        lastKeep = change;
        insertion = null;
        deletion = null;
      }
    });
    if (insertion || deletion) {
      dedupeWhitespaceInChangeObjects(lastKeep, deletion, insertion, null);
    }
    return changes;
  };
  function dedupeWhitespaceInChangeObjects(startKeep, deletion, insertion, endKeep) {
    if (deletion && insertion) {
      var oldWsPrefix = deletion.value.match(/^\s*/)[0];
      var oldWsSuffix = deletion.value.match(/\s*$/)[0];
      var newWsPrefix = insertion.value.match(/^\s*/)[0];
      var newWsSuffix = insertion.value.match(/\s*$/)[0];
      if (startKeep) {
        var commonWsPrefix = longestCommonPrefix(oldWsPrefix, newWsPrefix);
        startKeep.value = replaceSuffix(startKeep.value, newWsPrefix, commonWsPrefix);
        deletion.value = removePrefix(deletion.value, commonWsPrefix);
        insertion.value = removePrefix(insertion.value, commonWsPrefix);
      }
      if (endKeep) {
        var commonWsSuffix = longestCommonSuffix(oldWsSuffix, newWsSuffix);
        endKeep.value = replacePrefix(endKeep.value, newWsSuffix, commonWsSuffix);
        deletion.value = removeSuffix(deletion.value, commonWsSuffix);
        insertion.value = removeSuffix(insertion.value, commonWsSuffix);
      }
    } else if (insertion) {
      if (startKeep) {
        insertion.value = insertion.value.replace(/^\s*/, "");
      }
      if (endKeep) {
        endKeep.value = endKeep.value.replace(/^\s*/, "");
      }
    } else if (startKeep && endKeep) {
      var newWsFull = endKeep.value.match(/^\s*/)[0], delWsStart = deletion.value.match(/^\s*/)[0], delWsEnd = deletion.value.match(/\s*$/)[0];
      var newWsStart = longestCommonPrefix(newWsFull, delWsStart);
      deletion.value = removePrefix(deletion.value, newWsStart);
      var newWsEnd = longestCommonSuffix(removePrefix(newWsFull, newWsStart), delWsEnd);
      deletion.value = removeSuffix(deletion.value, newWsEnd);
      endKeep.value = replacePrefix(endKeep.value, newWsFull, newWsEnd);
      startKeep.value = replaceSuffix(startKeep.value, newWsFull, newWsFull.slice(0, newWsFull.length - newWsEnd.length));
    } else if (endKeep) {
      var endKeepWsPrefix = endKeep.value.match(/^\s*/)[0];
      var deletionWsSuffix = deletion.value.match(/\s*$/)[0];
      var overlap = maximumOverlap(deletionWsSuffix, endKeepWsPrefix);
      deletion.value = removeSuffix(deletion.value, overlap);
    } else if (startKeep) {
      var startKeepWsSuffix = startKeep.value.match(/\s*$/)[0];
      var deletionWsPrefix = deletion.value.match(/^\s*/)[0];
      var _overlap = maximumOverlap(startKeepWsSuffix, deletionWsPrefix);
      deletion.value = removePrefix(deletion.value, _overlap);
    }
  }
  var wordWithSpaceDiff = new Diff();
  wordWithSpaceDiff.tokenize = function(value) {
    var regex = new RegExp("(\\r?\\n)|[".concat(extendedWordChars, "]+|[^\\S\\n\\r]+|[^").concat(extendedWordChars, "]"), "ug");
    return value.match(regex) || [];
  };
  var lineDiff = new Diff();
  lineDiff.tokenize = function(value, options) {
    if (options.stripTrailingCr) {
      value = value.replace(/\r\n/g, "\n");
    }
    var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    }
    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];
      if (i % 2 && !options.newlineIsToken) {
        retLines[retLines.length - 1] += line;
      } else {
        retLines.push(line);
      }
    }
    return retLines;
  };
  lineDiff.equals = function(left, right, options) {
    if (options.ignoreWhitespace) {
      if (!options.newlineIsToken || !left.includes("\n")) {
        left = left.trim();
      }
      if (!options.newlineIsToken || !right.includes("\n")) {
        right = right.trim();
      }
    } else if (options.ignoreNewlineAtEof && !options.newlineIsToken) {
      if (left.endsWith("\n")) {
        left = left.slice(0, -1);
      }
      if (right.endsWith("\n")) {
        right = right.slice(0, -1);
      }
    }
    return Diff.prototype.equals.call(this, left, right, options);
  };
  var sentenceDiff = new Diff();
  sentenceDiff.tokenize = function(value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  var cssDiff = new Diff();
  cssDiff.tokenize = function(value) {
    return value.split(/([{}:;,]|\s+)/);
  };
  function _typeof$1(o) {
    "@babel/helpers - typeof";
    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof$1(o);
  }
  var jsonDiff = new Diff();
  jsonDiff.useLongestToken = true;
  jsonDiff.tokenize = lineDiff.tokenize;
  jsonDiff.castInput = function(value, options) {
    var undefinedReplacement = options.undefinedReplacement, _options$stringifyRep = options.stringifyReplacer, stringifyReplacer = _options$stringifyRep === void 0 ? function(k, v) {
      return typeof v === "undefined" ? undefinedReplacement : v;
    } : _options$stringifyRep;
    return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
  };
  jsonDiff.equals = function(left, right, options) {
    return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"), options);
  };
  function canonicalize(obj, stack, replacementStack, replacer, key) {
    stack = stack || [];
    replacementStack = replacementStack || [];
    if (replacer) {
      obj = replacer(key, obj);
    }
    var i;
    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }
    var canonicalizedObj;
    if ("[object Array]" === Object.prototype.toString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);
      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
      }
      stack.pop();
      replacementStack.pop();
      return canonicalizedObj;
    }
    if (obj && obj.toJSON) {
      obj = obj.toJSON();
    }
    if (_typeof$1(obj) === "object" && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);
      var sortedKeys = [], _key;
      for (_key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, _key)) {
          sortedKeys.push(_key);
        }
      }
      sortedKeys.sort();
      for (i = 0; i < sortedKeys.length; i += 1) {
        _key = sortedKeys[i];
        canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
      }
      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }
    return canonicalizedObj;
  }
  var arrayDiff = new Diff();
  arrayDiff.tokenize = function(value) {
    return value.slice();
  };
  arrayDiff.join = arrayDiff.removeEmpty = function(value) {
    return value;
  };
  /**!
   * Sortable 1.15.3
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   */
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  var version = "1.15.3";
  function userAgent(pattern) {
    if (typeof window !== "undefined" && window.navigator) {
      return !!/* @__PURE__ */ navigator.userAgent.match(pattern);
    }
  }
  var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
  var Edge = userAgent(/Edge/i);
  var FireFox = userAgent(/firefox/i);
  var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
  var IOS = userAgent(/iP(ad|od|hone)/i);
  var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
  var captureMode = {
    capture: false,
    passive: false
  };
  function on(el, event, fn) {
    el.addEventListener(event, fn, !IE11OrLess && captureMode);
  }
  function off(el, event, fn) {
    el.removeEventListener(event, fn, !IE11OrLess && captureMode);
  }
  function matches(el, selector) {
    if (!selector) return;
    selector[0] === ">" && (selector = selector.substring(1));
    if (el) {
      try {
        if (el.matches) {
          return el.matches(selector);
        } else if (el.msMatchesSelector) {
          return el.msMatchesSelector(selector);
        } else if (el.webkitMatchesSelector) {
          return el.webkitMatchesSelector(selector);
        }
      } catch (_) {
        return false;
      }
    }
    return false;
  }
  function getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
  }
  function closest(el, selector, ctx, includeCTX) {
    if (el) {
      ctx = ctx || document;
      do {
        if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
          return el;
        }
        if (el === ctx) break;
      } while (el = getParentOrHost(el));
    }
    return null;
  }
  var R_SPACE = /\s+/g;
  function toggleClass(el, name, state) {
    if (el && name) {
      if (el.classList) {
        el.classList[state ? "add" : "remove"](name);
      } else {
        var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
        el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
      }
    }
  }
  function css(el, prop, val) {
    var style = el && el.style;
    if (style) {
      if (val === void 0) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
          val = document.defaultView.getComputedStyle(el, "");
        } else if (el.currentStyle) {
          val = el.currentStyle;
        }
        return prop === void 0 ? val : val[prop];
      } else {
        if (!(prop in style) && prop.indexOf("webkit") === -1) {
          prop = "-webkit-" + prop;
        }
        style[prop] = val + (typeof val === "string" ? "" : "px");
      }
    }
  }
  function matrix(el, selfOnly) {
    var appliedTransforms = "";
    if (typeof el === "string") {
      appliedTransforms = el;
    } else {
      do {
        var transform = css(el, "transform");
        if (transform && transform !== "none") {
          appliedTransforms = transform + " " + appliedTransforms;
        }
      } while (!selfOnly && (el = el.parentNode));
    }
    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return matrixFn && new matrixFn(appliedTransforms);
  }
  function find(ctx, tagName, iterator) {
    if (ctx) {
      var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
      if (iterator) {
        for (; i < n; i++) {
          iterator(list[i], i);
        }
      }
      return list;
    }
    return [];
  }
  function getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;
    if (scrollingElement) {
      return scrollingElement;
    } else {
      return document.documentElement;
    }
  }
  function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;
    if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
      elRect = el.getBoundingClientRect();
      top = elRect.top;
      left = elRect.left;
      bottom = elRect.bottom;
      right = elRect.right;
      height = elRect.height;
      width = elRect.width;
    } else {
      top = 0;
      left = 0;
      bottom = window.innerHeight;
      right = window.innerWidth;
      height = window.innerHeight;
      width = window.innerWidth;
    }
    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
      container = container || el.parentNode;
      if (!IE11OrLess) {
        do {
          if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
            var containerRect = container.getBoundingClientRect();
            top -= containerRect.top + parseInt(css(container, "border-top-width"));
            left -= containerRect.left + parseInt(css(container, "border-left-width"));
            bottom = top + elRect.height;
            right = left + elRect.width;
            break;
          }
        } while (container = container.parentNode);
      }
    }
    if (undoScale && el !== window) {
      var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
      if (elMatrix) {
        top /= scaleY;
        left /= scaleX;
        width /= scaleX;
        height /= scaleY;
        bottom = top + height;
        right = left + width;
      }
    }
    return {
      top,
      left,
      bottom,
      right,
      width,
      height
    };
  }
  function isScrolledPast(el, elSide, parentSide) {
    var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
    while (parent) {
      var parentSideVal = getRect(parent)[parentSide], visible = void 0;
      {
        visible = elSideVal >= parentSideVal;
      }
      if (!visible) return parent;
      if (parent === getWindowScrollingElement()) break;
      parent = getParentAutoScrollElement(parent, false);
    }
    return false;
  }
  function getChild(el, childNum, options, includeDragEl) {
    var currentChild = 0, i = 0, children = el.children;
    while (i < children.length) {
      if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
        if (currentChild === childNum) {
          return children[i];
        }
        currentChild++;
      }
      i++;
    }
    return null;
  }
  function lastChild(el, selector) {
    var last = el.lastElementChild;
    while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) {
      last = last.previousElementSibling;
    }
    return last || null;
  }
  function index(el, selector) {
    var index2 = 0;
    if (!el || !el.parentNode) {
      return -1;
    }
    while (el = el.previousElementSibling) {
      if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) {
        index2++;
      }
    }
    return index2;
  }
  function getRelativeScrollOffset(el) {
    var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
    if (el) {
      do {
        var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
      } while (el !== winScroller && (el = el.parentNode));
    }
    return [offsetLeft, offsetTop];
  }
  function indexOfObject(arr, obj) {
    for (var i in arr) {
      if (!arr.hasOwnProperty(i)) continue;
      for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
      }
    }
    return -1;
  }
  function getParentAutoScrollElement(el, includeSelf) {
    if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;
    do {
      if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = css(elem);
        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
          if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
          if (gotSelf || includeSelf) return elem;
          gotSelf = true;
        }
      }
    } while (elem = elem.parentNode);
    return getWindowScrollingElement();
  }
  function extend(dst, src) {
    if (dst && src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dst[key] = src[key];
        }
      }
    }
    return dst;
  }
  function isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
  }
  var _throttleTimeout;
  function throttle(callback, ms) {
    return function() {
      if (!_throttleTimeout) {
        var args = arguments, _this = this;
        if (args.length === 1) {
          callback.call(_this, args[0]);
        } else {
          callback.apply(_this, args);
        }
        _throttleTimeout = setTimeout(function() {
          _throttleTimeout = void 0;
        }, ms);
      }
    };
  }
  function cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
  }
  function scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
  }
  function clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;
    if (Polymer && Polymer.dom) {
      return Polymer.dom(el).cloneNode(true);
    } else if ($) {
      return $(el).clone(true)[0];
    } else {
      return el.cloneNode(true);
    }
  }
  function getChildContainingRectFromElement(container, options, ghostEl2) {
    var rect = {};
    Array.from(container.children).forEach(function(child) {
      var _rect$left, _rect$top, _rect$right, _rect$bottom;
      if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl2) return;
      var childRect = getRect(child);
      rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
      rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
      rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
      rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
    });
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  var expando = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
  function AnimationStateManager() {
    var animationStates = [], animationCallbackId;
    return {
      captureAnimationState: function captureAnimationState() {
        animationStates = [];
        if (!this.options.animation) return;
        var children = [].slice.call(this.el.children);
        children.forEach(function(child) {
          if (css(child, "display") === "none" || child === Sortable.ghost) return;
          animationStates.push({
            target: child,
            rect: getRect(child)
          });
          var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
          if (child.thisAnimationDuration) {
            var childMatrix = matrix(child, true);
            if (childMatrix) {
              fromRect.top -= childMatrix.f;
              fromRect.left -= childMatrix.e;
            }
          }
          child.fromRect = fromRect;
        });
      },
      addAnimationState: function addAnimationState(state) {
        animationStates.push(state);
      },
      removeAnimationState: function removeAnimationState(target) {
        animationStates.splice(indexOfObject(animationStates, {
          target
        }), 1);
      },
      animateAll: function animateAll(callback) {
        var _this = this;
        if (!this.options.animation) {
          clearTimeout(animationCallbackId);
          if (typeof callback === "function") callback();
          return;
        }
        var animating = false, animationTime = 0;
        animationStates.forEach(function(state) {
          var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
          if (targetMatrix) {
            toRect.top -= targetMatrix.f;
            toRect.left -= targetMatrix.e;
          }
          target.toRect = toRect;
          if (target.thisAnimationDuration) {
            if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
            (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
              time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
            }
          }
          if (!isRectEqual(toRect, fromRect)) {
            target.prevFromRect = fromRect;
            target.prevToRect = toRect;
            if (!time) {
              time = _this.options.animation;
            }
            _this.animate(target, animatingRect, toRect, time);
          }
          if (time) {
            animating = true;
            animationTime = Math.max(animationTime, time);
            clearTimeout(target.animationResetTimer);
            target.animationResetTimer = setTimeout(function() {
              target.animationTime = 0;
              target.prevFromRect = null;
              target.fromRect = null;
              target.prevToRect = null;
              target.thisAnimationDuration = null;
            }, time);
            target.thisAnimationDuration = time;
          }
        });
        clearTimeout(animationCallbackId);
        if (!animating) {
          if (typeof callback === "function") callback();
        } else {
          animationCallbackId = setTimeout(function() {
            if (typeof callback === "function") callback();
          }, animationTime);
        }
        animationStates = [];
      },
      animate: function animate(target, currentRect, toRect, duration) {
        if (duration) {
          css(target, "transition", "");
          css(target, "transform", "");
          var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
          target.animatingX = !!translateX;
          target.animatingY = !!translateY;
          css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
          this.forRepaintDummy = repaint(target);
          css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
          css(target, "transform", "translate3d(0,0,0)");
          typeof target.animated === "number" && clearTimeout(target.animated);
          target.animated = setTimeout(function() {
            css(target, "transition", "");
            css(target, "transform", "");
            target.animated = false;
            target.animatingX = false;
            target.animatingY = false;
          }, duration);
        }
      }
    };
  }
  function repaint(target) {
    return target.offsetWidth;
  }
  function calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
  }
  var plugins = [];
  var defaults = {
    initializeByDefault: true
  };
  var PluginManager = {
    mount: function mount(plugin) {
      for (var option2 in defaults) {
        if (defaults.hasOwnProperty(option2) && !(option2 in plugin)) {
          plugin[option2] = defaults[option2];
        }
      }
      plugins.forEach(function(p) {
        if (p.pluginName === plugin.pluginName) {
          throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
        }
      });
      plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
      var _this = this;
      this.eventCanceled = false;
      evt.cancel = function() {
        _this.eventCanceled = true;
      };
      var eventNameGlobal = eventName + "Global";
      plugins.forEach(function(plugin) {
        if (!sortable[plugin.pluginName]) return;
        if (sortable[plugin.pluginName][eventNameGlobal]) {
          sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
            sortable
          }, evt));
        }
        if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
          sortable[plugin.pluginName][eventName](_objectSpread2({
            sortable
          }, evt));
        }
      });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults2, options) {
      plugins.forEach(function(plugin) {
        var pluginName = plugin.pluginName;
        if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
        var initialized = new plugin(sortable, el, sortable.options);
        initialized.sortable = sortable;
        initialized.options = sortable.options;
        sortable[pluginName] = initialized;
        _extends(defaults2, initialized.defaults);
      });
      for (var option2 in sortable.options) {
        if (!sortable.options.hasOwnProperty(option2)) continue;
        var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
        if (typeof modified !== "undefined") {
          sortable.options[option2] = modified;
        }
      }
    },
    getEventProperties: function getEventProperties(name, sortable) {
      var eventProperties = {};
      plugins.forEach(function(plugin) {
        if (typeof plugin.eventProperties !== "function") return;
        _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
      });
      return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
      var modifiedValue;
      plugins.forEach(function(plugin) {
        if (!sortable[plugin.pluginName]) return;
        if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") {
          modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        }
      });
      return modifiedValue;
    }
  };
  function dispatchEvent(_ref) {
    var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl2 && rootEl2[expando];
    if (!sortable) return;
    var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
    if (window.CustomEvent && !IE11OrLess && !Edge) {
      evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
      });
    } else {
      evt = document.createEvent("Event");
      evt.initEvent(name, true, true);
    }
    evt.to = toEl || rootEl2;
    evt.from = fromEl || rootEl2;
    evt.item = targetEl || rootEl2;
    evt.clone = cloneEl2;
    evt.oldIndex = oldIndex2;
    evt.newIndex = newIndex2;
    evt.oldDraggableIndex = oldDraggableIndex2;
    evt.newDraggableIndex = newDraggableIndex2;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
    var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
    for (var option2 in allEventProperties) {
      evt[option2] = allEventProperties[option2];
    }
    if (rootEl2) {
      rootEl2.dispatchEvent(evt);
    }
    if (options[onName]) {
      options[onName].call(sortable, evt);
    }
  }
  var _excluded = ["evt"];
  var pluginEvent2 = function pluginEvent3(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
    PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
      dragEl,
      parentEl,
      ghostEl,
      rootEl,
      nextEl,
      lastDownEl,
      cloneEl,
      cloneHidden,
      dragStarted: moved,
      putSortable,
      activeSortable: Sortable.active,
      originalEvent,
      oldIndex,
      oldDraggableIndex,
      newIndex,
      newDraggableIndex,
      hideGhostForTarget: _hideGhostForTarget,
      unhideGhostForTarget: _unhideGhostForTarget,
      cloneNowHidden: function cloneNowHidden() {
        cloneHidden = true;
      },
      cloneNowShown: function cloneNowShown() {
        cloneHidden = false;
      },
      dispatchSortableEvent: function dispatchSortableEvent(name) {
        _dispatchEvent({
          sortable,
          name,
          originalEvent
        });
      }
    }, data));
  };
  function _dispatchEvent(info2) {
    dispatchEvent(_objectSpread2({
      putSortable,
      cloneEl,
      targetEl: dragEl,
      rootEl,
      oldIndex,
      oldDraggableIndex,
      newIndex,
      newDraggableIndex
    }, info2));
  }
  var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = false, savedInputChecked = [];
  var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
    if (!documentExists) return;
    if (IE11OrLess) {
      return false;
    }
    var el = document.createElement("x");
    el.style.cssText = "pointer-events:auto";
    return el.style.pointerEvents === "auto";
  }(), _detectDirection = function _detectDirection2(el, options) {
    var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === "flex") {
      return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
    }
    if (elCSS.display === "grid") {
      return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
    }
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
      var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
      return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
    }
    return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
  }, _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
  }, _detectNearestEmptySortable = function _detectNearestEmptySortable2(x, y) {
    var ret;
    sortables.some(function(sortable) {
      var threshold = sortable[expando].options.emptyInsertThreshold;
      if (!threshold || lastChild(sortable)) return;
      var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
      if (insideHorizontally && insideVertically) {
        return ret = sortable;
      }
    });
    return ret;
  }, _prepareGroup = function _prepareGroup2(options) {
    function toFn(value, pull) {
      return function(to, from, dragEl2, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
        if (value == null && (pull || sameGroup)) {
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === "clone") {
          return value;
        } else if (typeof value === "function") {
          return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != "object") {
      originalGroup = {
        name: originalGroup
      };
    }
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  }, _hideGhostForTarget = function _hideGhostForTarget2() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, "display", "none");
    }
  }, _unhideGhostForTarget = function _unhideGhostForTarget2() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, "display", "");
    }
  };
  if (documentExists && !ChromeForAndroid) {
    document.addEventListener("click", function(evt) {
      if (ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        ignoreNextClick = false;
        return false;
      }
    }, true);
  }
  var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
    if (dragEl) {
      evt = evt.touches ? evt.touches[0] : evt;
      var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
      if (nearest) {
        var event = {};
        for (var i in evt) {
          if (evt.hasOwnProperty(i)) {
            event[i] = evt[i];
          }
        }
        event.target = event.rootEl = nearest;
        event.preventDefault = void 0;
        event.stopPropagation = void 0;
        nearest[expando]._onDragOver(event);
      }
    }
  };
  var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
    if (dragEl) {
      dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
    }
  };
  function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) {
      throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
    }
    this.el = el;
    this.options = options = _extends({}, options);
    el[expando] = this;
    var defaults2 = {
      group: null,
      sort: true,
      disabled: false,
      store: null,
      handle: null,
      draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
      swapThreshold: 1,
      // percentage; 0 <= x <= 1
      invertSwap: false,
      // invert always
      invertedSwapThreshold: null,
      // will be set to same as swapThreshold if default
      removeCloneOnHide: true,
      direction: function direction() {
        return _detectDirection(el, this.options);
      },
      ghostClass: "sortable-ghost",
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
      ignore: "a, img",
      filter: null,
      preventOnFilter: true,
      animation: 0,
      easing: null,
      setData: function setData(dataTransfer, dragEl2) {
        dataTransfer.setData("Text", dragEl2.textContent);
      },
      dropBubble: false,
      dragoverBubble: false,
      dataIdAttr: "data-id",
      delay: 0,
      delayOnTouchOnly: false,
      touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
      forceFallback: false,
      fallbackClass: "sortable-fallback",
      fallbackOnBody: false,
      fallbackTolerance: 0,
      fallbackOffset: {
        x: 0,
        y: 0
      },
      supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
      emptyInsertThreshold: 5
    };
    PluginManager.initializePlugins(this, el, defaults2);
    for (var name in defaults2) {
      !(name in options) && (options[name] = defaults2[name]);
    }
    _prepareGroup(options);
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
    this.nativeDraggable = options.forceFallback ? false : supportDraggable;
    if (this.nativeDraggable) {
      this.options.touchStartThreshold = 1;
    }
    if (options.supportPointer) {
      on(el, "pointerdown", this._onTapStart);
    } else {
      on(el, "mousedown", this._onTapStart);
      on(el, "touchstart", this._onTapStart);
    }
    if (this.nativeDraggable) {
      on(el, "dragover", this);
      on(el, "dragenter", this);
    }
    sortables.push(this.el);
    options.store && options.store.get && this.sort(options.store.get(this) || []);
    _extends(this, AnimationStateManager());
  }
  Sortable.prototype = /** @lends Sortable.prototype */
  {
    constructor: Sortable,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
      if (!this.el.contains(target) && target !== this.el) {
        lastTarget = null;
      }
    },
    _getDirection: function _getDirection(evt, target) {
      return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(evt) {
      if (!evt.cancelable) return;
      var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
      _saveInputCheckedState(el);
      if (dragEl) {
        return;
      }
      if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
        return;
      }
      if (originalTarget.isContentEditable) {
        return;
      }
      if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
        return;
      }
      target = closest(target, options.draggable, el, false);
      if (target && target.animated) {
        return;
      }
      if (lastDownEl === target) {
        return;
      }
      oldIndex = index(target);
      oldDraggableIndex = index(target, options.draggable);
      if (typeof filter === "function") {
        if (filter.call(this, evt, target, this)) {
          _dispatchEvent({
            sortable: _this,
            rootEl: originalTarget,
            name: "filter",
            targetEl: target,
            toEl: el,
            fromEl: el
          });
          pluginEvent2("filter", _this, {
            evt
          });
          preventOnFilter && evt.cancelable && evt.preventDefault();
          return;
        }
      } else if (filter) {
        filter = filter.split(",").some(function(criteria) {
          criteria = closest(originalTarget, criteria.trim(), el, false);
          if (criteria) {
            _dispatchEvent({
              sortable: _this,
              rootEl: criteria,
              name: "filter",
              targetEl: target,
              fromEl: el,
              toEl: el
            });
            pluginEvent2("filter", _this, {
              evt
            });
            return true;
          }
        });
        if (filter) {
          preventOnFilter && evt.cancelable && evt.preventDefault();
          return;
        }
      }
      if (options.handle && !closest(originalTarget, options.handle, el, false)) {
        return;
      }
      this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(evt, touch, target) {
      var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
      if (target && !dragEl && target.parentNode === el) {
        var dragRect = getRect(target);
        rootEl = el;
        dragEl = target;
        parentEl = dragEl.parentNode;
        nextEl = dragEl.nextSibling;
        lastDownEl = target;
        activeGroup = options.group;
        Sortable.dragged = dragEl;
        tapEvt = {
          target: dragEl,
          clientX: (touch || evt).clientX,
          clientY: (touch || evt).clientY
        };
        tapDistanceLeft = tapEvt.clientX - dragRect.left;
        tapDistanceTop = tapEvt.clientY - dragRect.top;
        this._lastX = (touch || evt).clientX;
        this._lastY = (touch || evt).clientY;
        dragEl.style["will-change"] = "all";
        dragStartFn = function dragStartFn2() {
          pluginEvent2("delayEnded", _this, {
            evt
          });
          if (Sortable.eventCanceled) {
            _this._onDrop();
            return;
          }
          _this._disableDelayedDragEvents();
          if (!FireFox && _this.nativeDraggable) {
            dragEl.draggable = true;
          }
          _this._triggerDragStart(evt, touch);
          _dispatchEvent({
            sortable: _this,
            name: "choose",
            originalEvent: evt
          });
          toggleClass(dragEl, options.chosenClass, true);
        };
        options.ignore.split(",").forEach(function(criteria) {
          find(dragEl, criteria.trim(), _disableDraggable);
        });
        on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
        on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
        on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
        on(ownerDocument, "mouseup", _this._onDrop);
        on(ownerDocument, "touchend", _this._onDrop);
        on(ownerDocument, "touchcancel", _this._onDrop);
        if (FireFox && this.nativeDraggable) {
          this.options.touchStartThreshold = 4;
          dragEl.draggable = true;
        }
        pluginEvent2("delayStart", this, {
          evt
        });
        if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
          if (Sortable.eventCanceled) {
            this._onDrop();
            return;
          }
          on(ownerDocument, "mouseup", _this._disableDelayedDrag);
          on(ownerDocument, "touchend", _this._disableDelayedDrag);
          on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
          on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
          on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
          options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
          _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
        } else {
          dragStartFn();
        }
      }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
      var touch = e.touches ? e.touches[0] : e;
      if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
        this._disableDelayedDrag();
      }
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
      dragEl && _disableDraggable(dragEl);
      clearTimeout(this._dragStartTimer);
      this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
      var ownerDocument = this.el.ownerDocument;
      off(ownerDocument, "mouseup", this._disableDelayedDrag);
      off(ownerDocument, "touchend", this._disableDelayedDrag);
      off(ownerDocument, "touchcancel", this._disableDelayedDrag);
      off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
      off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
      off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(evt, touch) {
      touch = touch || evt.pointerType == "touch" && evt;
      if (!this.nativeDraggable || touch) {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._onTouchMove);
        } else if (touch) {
          on(document, "touchmove", this._onTouchMove);
        } else {
          on(document, "mousemove", this._onTouchMove);
        }
      } else {
        on(dragEl, "dragend", this);
        on(rootEl, "dragstart", this._onDragStart);
      }
      try {
        if (document.selection) {
          _nextTick(function() {
            document.selection.empty();
          });
        } else {
          window.getSelection().removeAllRanges();
        }
      } catch (err) {
      }
    },
    _dragStarted: function _dragStarted(fallback, evt) {
      awaitingDragStarted = false;
      if (rootEl && dragEl) {
        pluginEvent2("dragStarted", this, {
          evt
        });
        if (this.nativeDraggable) {
          on(document, "dragover", _checkOutsideTargetEl);
        }
        var options = this.options;
        !fallback && toggleClass(dragEl, options.dragClass, false);
        toggleClass(dragEl, options.ghostClass, true);
        Sortable.active = this;
        fallback && this._appendGhost();
        _dispatchEvent({
          sortable: this,
          name: "start",
          originalEvent: evt
        });
      } else {
        this._nulling();
      }
    },
    _emulateDragOver: function _emulateDragOver() {
      if (touchEvt) {
        this._lastX = touchEvt.clientX;
        this._lastY = touchEvt.clientY;
        _hideGhostForTarget();
        var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        var parent = target;
        while (target && target.shadowRoot) {
          target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
          if (target === parent) break;
          parent = target;
        }
        dragEl.parentNode[expando]._isOutsideThisEl(target);
        if (parent) {
          do {
            if (parent[expando]) {
              var inserted = void 0;
              inserted = parent[expando]._onDragOver({
                clientX: touchEvt.clientX,
                clientY: touchEvt.clientY,
                target,
                rootEl: parent
              });
              if (inserted && !this.options.dragoverBubble) {
                break;
              }
            }
            target = parent;
          } while (parent = getParentOrHost(parent));
        }
        _unhideGhostForTarget();
      }
    },
    _onTouchMove: function _onTouchMove(evt) {
      if (tapEvt) {
        var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
        if (!Sortable.active && !awaitingDragStarted) {
          if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
            return;
          }
          this._onDragStart(evt, true);
        }
        if (ghostEl) {
          if (ghostMatrix) {
            ghostMatrix.e += dx - (lastDx || 0);
            ghostMatrix.f += dy - (lastDy || 0);
          } else {
            ghostMatrix = {
              a: 1,
              b: 0,
              c: 0,
              d: 1,
              e: dx,
              f: dy
            };
          }
          var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
          css(ghostEl, "webkitTransform", cssMatrix);
          css(ghostEl, "mozTransform", cssMatrix);
          css(ghostEl, "msTransform", cssMatrix);
          css(ghostEl, "transform", cssMatrix);
          lastDx = dx;
          lastDy = dy;
          touchEvt = touch;
        }
        evt.cancelable && evt.preventDefault();
      }
    },
    _appendGhost: function _appendGhost() {
      if (!ghostEl) {
        var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
        if (PositionGhostAbsolutely) {
          ghostRelativeParent = container;
          while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
            ghostRelativeParent = ghostRelativeParent.parentNode;
          }
          if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
            if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
            rect.top += ghostRelativeParent.scrollTop;
            rect.left += ghostRelativeParent.scrollLeft;
          } else {
            ghostRelativeParent = getWindowScrollingElement();
          }
          ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
        }
        ghostEl = dragEl.cloneNode(true);
        toggleClass(ghostEl, options.ghostClass, false);
        toggleClass(ghostEl, options.fallbackClass, true);
        toggleClass(ghostEl, options.dragClass, true);
        css(ghostEl, "transition", "");
        css(ghostEl, "transform", "");
        css(ghostEl, "box-sizing", "border-box");
        css(ghostEl, "margin", 0);
        css(ghostEl, "top", rect.top);
        css(ghostEl, "left", rect.left);
        css(ghostEl, "width", rect.width);
        css(ghostEl, "height", rect.height);
        css(ghostEl, "opacity", "0.8");
        css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
        css(ghostEl, "zIndex", "100000");
        css(ghostEl, "pointerEvents", "none");
        Sortable.ghost = ghostEl;
        container.appendChild(ghostEl);
        css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
      }
    },
    _onDragStart: function _onDragStart(evt, fallback) {
      var _this = this;
      var dataTransfer = evt.dataTransfer;
      var options = _this.options;
      pluginEvent2("dragStart", this, {
        evt
      });
      if (Sortable.eventCanceled) {
        this._onDrop();
        return;
      }
      pluginEvent2("setupClone", this);
      if (!Sortable.eventCanceled) {
        cloneEl = clone(dragEl);
        cloneEl.removeAttribute("id");
        cloneEl.draggable = false;
        cloneEl.style["will-change"] = "";
        this._hideClone();
        toggleClass(cloneEl, this.options.chosenClass, false);
        Sortable.clone = cloneEl;
      }
      _this.cloneId = _nextTick(function() {
        pluginEvent2("clone", _this);
        if (Sortable.eventCanceled) return;
        if (!_this.options.removeCloneOnHide) {
          rootEl.insertBefore(cloneEl, dragEl);
        }
        _this._hideClone();
        _dispatchEvent({
          sortable: _this,
          name: "clone"
        });
      });
      !fallback && toggleClass(dragEl, options.dragClass, true);
      if (fallback) {
        ignoreNextClick = true;
        _this._loopId = setInterval(_this._emulateDragOver, 50);
      } else {
        off(document, "mouseup", _this._onDrop);
        off(document, "touchend", _this._onDrop);
        off(document, "touchcancel", _this._onDrop);
        if (dataTransfer) {
          dataTransfer.effectAllowed = "move";
          options.setData && options.setData.call(_this, dataTransfer, dragEl);
        }
        on(document, "drop", _this);
        css(dragEl, "transform", "translateZ(0)");
      }
      awaitingDragStarted = true;
      _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
      on(document, "selectstart", _this);
      moved = true;
      if (Safari) {
        css(document.body, "user-select", "none");
      }
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(evt) {
      var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
      if (_silent) return;
      function dragOverEvent(name, extra) {
        pluginEvent2(name, _this, _objectSpread2({
          evt,
          isOwner,
          axis: vertical ? "vertical" : "horizontal",
          revert,
          dragRect,
          targetRect,
          canSort,
          fromSortable,
          target,
          completed,
          onMove: function onMove(target2, after2) {
            return _onMove(rootEl, el, dragEl, dragRect, target2, getRect(target2), evt, after2);
          },
          changed
        }, extra));
      }
      function capture() {
        dragOverEvent("dragOverAnimationCapture");
        _this.captureAnimationState();
        if (_this !== fromSortable) {
          fromSortable.captureAnimationState();
        }
      }
      function completed(insertion) {
        dragOverEvent("dragOverCompleted", {
          insertion
        });
        if (insertion) {
          if (isOwner) {
            activeSortable._hideClone();
          } else {
            activeSortable._showClone(_this);
          }
          if (_this !== fromSortable) {
            toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
            toggleClass(dragEl, options.ghostClass, true);
          }
          if (putSortable !== _this && _this !== Sortable.active) {
            putSortable = _this;
          } else if (_this === Sortable.active && putSortable) {
            putSortable = null;
          }
          if (fromSortable === _this) {
            _this._ignoreWhileAnimating = target;
          }
          _this.animateAll(function() {
            dragOverEvent("dragOverAnimationComplete");
            _this._ignoreWhileAnimating = null;
          });
          if (_this !== fromSortable) {
            fromSortable.animateAll();
            fromSortable._ignoreWhileAnimating = null;
          }
        }
        if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
          lastTarget = null;
        }
        if (!options.dragoverBubble && !evt.rootEl && target !== document) {
          dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
          !insertion && nearestEmptyInsertDetectEvent(evt);
        }
        !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
        return completedFired = true;
      }
      function changed() {
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        _dispatchEvent({
          sortable: _this,
          name: "change",
          toEl: el,
          newIndex,
          newDraggableIndex,
          originalEvent: evt
        });
      }
      if (evt.preventDefault !== void 0) {
        evt.cancelable && evt.preventDefault();
      }
      target = closest(target, options.draggable, el, true);
      dragOverEvent("dragOver");
      if (Sortable.eventCanceled) return completedFired;
      if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
        return completed(false);
      }
      ignoreNextClick = false;
      if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
        vertical = this._getDirection(evt, target) === "vertical";
        dragRect = getRect(dragEl);
        dragOverEvent("dragOverValid");
        if (Sortable.eventCanceled) return completedFired;
        if (revert) {
          parentEl = rootEl;
          capture();
          this._hideClone();
          dragOverEvent("revert");
          if (!Sortable.eventCanceled) {
            if (nextEl) {
              rootEl.insertBefore(dragEl, nextEl);
            } else {
              rootEl.appendChild(dragEl);
            }
          }
          return completed(true);
        }
        var elLastChild = lastChild(el, options.draggable);
        if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
          if (elLastChild === dragEl) {
            return completed(false);
          }
          if (elLastChild && el === evt.target) {
            target = elLastChild;
          }
          if (target) {
            targetRect = getRect(target);
          }
          if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
            capture();
            if (elLastChild && elLastChild.nextSibling) {
              el.insertBefore(dragEl, elLastChild.nextSibling);
            } else {
              el.appendChild(dragEl);
            }
            parentEl = el;
            changed();
            return completed(true);
          }
        } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
          var firstChild = getChild(el, 0, options, true);
          if (firstChild === dragEl) {
            return completed(false);
          }
          target = firstChild;
          targetRect = getRect(target);
          if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
            capture();
            el.insertBefore(dragEl, firstChild);
            parentEl = el;
            changed();
            return completed(true);
          }
        } else if (target.parentNode === el) {
          targetRect = getRect(target);
          var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
          if (lastTarget !== target) {
            targetBeforeFirstSwap = targetRect[side1];
            pastFirstInvertThresh = false;
            isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
          }
          direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
          var sibling;
          if (direction !== 0) {
            var dragIndex = index(dragEl);
            do {
              dragIndex -= direction;
              sibling = parentEl.children[dragIndex];
            } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
          }
          if (direction === 0 || sibling === target) {
            return completed(false);
          }
          lastTarget = target;
          lastDirection = direction;
          var nextSibling = target.nextElementSibling, after = false;
          after = direction === 1;
          var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
          if (moveVector !== false) {
            if (moveVector === 1 || moveVector === -1) {
              after = moveVector === 1;
            }
            _silent = true;
            setTimeout(_unsilent, 30);
            capture();
            if (after && !nextSibling) {
              el.appendChild(dragEl);
            } else {
              target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
            }
            if (scrolledPastTop) {
              scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
            }
            parentEl = dragEl.parentNode;
            if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
              targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
            }
            changed();
            return completed(true);
          }
        }
        if (el.contains(dragEl)) {
          return completed(false);
        }
      }
      return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
      off(document, "mousemove", this._onTouchMove);
      off(document, "touchmove", this._onTouchMove);
      off(document, "pointermove", this._onTouchMove);
      off(document, "dragover", nearestEmptyInsertDetectEvent);
      off(document, "mousemove", nearestEmptyInsertDetectEvent);
      off(document, "touchmove", nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
      var ownerDocument = this.el.ownerDocument;
      off(ownerDocument, "mouseup", this._onDrop);
      off(ownerDocument, "touchend", this._onDrop);
      off(ownerDocument, "pointerup", this._onDrop);
      off(ownerDocument, "touchcancel", this._onDrop);
      off(document, "selectstart", this);
    },
    _onDrop: function _onDrop(evt) {
      var el = this.el, options = this.options;
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      pluginEvent2("drop", this, {
        evt
      });
      parentEl = dragEl && dragEl.parentNode;
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      if (Sortable.eventCanceled) {
        this._nulling();
        return;
      }
      awaitingDragStarted = false;
      isCircumstantialInvert = false;
      pastFirstInvertThresh = false;
      clearInterval(this._loopId);
      clearTimeout(this._dragStartTimer);
      _cancelNextTick(this.cloneId);
      _cancelNextTick(this._dragStartId);
      if (this.nativeDraggable) {
        off(document, "drop", this);
        off(el, "dragstart", this._onDragStart);
      }
      this._offMoveEvents();
      this._offUpEvents();
      if (Safari) {
        css(document.body, "user-select", "");
      }
      css(dragEl, "transform", "");
      if (evt) {
        if (moved) {
          evt.cancelable && evt.preventDefault();
          !options.dropBubble && evt.stopPropagation();
        }
        ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
        if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
          cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
        }
        if (dragEl) {
          if (this.nativeDraggable) {
            off(dragEl, "dragend", this);
          }
          _disableDraggable(dragEl);
          dragEl.style["will-change"] = "";
          if (moved && !awaitingDragStarted) {
            toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
          }
          toggleClass(dragEl, this.options.chosenClass, false);
          _dispatchEvent({
            sortable: this,
            name: "unchoose",
            toEl: parentEl,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: evt
          });
          if (rootEl !== parentEl) {
            if (newIndex >= 0) {
              _dispatchEvent({
                rootEl: parentEl,
                name: "add",
                toEl: parentEl,
                fromEl: rootEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "remove",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                rootEl: parentEl,
                name: "sort",
                toEl: parentEl,
                fromEl: rootEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
            putSortable && putSortable.save();
          } else {
            if (newIndex !== oldIndex) {
              if (newIndex >= 0) {
                _dispatchEvent({
                  sortable: this,
                  name: "update",
                  toEl: parentEl,
                  originalEvent: evt
                });
                _dispatchEvent({
                  sortable: this,
                  name: "sort",
                  toEl: parentEl,
                  originalEvent: evt
                });
              }
            }
          }
          if (Sortable.active) {
            if (newIndex == null || newIndex === -1) {
              newIndex = oldIndex;
              newDraggableIndex = oldDraggableIndex;
            }
            _dispatchEvent({
              sortable: this,
              name: "end",
              toEl: parentEl,
              originalEvent: evt
            });
            this.save();
          }
        }
      }
      this._nulling();
    },
    _nulling: function _nulling() {
      pluginEvent2("nulling", this);
      rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
      savedInputChecked.forEach(function(el) {
        el.checked = true;
      });
      savedInputChecked.length = lastDx = lastDy = 0;
    },
    handleEvent: function handleEvent(evt) {
      switch (evt.type) {
        case "drop":
        case "dragend":
          this._onDrop(evt);
          break;
        case "dragenter":
        case "dragover":
          if (dragEl) {
            this._onDragOver(evt);
            _globalDragOver(evt);
          }
          break;
        case "selectstart":
          evt.preventDefault();
          break;
      }
    },
    /**
     * Serializes the item into an array of string.
     * @returns {String[]}
     */
    toArray: function toArray() {
      var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
      for (; i < n; i++) {
        el = children[i];
        if (closest(el, options.draggable, this.el, false)) {
          order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
      }
      return order;
    },
    /**
     * Sorts the elements according to the array.
     * @param  {String[]}  order  order of the items
     */
    sort: function sort2(order, useAnimation) {
      var items = {}, rootEl2 = this.el;
      this.toArray().forEach(function(id, i) {
        var el = rootEl2.children[i];
        if (closest(el, this.options.draggable, rootEl2, false)) {
          items[id] = el;
        }
      }, this);
      useAnimation && this.captureAnimationState();
      order.forEach(function(id) {
        if (items[id]) {
          rootEl2.removeChild(items[id]);
          rootEl2.appendChild(items[id]);
        }
      });
      useAnimation && this.animateAll();
    },
    /**
     * Save the current sorting
     */
    save: function save() {
      var store = this.options.store;
      store && store.set && store.set(this);
    },
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param   {HTMLElement}  el
     * @param   {String}       [selector]  default: `options.draggable`
     * @returns {HTMLElement|null}
     */
    closest: function closest$1(el, selector) {
      return closest(el, selector || this.options.draggable, this.el, false);
    },
    /**
     * Set/get option
     * @param   {string} name
     * @param   {*}      [value]
     * @returns {*}
     */
    option: function option(name, value) {
      var options = this.options;
      if (value === void 0) {
        return options[name];
      } else {
        var modifiedValue = PluginManager.modifyOption(this, name, value);
        if (typeof modifiedValue !== "undefined") {
          options[name] = modifiedValue;
        } else {
          options[name] = value;
        }
        if (name === "group") {
          _prepareGroup(options);
        }
      }
    },
    /**
     * Destroy
     */
    destroy: function destroy() {
      pluginEvent2("destroy", this);
      var el = this.el;
      el[expando] = null;
      off(el, "mousedown", this._onTapStart);
      off(el, "touchstart", this._onTapStart);
      off(el, "pointerdown", this._onTapStart);
      if (this.nativeDraggable) {
        off(el, "dragover", this);
        off(el, "dragenter", this);
      }
      Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el2) {
        el2.removeAttribute("draggable");
      });
      this._onDrop();
      this._disableDelayedDragEvents();
      sortables.splice(sortables.indexOf(this.el), 1);
      this.el = el = null;
    },
    _hideClone: function _hideClone() {
      if (!cloneHidden) {
        pluginEvent2("hideClone", this);
        if (Sortable.eventCanceled) return;
        css(cloneEl, "display", "none");
        if (this.options.removeCloneOnHide && cloneEl.parentNode) {
          cloneEl.parentNode.removeChild(cloneEl);
        }
        cloneHidden = true;
      }
    },
    _showClone: function _showClone(putSortable2) {
      if (putSortable2.lastPutMode !== "clone") {
        this._hideClone();
        return;
      }
      if (cloneHidden) {
        pluginEvent2("showClone", this);
        if (Sortable.eventCanceled) return;
        if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
          rootEl.insertBefore(cloneEl, dragEl);
        } else if (nextEl) {
          rootEl.insertBefore(cloneEl, nextEl);
        } else {
          rootEl.appendChild(cloneEl);
        }
        if (this.options.group.revertClone) {
          this.animate(dragEl, cloneEl);
        }
        css(cloneEl, "display", "");
        cloneHidden = false;
      }
    }
  };
  function _globalDragOver(evt) {
    if (evt.dataTransfer) {
      evt.dataTransfer.dropEffect = "move";
    }
    evt.cancelable && evt.preventDefault();
  }
  function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
    if (window.CustomEvent && !IE11OrLess && !Edge) {
      evt = new CustomEvent("move", {
        bubbles: true,
        cancelable: true
      });
    } else {
      evt = document.createEvent("Event");
      evt.initEvent("move", true, true);
    }
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl2;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) {
      retVal = onMoveFn.call(sortable, evt, originalEvent);
    }
    return retVal;
  }
  function _disableDraggable(el) {
    el.draggable = false;
  }
  function _unsilent() {
    _silent = false;
  }
  function _ghostIsFirst(evt, vertical, sortable) {
    var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
    var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
    var spacer = 10;
    return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
  }
  function _ghostIsLast(evt, vertical, sortable) {
    var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
    var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
    var spacer = 10;
    return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
  }
  function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
    if (!invertSwap) {
      if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
        if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
          pastFirstInvertThresh = true;
        }
        if (!pastFirstInvertThresh) {
          if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
            return -lastDirection;
          }
        } else {
          invert = true;
        }
      } else {
        if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
          return _getInsertDirection(target);
        }
      }
    }
    invert = invert || invertSwap;
    if (invert) {
      if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
        return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
      }
    }
    return 0;
  }
  function _getInsertDirection(target) {
    if (index(dragEl) < index(target)) {
      return 1;
    } else {
      return -1;
    }
  }
  function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
    while (i--) {
      sum += str.charCodeAt(i);
    }
    return sum.toString(36);
  }
  function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName("input");
    var idx = inputs.length;
    while (idx--) {
      var el = inputs[idx];
      el.checked && savedInputChecked.push(el);
    }
  }
  function _nextTick(fn) {
    return setTimeout(fn, 0);
  }
  function _cancelNextTick(id) {
    return clearTimeout(id);
  }
  if (documentExists) {
    on(document, "touchmove", function(evt) {
      if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
        evt.preventDefault();
      }
    });
  }
  Sortable.utils = {
    on,
    off,
    css,
    find,
    is: function is2(el, selector) {
      return !!closest(el, selector, el, false);
    },
    extend,
    throttle,
    closest,
    toggleClass,
    clone,
    index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild,
    expando
  };
  Sortable.get = function(element) {
    return element[expando];
  };
  Sortable.mount = function() {
    for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins2[_key] = arguments[_key];
    }
    if (plugins2[0].constructor === Array) plugins2 = plugins2[0];
    plugins2.forEach(function(plugin) {
      if (!plugin.prototype || !plugin.prototype.constructor) {
        throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
      }
      if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
      PluginManager.mount(plugin);
    });
  };
  Sortable.create = function(el, options) {
    return new Sortable(el, options);
  };
  Sortable.version = version;
  var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
  function AutoScrollPlugin() {
    function AutoScroll() {
      this.defaults = {
        scroll: true,
        forceAutoScrollFallback: false,
        scrollSensitivity: 30,
        scrollSpeed: 10,
        bubbleScroll: true
      };
      for (var fn in this) {
        if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
          this[fn] = this[fn].bind(this);
        }
      }
    }
    AutoScroll.prototype = {
      dragStarted: function dragStarted(_ref) {
        var originalEvent = _ref.originalEvent;
        if (this.sortable.nativeDraggable) {
          on(document, "dragover", this._handleAutoScroll);
        } else {
          if (this.options.supportPointer) {
            on(document, "pointermove", this._handleFallbackAutoScroll);
          } else if (originalEvent.touches) {
            on(document, "touchmove", this._handleFallbackAutoScroll);
          } else {
            on(document, "mousemove", this._handleFallbackAutoScroll);
          }
        }
      },
      dragOverCompleted: function dragOverCompleted(_ref2) {
        var originalEvent = _ref2.originalEvent;
        if (!this.options.dragOverBubble && !originalEvent.rootEl) {
          this._handleAutoScroll(originalEvent);
        }
      },
      drop: function drop3() {
        if (this.sortable.nativeDraggable) {
          off(document, "dragover", this._handleAutoScroll);
        } else {
          off(document, "pointermove", this._handleFallbackAutoScroll);
          off(document, "touchmove", this._handleFallbackAutoScroll);
          off(document, "mousemove", this._handleFallbackAutoScroll);
        }
        clearPointerElemChangedInterval();
        clearAutoScrolls();
        cancelThrottle();
      },
      nulling: function nulling() {
        touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
        autoScrolls.length = 0;
      },
      _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
        this._handleAutoScroll(evt, true);
      },
      _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
        var _this = this;
        var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
        touchEvt$1 = evt;
        if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
          autoScroll(evt, this.options, elem, fallback);
          var ogElemScroller = getParentAutoScrollElement(elem, true);
          if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
            pointerElemChangedInterval && clearPointerElemChangedInterval();
            pointerElemChangedInterval = setInterval(function() {
              var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
              if (newElem !== ogElemScroller) {
                ogElemScroller = newElem;
                clearAutoScrolls();
              }
              autoScroll(evt, _this.options, newElem, fallback);
            }, 10);
            lastAutoScrollX = x;
            lastAutoScrollY = y;
          }
        } else {
          if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
            clearAutoScrolls();
            return;
          }
          autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
        }
      }
    };
    return _extends(AutoScroll, {
      pluginName: "scroll",
      initializeByDefault: true
    });
  }
  function clearAutoScrolls() {
    autoScrolls.forEach(function(autoScroll2) {
      clearInterval(autoScroll2.pid);
    });
    autoScrolls = [];
  }
  function clearPointerElemChangedInterval() {
    clearInterval(pointerElemChangedInterval);
  }
  var autoScroll = throttle(function(evt, options, rootEl2, isFallback) {
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
    var scrollThisInstance = false, scrollCustomFn;
    if (scrollRootEl !== rootEl2) {
      scrollRootEl = rootEl2;
      clearAutoScrolls();
      scrollEl = options.scroll;
      scrollCustomFn = options.scrollFn;
      if (scrollEl === true) {
        scrollEl = getParentAutoScrollElement(rootEl2, true);
      }
    }
    var layersOut = 0;
    var currentParent = scrollEl;
    do {
      var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
      if (el === winScroller) {
        canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
        canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
      } else {
        canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
        canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
      }
      var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
      var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
      if (!autoScrolls[layersOut]) {
        for (var i = 0; i <= layersOut; i++) {
          if (!autoScrolls[i]) {
            autoScrolls[i] = {};
          }
        }
      }
      if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
        autoScrolls[layersOut].el = el;
        autoScrolls[layersOut].vx = vx;
        autoScrolls[layersOut].vy = vy;
        clearInterval(autoScrolls[layersOut].pid);
        if (vx != 0 || vy != 0) {
          scrollThisInstance = true;
          autoScrolls[layersOut].pid = setInterval((function() {
            if (isFallback && this.layer === 0) {
              Sortable.active._onTouchMove(touchEvt$1);
            }
            var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
            var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
            if (typeof scrollCustomFn === "function") {
              if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
                return;
              }
            }
            scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
          }).bind({
            layer: layersOut
          }), 24);
        }
      }
      layersOut++;
    } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
    scrolling = scrollThisInstance;
  }, 30);
  var drop = function drop2(_ref) {
    var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable2 || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();
    if (toSortable && !toSortable.el.contains(target)) {
      dispatchSortableEvent("spill");
      this.onSpill({
        dragEl: dragEl2,
        putSortable: putSortable2
      });
    }
  };
  function Revert() {
  }
  Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
      var oldDraggableIndex2 = _ref2.oldDraggableIndex;
      this.startIndex = oldDraggableIndex2;
    },
    onSpill: function onSpill(_ref3) {
      var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
      this.sortable.captureAnimationState();
      if (putSortable2) {
        putSortable2.captureAnimationState();
      }
      var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
      if (nextSibling) {
        this.sortable.el.insertBefore(dragEl2, nextSibling);
      } else {
        this.sortable.el.appendChild(dragEl2);
      }
      this.sortable.animateAll();
      if (putSortable2) {
        putSortable2.animateAll();
      }
    },
    drop
  };
  _extends(Revert, {
    pluginName: "revertOnSpill"
  });
  function Remove() {
  }
  Remove.prototype = {
    onSpill: function onSpill2(_ref4) {
      var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
      var parentSortable = putSortable2 || this.sortable;
      parentSortable.captureAnimationState();
      dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
      parentSortable.animateAll();
    },
    drop
  };
  _extends(Remove, {
    pluginName: "removeOnSpill"
  });
  Sortable.mount(new AutoScrollPlugin());
  Sortable.mount(Remove, Revert);
  function querySelector(selectors, isPromise, timeout = 100) {
    let element = document.querySelector(selectors);
    if (isUndefined(isPromise)) {
      return element;
    } else if (isBoolean(isPromise)) {
      if (isPromise) {
        return element ? Promise.resolve(element) : Promise.reject(selectors + " is not found");
      }
      return element;
    } else if (element) {
      return Promise.resolve(element);
    } else if (isPromise > 0) {
      return new Promise((resolve, reject) => {
        const timer = setInterval(() => {
          element = document.querySelector(selectors);
          if (element) {
            resolve(element);
            clearInterval(timer);
          } else if (--isPromise <= 0) {
            reject(selectors + " is not found");
            clearInterval(timer);
          }
        }, timeout);
      });
    } else {
      return Promise.reject(selectors + " is not found");
    }
  }
  const complementZero = (payload, maxLength = 2) => {
    if (isString(payload)) {
      payload = parseInt(payload);
      if (isNaN(payload)) {
        return "";
      }
    }
    return "0".repeat(maxLength - (payload + "").length) + payload;
  };
  class Provider {
    constructor() {
      // 显示加载
      __publicField(this, "isLoading", false);
      // 更新加载中
      __publicField(this, "isUpdateLoading", false);
      // 控制加载中
      __publicField(this, "isControlLoading", false);
      // 预览加载中
      __publicField(this, "isPreviewLoading", false);
      // 主面板显示控制
      __publicField(this, "visible", false);
      // 替换参数
      __publicField(this, "replaceParams", new ReplaceParams({
        onUpdateHandler: () => this._onReplaceParamsUpdate.call(this),
        onChangeHandler: (key, data) => this._onReplaceParamsChange.call(this, key, data)
      }));
      // 替换参数禁用
      __publicField(this, "replaceParamsDisabled", false);
      // 原始文件列表数据
      __publicField(this, "originList", []);
      // 当前文件列表数据
      __publicField(this, "_currentList", []);
      // 空名计数
      __publicField(this, "_emptyCount", 0);
      // 错误计数
      __publicField(this, "_errorCount", 0);
      // 重复计数
      __publicField(this, "_repeatCount", 0);
      // 变更计数
      __publicField(this, "_changeCount", 0);
      // 匹配计数
      __publicField(this, "_matchedCount", 0);
      // 状态计数
      __publicField(this, "_failStatusCount", 0);
      __publicField(this, "_readyStatusCount", 0);
      __publicField(this, "_pendingStatusCount", 0);
      __publicField(this, "_successStatusCount", 0);
      // 是否有错误
      __publicField(this, "hasError", false);
      // 是否有变更
      __publicField(this, "hasChange", false);
      // 是否全选
      __publicField(this, "hasCheckedAll", false);
      // 是否全不选
      __publicField(this, "hasUncheckedAll", false);
      // 是否可继续
      __publicField(this, "shouldContinue", false);
      // 状态列表
      __publicField(this, "statusList", []);
      // 文件列表更新回调函数集合
      __publicField(this, "_currentListUpdateHandlerSet", /* @__PURE__ */ new Set());
      // 未选中的文件列表
      __publicField(this, "_uncheckedList", /* @__PURE__ */ new Set());
      // 初始化拖动排序
      __publicField(this, "_sortableInstance", null);
      // 排序
      __publicField(this, "_indexMap", /* @__PURE__ */ new Map());
      // 区间选择：上一次点击的行索引（用于 Shift 区间选择）
      __publicField(this, "_lastClickIndex", -1);
      // 滑动选择：是否正在拖动选择
      __publicField(this, "_isDragSelecting", false);
      // 滑动选择：拖动起点行索引
      __publicField(this, "_dragStartIndex", -1);
      // 滑动选择：拖动时设置的值（true=选中，false=取消）
      __publicField(this, "_dragSelectValue", false);
      // 滑动选择：节流更新定时器
      __publicField(this, "_selectionUpdateTimer", null);
      // 重命名历史列表（懒加载，避免 constructor 里调用方法可能引发的环境问题）
      __publicField(this, "_historyList", []);
    }
    // 匹配测试
    static test() {
      return false;
    }
    setVisible(val = false) {
      // 修复：原来只要任一 loading 标志残留为 true，面板就连关都关不掉；
      // 打开时也不会复位残留状态，导致"应用"一直是灰的。
      // 现在打开面板 = 一次彻底的状态复位，保证进来就能点。
      if (val) {
        this.isLoading = false;
        this.isUpdateLoading = false;
        this.isControlLoading = false;
        this.isPreviewLoading = false;
        this.replaceParamsDisabled = false;
        if (this._renameWatchdog) {
          clearTimeout(this._renameWatchdog);
          this._renameWatchdog = null;
        }
      } else if (this.isLoading || this.isUpdateLoading || this.isControlLoading || this.isPreviewLoading) {
        // 关闭时如果有任务在跑，允许关闭但复位标志，避免永久锁死
        this.isLoading = false;
        this.isUpdateLoading = false;
        this.isControlLoading = false;
        this.isPreviewLoading = false;
      }
      this.visible = val;
      if (val) {
        try {
          this._updateStatus();
        } catch (e) { /* 忽略 */ }
        this._updateOriginList().then(() => {
          this._initDragSort();
        }).catch(() => { /* 忽略 */ });
      } else {
        this._destroyDragSort();
      }
    }
    // 替换参数更新回调函数
    _onReplaceParamsUpdate() {
      this._updateCurrentList();
    }
    _onReplaceParamsChange(key, data) {
      if (key === "sortChecked") {
        this._onSortCheckedChange(data[key]);
      }
    }
    // 重置替换参数
    _resetReplaceParams() {
      this.replaceParams.reset();
    }
    // 更新原始文件列表数据
    _updateOriginList() {
      this.isLoading = true;
      this._clearIndexMap();
      this._clearUncheckedList();
      // 修复：getOriginList 内部有分页轮询，可能永远不 resolve（页面改版/接口挂起），
      // 这里加超时兜底，保证"重置"等操作不会永久无响应。
      // 因为现在会翻页加载全部（不再卡 500），超时相应放宽到 45 秒。
      return this._withTimeout(this.getOriginList(), 45000, "获取文件列表超时").then((res) => {
        this._clearIndexMap();
        this.isLoading = false;
        this.originList = Array.isArray(res) ? res : [];
        this._initListItemIndex();
        return this._updateCurrentList();
      }).catch(() => {
        this._clearIndexMap();
        this.isLoading = false;
        // 修复：刷新失败时保留已有列表，不要清空（否则面板会变成空列表 + 按钮全灰）
        this.originList = Array.isArray(this.originList) ? this.originList : [];
        try {
          this._initListItemIndex();
          this._updateCurrentList();
        } catch (e) { /* 忽略 */ }
        return this.originList;
      });
    }
    // 通用超时包装：避免任何 await/while 轮询无限挂起
    _withTimeout(promise, ms, msg) {
      return new Promise((resolve, reject) => {
        let settled = false;
        const timer = setTimeout(() => {
          if (settled) return;
          settled = true;
          reject(new Error(msg || "操作超时"));
        }, ms);
        Promise.resolve(promise).then((v) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          resolve(v);
        }, (e) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          reject(e);
        });
      });
    }
    get currentList() {
      // 修复：对外永远返回数组，避免调用方 .filter/.length 时炸空指针
      return Array.isArray(this._currentList) ? this._currentList : [];
    }
    // 更新当前文件列表数据
    _updateCurrentList() {
      // 修复：originList 理论上可能为 null/undefined（接口失败、搜索异常等），
      // 直接 .map 会抛错并冒泡到 Vue 渲染流程，导致"重置/应用点了没反应"。
      if (!Array.isArray(this.originList)) this.originList = [];
      if (!this._uncheckedList) this._uncheckedList = /* @__PURE__ */ new Set();
      try {
        return this._updateCurrentListInner();
      } catch (e) {
        if (!this._listErrorLogged) {
          this._listErrorLogged = true;
          console.warn("[网盘重命名] 列表计算出错（已忽略，保留原列表）:", e);
        }
        this._currentList = Array.isArray(this._currentList) ? this._currentList : [];
        try {
          this._updateStatus();
        } catch (e2) { /* 忽略 */ }
        return this._currentList;
      }
    }
    _updateCurrentListInner() {
      // 每次重算前重置 diff 预算（防止全盘上万条时卡死）
      this._diffBudget = 3000;
      const renameMode = this.replaceParams.renameMode;
      let result = this.originList.map((item) => {
        return {
          id: item.id,
          ext: item.ext,
          path: item.path,
          isFolder: item.isFolder,
          index: this._getListItemIndex(item.id),
          status: LIST_ITEM_STATUS_NONE,
          isEmpty: false,
          isError: false,
          isRepeat: false,
          fileName: item.fileName,
          isChange: false,
          isMatched: true,
          isChecked: !this._uncheckedList.has(item.id),
          isLoading: false,
          oldFileName: item.fullFileName,
          newFileName: "",
          displayIndex: this._getListItemDisplayIndex(item.id)
        };
      });
      result = result.sort((a, b) => a.index - b.index);
      const newFileNameSet = /* @__PURE__ */ new Set();
      if (renameMode === RENAME_MODE_SERIES) {
        if (this.replaceParams.title || this.replaceParams.season) {
          const season = this.replaceParams.season ? ".S" + complementZero(this.replaceParams.season) : "";
          result.forEach((item) => {
            // 修复：文件夹没有扩展名，系列模式只做标题/季数前缀（若用户给了），不追加 .Sxx.Eyy 集数后缀
            if (item.isFolder) {
              item.newFileName = (this.replaceParams.title || item.fileName) + season;
              item.newFileName = item.newFileName.trim();
              this._listItemGeneralMethod(item, newFileNameSet);
              return;
            }
            const fileName = this.replaceParams.title || item.fileName;
            let newFileName = fileName + season;
            if (this.replaceParams.autoEpisode && isNumber(item.displayIndex)) {
              const episode = (season ? "" : ".") + "E" + complementZero(item.displayIndex);
              newFileName += episode;
            }
            newFileName += "." + item.ext;
            item.newFileName = newFileName.trim();
            this._listItemGeneralMethod(item, newFileNameSet);
          });
        }
      }
      if (renameMode === RENAME_MODE_PATTERN) {
        let regexp2;
        if (this.replaceParams.pattern) {
          let pattern2 = this.replaceParams.pattern;
          // 修复：默认"转义特殊字符"——用户填 "[广告词]" 期望精确删除该字符串，而正则里 [...] 是字符类
          if (this.replaceParams.autoEscape) {
            pattern2 = pattern2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          try {
            regexp2 = new RegExp(pattern2, "g");
          } catch (error2) {
            console.error("regexp error", error2);
          }
          if (regexp2) {
            result.forEach((item) => {
              // 修复：带 `g` 标志的正则对象，lastIndex 会在 test/replace 后被修改。
              // 同一 regexp2 复用会跳过字符，导致匹配/替换错乱。每次使用前必须重置 lastIndex = 0。
              if (this.replaceParams.autoEpisode) {
                regexp2.lastIndex = 0;
                item.isMatched = !!(regexp2 == null ? void 0 : regexp2.test(item.fileName));
                if (item.isMatched) {
                  regexp2.lastIndex = 0;
                  let newFileName = item.fileName.replace(
                    regexp2,
                    this.replaceParams.replace
                  );
                  // 修复：文件夹无扩展名，不追加 .E集数、也不追加 .ext
                  if (!item.isFolder && isNumber(item.displayIndex)) {
                    newFileName += (newFileName ? ".E" : "E") + complementZero(item.displayIndex);
                  }
                  if (!item.isFolder && newFileName) {
                    newFileName += "." + item.ext;
                  }
                  item.newFileName = newFileName.trim();
                  this._listItemGeneralMethod(item, newFileNameSet);
                }
              } else {
                regexp2.lastIndex = 0;
                item.isMatched = !!(regexp2 == null ? void 0 : regexp2.test(item.oldFileName));
                if (item.isMatched) {
                  regexp2.lastIndex = 0;
                  item.newFileName = item.oldFileName.replace(
                    regexp2,
                    this.replaceParams.replace
                  );
                  this._listItemGeneralMethod(item, newFileNameSet);
                }
              }
            });
          }
        }
      }
      // 修复：重命名后如果出现重复文件名，自动保留第一个、取消其余（避免 API 冲突报错）
      this._autoCancelRepeat(result);
      this._currentList = result;
      this._updateStatus();
      this._emitCurrentListUpdateHandler();
      return result;
    }
    // 重复文件名自动处理：保留第一个，取消其余重复项的选中（但仍标记 isRepeat 提示）
    // 修复：原来只比较"新文件名"，没把所在目录算进去。
    // 不同子目录下允许同名（比如多个 VIDEO_TS 文件夹里都有 VIDEO_TS.BUP），
    // 于是同一批里名字相同的文件被误判成重复、全部被取消勾选。
    // 现在按「目录 + 文件名」判定真正的重复。
    _repeatKey(item) {
      const dir = (item && item.path) || "";
      return dir + "\u0000" + ((item && item.newFileName) || "");
    }
    _autoCancelRepeat(list) {
      const nameMap = /* @__PURE__ */ new Map();
      const toCancel = [];
      list.forEach((item) => {
        if (item.isChecked && item.newFileName) {
          const key = this._repeatKey(item);
          if (nameMap.has(key)) {
            toCancel.push(item);
          } else {
            nameMap.set(key, item);
          }
        }
      });
      toCancel.forEach((item) => {
        item.isChecked = false;
        item.isRepeat = true;
        item.isChange = false;
        item.isError = false;
        this._uncheckedList.add(item.id);
      });
    }
    // 文件列表项通用处理
    _listItemGeneralMethod(item, newFileNameSet) {
      item.isChange = item.oldFileName !== item.newFileName;
      item.isEmpty = item.isChecked && !item.newFileName;
      // 修复：重复判定同样要带目录，否则不同子目录的同名文件会被误标为重复
      item.isRepeat = item.isChecked && !!item.newFileName && newFileNameSet.has(this._repeatKey(item));
      // 修复：isRepeat 只做提示，不设为 isError（避免同名导致 shouldContinue=false 阻断整批）。
      // 百度 API 的 onnest=rename 会自动加后缀处理同名，无需前端拦截。
      item.isError = item.isEmpty;
      // 修复：未选中的文件不应参与"重复"判定。
      // 原实现无条件 add，会把未选中的文件名也塞进集合，导致选中的文件被误判为重复。
      if (item.isChecked && item.newFileName) {
        newFileNameSet.add(this._repeatKey(item));
      }
      if (item.isChange) {
        // 性能保护：全盘可能有上万条，逐条做字符级 diff 会把页面卡死。
        // 只给前 3000 条算出高亮差异，其余正常显示新旧名（不影响重命名结果）。
        if (typeof this._diffBudget !== "number") this._diffBudget = 3000;
        if (this._diffBudget > 0) {
          this._diffBudget--;
          item.diffList = diffChars(item.oldFileName, item.newFileName);
        } else {
          item.diffList = void 0;
        }
      } else {
        item.diffList = void 0;
      }
    }
    _updateStatus() {
      // 修复：任何一步异常都不应该让状态计算中断（否则按钮状态会卡在旧值）
      if (!Array.isArray(this._currentList)) this._currentList = [];
      if (!this._uncheckedList) this._uncheckedList = /* @__PURE__ */ new Set();
      try {
        this._updateStatusInner();
      } catch (e) {
        // 关键：绝不让异常冒泡到 Vue 渲染流程（那会导致整个面板卡死、按钮全灰）
        if (!this._statusErrorLogged) {
          this._statusErrorLogged = true;
          console.warn("[网盘重命名] 状态计算出错（已忽略，不影响使用）:", e);
        }
        this._currentList = Array.isArray(this._currentList) ? this._currentList : [];
        this.statusList = [{ message: "状态计算异常" }];
      }
    }
    _updateStatusInner() {
      let emptyCount = 0;
      let errorCount = 0;
      let repeatCount = 0;
      let changeCount = 0;
      let matchedCount = 0;
      let failStatusCount = 0;
      let readyStatusCount = 0;
      let pendingStatusCount = 0;
      let successStatusCount = 0;
      const curList = this._currentList || [];
      curList.forEach((item) => {
        if (item.isChecked) {
          item.isEmpty && emptyCount++;
          item.isError && errorCount++;
          item.isRepeat && repeatCount++;
          item.isChange && changeCount++;
          item.isMatched && matchedCount++;
        }
        if (item.status === LIST_ITEM_STATUS_PENDING) {
          pendingStatusCount++;
        } else if (item.status === LIST_ITEM_STATUS_SUCCESS) {
          successStatusCount++;
        } else if (item.status === LIST_ITEM_STATUS_READY) {
          readyStatusCount++;
        } else if (item.status === LIST_ITEM_STATUS_FAIL) {
          failStatusCount++;
        }
      });
      this._emptyCount = emptyCount;
      this._errorCount = errorCount;
      this._repeatCount = repeatCount;
      this._changeCount = changeCount;
      this._matchedCount = matchedCount;
      this._failStatusCount = failStatusCount;
      this._readyStatusCount = readyStatusCount;
      this._pendingStatusCount = pendingStatusCount;
      this._successStatusCount = successStatusCount;
      this.hasError = this._errorCount > 0;
      this.hasChange = this._changeCount > 0;
      this.shouldContinue = !this.hasError && this.hasChange;
      this.hasCheckedAll = this._uncheckedList.size === 0;
      this.hasUncheckedAll = this._uncheckedList.size === (this._currentList ? this._currentList.length : 0);
      this._updateStatusList();
    }
    _updateStatusList() {
      const result = [];
      try {
      if (!this._currentList || !this._currentList.length) {
        const title = "无文件";
        result.push({ icon: "closeCircleFilled", title, className: "red" }, { message: title });
      } else {
        if (this.isUpdateLoading) {
          if (this._successStatusCount) {
            result.push({
              message: `已成功(${this._successStatusCount})`,
              className: "green"
            });
          }
          if (this._pendingStatusCount) {
            result.push({
              message: `加载中(${this._pendingStatusCount})`,
              className: "blue"
            });
          }
          if (this._readyStatusCount) {
            result.push({
              message: `准备中(${this._readyStatusCount})`,
              className: "blue"
            });
          }
          if (this._failStatusCount) {
            result.push({
              message: `已失败(${this._failStatusCount})`,
              className: "red"
            });
          }
        } else if (this.shouldContinue) {
          const title = "准备就绪";
          result.push(
            { icon: "checkCircleFilled", title, className: "green" },
            { message: title, className: "green" }
          );
        }
        if (!this.hasChange) {
          const title = "暂无改动";
          result.push(
            { icon: "infoCircleFilled", title, className: "yellow" },
            { message: title, className: "yellow" }
          );
        }
        if (this._emptyCount) {
          const title = `文件名为空(${this._emptyCount})`;
          result.push(
            { icon: "closeCircleFilled", title, className: "red" },
            { message: title, className: "red" }
          );
        }
        if (this._repeatCount) {
          const title = `文件名重复(${this._repeatCount})`;
          result.push(
            { icon: "infoCircleFilled", title, className: "yellow" },
            { message: title, className: "yellow" }
          );
        }
        const checked = this._currentList.length - this._uncheckedList.size;
        if (checked > 0) {
          result.push({ message: `已选中(${checked})`, className: "blue" });
        }
        if (this._uncheckedList.size > 0) {
          result.push({
            message: `未选中(${this._uncheckedList.size})`,
            className: "yellow"
          });
        }
        const unmatchedCount = checked - this._matchedCount;
        if (unmatchedCount && this._matchedCount) {
          if (unmatchedCount > this._matchedCount) {
            result.push({
              message: `已匹配(${this._matchedCount})`,
              className: "blue"
            });
          } else {
            result.push({
              message: `未匹配(${unmatchedCount})`,
              className: "yellow"
            });
          }
        }
      }
      this.statusList = Array.isArray(result) ? result : [];
      } catch (e) {
        if (!this._statusListErrorLogged) {
          this._statusListErrorLogged = true;
          console.warn("[网盘重命名] 状态栏计算出错（已忽略）:", e);
        }
        this.statusList = [{ message: "状态异常" }];
      }
    }
    // 绑定文件列表更新回调函数
    onCurrentListUpdate(handler) {
      if (!this._currentListUpdateHandlerSet.has(handler)) {
        this._currentListUpdateHandlerSet.add(handler);
      }
    }
    // 解绑文件列表更新回调函数
    offCurrentListUpdate(handler) {
      if (this._currentListUpdateHandlerSet.has(handler)) {
        this._currentListUpdateHandlerSet.delete(handler);
      }
    }
    // 触发文件列表更新回调函数
    _emitCurrentListUpdateHandler() {
      this._currentListUpdateHandlerSet.forEach((handler) => {
        handler(this._currentList);
      });
    }
    // 更新是否选中文件列表
    updateItemIsChecked(item, val) {
      item.isChecked = val;
      if (val) {
        this._uncheckedList.delete(item.id);
      } else {
        this._uncheckedList.add(item.id);
      }
      this._updateItemSortByIsChecked();
      this._updateCurrentList();
    }
    // 更新是否全选
    updateCheckedAll(val) {
      this.hasCheckedAll = val;
      this.hasUncheckedAll = !val;
      if (val) {
        this._uncheckedList = /* @__PURE__ */ new Set();
      } else {
        this._currentList.forEach((item) => {
          this._uncheckedList.add(item.id);
        });
      }
      this._updateItemSortByCheckedAll(val);
      this._updateCurrentList();
    }
    _clearUncheckedList() {
      this._uncheckedList.clear();
    }
    _initDragSort() {
      querySelector(".rename-preview-content-table-body", 10).then((res) => {
        this._sortableInstance = Sortable.create(res, {
          handle: ".rename-preview-content-table-item-index-handler",
          filter: ".rename-preview-content-table-item.block-drop",
          draggable: ".rename-preview-content-table-item",
          ghostClass: "rename-preview-content-table-item-placeholder",
          fallbackClass: "rename-preview-content-table-item-dragged",
          forceFallback: true,
          onSort: (event) => {
            if (isNumber(event.newIndex) && isNumber(event.oldIndex)) {
              this._sortListItem(event.newIndex, event.oldIndex);
            }
          }
        });
        // 修复：挂载区间选择 + 滑动选择事件
        this._initSelectionEvents(res);
      });
    }
    _destroyDragSort() {
      if (this._sortableInstance) {
        this._sortableInstance.destroy();
        this._sortableInstance = null;
      }
      // 修复：清理选择事件
      if (this._selectionContainer) {
        if (this._selectionOnMouseDown) {
          this._selectionContainer.removeEventListener("mousedown", this._selectionOnMouseDown);
        }
        if (this._selectionOnMouseOver) {
          this._selectionContainer.removeEventListener("mouseover", this._selectionOnMouseOver);
        }
        this._selectionContainer = null;
        this._selectionOnMouseDown = null;
        this._selectionOnMouseOver = null;
      }
      if (this._selectionOnMouseUp) {
        document.removeEventListener("mouseup", this._selectionOnMouseUp);
        this._selectionOnMouseUp = null;
      }
      this._isDragSelecting = false;
      this._dragStartIndex = -1;
      if (this._selectionUpdateTimer) {
        clearTimeout(this._selectionUpdateTimer);
        this._selectionUpdateTimer = null;
      }
    }
    // 修复：区间选择 + 滑动选择事件挂载
    _initSelectionEvents(container) {
      this._selectionContainer = container;
      const getRowIndex = (el) => {
        const row = el.closest(".rename-preview-content-table-item");
        if (!row) return -1;
        return Array.from(container.querySelectorAll(".rename-preview-content-table-item")).indexOf(row);
      };
      // 根据 DOM 行索引找到 _currentList 里的项
      const getItemByRowIndex = (idx) => {
        if (idx < 0 || idx >= this._currentList.length) return null;
        return this._currentList[idx];
      };
      const onMouseDown = (e) => {
        if (e.button !== 0) return;
        const idx = getRowIndex(e.target);
        if (idx < 0) return;
        const item = getItemByRowIndex(idx);
        if (!item) return;
        // Shift 区间选择：从 _lastClickIndex 到当前 idx 之间全部设置
        if (e.shiftKey && this._lastClickIndex >= 0) {
          const start = Math.min(this._lastClickIndex, idx);
          const end = Math.max(this._lastClickIndex, idx);
          const val = !item.isChecked;
          for (let i = start; i <= end; i++) {
            const it = this._currentList[i];
            if (it) this._setItemCheckedById(it.id, val);
          }
          this._lastClickIndex = idx;
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        this._lastClickIndex = idx;
        // 修复：文件名区域（原文件名/新文件名）允许划词选中，
        // 不触发滑动选择，方便用户选中/复制文件名内容。
        // 滑动选择只在行背景、箭头、状态等区域触发。
        if (e.target.closest(".rename-preview-content-table-item-old-file-name") ||
            e.target.closest(".rename-preview-content-table-item-new-file-name")) {
          return;
        }
        // 滑动选择：排除 checkbox、排序把手、文件名区域（避免干扰原有交互）
        if (e.target.closest(".component-checkbox") || e.target.closest(".rename-preview-content-table-item-index-handler")) {
          return;
        }
        this._dragSelectValue = !item.isChecked;
        this._isDragSelecting = true;
        this._dragStartIndex = idx;
        this._setItemCheckedById(item.id, this._dragSelectValue);
        e.preventDefault();
      };
      const onMouseOver = (e) => {
        if (!this._isDragSelecting) return;
        const idx = getRowIndex(e.target);
        if (idx < 0) return;
        const item = getItemByRowIndex(idx);
        if (!item) return;
        this._setItemCheckedById(item.id, this._dragSelectValue);
      };
      const onMouseUp = () => {
        this._isDragSelecting = false;
        this._dragStartIndex = -1;
      };
      this._selectionOnMouseDown = onMouseDown;
      this._selectionOnMouseOver = onMouseOver;
      this._selectionOnMouseUp = onMouseUp;
      container.addEventListener("mousedown", onMouseDown);
      container.addEventListener("mouseover", onMouseOver);
      document.addEventListener("mouseup", onMouseUp);
    }
    // 批量设置某个文件的选中状态，并节流刷新 UI
    _setItemCheckedById(id, val) {
      const item = this._currentList.find((it) => it.id === id);
      if (!item || item.isChecked === val) return;
      item.isChecked = val;
      if (val) {
        this._uncheckedList.delete(id);
      } else {
        this._uncheckedList.add(id);
      }
      this._scheduleSelectionUpdate();
    }
    _scheduleSelectionUpdate() {
      if (this._selectionUpdateTimer) return;
      this._selectionUpdateTimer = setTimeout(() => {
        this._selectionUpdateTimer = null;
        this._updateItemSortByIsChecked();
        this._updateCurrentList();
      }, 80);
    }
    _clearIndexMap() {
      this._indexMap.clear();
    }
    _initListItemIndex() {
      this.originList.forEach((item, index2) => {
        this._setListItemIndex(item.id, index2);
      });
    }
    _setListItemIndex(id, index2) {
      const temp = this._indexMap.get(id);
      if (!temp) {
        this._indexMap.set(id, { index: index2, displayIndex: index2 + 1 });
      } else if (temp.index !== index2) {
        temp.index = index2;
      }
      return index2;
    }
    _setListItemDisplayIndex(id, displayIndex) {
      const temp = this._indexMap.get(id);
      if (!temp) {
        if (displayIndex) {
          this._indexMap.set(id, { index: displayIndex - 1, displayIndex });
        } else {
          this._indexMap.set(id, { index: this._findListItemIndex(id) });
        }
      } else if (temp.displayIndex !== displayIndex) {
        temp.displayIndex = displayIndex;
      }
      return displayIndex;
    }
    _getListItemIndex(id) {
      const temp = this._indexMap.get(id);
      if (temp) {
        return temp.index;
      }
      return this._findListItemIndex(id);
    }
    _getListItemDisplayIndex(id) {
      const temp = this._indexMap.get(id);
      if (temp) {
        return temp.displayIndex;
      }
      return this._findListItemIndex(id) + 1;
    }
    _findListItemIndex(id) {
      let index2 = this.originList.findIndex((item) => item.id === id);
      // 修复：原实现的判断条件写反了——`index2 !== -1` 时才会执行 `index2 = length`，
      // 导致所有"找到了"的项目索引都被错误地改成了 length，而真正找不到的反而返回 -1。
      // 正确语义：找到则返回真实索引；找不到则返回列表长度（排到最后）。
      if (index2 === -1) {
        index2 = this.originList.length;
      }
      this._setListItemIndex(id, index2);
      return index2;
    }
    _sortListItem(newIndex2, oldIndex2) {
      if (newIndex2 === oldIndex2) {
        return;
      }
      const currentList = [...this._currentList];
      currentList.splice(newIndex2, 0, currentList.splice(oldIndex2, 1)[0]);
      const start = newIndex2 > oldIndex2 ? oldIndex2 : newIndex2;
      const end = newIndex2 > oldIndex2 ? newIndex2 : oldIndex2;
      for (let index2 = start; index2 <= end; index2++) {
        this._setListItemIndex(currentList[index2].id, index2);
        if (!this.replaceParams.sortChecked) {
          this._setListItemDisplayIndex(currentList[index2].id, index2 + 1);
        }
      }
      if (this.replaceParams.sortChecked) {
        let index2 = 1;
        currentList.forEach((item) => {
          this._setListItemDisplayIndex(item.id, item.isChecked ? index2++ : void 0);
        });
      }
      this._updateCurrentList();
    }
    _updateItemSortByIsChecked() {
      if (this.replaceParams.sortChecked) {
        let index2 = 1;
        this._currentList.forEach((item) => {
          this._setListItemDisplayIndex(item.id, item.isChecked ? index2++ : void 0);
        });
      }
    }
    _updateItemSortByCheckedAll(val) {
      if (this.replaceParams.sortChecked) {
        if (val) {
          this._currentList.forEach((item, index2) => {
            this._setListItemDisplayIndex(item.id, index2 + 1);
          });
        } else {
          this._currentList.forEach((item) => {
            this._setListItemDisplayIndex(item.id);
          });
        }
      }
    }
    _onSortCheckedChange(val) {
      if (val) {
        let index2 = 1;
        this._currentList.forEach((item) => {
          this._setListItemDisplayIndex(item.id, item.isChecked ? index2++ : void 0);
        });
      } else {
        this._currentList.forEach((item, index2) => {
          this._setListItemDisplayIndex(item.id, index2 + 1);
        });
      }
    }
    // 批量重命名
    batchRename() {
      // 修复：按钮不再靠 disabled 拦截，这里给出明确的失败原因，避免"点了没反应"
      if (!this.shouldContinue) {
        // 重新算一次状态，排除"状态残留导致误判"
        try {
          this._updateStatus();
        } catch (e) { /* 忽略 */ }
        if (!this.shouldContinue) {
          if (this.hasError) {
            message.error("存在文件名为空的项，请先取消勾选或修改规则");
          } else if (!this.hasChange) {
            message.warning("当前规则没有产生任何改动，请检查正则/替换内容");
          } else {
            message.warning("没有可重命名的文件，请先勾选要改名的项");
          }
          return;
        }
      }
      this.isUpdateLoading = true;
      this.replaceParamsDisabled = true;
      this._updateStatusList();
      // 修复：加看门狗。之前某次重命名卡死（taskquery 不复位）会让 replaceParamsDisabled
      // 永远停在 true，从此"应用"按钮永久灰白、点都点不了。这里最多锁 3 分钟。
      if (this._renameWatchdog) clearTimeout(this._renameWatchdog);
      this._renameWatchdog = setTimeout(() => {
        this._renameWatchdog = null;
        this.isUpdateLoading = false;
        this.replaceParamsDisabled = false;
        try {
          this._updateStatusList();
          this._updateStatus();
        } catch (e) { /* 忽略 */ }
        message.error("重命名等待超时，按钮已解锁，请刷新页面确认结果");
      }, 180000);
      const data = this.currentList.filter(
        (item) => item.isChecked && item.isChange && !item.isError
      );
      this.renameRequest(data).then(() => {
        // 修复：原来这里会「关闭面板 + 清空正则 + 刷新页面」，
        // 用户每批都要重新开面板、重新输搜索词，非常麻烦。
        // 现在：面板不关、正则和搜索词全部保留、列表原地更新成新文件名，
        // 可以立刻接着处理剩下的文件。
        this._applyRenamedInPlace(data);
        // 保存重命名历史
        this._saveHistory();
        const okCount = data.filter((it) => it.status === LIST_ITEM_STATUS_SUCCESS).length || data.length;
        message.success(`已重命名 ${okCount} 个，可直接继续操作其它文件`);
      }).catch((error2) => {
        // 修复：区分"部分失败"和"全部失败"，避免明明成功了一部分却只报"失败"
        const failedTotal = error2 && error2.failedTotal;
        if (failedTotal) {
          message.error(`部分重命名失败（${failedTotal} 个未成功），成功的已在列表中更新`);
        } else {
          message.error("重命名失败");
        }
        // 也做一次原地更新，把已经成功的部分显示出来；不再刷新页面
        this._applyRenamedInPlace(data);
      }).finally(() => {
        if (this._renameWatchdog) {
          clearTimeout(this._renameWatchdog);
          this._renameWatchdog = null;
        }
        this.isUpdateLoading = false;
        this.replaceParamsDisabled = false;
        try {
          this._updateStatusList();
        } catch (e) { /* 忽略 */ }
      });
    }
    // 新增：重命名成功后原地更新列表（不刷新页面、不重新加载、不丢失当前工作集）
    // 把已成功的项在 originList / currentList 里的旧名改成新名，
    // 于是它们不再"有改动"（不会被重复重命名），其余文件保持原样，可以接着操作。
    _applyRenamedInPlace(items) {
      if (!Array.isArray(items) || !items.length) return;
      const renamedMap = /* @__PURE__ */ new Map();
      items.forEach((it) => {
        if (!it || it.id == null) return;
        if (!it.newFileName) return;
        // 只有真正成功（或没标状态）的才更新，失败保留原名
        if (it.status === LIST_ITEM_STATUS_FAIL) return;
        renamedMap.set(it.id, it.newFileName);
      });
      if (!renamedMap.size) return;
      // 1) 更新 originList（源数据）
      if (Array.isArray(this.originList)) {
        this.originList.forEach((o) => {
          const newName = renamedMap.get(o.id);
          if (!newName) return;
          o.fullFileName = newName;
          const parsed = fileNameParse(newName, o.isFolder);
          o.fileName = parsed.fileName;
          o.ext = parsed.ext;
        });
      }
      // 2) 重新计算当前列表（新名 = 旧名 → isChange 自动变 false）
      try {
        this._clearIndexMap();
        this._initListItemIndex();
        this._updateCurrentList();
      } catch (e) { /* 忽略 */ }
    }
    // 重命名历史：从 localStorage 读取
    _loadHistory() {
      try {
        const raw = localStorage.getItem("cloudDiskRenameHistory");
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }
    // 重命名历史：保存当前规则
    _saveHistory() {
      const item = {
        id: Date.now(),
        time: /* @__PURE__ */ new Date().toLocaleString(),
        mode: this.renameMode,
        pattern: this.pattern,
        replace: this.replace,
        autoEpisode: this.autoEpisode,
        sortChecked: this.sortChecked,
        successCount: this._successStatusCount
      };
      this._historyList.unshift(item);
      if (this._historyList.length > 50) {
        this._historyList.pop();
      }
      try {
        localStorage.setItem("cloudDiskRenameHistory", JSON.stringify(this._historyList));
      } catch (e) { /* 忽略存储失败 */ }
    }
    // 重命名历史：删除单条
    deleteHistory(id) {
      this._historyList = this._historyList.filter((i) => i.id !== id);
      try {
        localStorage.setItem("cloudDiskRenameHistory", JSON.stringify(this._historyList));
      } catch (e) { /* 忽略 */ }
    }
    // 重命名历史：清空
    clearHistory() {
      this._historyList = [];
      try {
        localStorage.removeItem("cloudDiskRenameHistory");
      } catch (e) { /* 忽略 */ }
    }
    // 重命名历史：一键应用（填充到输入框）
    applyHistory(item) {
      this.pattern = item.pattern || "";
      this.replace = item.replace || "";
      this.renameMode = item.mode || RENAME_MODE_PATTERN;
      this.autoEpisode = !!item.autoEpisode;
      this.sortChecked = !!item.sortChecked;
    }
    // 重命名历史：复制文本到剪贴板
    copyText(text) {
      if (!text) return;
      const fallbackCopy = () => {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          message.success("已复制");
        } catch (e) {
          message.error("复制失败");
        }
        document.body.removeChild(ta);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          message.success("已复制");
        }).catch(() => {
          fallbackCopy();
        });
      } else {
        fallbackCopy();
      }
    }
    // 重置
    reset() {
      // 修复：之前的实现直接等 _updateOriginList()（含网络），一旦接口挂起就"点了没反应"。
      // 现在先本地同步复位（清空替换参数 + 恢复全选 + 重算列表），保证立刻有可见反馈，
      // 再后台刷新真实列表。
      this.replaceParamsDisabled = false;
      this.isLoading = false;
      this.isControlLoading = false;
      this.isUpdateLoading = false;
      this.originList = Array.isArray(this.originList) ? this.originList : [];
      this._currentList = Array.isArray(this._currentList) ? this._currentList : [];
      this._clearUncheckedList();
      this._resetReplaceParams();
      this._clearIndexMap();
      this._initListItemIndex();
      try {
        this._updateCurrentList();
      } catch (e) { /* 忽略，保证不阻断重置 */ }
      // 后台静默刷新
      try {
        this._updateOriginList();
      } catch (e) { /* 忽略 */ }
    }
    // 重置排序
    resetSort() {
      this._clearIndexMap();
      this._initListItemIndex();
      this._updateCurrentList();
    }
  }
  class ReplaceParams {
    constructor(options = {}) {
      // 剧名
      __publicField(this, "_title", "");
      // 季数
      __publicField(this, "_season", "");
      // 正则
      __publicField(this, "_pattern", "");
      // 替换文本
      __publicField(this, "_replace", "");
      // 自动集数
      // 默认关闭：适合去除广告/水印等正则替换场景，避免自动追加 .E01 集数后缀
      __publicField(this, "_autoEpisode", false);
      // 排序已选
      __publicField(this, "_sortChecked", false);
      // 自动转义正则特殊字符（默认开：用户填 "[abc]" 会当作精确字符串而不是字符类）
      __publicField(this, "_autoEscape", true);
      // 重命名模式
      // 默认改为"正则模式"：适合去除广告、水印、垃圾后缀等文件名清理场景
      __publicField(this, "_renameMode", RENAME_MODE_PATTERN);
      __publicField(this, "_stopUpdate", false);
      __publicField(this, "_onUpdate", (key) => {
        if (!this._stopUpdate) {
          // 修复：这里的回调会一路触发 _updateCurrentList/_updateStatus。
          // 任何一环抛异常都会冒泡到 Vue 事件处理，导致整个面板后续操作全部失灵。
          // 所以在这里做最后一道保险。
          try {
            if (this._onChangeHandler) {
              if (isArray(key)) {
                for (let index2 = 0; index2 < key.length; index2++) {
                  this._onChangeHandler(key[index2], this);
                }
              } else {
                this._onChangeHandler(key, this);
              }
            }
            this._onUpdateHandler && this._onUpdateHandler(this);
          } catch (e) {
            if (!this._updateErrorLogged) {
              this._updateErrorLogged = true;
              console.warn("[网盘重命名] 参数更新出错（已忽略）:", e);
            }
          }
        }
      });
      __publicField(this, "_onUpdateHandler");
      __publicField(this, "_onChangeHandler");
      if (options.onUpdateHandler) {
        this._onUpdateHandler = options.onUpdateHandler;
      }
      if (options.onChangeHandler) {
        this._onChangeHandler = options.onChangeHandler;
      }
    }
    get title() {
      return this._title;
    }
    set title(val) {
      this._title = val;
      this._onUpdate("title");
    }
    get season() {
      return this._season;
    }
    set season(val) {
      this._season = val;
      this._onUpdate("season");
    }
    get pattern() {
      return this._pattern;
    }
    set pattern(val) {
      this._pattern = val;
      this._onUpdate("pattern");
    }
    get replace() {
      return this._replace;
    }
    set replace(val) {
      this._replace = val;
      this._onUpdate("replace");
    }
    get autoEpisode() {
      return this._autoEpisode;
    }
    set autoEpisode(val) {
      this._autoEpisode = val;
      this._onUpdate("autoEpisode");
    }
    get sortChecked() {
      return this._sortChecked;
    }
    set sortChecked(val) {
      this._sortChecked = val;
      this._onUpdate("sortChecked");
    }
    get autoEscape() {
      return this._autoEscape;
    }
    set autoEscape(val) {
      this._autoEscape = val;
      this._onUpdate("autoEscape");
    }
    get renameMode() {
      return this._renameMode;
    }
    set renameMode(val) {
      this._renameMode = val;
      this._onUpdate("renameMode");
    }
    reset(val) {
      this._stopUpdate = true;
      this.title = (val == null ? void 0 : val.title) || "";
      this.season = (val == null ? void 0 : val.season) || "";
      this.pattern = (val == null ? void 0 : val.pattern) || "";
      this.replace = (val == null ? void 0 : val.replace) || "";
      this.autoEpisode = val ? !!val.autoEpisode : false;
      this.sortChecked = val ? !!val.sortChecked : false;
      this.autoEscape = val ? val.autoEscape !== false : true;
      this.renameMode = (val == null ? void 0 : val.renameMode) || RENAME_MODE_PATTERN;
      this._stopUpdate = false;
      const keys = [
        "title",
        "season",
        "pattern",
        "replace",
        "autoEpisode",
        "sortChecked",
        "autoEscape",
        "renameMode"
      ];
      this._onUpdate(keys);
    }
  }
  const RENAME_MODE_SERIES = "series";
  const RENAME_MODE_PATTERN = "pattern";
  const ROOT_ELEMENT_INSERT_METHOD_APPEND = "append";
  const ROOT_ELEMENT_INSERT_METHOD_PREPEND = "prepend";
  const LIST_ITEM_STATUS_NONE = "none";
  const LIST_ITEM_STATUS_READY = "ready";
  const LIST_ITEM_STATUS_PENDING = "pending";
  const LIST_ITEM_STATUS_SUCCESS = "success";
  const LIST_ITEM_STATUS_FAIL = "fail";
  const _sfc_main$6 = vue.defineComponent({
    name: "RenamePreview",
    components: {
      ComponentIcon,
      ComponentLoading,
      ComponentCheckbox
    },
    setup() {
      const providerRef2 = vue.inject("providerRef");
      const currentList = vue.ref((providerRef2 == null ? void 0 : providerRef2.value.currentList) || []);
      const onCurrentListUpdate = (val) => {
        currentList.value = val;
      };
      const onResetSort = () => {
        providerRef2 == null ? void 0 : providerRef2.value.resetSort();
      };
      const onCheckedAllUpdate = (val) => {
        providerRef2 == null ? void 0 : providerRef2.value.updateCheckedAll(val);
      };
      const onItemIsCheckedUpdate = (item, val) => {
        providerRef2 == null ? void 0 : providerRef2.value.updateItemIsChecked(item, val);
      };
      const oldFileNameDiffRender = (diffList) => {
        return () => diffList.filter((item) => !item.added).map((item) => vue.h("span", { class: { removed: item.removed } }, item.value));
      };
      const newFileNameDiffRender = (diffList) => {
        return () => diffList.filter((item) => !item.removed).map((item) => vue.h("span", { class: { added: item.added } }, item.value));
      };
      const getStatusIcon = (status) => {
        switch (status) {
          case LIST_ITEM_STATUS_READY:
            return "timeCircle";
          case LIST_ITEM_STATUS_PENDING:
            return "loading";
          case LIST_ITEM_STATUS_SUCCESS:
            return "checkCircle";
          case LIST_ITEM_STATUS_FAIL:
            return "close";
          default:
            return "";
        }
      };
      vue.onMounted(() => {
        providerRef2 == null ? void 0 : providerRef2.value.onCurrentListUpdate(onCurrentListUpdate);
      });
      vue.onUnmounted(() => {
        providerRef2 == null ? void 0 : providerRef2.value.offCurrentListUpdate(onCurrentListUpdate);
      });
      return {
        providerRef: providerRef2,
        currentList,
        onResetSort,
        onCheckedAllUpdate,
        onItemIsCheckedUpdate,
        oldFileNameDiffRender,
        newFileNameDiffRender,
        getStatusIcon
      };
    }
  });
  const _withScopeId$4 = (n) => (vue.pushScopeId("data-v-a9f69e19"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$6 = {
    key: 0,
    class: "rename-preview"
  };
  const _hoisted_2$5 = { class: "rename-preview-status" };
  const _hoisted_3$5 = ["title"];
  const _hoisted_4$1 = { class: "rename-preview-content" };
  const _hoisted_5$1 = { class: "rename-preview-content-table" };
  const _hoisted_6 = { class: "rename-preview-content-table-header" };
  const _hoisted_7 = { class: "rename-preview-content-table-item-checkbox" };
  const _hoisted_8 = { class: "rename-preview-content-table-item-index" };
  const _hoisted_9 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ vue.createElementVNode("th", { class: "rename-preview-content-table-item-old-file-name" }, "原文件名", -1));
  const _hoisted_10 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ vue.createElementVNode("th", { class: "rename-preview-content-table-item-right-arrow" }, "⮕", -1));
  const _hoisted_11 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ vue.createElementVNode("th", { class: "rename-preview-content-table-item-new-file-name" }, "新文件名", -1));
  const _hoisted_12 = { class: "rename-preview-content-table-item-new-file-status" };
  const _hoisted_13 = { class: "rename-preview-content-table-body" };
  const _hoisted_14 = { class: "rename-preview-content-table-item-checkbox" };
  const _hoisted_15 = { class: "rename-preview-content-table-item-index" };
  const _hoisted_16 = { class: "rename-preview-content-table-item-index-content" };
  const _hoisted_17 = ["title"];
  const _hoisted_18 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ vue.createElementVNode("td", { class: "rename-preview-content-table-item-right-arrow" }, "⮕", -1));
  const _hoisted_19 = ["title"];
  const _hoisted_20 = { class: "rename-preview-content-table-item-new-file-status" };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_component_icon = vue.resolveComponent("component-icon");
    const _component_component_checkbox = vue.resolveComponent("component-checkbox");
    const _component_component_loading = vue.resolveComponent("component-loading");
    return _ctx.providerRef ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [
      vue.createElementVNode("div", _hoisted_2$5, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.providerRef.statusList, (item) => {
          return vue.openBlock(), vue.createElementBlock("span", {
            key: item.icon && item.title ? item.icon + item.title : item.message,
            class: vue.normalizeClass(["rename-preview-status-item", item.className]),
            title: item.title
          }, [
            item.icon ? (vue.openBlock(), vue.createBlock(_component_component_icon, {
              key: 0,
              name: item.icon,
              fill: "currentColor",
              class: "rename-preview-status-item-icon"
            }, null, 8, ["name"])) : vue.createCommentVNode("", true),
            vue.createTextVNode(" " + vue.toDisplayString(item.message), 1)
          ], 10, _hoisted_3$5);
        }), 128))
      ]),
      vue.createElementVNode("div", _hoisted_4$1, [
        vue.createElementVNode("table", _hoisted_5$1, [
          vue.createElementVNode("thead", _hoisted_6, [
            vue.createElementVNode("tr", {
              class: vue.normalizeClass(["rename-preview-content-table-item", {
                "is-error": _ctx.providerRef.hasError,
                "is-change": _ctx.providerRef.hasChange,
                "is-checked": !_ctx.providerRef.hasUncheckedAll
              }])
            }, [
              vue.createElementVNode("th", _hoisted_7, [
                vue.createVNode(_component_component_checkbox, {
                  "model-value": _ctx.providerRef.hasCheckedAll,
                  indeterminate: !_ctx.providerRef.hasCheckedAll && !_ctx.providerRef.hasUncheckedAll,
                  "onUpdate:modelValue": _ctx.onCheckedAllUpdate
                }, null, 8, ["model-value", "indeterminate", "onUpdate:modelValue"])
              ]),
              vue.createElementVNode("th", _hoisted_8, [
                vue.createElementVNode("span", {
                  class: "rename-preview-content-table-item-index-reset-sort",
                  title: "重置排序",
                  onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onResetSort && _ctx.onResetSort(...args))
                }, [
                  vue.createVNode(_component_component_icon, {
                    name: "dCaret",
                    class: "rename-preview-content-table-item-index-reset-sort-static"
                  }),
                  vue.createVNode(_component_component_icon, {
                    name: "sort",
                    class: "rename-preview-content-table-item-index-reset-sort-hover"
                  })
                ]),
                vue.createTextVNode(" 排序 ")
              ]),
              _hoisted_9,
              _hoisted_10,
              _hoisted_11,
              vue.createElementVNode("th", _hoisted_12, [
                vue.createVNode(_component_component_icon, {
                  name: _ctx.providerRef.hasError ? "frown" : !_ctx.providerRef.hasChange ? "meh" : _ctx.providerRef.shouldContinue ? "smile" : ""
                }, null, 8, ["name"])
              ])
            ], 2)
          ]),
          vue.createElementVNode("tbody", _hoisted_13, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.currentList, (item) => {
              return vue.openBlock(), vue.createElementBlock("tr", {
                key: item.id,
                class: vue.normalizeClass(["rename-preview-content-table-item", {
                  "is-error": item.isError,
                  "is-change": item.isChange,
                  "is-checked": item.isChecked,
                  "allow-drop": item.status === "none" && (!_ctx.providerRef.replaceParams.sortChecked || item.isChecked),
                  "block-drop": item.status !== "none" || _ctx.providerRef.replaceParams.sortChecked && !item.isChecked
                }])
              }, [
                vue.createElementVNode("td", _hoisted_14, [
                  vue.createVNode(_component_component_checkbox, {
                    "model-value": item.isChecked,
                    readonly: item.status !== "none",
                    "onUpdate:modelValue": ($event) => _ctx.onItemIsCheckedUpdate(item, $event)
                  }, null, 8, ["model-value", "readonly", "onUpdate:modelValue"])
                ]),
                vue.createElementVNode("td", _hoisted_15, [
                  vue.createVNode(_component_component_icon, {
                    name: "rank",
                    class: "rename-preview-content-table-item-index-handler"
                  }),
                  vue.createElementVNode("span", _hoisted_16, vue.toDisplayString(item.displayIndex), 1)
                ]),
                vue.createElementVNode("td", {
                  class: "rename-preview-content-table-item-old-file-name",
                  title: item.oldFileName
                }, [
                  item.diffList ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.oldFileNameDiffRender(item.diffList)), { key: 0 })) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                    vue.createTextVNode(vue.toDisplayString(item.oldFileName), 1)
                  ], 64))
                ], 8, _hoisted_17),
                _hoisted_18,
                vue.createElementVNode("td", {
                  class: "rename-preview-content-table-item-new-file-name",
                  title: item.newFileName
                }, [
                  item.diffList ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.newFileNameDiffRender(item.diffList)), { key: 0 })) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                    vue.createTextVNode(vue.toDisplayString(item.newFileName), 1)
                  ], 64))
                ], 8, _hoisted_19),
                vue.createElementVNode("td", _hoisted_20, [
                  vue.createVNode(_component_component_icon, {
                    name: _ctx.getStatusIcon(item.status)
                  }, null, 8, ["name"])
                ])
              ], 2);
            }), 128))
          ])
        ])
      ]),
      _ctx.providerRef.isPreviewLoading ? (vue.openBlock(), vue.createBlock(_component_component_loading, { key: 0 })) : vue.createCommentVNode("", true)
    ])) : vue.createCommentVNode("", true);
  }
  const RenamePreview = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-a9f69e19"]]);
  const _sfc_main$5 = vue.defineComponent({
    name: "RenamePanel",
    components: {
      RenameControl,
      RenamePreview,
      ComponentLoading
    },
    setup() {
      const providerRef2 = vue.inject("providerRef");
      const onMaskClick = () => {
        if (!(providerRef2 == null ? void 0 : providerRef2.value.isLoading)) {
          providerRef2 == null ? void 0 : providerRef2.value.setVisible(false);
        }
      };
      return {
        providerRef: providerRef2,
        onMaskClick
      };
    }
  });
  const _hoisted_1$5 = {
    key: 0,
    class: "rename-panel"
  };
  const _hoisted_2$4 = {
    key: 0,
    class: "rename-panel-container"
  };
  const _hoisted_3$4 = { class: "rename-panel-container-content" };
  const _hoisted_4 = { class: "rename-panel-container-content-header" };
  const _hoisted_5 = { class: "rename-panel-container-content-body" };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_rename_control = vue.resolveComponent("rename-control");
    const _component_rename_preview = vue.resolveComponent("rename-preview");
    const _component_component_loading = vue.resolveComponent("component-loading");
    return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
      _ctx.providerRef ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
        vue.createVNode(vue.Transition, { name: "fade" }, {
          default: vue.withCtx(() => [
            _ctx.providerRef.visible ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "rename-panel-mask",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onMaskClick && _ctx.onMaskClick(...args))
            })) : vue.createCommentVNode("", true)
          ]),
          _: 1
        }),
        vue.createVNode(vue.Transition, { name: "fade-bottom" }, {
          default: vue.withCtx(() => [
            _ctx.providerRef.visible ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$4, [
              vue.createElementVNode("div", _hoisted_3$4, [
                vue.createElementVNode("div", _hoisted_4, [
                  vue.createVNode(_component_rename_control)
                ]),
                vue.createElementVNode("div", _hoisted_5, [
                  vue.createVNode(_component_rename_preview)
                ]),
                _ctx.providerRef.isLoading ? (vue.openBlock(), vue.createBlock(_component_component_loading, { key: 0 })) : vue.createCommentVNode("", true)
              ])
            ])) : vue.createCommentVNode("", true)
          ]),
          _: 1
        })
      ])) : vue.createCommentVNode("", true)
    ]);
  }
  const RenamePanel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-7601d892"]]);
  const _sfc_main$4 = vue.defineComponent({
    name: "App",
    components: {
      RenamePanel
    },
    setup() {
      const providerRef2 = vue.inject("providerRef");
      const EnterComponent2 = vue.computed(() => {
        var _a2, _b;
        return (_b = (_a2 = providerRef2 == null ? void 0 : providerRef2.value) == null ? void 0 : _a2.EnterComponent) == null ? void 0 : _b.call(_a2);
      });
      return {
        EnterComponent: EnterComponent2
      };
    }
  });
  const _hoisted_1$4 = { key: 1 };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_rename_panel = vue.resolveComponent("rename-panel");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(vue.Transition, { name: "fade" }, {
        default: vue.withCtx(() => [
          _ctx.EnterComponent ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.EnterComponent), { key: 0 })) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4))
        ]),
        _: 1
      }),
      vue.createVNode(_component_rename_panel)
    ], 64);
  }
  const App = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
  const _sfc_main$3 = vue.defineComponent({
    name: "EnterComponentAli",
    components: {
      ComponentIcon
    },
    setup() {
      const providerRef2 = vue.inject("providerRef");
      const onClick = () => {
        providerRef2 == null ? void 0 : providerRef2.value.setVisible(true);
      };
      return {
        onClick
      };
    }
  });
  const _withScopeId$3 = (n) => (vue.pushScopeId("data-v-cc07e1db"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$3 = { class: "enter-component" };
  const _hoisted_2$3 = { class: "enter-component-button-icon" };
  const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "enter-component-button-text" }, "重命名", -1));
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_component_icon = vue.resolveComponent("component-icon");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
      vue.createElementVNode("button", {
        type: "button",
        class: "enter-component-button",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, [
        vue.createElementVNode("span", _hoisted_2$3, [
          vue.createVNode(_component_component_icon, { name: "editCircle" })
        ]),
        _hoisted_3$3
      ])
    ]);
  }
  const EnterComponent$3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-cc07e1db"]]);
  const regexp = /^((.|\n)+)\.([^.]+)$/;
  const fileNameParse = (payload, isFolder = false) => {
    // 修复：文件夹名可能含点号（如 "我的资料.2024"），不能按"扩展名"拆解。
    // 文件夹：整个名称作为 fileName，ext 置空，避免后续误追加 ".ext" 或 ".E集数"。
    if (isFolder) {
      return {
        ext: "",
        fileName: payload || ""
      };
    }
    const matchResult = payload.match(regexp);
    return {
      ext: (matchResult == null ? void 0 : matchResult[3]) || "",
      fileName: (matchResult == null ? void 0 : matchResult[1]) || payload
    };
  };
  const findReactFiberNode = (node, check2) => {
    const list = [node];
    while (list.length) {
      const item = list.shift();
      if (check2(item)) {
        return item;
      } else {
        if (item.child) {
          list.push(item.child);
        }
        if (item.sibling) {
          list.push(item.sibling);
        }
      }
    }
  };
  let rootReactContainer;
  function _getRootReactContainer(selectors, isPromise = true) {
    if (rootReactContainer) {
      return isPromise ? Promise.resolve(rootReactContainer) : rootReactContainer;
    }
    const rootElement = querySelector(selectors);
    if (!rootElement) {
      return isPromise ? Promise.reject() : void 0;
    }
    const keys = Object.keys(rootElement);
    const reactContainerKey = keys.find(
      (item) => item.startsWith("__reactContainer")
    );
    if (!reactContainerKey) {
      return isPromise ? Promise.reject() : void 0;
    }
    rootReactContainer = rootElement[reactContainerKey];
    return isPromise ? Promise.resolve(rootReactContainer) : rootReactContainer;
  }
  const getRootReactContainer = _getRootReactContainer;
  class ProviderAli extends Provider {
    constructor() {
      super(...arguments);
      __publicField(this, "type", "ali");
      __publicField(this, "rootElementId", "cloud-disk-plugin");
      __publicField(this, "rootElementInsertTarget", "[class^=nav-tab-content--]");
      __publicField(this, "rootElementInsertMethod", ROOT_ELEMENT_INSERT_METHOD_APPEND);
      __publicField(this, "EnterComponent", () => EnterComponent$3);
      __publicField(this, "_rootReactContainerSelectors", "#root");
    }
    async getOriginList() {
      const rootReactContainer2 = await getRootReactContainer(this._rootReactContainerSelectors, true);
      const reactFiberNode = findReactFiberNode(
        rootReactContainer2,
        (node) => {
          var _a2, _b, _c;
          return (_c = (_b = (_a2 = node.pendingProps) == null ? void 0 : _a2.localStore) == null ? void 0 : _b.listModel) == null ? void 0 : _c.listModel;
        }
      );
      if (!reactFiberNode) {
        return Promise.reject();
      }
      const listModel = reactFiberNode.pendingProps.localStore.listModel.listModel;
      while (listModel.nextMarker) {
        await listModel.loadMoreData();
      }
      const originList = reactFiberNode.pendingProps.localStore.list;
      if (!originList) {
        return Promise.reject();
      }
      const result = [];
      let index2 = 0;
      originList.forEach((item) => {
        // 修复：同时收录文件夹（type === "folder"），并标记 isFolder，以便后续重命名不追加 .ext/.E集数
        if (item.type === "file" || item.type === "folder") {
          result.push({
            id: item.fileId,
            index: index2++,
            isFolder: item.type === "folder",
            fullFileName: item.name,
            ...fileNameParse(item.name, item.type === "folder")
          });
        }
      });
      return result;
    }
    async renameRequest(data) {
      const rootReactContainer2 = await getRootReactContainer(this._rootReactContainerSelectors, true);
      const reactFiberNode = findReactFiberNode(
        rootReactContainer2,
        (node) => {
          var _a2, _b;
          return (_b = (_a2 = node.pendingProps) == null ? void 0 : _a2.localStore) == null ? void 0 : _b.list;
        }
      );
      if (!reactFiberNode) {
        return Promise.reject();
      }
      const originListMap = new Map(
        reactFiberNode.pendingProps.localStore.list.map((item) => [item.fileId, item])
      );
      const taskList = [];
      data.forEach((item) => {
        const originItem = originListMap.get(item.id);
        if (originItem) {
          item.status = LIST_ITEM_STATUS_READY;
          return taskList.push({ item, originItem });
        } else {
          item.status = LIST_ITEM_STATUS_FAIL;
        }
      });
      while (taskList.length) {
        const { item, originItem } = taskList.shift();
        item.status = LIST_ITEM_STATUS_PENDING;
        this._updateStatus();
        try {
          await originItem.rename(item.newFileName);
          if (originItem.name === item.newFileName) {
            item.status = LIST_ITEM_STATUS_SUCCESS;
          } else {
            item.status = LIST_ITEM_STATUS_FAIL;
          }
        } catch (error2) {
          item.status = LIST_ITEM_STATUS_FAIL;
        }
        this._updateStatus();
      }
      return Promise.resolve();
    }
    async refresh() {
      const rootReactContainer2 = await getRootReactContainer(this._rootReactContainerSelectors, true);
      const reactFiberNode = findReactFiberNode(
        rootReactContainer2,
        (node) => {
          var _a2, _b, _c;
          return (_c = (_b = (_a2 = node.pendingProps) == null ? void 0 : _a2.localStore) == null ? void 0 : _b.listModel) == null ? void 0 : _c.reload;
        }
      );
      if (!reactFiberNode) {
        // 修复：不再整页刷新（会丢失面板状态和搜索词），直接跳过自动刷新
        return Promise.resolve();
      }
      const tbodyScroller = querySelector(
        "[class^=node-list-table-view--]>[class^=tbody--]>div>[class^=scroller---]"
      );
      if (tbodyScroller) {
        tbodyScroller.scrollTop = 0;
      }
      const reload = reactFiberNode.pendingProps.localStore.listModel.reload;
      return reload();
    }
  }
  __publicField(ProviderAli, "test", () => /^https:\/\/www\.ali(pan|yundrive)\.com\/drive\/file\/(all|backup|resource)/.test(
    location.href
  ));
  const _sfc_main$2 = vue.defineComponent({
    name: "EnterComponentBaidu",
    components: {
      ComponentIcon
    },
    setup() {
      const providerRef2 = vue.inject("providerRef");
      const onClick = () => {
        providerRef2 == null ? void 0 : providerRef2.value.setVisible(true);
      };
      return {
        onClick
      };
    }
  });
  const _withScopeId$2 = (n) => (vue.pushScopeId("data-v-37f4bd16"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$2 = {
    type: "button",
    class: "enter-component-button"
  };
  const _hoisted_2$2 = { class: "enter-component-button-icon" };
  const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "enter-component-button-text" }, "重命名", -1));
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_component_icon = vue.resolveComponent("component-icon");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: "enter-component",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, [
      vue.createElementVNode("button", _hoisted_1$2, [
        vue.createElementVNode("span", _hoisted_2$2, [
          vue.createVNode(_component_component_icon, { name: "editCircle" })
        ]),
        _hoisted_3$2
      ])
    ]);
  }
  const EnterComponent$2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-37f4bd16"]]);
  const sleep = (timeout) => {
    return timeout > 0 ? new Promise((resolve) => {
      setTimeout(resolve, timeout, timeout);
    }) : Promise.resolve(timeout);
  };
  class ProviderBaidu extends Provider {
    constructor() {
      super(...arguments);
      __publicField(this, "type", "baidu");
      __publicField(this, "rootElementId", "cloud-disk-plugin");
      __publicField(this, "rootElementInsertTarget", ".wp-s-aside-nav__main-top");
      // 修复：搜索页可能没有左侧导航，改用顶部/文件列表上方区域作为备用挂载点
      __publicField(this, "rootElementInsertTargets", [
        ".wp-s-aside-nav__main-top",
        ".wp-s-header-main",
        ".nd-file-list-toolbar, [class^=file-list-toolbar], [class^=toolbar]",
        ".nd-main-list, .nd-new-main-list"
      ]);
      __publicField(this, "rootElementInsertMethod", ROOT_ELEMENT_INSERT_METHOD_APPEND);
      __publicField(this, "maxTask", 50);
      __publicField(this, "EnterComponent", () => EnterComponent$2);
      __publicField(this, "_vueInstance");
    }
    async getOriginList() {
      // 修复：普通文件夹页 URL 可能带空的 search= 参数（如 #/index?dir=xxx&search=），
      // 只有 search 值非空时才算搜索场景。
      const searchMatch = location.href.match(/[?&]search=([^&#]*)/);
      const searchKey = searchMatch ? decodeURIComponent(searchMatch[1] || "").trim() : "";
      const vue = this._getVue();
      // 修复：先尝试 Vue 列表（普通文件夹页优先）
      if (vue) {
        if (vue.listConf) {
          // 修复：原来 `while (listConf.hasMore)` / `while (listLoading)` 都没有上限，
          // 页面改版或接口异常时会永远循环 → getOriginList 永不 resolve → "重置"点了没反应。
          // 这里限制最多翻 100 页、每页最多等 3 秒（50ms 轮询，更快），超时就用已拿到的数据继续。
          let guard = 0;
          while (vue.listConf && vue.listConf.hasMore && guard < 100) {
            guard++;
            try {
              vue.getNextData();
            } catch (e) { break; }
            for (let i = 0; i < 60; i++) {
              if (!vue.listLoading) break;
              await sleep(50);
            }
            if (vue.listLoading) break;
          }
        }
        const originList = vue == null ? void 0 : vue.fileList;
        if (originList && originList.length) {
          const result = [];
          let index2 = 0;
          originList.forEach((item) => {
            // 修复：同时收录文件夹（isdir === 1）
            if (item.isdir === 0 || item.isdir === 1) {
              result.push({
                id: item.fs_id,
                path: item.path,
                index: index2++,
                isFolder: item.isdir === 1,
                fullFileName: item.formatName,
                ...fileNameParse(item.formatName, item.isdir === 1)
              });
            }
          });
          if (result.length) return result;
        }
      }
      // 搜索场景：Vue 列表拿不到时，尝试 /api/search
      if (searchKey) {
        const searchList = await this._getSearchOriginList();
        if (searchList.length) {
          return searchList;
        }
      }
      // 兜底：从 DOM 表格行解析文件列表（百度网盘改版后 Vue 字段可能改名/拿不到）
      const domList = this._parseDomFileList();
      if (domList.length) {
        return domList;
      }
      return Promise.reject();
    }
    // 新增：全盘搜索——用户直接在面板里输入关键词，递归搜索所有匹配文件（不限当前目录）
    // 关键词留空 = 加载全盘所有文件（不加过滤）
    async searchAllFiles(keyword) {
      const key = (keyword || "").trim();
      // 修复：原来关键词为空直接 return，导致用户无法加载"全盘内容"，只能看到当前目录那几百个文件。
      if (!key) {
        return this.loadAllDisk();
      }
      // 修复：顺手解锁可能卡死的状态，避免"应用"一直灰白
      this.replaceParamsDisabled = false;
      this.isControlLoading = true;
      try {
        let list = [];
        let capped = false;
        // 1) 优先 /api/search（HAR 实测可用，现已翻页加载全部）
        try {
          // 修复：翻页搜索耗时变长，超时放宽到 45 秒
          const ret = await this._withTimeout(this._searchAllFilesRequest(key), 45000, "搜索超时");
          list = (ret && ret.list) || [];
          capped = !!(ret && ret.capped);
        } catch (e2) {
          list = [];
        }
        // 2) 兜底：递归 /api/list 扫描
        if (!list.length) {
          message.info("搜索接口不可用，正在逐目录扫描（最多 30 秒）...");
          try {
            list = await this._searchAllFilesFallback(key, 1, 10000, 30000);
          } catch (e3) {
            list = [];
          }
        }
        if (list.length) {
          this._clearIndexMap();
          this._clearUncheckedList();
          this.originList = list;
          this._initListItemIndex();
          this._updateCurrentList();
          if (capped) {
            message.warning(`已加载 ${list.length} 个（达到上限，可能未包含全部）`);
          } else {
            message.success(`搜索到 ${list.length} 个文件`);
          }
        } else {
          message.warning("未搜索到匹配文件，请检查关键词");
        }
      } catch (e) {
        try {
          this.originList = Array.isArray(this.originList) ? this.originList : [];
          this._currentList = Array.isArray(this._currentList) ? this._currentList : [];
          this._updateStatus();
        } catch (e2) { /* 忽略 */ }
        message.error("搜索失败，请稍后重试");
      } finally {
        this.isControlLoading = false;
        try {
          this._updateStatus();
        } catch (e) { /* 忽略 */ }
      }
    }
    // 新增：加载全盘所有文件（不加关键词过滤，从根目录递归遍历）
    // 说明：面板默认只读「当前目录」，百度列表页本身只有几百个文件，
    // 想对整盘操作就必须自己递归遍历目录。
    async loadAllDisk(maxFiles = 20000) {
      this.replaceParamsDisabled = false;
      this.isControlLoading = true;
      try {
        message.info("正在加载全盘文件，文件多时需要几分钟，请稍候…");
        let token = "";
        try {
          token = (await this._fetchBdToken()) || "";
        } catch (e) { /* 忽略 */ }
        if (!token) {
          message.error("拿不到 bdstoken，无法遍历目录，请刷新页面重试");
          return;
        }
        const items = await this._walkAllFiles({
          depth: 6,
          maxFiles,
          timeoutMs: 300000,
          num: 500,
          token,
          startDir: "/"
        });
        const list = [];
        const seenIds = /* @__PURE__ */ new Set();
        for (const item of items) {
          if (!item) continue;
          const name = item.server_filename || item.formatName || "";
          if (!name) continue;
          const id = item.fs_id;
          if (id != null && seenIds.has(id)) continue;
          if (id != null) seenIds.add(id);
          const isFolder = item.isdir === 1;
          list.push({
            id,
            path: item.path || "",
            index: list.length,
            isFolder,
            fullFileName: name,
            ...fileNameParse(name, isFolder)
          });
        }
        if (!list.length) {
          message.warning("全盘遍历没有拿到文件，可能接口权限受限");
          return;
        }
        this._clearIndexMap();
        this._clearUncheckedList();
        this.originList = list;
        this._initListItemIndex();
        this._updateCurrentList();
        if (list.length >= maxFiles) {
          message.warning(`已加载 ${list.length} 个（达到上限 ${maxFiles}，可能未包含全部）`);
        } else {
          message.success(`已加载全盘 ${list.length} 个文件`);
        }
      } catch (e) {
        message.error("全盘加载失败，请稍后重试");
      } finally {
        this.isControlLoading = false;
        try {
          this._updateStatus();
        } catch (e) { /* 忽略 */ }
      }
    }
    async _searchAllFilesRequest(key) {
      const result = [];
      const seenIds = /* @__PURE__ */ new Set();
      // 修复：原来固定 num=500 且只取第 1 页，文件一多就被截断，得反复操作。
      // 现在每页取 1000（减少请求次数），并翻页直到取完或达到安全上限。
      const num = 1000;
      const MAX_TOTAL = 20000;
      const MAX_PAGE = 30;
      let networkError = false;
      for (let page = 1; page <= MAX_PAGE; page++) {
        if (result.length >= MAX_TOTAL) break;
        const url = `https://pan.baidu.com/api/search?clienttype=0&app_id=250528&web=1&order=time&desc=1&num=${num}&page=${page}&recursion=1&key=${encodeURIComponent(key)}`;
        let rawList = null;
        try {
          const res = await fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
              "Accept": "application/json, text/plain, */*",
              "X-Requested-With": "XMLHttpRequest",
              "Referer": "https://pan.baidu.com/disk/main"
            }
          });
          if (!res.ok) {
            if (page === 1) networkError = true;
            break;
          }
          const json = await res.json();
          if (!json || json.errno !== 0 || !Array.isArray(json.list)) {
            if (page === 1) networkError = true;
            break;
          }
          rawList = json.list;
        } catch (e) {
          if (page === 1) networkError = true;
          break;
        }
        if (!rawList.length) break;
        let added = 0;
        rawList.forEach((item) => {
          if (result.length >= MAX_TOTAL) return;
          if (!item || (item.isdir !== 0 && item.isdir !== 1)) return;
          const fullFileName = item.server_filename || item.formatName || "";
          if (!fullFileName) return;
          if (seenIds.has(item.fs_id)) return;
          seenIds.add(item.fs_id);
          const isFolder = item.isdir === 1;
          result.push({
            id: item.fs_id,
            path: item.path || "",
            index: result.length,
            isFolder,
            fullFileName,
            ...fileNameParse(fullFileName, isFolder)
          });
          added++;
        });
        // 本页没有新增（说明接口忽略了 page 参数，翻页无意义）或返回不足一页 → 结束
        if (added === 0) break;
        if (rawList.length < num) break;
      }
      return { list: result, networkError, capped: result.length >= MAX_TOTAL };
    }
    // 修复：原代码用的 /api/filelist 在百度网盘上不存在（实测 404 Not Found），
    // 正确的目录列举接口是 /api/list，且必须带 bdstoken。
    async _apiListDir(dir, page, num, token) {
      const url = `https://pan.baidu.com/api/list?order=name&desc=0&showempty=0&page=${page}&num=${num}&dir=${encodeURIComponent(dir)}&t=${Date.now()}&channel=chunlei&web=1&app_id=250528&bdstoken=${encodeURIComponent(token || "")}`;
      const res = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Accept": "application/json, text/plain, */*",
          "X-Requested-With": "XMLHttpRequest",
          "Referer": "https://pan.baidu.com/disk/main"
        }
      });
      if (!res.ok) throw new Error(`/api/list HTTP ${res.status}`);
      const json = await res.json();
      if (!json || json.errno !== 0 || !Array.isArray(json.list)) {
        throw new Error(`/api/list errno=${json && json.errno}`);
      }
      return json.list;
    }
    // 递归遍历目录，返回原始 item 列表（供搜索/广告扫描共用）
    async _walkAllFiles(opts) {
      const depth = opts && typeof opts.depth === "number" ? opts.depth : 1;
      // 修复：默认上限从 2000 提高到 10000，不再只加载一小部分
      const maxFiles = opts && opts.maxFiles ? opts.maxFiles : 10000;
      const timeoutMs = opts && opts.timeoutMs ? opts.timeoutMs : 15000;
      // 修复：每页从 100 提高到 500，同样文件量请求次数减少 5 倍 → 更快
      const num = opts && opts.num ? opts.num : 500;
      const token = (opts && opts.token) || "";
      const startDir = (opts && opts.startDir) || "/";
      const results = [];
      const seenDirs = /* @__PURE__ */ new Set();
      const deadline = Date.now() + timeoutMs;
      const timedOut = () => Date.now() > deadline;
      const walk = async (dir, d) => {
        if (timedOut() || results.length >= maxFiles) return;
        if (seenDirs.has(dir)) return;
        seenDirs.add(dir);
        const subDirs = [];
        let page = 1;
        while (!timedOut() && results.length < maxFiles) {
          let list;
          try {
            list = await this._apiListDir(dir, page, num, token);
          } catch (e) {
            // 单个目录失败不影响其它目录
            break;
          }
          if (!list.length) break;
          for (const item of list) {
            if (!item) continue;
            if (results.length < maxFiles) results.push(item);
            // 一遍同时收集子目录，避免为拿子目录再请求一遍
            if (d > 0 && item.isdir === 1 && item.path && !seenDirs.has(item.path)) {
              if (subDirs.indexOf(item.path) === -1) subDirs.push(item.path);
            }
          }
          if (list.length < num) break;
          page++;
          if (page > 50) break;
        }
        if (d <= 0 || timedOut()) return;
        for (const sub of subDirs) {
          if (timedOut() || results.length >= maxFiles) return;
          await walk(sub, d - 1);
        }
      };
      try {
        await walk(startDir, depth);
      } catch (e) { /* 忽略 */ }
      return results;
    }
    // 新增：搜索 API 失败时的兜底——递归扫描目录找文件名匹配（带超时）
    async _searchAllFilesFallback(key, depth = 1, maxFiles = 10000, timeoutMs = 30000) {
      const kw = (key || "").toLowerCase();
      if (!kw) return [];
      const token = (await this._fetchBdToken()) || "";
      const items = await this._walkAllFiles({ depth, maxFiles, timeoutMs, token });
      const result = [];
      const seenIds = /* @__PURE__ */ new Set();
      for (const item of items) {
        const fullFileName = item.server_filename || item.formatName || "";
        if (!fullFileName) continue;
        if (fullFileName.toLowerCase().indexOf(kw) === -1) continue;
        if (seenIds.has(item.fs_id)) continue;
        seenIds.add(item.fs_id);
        const isFolder = item.isdir === 1;
        result.push({
          id: item.fs_id,
          path: item.path || "",
          index: result.length,
          isFolder,
          fullFileName,
          ...fileNameParse(fullFileName, isFolder)
        });
      }
      return result;
    }
    // 新增：回到当前目录列表（退出全盘搜索模式）
    resetToList() {
      // 修复：顺手解锁卡死状态，并保证不会因为接口挂起而"点了没反应"
      this.replaceParamsDisabled = false;
      this.isLoading = false;
      this.isControlLoading = false;
      return this._updateOriginList();
    }
    // 新增：递归扫描目录获取所有文件（用于广告检测）
    // 修复：原实现用不存在的 /api/filelist（404），改为复用 _walkAllFiles(/api/list)
    async scanAllFiles(depth = 1, maxFiles = 10000) {
      // 修复：原来固定从 "/" 开始扫，用户在子目录里时扫的是根目录 → 结果对不上。
      // 这里优先用当前目录（从 hash 里读），并把面板已加载的列表直接并入，
      // 即使接口全都失败也还能基于当前列表做广告词分析。
      const currentDir = this._getCurrentDir();
      const merged = [];
      const seen = /* @__PURE__ */ new Set();
      const push = (item) => {
        const name = item && (item.server_filename || item.formatName || item.fullFileName);
        if (!name) return;
        const key = item.fs_id || item.id || name;
        if (seen.has(key)) return;
        seen.add(key);
        merged.push(item);
      };
      // 1) 先并入当前已加载列表（保证一定有数据可分析）
      if (Array.isArray(this.originList)) this.originList.forEach(push);
      // 2) 再走接口递归补充
      let token = "";
      try {
        token = (await this._fetchBdToken()) || "";
      } catch (e) { /* 忽略 */ }
      if (token) {
        try {
          const items = await this._walkAllFiles({
            depth,
            maxFiles,
            timeoutMs: 30000,
            num: 500,
            token,
            startDir: currentDir
          });
          items.forEach(push);
        } catch (e) { /* 忽略，退回已加载列表 */ }
      }
      return merged;
    }
    // 从当前 URL 解析所在目录
    _getCurrentDir() {
      try {
        const hash = location.hash || "";
        const q = hash.indexOf("?") >= 0 ? hash.slice(hash.indexOf("?")) : "";
        const params = new URLSearchParams(q);
        const dir = params.get("dir") || params.get("path") || "";
        if (dir) return dir.startsWith("/") ? dir : "/" + dir;
      } catch (e) { /* 忽略 */ }
      return "/";
    }
    // 新增：从文件列表检测疑似广告词（重复片段，出现数 >= minCount）
    detectAdPatterns(files, minCount = 5, minLen = 3, maxAds = 30) {
      const names = (files || []).map((f) => f.server_filename || f.formatName || "").filter(Boolean);
      if (!names.length) return [];
      // 1. 提取括号内内容（【xxx】 [xxx] （xxx） (xxx) 等）
      const candidateMap = /* @__PURE__ */ new Map();
      const bracketRegex = new RegExp(`[【\\[（(]([^】\\]）)]{${minLen},40})[】\\]）)]`, "g");
      // 2. 提取 URL / 域名 / 邮箱 / 微信 等特征片段（无括号的）
      const featureRegex = /(?:https?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\b|(?:[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)+)|(?:vx|wx|v信|微信|扣扣|qq|企鹅)[:：]?[a-zA-Z0-9_-]{4,20}/gi;
      const addCandidate = (text) => {
        const t = (text || "").trim();
        if (t.length < minLen) return;
        if (t.length > 60) return;
        if (/^[0-9.]+$/.test(t)) return;
        candidateMap.set(t, (candidateMap.get(t) || 0) + 1);
      };
      names.forEach((name) => {
        bracketRegex.lastIndex = 0;
        let m;
        while ((m = bracketRegex.exec(name))) {
          addCandidate(m[1]);
        }
        featureRegex.lastIndex = 0;
        while ((m = featureRegex.exec(name))) {
          addCandidate(m[0]);
        }
      });
      // 3. 筛选出现次数 >= minCount
      const ads = [];
      candidateMap.forEach((count, text) => {
        if (count >= minCount) ads.push({ text, count });
      });
      // 4. 按次数降序，取 Top maxAds
      ads.sort((a, b) => b.count - a.count);
      return ads.slice(0, maxAds);
    }
    // 新增：把选中的广告词填到 pattern（用 | 连接），一键清除
    applyAdPattern(ads) {
      if (!ads || !ads.length) return;
      // 这里已经对广告词做了正则转义，用 | 拼成多选一
      const pattern = ads.map((a) => a.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
      this.replaceParams.pattern = pattern;
      this.replaceParams.replace = "";
      // 修复：原来写的是 renameMode = 0，而模式常量是 "series"/"pattern"，
      // 0 不等于任何一个 → _updateCurrentList 两套解析都不进 → 全部新文件名为空 → 面板没反应。
      this.replaceParams.renameMode = RENAME_MODE_PATTERN;
      // 修复：pattern 已经转义过，必须关掉自动转义，否则会被二次转义导致匹配不到
      this.replaceParams.autoEscape = false;
      this._updateCurrentList();
    }
    // 修复：百度网盘搜索场景专用——直接调 /api/search API 获取搜索结果
    async _getSearchOriginList() {
      // 从 URL 中提取关键词（解码 search 参数）
      let key = "";
      try {
        // 用 URLSearchParams 更可靠地解析（处理编码、空格等）
        const hash = location.hash || "";
        const params = new URLSearchParams(hash.split("?")[1] || "");
        key = params.get("search") || "";
        if (!key) {
          const m = location.href.match(/[?&]search=([^&]+)/);
          if (m) key = decodeURIComponent(m[1]);
        }
      } catch (e) { key = ""; }
      key = key.trim();
      if (!key) return [];
      const result = [];
      // 修复：HAR 实测表明 /api/search 接口只返回单页（无 has_more/total 字段），
      // 之前的分页循环会无限翻页 → 重复数据堆积 → 页面崩溃。因此这里只请求 page=1。
      // 同时用 fs_id 去重，双重保险。
      const seenIds = /* @__PURE__ */ new Set();
      const num = 100;
      const url = `https://pan.baidu.com/api/search?clienttype=0&app_id=250528&web=1&order=time&desc=1&num=${num}&page=1&recursion=1&key=${encodeURIComponent(key)}`;
      try {
        const res = await fetch(url, { method: "GET", credentials: "include", headers: { "Accept": "application/json, text/plain, */*", "X-Requested-With": "XMLHttpRequest" } });
        if (res.ok) {
          const json = await res.json();
          if (json && json.errno === 0 && Array.isArray(json.list)) {
            json.list.forEach((item) => {
              // 修复：同时收录文件夹（isdir === 1）
              if (item.isdir === 0 || item.isdir === 1) {
                const fullFileName = item.server_filename || item.formatName || "";
                if (!fullFileName) return;
                // 修复：fs_id 去重，防止重复项
                if (seenIds.has(item.fs_id)) return;
                seenIds.add(item.fs_id);
                const isFolder = item.isdir === 1;
                result.push({
                  id: item.fs_id,
                  path: item.path || "",
                  index: result.length,
                  isFolder,
                  fullFileName,
                  ...fileNameParse(fullFileName, isFolder)
                });
              }
            });
          }
        }
      } catch (e) {
        // 忽略网络错误，返回已收集的数据
      }
      return result;
    }
    // 获取百度网盘 bdstoken（从 Vue 实例或 cookie 兜底）
    _getBdToken() {
      const vue = this._getVue();
      const fromVue = vue == null ? void 0 : vue.yunData;
      const token = fromVue == null ? void 0 : fromVue.bdstoken;
      if (token) return token;
      // 从 cookie 兜底
      const m = document.cookie.match(/bdstoken=([^;]+)/);
      return m ? m[1] : "";
    }
    // 修复：HAR 实测表明 bdstoken 通过 /api/gettemplatevariable 接口获取，不在 cookie 里。
    // 因此 cookie 兜底拿不到时，直接调该接口获取。
    async _fetchBdToken() {
      // 先试同步兜底（Vue 实例/cookie）
      const local = this._getBdToken();
      if (local) return local;
      try {
        const url = "https://pan.baidu.com/api/gettemplatevariable?clienttype=0&app_id=250528&web=1&dp-logid=" + Date.now() + "&fields=%5B%22bdstoken%22%5D";
        const res = await fetch(url, { method: "GET", credentials: "include", headers: { "Accept": "application/json, text/plain, */*", "X-Requested-With": "XMLHttpRequest" } });
        if (res.ok) {
          const json = await res.json();
          if (json && json.errno === 0 && json.result && json.result.bdstoken) {
            return json.result.bdstoken;
          }
        }
      } catch (e) { /* ignore */ }
      return "";
    }
    async renameRequest(data) {
      // 修复：搜索场景下 _vueInstance 可能不存在，改用 _fetchBdToken() 兜底获取 bdstoken
      const token = await this._fetchBdToken();
      if (!token) {
        return Promise.reject();
      }
      const tasks = [];
      data.forEach((item, index2) => {
        const key = Math.floor(index2 / this.maxTask);
        if (!tasks[key]) {
          tasks[key] = [];
        }
        item.status = LIST_ITEM_STATUS_READY;
        tasks[key].push(item);
      });
      // 修复：分批容错——某批失败不再中断整个循环，
      // 继续尝试后续批次，最后统一汇总失败项，避免"部分成功却整体报错"。
      const failedTasks = [];
      try {
        while (tasks.length) {
          const task = tasks.shift();
          try {
            await this.renameTask(task, token);
          } catch (error2) {
            failedTasks.push(task);
          }
        }
        if (failedTasks.length) {
          const failedTotal = failedTasks.reduce((acc, t) => acc + t.length, 0);
          const err = new Error(`有 ${failedTotal} 个文件重命名失败`);
          err.failedTasks = failedTasks;
          err.failedTotal = failedTotal;
          return Promise.reject(err);
        }
        this.refresh();
        return Promise.resolve();
      } catch (error2) {
        return Promise.reject(error2);
      }
    }
    async renameTask(data, token) {
      const body = new FormData();
      const filelist = data.map((item) => {
        item.status = LIST_ITEM_STATUS_PENDING;
        return {
          id: item.id,
          path: item.path,
          newname: item.newFileName
        };
      });
      this._updateStatus();
      body.append("filelist", JSON.stringify(filelist));
      // 修复：搜索场景下 _vueInstance 可能不存在，判空保护
      if (this._vueInstance) {
        this._vueInstance.editLoading = true;
      }
      return fetch(
        `https://pan.baidu.com/api/filemanager?channel=chunlei&clienttype=0&async=2&onnest=rename&web=1&opera=rename&app_id=250528&bdstoken=${token}`,
        {
          body,
          method: "POST"
        }
      ).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          data.forEach((item) => {
            item.status = LIST_ITEM_STATUS_FAIL;
          });
          return Promise.reject(res);
        }
      }).then(async (res) => {
        if (res.errno !== 0) {
          data.forEach((item) => {
            item.status = LIST_ITEM_STATUS_FAIL;
          });
          return Promise.reject(res);
        }
        // 修复：搜索场景下 _vueInstance 可能不存在，判空保护
        if (this._vueInstance) {
          this._vueInstance.renameFileList = filelist;
        }
        const result = res.taskid ? await this.waitPollTaskResult(res) : res;
        data.forEach((item) => {
          item.status = LIST_ITEM_STATUS_SUCCESS;
        });
        return result;
      });
    }
    async refresh() {
      const vue = this._getVue();
      // 修复：原来拿不到 reloadList 就直接 location.reload() 整页刷新，
      // 导致每重命名一次就要重新开面板、重新输搜索词。
      // 现在绝不刷新页面，只让站点自己重载列表；拿不到就干脆跳过（调用方会原地更新）。
      if (!(vue == null ? void 0 : vue.reloadList)) {
        return Promise.resolve();
      }
      try {
        vue.reloadList();
      } catch (e) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        let count = 20;
        const timer = setInterval(() => {
          try {
            if (vue.$store.state.fileList.loadingList === false || --count < 0) {
              resolve();
              clearInterval(timer);
            }
          } catch (e) {
            resolve();
            clearInterval(timer);
          }
        }, 500);
      });
    }
    async waitPollTaskResult(res) {
      // 搜索场景下 _vueInstance 可能为 undefined，pollTask/editLoading 拿不到。
      // 此时自己轮询 /api/taskquery 直到任务完成，避免误判。
      if (this._vueInstance && typeof this._vueInstance.pollTask === "function") {
        // 修复：原来 `while (editLoading)` 没有超时，一旦站点任务状态不复位就会死循环，
        // 导致 batchRename 的 finally 永远不执行 → replaceParamsDisabled 永远是 true
        // → "应用"按钮永久灰白、再也点不了。这里加最大等待 60 秒兜底。
        const maxWait = 600;
        try {
          this._vueInstance.pollTask(res.taskid);
        } catch (e) { /* 忽略 */ }
        for (let i = 0; i < maxWait; i++) {
          if (!this._vueInstance || !this._vueInstance.editLoading) break;
          await sleep(100);
        }
        return;
      }
      // 兜底：直接调 /api/taskquery 轮询结果
      const token = this._getBdToken() || "";
      const maxPoll = 120;
      for (let i = 0; i < maxPoll; i++) {
        try {
          const url = `https://pan.baidu.com/api/taskquery?taskid=${encodeURIComponent(res.taskid)}&bdstoken=${encodeURIComponent(token)}`;
          const r = await fetch(url, { method: "POST", credentials: "include", headers: { "Accept": "application/json, text/plain, */*", "X-Requested-With": "XMLHttpRequest" } });
          if (r.ok) {
            const json = await r.json();
            if (json && (json.errno === 0 || json.task_status === 3)) {
              return json;
            }
            if (json && json.errno && json.errno !== 0) {
              return json;
            }
          }
        } catch (e) { /* 忽略单次轮询错误 */ }
        await sleep(300);
      }
    }
    _getVue() {
      if (this._vueInstance) {
        return this._vueInstance;
      }
      // 修复：百度网盘列表页/搜索页 DOM 结构可能随改版变化，扩大候选选择器
      const element = querySelector(
        ".nd-main-list, .nd-new-main-list, [class^=nd-file-list], [class*=file-list], [class*=main-list], [class*=search-list], [class*=result-list], [class*=content-list], [class*=table-list], [class*=list-container]"
      );
      if (element == null ? void 0 : element.__vue__) {
        this._vueInstance = element.__vue__;
        return this._vueInstance;
      }
      // 兜底：从 #app 根实例开始向上遍历，找有 listConf/fileList 的实例
      const appEl = querySelector("#app");
      const appVue = appEl == null ? void 0 : appEl.__vue_app__;
      if (appVue) {
        const found = this._findListVue(appVue._instance);
        if (found) {
          this._vueInstance = found;
          return this._vueInstance;
        }
      }
      return;
    }
    // 递归遍历 Vue 组件实例树，找到带 fileList / listConf 的组件（百度网盘改版后兜底）
    _findListVue(vnode, depth = 0) {
      if (!vnode || depth > 12) {
        return;
      }
      const instance = vnode.component || vnode.proxy;
      if (instance && (instance.fileList || instance.listConf)) {
        return instance;
      }
      // 检查子节点
      let child = vnode.component ? vnode.component.subTree : vnode.children;
      if (child && typeof child === "object") {
        const stack = [child];
        while (stack.length) {
          const node = stack.pop();
          if (!node) continue;
          const inst = node.component || node.proxy;
          if (inst && (inst.fileList || inst.listConf)) {
            return inst;
          }
          if (node.children && typeof node.children === "object") {
            if (Array.isArray(node.children)) stack.push(...node.children);
            else stack.push(node.children);
          }
          if (node.component && node.component.subTree) stack.push(node.component.subTree);
        }
      }
      return;
    }
    // 修复：百度网盘文件列表页内置搜索场景，直接从 DOM 表格行解析文件列表（当 vue.fileList 为空时兜底）
    _parseDomFileList() {
      const result = [];
      // 更通用的行选择器：覆盖 .nd-list-table、.nd-file-list、.nd-node-list、以及任意 class 含 list/file/table 的行
      const rows = document.querySelectorAll(
        ".nd-list-table tbody tr, .nd-file-list tbody tr, .nd-node-list tbody tr, [class*=file-list] tbody tr, [class*=list-table] tbody tr, [class*=node-list] tbody tr, [class*=table-body] tr, [class*=file-item], [class*=list-item], [class*=nd-table] tbody tr"
      );
      rows.forEach((row) => {
        // 找文件名元素（优先 class 含 name/title/file-name，再退到 <a>，最后 span/div）
        const nameEl = row.querySelector(
          "[class*=name], [class*=title], [class*=fileName], [class*=filename], .file-name, .file_name, .nd-file-name, .nd-name, [class*=nd-name]"
        ) || row.querySelector("a") || row.querySelector("span, div");
        if (!nameEl) return;
        const fullFileName = (nameEl.textContent || "").trim();
        if (!fullFileName || fullFileName.length > 512) return;
        // 尝试取文件 ID：从 data 属性 / 链接 / 隐藏输入里拿
        const idEl = row.querySelector(
          "[data-fs_id], [data-fsid], [data-id], [data-file-id], [data-fileId], [data-fileid], [data-fid]"
        );
        const id = idEl ? (idEl.getAttribute("data-fs_id") || idEl.getAttribute("data-fsid") || idEl.getAttribute("data-id") || idEl.getAttribute("data-file-id") || idEl.getAttribute("data-fileId") || idEl.getAttribute("data-fileid") || idEl.getAttribute("data-fid")) : "";
        let path = "";
        const pathEl = row.querySelector("[data-path], [data-dir]");
        if (pathEl) path = pathEl.getAttribute("data-path") || pathEl.getAttribute("data-dir") || "";
        if (!id) {
          // 兜底：从行内 Vue 实例里递归找 fs_id / fileId
          const rawVue = this._findRowVue(row);
          const rawId = rawVue && (rawVue.fs_id || rawVue.fileId || rawVue.id);
          if (!rawId) return;
          if (!path) path = rawVue && (rawVue.path || "");
          const isFolder = !!(rawVue && (rawVue.isdir === 1 || rawVue.isFolder));
          result.push({
            id: rawId,
            path,
            index: result.length,
            isFolder,
            fullFileName,
            ...fileNameParse(fullFileName, isFolder)
          });
          return;
        }
        // 判断是否为文件夹：找图标 class 里含 folder / dir 的元素，或从 Vue 实例里取 isdir
        const folderEl = row.querySelector(
          "[class*=folder], [class*=dir], [class*=icon-dir], [class*=folder-icon]"
        );
        const rowVue2 = this._findRowVue(row);
        const isFolder = !!folderEl || !!(rowVue2 && rowVue2.isdir === 1);
        if (!path) path = rowVue2 && rowVue2.path ? rowVue2.path : "";
        result.push({
          id,
          path,
          index: result.length,
          isFolder,
          fullFileName,
          ...fileNameParse(fullFileName, isFolder)
        });
      });
      return result;
    }
    // 递归查找 DOM 元素关联的 Vue 实例（找 fs_id / isdir / path 等原始文件字段）
    _findRowVue(el, depth = 0) {
      if (!el || depth > 6) return;
      const direct = el.__vue__ || el._vnode || el.__vueParentComponent;
      if (direct) {
        if (direct.fs_id !== void 0 || direct.fileId !== void 0 || direct.isdir !== void 0 || direct.path) return direct;
        // 从 $props / originItem 里找
        const props = direct.$props || direct.props;
        if (props && (props.fs_id !== void 0 || props.isdir !== void 0)) return props;
        const originItem = direct.originItem || (direct.$ && direct.$.originItem);
        if (originItem) return originItem;
      }
      return this._findRowVue(el.parentElement, depth + 1);
    }
  }
  __publicField(ProviderBaidu, "test", () => {
    // 修复：支持百度网盘搜索页（#/search?keyword=...）和全部分类页（#/index?category=all）
    const path = location.href;
    return /^https:\/\/pan\.baidu\.com\/disk\/main(.+)?#\/(index|search)(\?.*)?$/.test(path) ||
      /^https:\/\/pan\.baidu\.com\/disk\/main(.+)?#\/index\?category=all/.test(path);
  });
  const _sfc_main$1 = vue.defineComponent({
    name: "EnterComponentQuark",
    components: {
      ComponentIcon
    },
    setup() {
      const providerRef2 = vue.inject("providerRef");
      const onClick = () => {
        providerRef2 == null ? void 0 : providerRef2.value.setVisible(true);
      };
      return {
        onClick
      };
    }
  });
  const _withScopeId$1 = (n) => (vue.pushScopeId("data-v-4c1d814d"), n = n(), vue.popScopeId(), n);
  const _hoisted_1$1 = { class: "enter-component" };
  const _hoisted_2$1 = { class: "enter-component-button-icon" };
  const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "enter-component-button-text" }, "重命名", -1));
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_component_icon = vue.resolveComponent("component-icon");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
      vue.createElementVNode("button", {
        type: "button",
        class: "enter-component-button",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, [
        vue.createElementVNode("span", _hoisted_2$1, [
          vue.createVNode(_component_component_icon, { name: "editCircle" })
        ]),
        _hoisted_3$1
      ])
    ]);
  }
  const EnterComponent$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4c1d814d"]]);
  let ProviderQuark$1 = (_a = class extends Provider {
    constructor() {
      super(...arguments);
      __publicField(this, "type", "quark");
      __publicField(this, "rootElementId", "cloud-disk-plugin");
      __publicField(this, "rootElementInsertTarget", "#ice-container .section-main > .section-header.list-header > .btn-operate > .btn-main");
      __publicField(this, "rootElementInsertMethod", ROOT_ELEMENT_INSERT_METHOD_PREPEND);
      __publicField(this, "EnterComponent", () => EnterComponent$1);
      __publicField(this, "_rootReactContainerSelectors", "#ice-container");
    }
    async getOriginList() {
      const rootReactContainer2 = await getRootReactContainer(this._rootReactContainerSelectors, true);
      const reactFiberNode = findReactFiberNode(
        rootReactContainer2,
        (node) => {
          var _a2, _b, _c, _d, _e;
          return (_e = (_d = (_c = (_b = (_a2 = node.pendingProps) == null ? void 0 : _a2.store) == null ? void 0 : _b.getState) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.file) == null ? void 0 : _e.listType;
        }
      );
      if (!reactFiberNode) {
        return Promise.reject();
      }
      let state = reactFiberNode.pendingProps.store.getState();
      const hasMore = state.file[state.file.listType].list.length !== state.file[state.file.listType].total;
      if (hasMore) {
        await reactFiberNode.pendingProps.store.dispatch.file.loadAllFiles({
          params: {
            needTotalNum: 1,
            page: 1,
            size: state.file[state.file.listType].total,
            sort: state.file[state.file.listType].sort
          },
          fid: state.file[state.file.listType].list[0].pdir_fid,
          listType: state.file.listType
        });
        do {
          await sleep(300);
          state = reactFiberNode.pendingProps.store.getState();
        } while (state.file[state.file.listType].list.length !== state.file[state.file.listType].total);
      }
      const originList = state.file[state.file.listType].list;
      if (!originList) {
        return Promise.reject();
      }
      const result = [];
      let index2 = 0;
      originList.forEach((item) => {
        // 修复：夸克文件夹通常 file 为空但有 file_name，只要有 file_name 就收录
        if (item.file_name) {
          result.push({
            id: item.fid,
            index: index2++,
            isFolder: !item.file,
            fullFileName: item.file_name,
            ...fileNameParse(item.file_name, !item.file)
          });
        }
      });
      return result;
    }
    async renameRequest(data) {
      const rootReactContainer2 = await getRootReactContainer(this._rootReactContainerSelectors, true);
      const reactFiberNode = findReactFiberNode(
        rootReactContainer2,
        (node) => {
          var _a2;
          return (_a2 = node.pendingProps) == null ? void 0 : _a2.rename;
        }
      );
      if (!reactFiberNode) {
        return Promise.reject();
      }
      const taskList = [];
      data.forEach((item) => {
        item.status = LIST_ITEM_STATUS_READY;
        taskList.push(item);
      });
      while (taskList.length) {
        const item = taskList.shift();
        item.status = LIST_ITEM_STATUS_PENDING;
        this._updateStatus();
        try {
          const res = await reactFiberNode.pendingProps.rename({
            fid: item.id,
            fileName: item.newFileName
          });
          if (res.status === 200 && res.code === 0) {
            item.status = LIST_ITEM_STATUS_SUCCESS;
          } else {
            item.status = LIST_ITEM_STATUS_FAIL;
          }
        } catch (error2) {
          item.status = LIST_ITEM_STATUS_FAIL;
        }
        this._updateStatus();
      }
      return this.refresh();
    }
    async refresh() {
      const rootReactContainer2 = await getRootReactContainer(this._rootReactContainerSelectors, true);
      const reactFiberNode = findReactFiberNode(
        rootReactContainer2,
        (node) => {
          var _a2;
          return (_a2 = node.pendingProps) == null ? void 0 : _a2.onRefresh;
        }
      );
      if (!reactFiberNode) {
        // 修复：不再整页刷新（会丢失面板状态和搜索词），直接跳过自动刷新
        return Promise.resolve();
      }
      const reload = reactFiberNode.pendingProps.onRefresh;
      return reload();
    }
  }, __publicField(_a, "test", () => /^https:\/\/pan.quark.cn\/list#\/list\//.test(location.href)), _a);
  const _sfc_main = vue.defineComponent({
    name: "EnterComponentQuark",
    components: {
      ComponentIcon
    },
    setup() {
      const providerRef2 = vue.inject("providerRef");
      const onClick = () => {
        providerRef2 == null ? void 0 : providerRef2.value.setVisible(true);
      };
      return {
        onClick
      };
    }
  });
  const _withScopeId = (n) => (vue.pushScopeId("data-v-5f911f59"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { class: "enter-component" };
  const _hoisted_2 = { class: "enter-component-content-icon" };
  const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "enter-component-content-text" }, "重命名", -1));
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_component_icon = vue.resolveComponent("component-icon");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.createElementVNode("button", {
        type: "button",
        class: "enter-component-button",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, [
        vue.createElementVNode("span", _hoisted_2, [
          vue.createVNode(_component_component_icon, { name: "editCircle" })
        ]),
        _hoisted_3
      ])
    ]);
  }
  const EnterComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5f911f59"]]);
  class ProviderQuark extends Provider {
    constructor() {
      super(...arguments);
      __publicField(this, "type", "pikpak");
      __publicField(this, "rootElementId", "cloud-disk-plugin");
      __publicField(this, "rootElementInsertTarget", "#app .sidebar .overflow-middle-bar .nav");
      __publicField(this, "rootElementInsertMethod", ROOT_ELEMENT_INSERT_METHOD_APPEND);
      __publicField(this, "EnterComponent", () => EnterComponent);
      __publicField(this, "_vueInstance");
    }
    async getOriginList() {
      var _a2, _b, _c, _d, _e, _f;
      const vue = this._getVue();
      const originList = (_f = (_e = (_d = (_c = (_b = (_a2 = vue == null ? void 0 : vue.config) == null ? void 0 : _a2.globalProperties) == null ? void 0 : _b.$pinia) == null ? void 0 : _c.state) == null ? void 0 : _d.value) == null ? void 0 : _e.file) == null ? void 0 : _f.dbFiles;
      if (!originList) {
        return Promise.reject();
      }
      const result = [];
      let index2 = 0;
      originList.forEach((item) => {
        // 修复：同时收录文件夹（kind === "drive#folder"）
        if (item.kind === "drive#file" || item.kind === "drive#folder") {
          result.push({
            id: item.id,
            index: index2++,
            isFolder: item.kind === "drive#folder",
            fullFileName: item.name,
            ...fileNameParse(item.name, item.kind === "drive#folder")
          });
        }
      });
      return result;
    }
    async renameRequest(data) {
      var _a2;
      const tasks = data.map((item) => {
        item.status = LIST_ITEM_STATUS_READY;
        return item;
      });
      const captchaKey = Object.keys(localStorage).find((item) => item.startsWith("captcha_"));
      const credentialsKey = Object.keys(localStorage).find(
        (item) => item.startsWith("credentials_")
      );
      if (!captchaKey || !credentialsKey) {
        return Promise.reject();
      }
      try {
        const headers = {};
        const captcha = JSON.parse(localStorage[captchaKey]);
        headers["X-Captcha-Token"] = captcha.captcha_token;
        const credentials = JSON.parse(localStorage[credentialsKey]);
        headers.Authorization = `${credentials.token_type} ${credentials.access_token}`;
        if (localStorage.deviceid) {
          const deviceid = (_a2 = localStorage.deviceid.match(/^.+\.(.{32})/)) == null ? void 0 : _a2[1];
          if (deviceid) {
            headers["X-Device-Id"] = deviceid;
          }
        }
        while (tasks.length) {
          const task = tasks.shift();
          await this.renameFetch(task, headers);
        }
        this.refresh();
        return Promise.resolve();
      } catch (error2) {
        return Promise.reject(error2);
      }
    }
    renameFetch(data, headers) {
      this._updateStatus();
      return fetch(`https://api-drive.mypikpak.com/drive/v1/files/${data.id}`, {
        body: JSON.stringify({ name: data.newFileName }),
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...headers
        }
      }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      }).then((res) => {
        if (res.error_code || res.error_description) {
          return Promise.reject(res);
        }
        data.status = LIST_ITEM_STATUS_SUCCESS;
      }).catch(() => {
        data.status = LIST_ITEM_STATUS_FAIL;
      }).finally(() => {
        this._updateStatus();
      });
    }
    async refresh() {
      const vue = this._getVue();
      const router = vue.config.globalProperties.$router;
      if (!router.hasRoute("cdp_refresh")) {
        const routeAll = router.options.routes.find((item) => item.name === "all");
        router.addRoute({
          path: "/cdp_refresh",
          name: "cdp_refresh",
          meta: { ...routeAll.meta, noAuth: true },
          component: () => Promise.resolve({
            render() {
              return "";
            },
            beforeRouteEnter(to, from, next) {
              next((vm) => {
                vm.$router.replace(from.fullPath);
              });
            }
          })
        });
      }
      router.push("/cdp_refresh");
    }
    _getVue() {
      if (this._vueInstance) {
        return this._vueInstance;
      }
      const element = querySelector("#app");
      if (!(element == null ? void 0 : element.__vue_app__)) {
        return;
      }
      this._vueInstance = element.__vue_app__;
      return this._vueInstance;
    }
  }
  __publicField(ProviderQuark, "test", () => /^https:\/\/mypikpak.com\/drive\/all/.test(location.href));
  let provider;
  const getProvider = () => {
    if (ProviderAli.test()) {
      provider = provider instanceof ProviderAli ? provider : new ProviderAli();
    } else if (ProviderBaidu.test()) {
      provider = provider instanceof ProviderBaidu ? provider : new ProviderBaidu();
    } else if (ProviderQuark$1.test()) {
      provider = provider instanceof ProviderQuark$1 ? provider : new ProviderQuark$1();
    } else if (ProviderQuark.test()) {
      provider = provider instanceof ProviderQuark ? provider : new ProviderQuark();
    } else {
      provider = void 0;
      return void 0;
    }
    return provider;
  };
  const providerRef = vue.ref();
  const getProviderRef = () => {
    const instance = getProvider();
    if (providerRef.value !== instance) {
      providerRef.value = instance;
      Object.assign(window, {
        _toggleCloudDiskPlugin: () => {
          if (providerRef.value) {
            providerRef.value.setVisible(!providerRef.value.visible);
          }
        }
      });
    }
    return providerRef;
  };
  const loop = () => {
    const providerRef2 = getProviderRef();
    if (!(providerRef2 == null ? void 0 : providerRef2.value)) {
      return;
    }
    // 修复：支持多个候选挂载位置（文件列表页侧栏 / 搜索页顶部工具条等）
    const target = querySelector(providerRef2.value.rootElementInsertTarget) ||
      (Array.isArray(providerRef2.value.rootElementInsertTargets) ?
        providerRef2.value.rootElementInsertTargets.map((s) => querySelector(s)).find(Boolean) :
        void 0);
    const rootElement = querySelector("#" + providerRef2.value.rootElementId);
    if (target && !rootElement) {
      const app = vue.createApp(App);
      app.provide("providerRef", providerRef2);
      app.mount(
        (() => {
          const root = document.createElement("div");
          root.setAttribute("id", providerRef2.value.rootElementId);
          target[providerRef2.value.rootElementInsertMethod](root);
          return root;
        })()
      );
    }
  };
  const main = async () => {
    // 启动标记：可在控制台一眼确认装的是哪一版。
    // 如果这里显示 1.4.0，说明油猴里装的还是旧脚本，需要重新导入。
    try {
      console.log(
        "%c[网盘批量重命名] v1.4.4 已加载",
        "color:#fff;background:#1677ff;padding:2px 8px;border-radius:4px;font-weight:bold"
      );
    } catch (e) { /* 忽略 */ }
    while ((window == null ? void 0 : window.parent) === window) {
      loop();
      await sleep(300);
    }
  };
  main();

})(Vue);