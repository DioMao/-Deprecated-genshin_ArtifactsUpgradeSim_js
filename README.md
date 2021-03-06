# 此处的Demo暂停更新（仍可下载试用）。后续更新会迁移到Vue版本：

https://github.com/DioMao/genshin_ArtifactsUpgradeSim_vue

### 原神圣遗物强化模拟

---

摸鱼的小项目，含有以下问题：
- 各种奇怪的bug
- 更新缓慢
- 界面简陋
- 功能不齐

---

**如果觉得还凑合，就点个免费的Star吧~**

### 注意事项：

- **下载前请注意：本模拟器使用了Vue3，因此不支持IE浏览器。**

- **开发和调试时仅使用了chrome，因此不保证在所有浏览器都能正常使用。理论上来讲chrome、Edge、Firefox、QQ浏览器都能正常运行。**

如果你只是想要使用模拟器，可以下载到本地后直接运行demo.html文件，或者直接访问下面的demo网站。

为了即开即用，本项目没有使用webpack等构建工具。

**概率数据来自于网络，仅供娱乐。**

---

#### Demo预览（可能落后于当前版本）：

GIt: https://diomao.github.io/artifacts_sim_demo

国内: https://juanweimao.gitee.io/artifacts_sim_demo

---

#### 引入方法：

直接使用<script>标签引入ArtifactsUpradeSim.js文件。

在JavaScript中使用ArtifactsSim调用，方法如下：

#### 1. 生成新的圣遗物数据：

> ArtifactsSim.creatArtifact(part,mainEntry,entry,entryRate)

参数说明:

- part: string，可选，生成的圣遗物位置。
- mainEntry: srting，可选，圣遗物主词条。
- entry: Array，可选，圣遗物的副词条，至多四条，超过四条则全部随机生成。自选副词条不满三条时会随机选择可用副词条补至三条。
- entryRate: Array，可选，圣遗物的副词条的数值。
- **若有无效参数，则该项会随机选择。**

示例：
> ArtifactsSim.creatArtifact("cup","fire",["ATKPer","critRate","critDMG","elementMastery"],[5.8,3.9,7.8,23]);

返回值为对象:

>   
    {
        level: 0,
        part: "none",
        mainEntry: "none",
        entry: [],
        initEntry: '',
        upgradeHistory: [],
        creationDate: Date
    }

生成的数据也会保存在ArtifactsSim.result中。

#### 2. 读取圣遗物列表：

> ArtifactsSim.result

存储数据为ArtifactsSim.creatArtifact()返回值组合成的数组。

####  3. 圣遗物强化

> ArtifactsSim.upgrade(index,entry,level)

参数说明:

- index: number，必选，对应ArtifactsSim.result中存储的圣遗物下标。
- entry: string，可选，指定强化的副词条，若不存在则会随机强化；词条不满四条时会优先补满四词条。
- level: number,可选，强化词条的数值档位。例如爆伤有四档数值，0-3表示从低到高的四档数值。

#### 4.圣遗物得分计算

> rArtifactsSim.ArtifactScore(index,rule)

参数说明：

- index: number，必选，对应ArtifactsSim.result中存储的圣遗物下标。
- rule: [string | array]，可选，圣遗物评分规则。默认评分为攻击+双暴得分。

当rule为字符串时，从如下数组中选择一个：
> 
    scoreList = ["atk","crit","def","hp","er","em"]
    // 对应 ["攻击得分","双暴得分","防御得分","生命得分","充能得分","精通得分"]

当rule为数组时，选择一个或多个组成数组，如["crit","def","hp"]。


#### 5. 删除指定圣遗物

> ArtifactsSim.deleteOne(index)

参数说明:

- index: number，必选，对应ArtifactsSim.result中存储的圣遗物下标。

#### 6. 重置圣遗物

> ArtifactsSim.reset(index)

参数说明:

- index: number，必选，对应ArtifactsSim.result中存储的圣遗物下标。

全部重置:

> ArtifactsSim.resetAll()
