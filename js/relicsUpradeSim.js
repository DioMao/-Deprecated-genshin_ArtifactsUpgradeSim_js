var creatRelic = new RelicsFunction();

// 词缀条目
const entryList = ["critRate", "critDMG", "ATK", "ATKPer", "def", "defPer", "HP", "HPPer", "energyRecharge", "elementMastery"],
    entryListCh = ["暴击率%","暴击伤害%","攻击","攻击%","防御","防御%","生命","生命%","充能效率%","元素精通"],
    entryListRate = [0.3, 0.3, 0.75, 0.5, 0.75, 0.5, 0.75, 0.5, 0.3, 0.3],
    entryValue = {
        "critRate": [2.7, 3.1, 3.5, 3.9],
        "critDMG": [5.4, 6.2, 7, 7.8],
        "ATK": [14, 16, 18, 19],
        "ATKPer": [4.1, 4.7, 5.3, 5.8],
        "def": [16, 19, 21, 23],
        "defPer": [5.1, 5.8, 6.6, 7.3],
        "HP": [209, 239, 269, 299],
        "HPPer": [4.1, 4.7, 5.3, 5.8],
        "energyRecharge": [4.5, 5.2, 5.8, 6.5],
        "elementMastery": [16, 19, 21, 23]
    }

// 部件列表
const parts = ["feather", "flower", "hourglass", "hat", "cup"],
    partsCh = ["死之羽", "生之花", "时之沙", "理之冠", "空之杯"];

// 部件主词条列表
const feather = ["ATK"],
    flower = ["HP"],
    hourglass = ["ATKPer", "defPer", "HPPer", "elementMastery", "energyRecharge"],
    hat = ["critRate", "critDMG", "ATKPer", "defPer", "HPPer", "elementMastery", "HPRes"],
    cup = ["ATKPer", "defPer", "HPPer", "elementMastery", "water", "fire", "thunder", "stone", "wind", "ice", "Physical"],
    mainEntryList = ["ATK", "HP", "critRate", "energyRecharge", "HPRes", "critDMG", "ATKPer", "defPer", "HPPer", "elementMastery", "water", "fire", "thunder", "stone", "wind", "ice", "Physical"],
    mainEntryListCh = ["攻击", "生命", "暴击率%", "充能效率%", "治疗加成", "暴击伤害%", "攻击%", "防御%", "生命%", "元素精通", "水元素伤害", "火元素伤害", "雷元素伤害", "岩元素伤害", "风元素伤害", "冰元素伤害", "物理伤害"];

// 部件主词条概率
const hourglassRate = [0.26, 0.26, 0.26, 0.1, 0.1],
    hatRate = [0.1, 0.1, 0.22, 0.22, 0.22, 0.04, 0.1],
    cupRate = [0.21, 0.21, 0.21, 0.025, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05,0.05]

/**
 * 构造函数
 */
function RelicsFunction() {
    this.result = [];
    this.count = 0;
    this.backup = [];
};

// 初始化
RelicsFunction.prototype.random = function () {
    let newRelics = {
        level: 0,
        part: "none",
        mainEntry: "none",
        entry: []
    }
    // 随机位置
    newRelics.part = parts[Math.floor((Math.random() * parts.length))];
    // 随机主属性
    newRelics.mainEntry = chooseMainEntry(newRelics.part);
    let relicEntry = [],
        relicEntryRate = [];
    for (let i = 0; i < entryList.length; i++) {
        entryList[i] == newRelics.mainEntry ? null : (relicEntry.push(entryList[i]), relicEntryRate.push(entryListRate[i]));
    }
    // 随机词条
    for (let i = 0; i < 3; i++) {
        //临时词条库
        let newEntry = randomRate(relicEntry, relicEntryRate),
            newEntryRate = randomEntryValue(newEntry),
            index = relicEntry.indexOf(newEntry);
        // 从临时词条库中移除已有词条，避免重复
        relicEntry.splice(index, 1);
        relicEntryRate.splice(index, 1);
        // 写入词条数据
        newRelics.entry[i] = [newEntry, newEntryRate];
    }
    // 是否拥有初始四词条
    if (Math.random() < 0.2) {
        let newEntry = randomRate(relicEntry, relicEntryRate)
        newRelics.entry[3] = [newEntry, randomEntryValue(newEntry)];
    }
    // 保存结果
    this.result.push(newRelics);
    this.count++;
    console.log(newRelics);
    // console.log(this.result);
    return newRelics;
}

/**
 * 升级强化
 * @param __index {number} 序号
 */
RelicsFunction.prototype.upgrade = function (__index) {
    if (__index >= this.result.length || __index < 0) return false;
    let currentRelic = this.result[__index],
        currentEntry = [],
        currentEntryList = [],
        currentEntryRate = [];
    // 判断圣遗物是否满级
    if (currentRelic.level >= 20) {
        console.log("Upgrade failed,this relic is fully rated.");
        return false
    };
    // 是否需要补充词条
    if (currentRelic.entry.length < 4) {
        for (let i = 0; i < currentRelic.entry.length; i++) {
            currentEntry.push(currentRelic.entry[i][0]);
        }
        // 挑选可用词条（避免与其余词条重复）
        for (let i = 0; i < entryList.length; i++) {
            if (currentEntry.indexOf(entryList[i]) < 0) {
                currentEntryList.push(entryList[i]);
                currentEntryRate.push(entryListRate[i]);
            }
        }
        let addEntry = randomRate(currentEntryList, currentEntryRate);
        addRate = randomEntryValue(addEntry);
        this.result[__index].entry.push([addEntry, addRate]);
        console.log("Upgrade success,new entry is " + addEntry + " + " + addRate);
    } else {
        // 升级随机词条
        let upIndex = Math.floor(Math.random() * currentRelic.entry.length),
            // 被强化词条
            upEntry = currentRelic.entry[upIndex][0],
            upRate = randomEntryValue(upEntry);
        console.log("Upgrade success," + upEntry + " + " + upRate);
        this.result[__index].entry[upIndex][1] += upRate;
    }
    // 增加等级
    this.result[__index].level += 4;
    // console.log(this.result);
}

/**
 * 批量删除指定数据
 * @param __del {array} 要删除的遗物序号（数组）
 */
RelicsFunction.prototype.deleteOne = function(__del){
    this.result.splice(__del,1);
}

/**
 * 批量删除指定数据
 * @param __delArr {array} 要删除的遗物序号（数组）
 */
RelicsFunction.prototype.batchDelete = function(__delArr){
    __delArr.sort((a,b) => a-b);
    for(let i = __delArr.length - 1;i >= 0 ;i--){
        this.result.splice(__delArr[i],1)
    }
}

/**
 * 清空数据
 */
RelicsFunction.prototype.clearAll = function(){
    // 备份原数据
    if(this.backup.length != 0) this.backup.length = 0;
    this.backup = JSON.parse(JSON.stringify(this.result));
    this.result.length = 0;
}

/** 辅助函数 **/

/**
 * 根据数组随机概率
 * @param __arr1 {array} 随机列表
 * @param __arr2 {array} 随机概率（对应arr1）
 */
function randomRate(__arr1, __arr2) {
    if (__arr1.length != __arr2.length) {
        console.log("Warning!Array length different!");
    }
    let __rand = Math.random(),
        __rate = 0,
        __totalRate = 0;
    for (let __i = 0; __i < __arr2.length; __i++) {
        __totalRate += __arr2[__i];
    }
    __rand *= __totalRate;
    for (let __i = 0; __i < __arr2.length; __i++) {
        __rate += __arr2[__i];
        if (__rand <= __rate) {
            return __arr1[__i];
        }
    }
    return __arr1[__arr1.length - 1];
}

/**
 * 随机主词条
 * @param __part {string} 位置
 */
function chooseMainEntry(__part) {
    switch (__part) {
        case "feather":
            return "ATK";
            break;
        case "flower":
            return "HP";
            break;
        case "hourglass":
            return randomRate(hourglass, hourglassRate);
            break;
        case "hat":
            return randomRate(hat, hatRate);
            break;
        case "cup":
            return randomRate(cup, cupRate);
            break;
        default:
            console.log("Error! -chooseMainEbtry-");
    }
}

/** 
 * 随机副词条数值
 * @param __entry {string} 词条名称
 */
function randomEntryValue(__entry) {
    return entryValue[__entry][Math.floor(Math.random() * entryValue[__entry].length)];
}