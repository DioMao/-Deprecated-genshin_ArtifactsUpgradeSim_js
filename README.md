# 原来，你也玩原神。

### 原神圣遗物强化模拟

---

摸鱼的小项目，含有以下问题：
- 各种奇怪的bug
- 更新缓慢
- 界面简陋
- 功能不齐

为了即开即用使用html展示，用于项目中需要修改js文件。

**概率数据来自于网络，仅供娱乐。**

---

#### Demo预览（可能落后于当前版本）：

> https://diomao.github.io/ArtifactsSim.github.io/

---

#### 1. 生成新的圣遗物数据：

> ArtifactsSim.creatArtifact(part,mainEntry,entry,entryRate)

参数说明:

- part: string，可选，生成的圣遗物位置。
- mainEntry: srting，可选，圣遗物主词条。
- entry: Array，可选，圣遗物的副词条（3-4条）。
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
        upgradeHistory: []
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
- rule: 评分规则，可选，圣遗物评分规则。默认评价输出攻击。目前评分规则待完善，只有默认。


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
