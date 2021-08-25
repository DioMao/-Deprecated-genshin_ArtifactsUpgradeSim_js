### 原神圣遗物强化模拟

---
**原生js**

概率数据来自于网络，仅供娱乐。

##### 1. 生成新的圣遗物数据：

> relicsSim.random()

返回值为对象:

> {level: 0,part: "none",mainEntry: "none",entry: []}

生成的数据也会保存在++relicsSim.result++中。

##### 2. 读取圣遗物列表：

> relicsSim.result

存储数据为relicsSim.random()返回值组合成的数组。

#####  3. 圣遗物强化

> relicsSim.upgrade(index)

输入值index对应relicsSim.result中存储的圣遗物下标，数据类型为number。

##### 4. 删除指定圣遗物

> relicsSim.deleteOne(index)

输入值index对应relicsSim.result中存储的圣遗物下标，数据类型为number。

==暂时写这么多，以后可能会更新==
