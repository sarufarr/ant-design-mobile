# Selector

<code src="./demos/demo1.tsx"></code>

## API

```ts | pure
type SelectorValue = string | number
```

## Selector

| Name         | Description                            | Type                                                                    | Default |
| ------------ | -------------------------------------- | ----------------------------------------------------------------------- | ------- |
| value        | Selected value                         | `SelectorValue[]`                                                       | -       |
| defaultValue | Selected value by default              | `SelectorValue[]`                                                       | `[]`    |
| columns      | Number of the displayed columns        | `number`                                                                | -       |
| options      | Optional selector                      | `SelectorOption[]`                                                      | -       |
| multiple     | Whether to allow multiple selections   | `boolean`                                                               | `false` |
| disabled     | Whether to diabled selections globally | `boolean`                                                               | `false` |
| onChange     | Triggered when the value is changed    | `(value: SelectorValue[], extend: { items: SelectorOption[] }) => void` | -       |

## SelectorOption

| Name     | Description         | Type            | Default |
| -------- | ------------------- | --------------- | ------- |
| label    | Label text          | `string`        | -       |
| value    | Value of the option | `SelectorValue` | -       |
| disabled | Whether disabled    | `boolean`       | `false` |

## Generics

`Selector` supports generics, you can manually control the type of attributes such as `value` and `onChange` in the following way:

```tsx
<Selector<'a' | 'b' | number>
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

## CSS Variables

| Name            | Description             | Default   |
| --------------- | ----------------------- | --------- |
| --checked-color | filled background color | `#e7f1ff` |
