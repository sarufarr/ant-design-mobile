# Picker

The Picker series includes three components: [Picker](#picker), [CascadePicker](#cascadepicker) and [DatePicker](#datepicker).

## Picker

<code src="./demos/demo1.tsx"></code>

### Picker API

```typescript | pure
type PickerColumnItem = {
  label: ReactNode
  value: string
}

type PickerColumn = (string | PickerColumnItem)[]

type PickerValue = string | null

type PickerValueExtend = {
  items: (PickerColumnItem | null)[]
}
```

| Name         | Description                             | Type                                                           | Default  |
| ------------ | --------------------------------------- | -------------------------------------------------------------- | -------- |
| columns      | Options to configure each column        | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -        |
| value        | Selected options                        | `PickerValue[]`                                                | -        |
| defaultValue | Default selected options                | `PickerValue[]`                                                | -        |
| onSelect     | Triggered when the options are changed  | `(value: PickerValue[], extend: PickerValueExtend) => void`    | -        |
| onConfirm    | Triggered when confirming               | `(value: PickerValue[], extend: PickerValueExtend) => void`    | -        |
| onCancel     | Triggered when cancelling               | `() => void`                                                   | -        |
| onClose      | Triggered when confirming or cancelling | `() => void`                                                   | -        |
| visible      | Whether to show or hide the Picker      | `boolean`                                                      | `false`  |
| title        | Title                                   | `ReactNode`                                                    | -        |
| confirmText  | Text of the ok button                   | `string`                                                       | `'确定'` |
| cancelText   | Text of the cancel button               | `string`                                                       | `'取消'` |
| children     | Render function of the selected options | `(items: PickerColumnItem[]) => ReactNode`                     | -        |

In addition, the following attributes of [Popup](./popup) are supported: `getContainer` `afterShow` `afterClose` `onClick` `stopPropagation`

## CascadePicker

<code src="../cascade-picker/demos/demo1.tsx"></code>

### CascadePicker API

```typescript
type CascadePickerOption = {
  label: string
  value: string
  children?: CascadePickerOption[]
}
```

| Name    | Description              | Type                    | Default |
| ------- | ------------------------ | ----------------------- | ------- |
| options | Data of the tree options | `CascadePickerOption[]` | -       |

Other props are the same as `Picker`, but `columns` are not supported.

## DatePicker

<code src="../date-picker/demos/demo1.tsx"></code>

### DatePicker API

| Name         | Description                                                                                                                          | Type                                                                                   | Default         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | --------------- |
| value        | Selected value                                                                                                                       | `Date`                                                                                 | -               |
| defaultValue | Default selected value                                                                                                               | `Date`                                                                                 | -               |
| onSelect     | Triggered when the options are changed                                                                                               | `(value: Date) => void`                                                                | -               |
| onConfirm    | Triggered when confirming                                                                                                            | `(value: Date) => void`                                                                | -               |
| min          | Minimum value                                                                                                                        | `Date`                                                                                 | ten years ago   |
| max          | Max value                                                                                                                            | `Date`                                                                                 | ten years later |
| precision    | Precision                                                                                                                            | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' \| 'week' \| 'week-day'` | `'day'`         |
| children     | The rendering function of the selected items                                                                                         | `(value: Date) => ReactNode`                                                           | -               |
| renderLabel  | The function to custom rendering the label shown on a column. `type` means any value in `precision`, `data` means the default number | `(type: string, data: number) => ReactNode`                                            | -               |

In addition, the following attributes of `Picker` are supported: `onCancel` `onClose` `visible` `confirmText` `cancelText` `getContainer` `afterShow` `afterClose` `onClick` `title` `stopPropagation`

## Imperative Call

`Picker` supports Imperative Call and provides the `prompt` method:

```typescript
prompt: (props: Omit<PickerProps, 'value' | 'visible' | 'children'>) => Promise<PickerValue[] | null>
```

The return value of the `prompt` method is a Promise. If the user clicks OK, the Promise can be resolved to `PickerValue[]`, and if the user triggers the cancellation operation, the value in the Promise is `null`. You can get the value through `await` or `.then()`:

```ts
const value = await Picker.prompt({
  columns: yourColumnsConfig,
})
```

```ts
Picker.prompt({
  columns: yourColumnsConfig,
}).then((value) => {
  // ...
})
```

Similarly, `CascadePicker` and `DatePicker` also support the `prompt` method, the specific usage will not be repeated here.

## FAQ

### Why is the name of the component called "DatePicker" instead of "DatetimePicker"?

Because the type of `value` is `Date`.

### Why is there no "hour-minute" or "month-day" option?

Different from the `Picker` component, the value type of the `DatePicker` is a `Date` object, so it needs to be selected from the beginning of the year. Only the parameters of hour and minutes cannot construct a `Date` object.
