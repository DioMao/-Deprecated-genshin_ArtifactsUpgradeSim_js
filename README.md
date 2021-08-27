### 原神圣遗物强化模拟

---

概率数据来自于网络，仅供娱乐。

#### 1. 生成新的圣遗物数据：

> relicsSim.creatRelic(part,mainEntry,entry,entryRate)

参数说明:

- part: string，可选，生成的圣遗物位置。
- mainEntry: srting，可选，圣遗物主词条。
- entry: Array，可选，圣遗物的副词条（3-4条）。
- entryRate: Array，可选，圣遗物的副词条的数值。
- **若有无效参数，则该项会随机选择。**

示例：
> relicsSim.creatRelic("cup","fire",["ATKPer","critRate","critDMG","elementMastery"],[5.8,3.9,7.8,23]);

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

生成的数据也会保存在relicsSim.result中。

#### 2. 读取圣遗物列表：

> relicsSim.result

存储数据为relicsSim.creatRelic()返回值组合成的数组。

####  3. 圣遗物强化

> relicsSim.upgrade(index,entry)

参数说明:

- index: number，必选，对应relicsSim.result中存储的圣遗物下标
- entry: string，可选，指定强化的副词条，若不存在则会随机强化；词条不满四条时无效。


#### 4. 删除指定圣遗物

> relicsSim.deleteOne(index)

参数说明:

- index: number，必选，对应relicsSim.result中存储的圣遗物下标

#### 5. 重置圣遗物

> relicsSim.reset(index)

参数说明:

- index: number，必选，对应relicsSim.result中存储的圣遗物下标

全部重置:

> relicsSim.resetAll()
