import features from '../../../../feature-manager'; // 导入特性管理器模块

import * as pageDetect from 'github-url-detection'; // 导入第三方的GitHub页面检测模块

const featureId = features.getFeatureID(import.meta.url); // 通过特性管理器的getFeatureID方法获取当前特性的ID

// const init = async (): Promise<void> => {
//     // 该特性的初始化工作都在这里进行
//     console.log('init colorful-calendar');
// };
const init = async (): Promise<void> => {
  const root = document.documentElement;
  root.style.setProperty('--color-calendar-graph-day-L1-bg', '#ffedf9');
  root.style.setProperty('--color-calendar-graph-day-L2-bg', '#ffc3eb');
  root.style.setProperty('--color-calendar-graph-day-L3-bg', '#ff3ebf');
  root.style.setProperty('--color-calendar-graph-day-L4-bg', '#c70085');
};

const restore = async () => {
  // 在GitHub的restoration visit后运行，对于此特性可以不需要在该函数中写内容，详见论文
  console.log('restore colorful-calendar');
};

features.add(featureId, {
  // 调用特性管理器的add方法添加特性，第一个参数是ID，第二个参数是meta信息配置对象
  asLongAs: [pageDetect.isUserProfile], // 表示“只有当前页面是用户Profile页面时才运行该特性”
  awaitDomReady: false, // 是否等待DOM加载完毕，如无特殊情况，都置为false
  init, // 指明初始化函数，"init,"是"init: init,"的简写，这是ES6的特性
  restore,
});
