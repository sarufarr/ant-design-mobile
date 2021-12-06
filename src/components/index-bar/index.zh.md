# IndexBar 序列

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx" debug></code>

## IndexBar

### 属性

| 属性   | 说明                 | 类型      | 默认值 |
| ------ | -------------------- | --------- | ------ |
| sticky | 是否开启锚点自动吸顶 | `boolean` | `true` |

### Ref

| 属性     | 说明           | 类型                      |
| -------- | -------------- | ------------------------- |
| scrollTo | 滚动到指定锚点 | `(index: string) => void` |

### CSS 变量

| 属性                | 说明                       | 默认值 | 全局变量 |
| ------------------- | -------------------------- | ------ | -------- |
| --sticky-offset-top | 锚点自动吸顶时与顶部的距离 | `0`    | -        |

## IndexBar.Panel

### 属性

| 属性  | 说明 | 类型     | 默认值           |
| ----- | ---- | -------- | ---------------- |
| index | 索引 | `string` | -                |
| title | 标题 | `string` | 默认使用 `index` |
