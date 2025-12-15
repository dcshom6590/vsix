# Glide Design Library - Component Reference

## Import
```tsx
import { ComponentName } from '@glide/design-library';
```

## Core Components

### Button
```tsx
<Button buttonType="primary|secondary|outline|warning|danger|textLink|neutralLink" 
        size="small|default|large" 
        iconLeft={<Icon />} 
        iconRight={<Icon />}
        loading={bool} 
        disabled={bool}>
  Label
</Button>
```

### SimpleInput
```tsx
<SimpleInput name="field" 
             label="Label" 
             value={value} 
             onChange={handleChange}
             type="text|password|email|number"
             prefix="$" 
             suffix="USD"
             error={bool} 
             success={bool} />
```

### SearchInput
```tsx
<SearchInput value={value} 
             onChange={handleChange}
             type="default|collapsed|iconOnly|expanded"
             inputType="default|compact"
             closeIcon={bool} />
```

### SelectInput
```tsx
const options: Option[] = [
  { label: 'Label', value: 'val', badge: <Badge />, disabled: bool }
];

<SelectInput options={options} 
             value={selected} 
             onChange={setSelected}
             label="Label" />
```

### MobileInput
```tsx
<MobileInput countryCode={code} 
             mobileNumber={number}
             onChange={(code, number) => {}} 
             showflagIcon={bool} />
```

### Checkbox
```tsx
<Checkbox checked={bool} 
          onChange={(e) => setChecked(e.target.checked)}
          label="Label"
          intermediate={bool}  // for select-all
          error={bool} />
```

### RadioButton
```tsx
<RadioButton name="group" 
             value="val" 
             label="Label"
             checked={selected === 'val'}
             onChange={setSelected} />
```

### RadioButtonGroup
```tsx
const options: RadioOption[] = [
  { label: 'Option', value: 'val', badge: <Badge /> }
];

<RadioButtonGroup options={options} 
                  selectedValue={value}
                  onChange={setValue}
                  stacking="horizontal|vertical" />
```

### ToggleSwitch
```tsx
<ToggleSwitch checked={bool} 
              onChange={setBool}
              disabled={bool} />
```

## Feedback Components

### Modal
```tsx
<Modal isOpen={bool} 
       onClose={handleClose}
       variant="simple|alert|form|input control|media"
       title="Title"
       bodyText="Description"
       buttons={[<Button />]}
       device="web|mobile" />
```

### Toast
```tsx
<Toast state="success|error|warning|information"
       title="Title"
       bodyText="Message"
       onClose={handleClose}
       autoDismiss={3000} />
```

### Tooltip
```tsx
<Tooltip title="Title" 
         bodyText="Description"
         placement="top-start|top-center|bottom-end|..."
         trigger="hover|click">
  <Button>Hover me</Button>
</Tooltip>
```

### Badge
```tsx
<Badge variant="badge|notificationIndicator"
       size="default|small"
       style="simple|bordered|bold|dot"
       state="information|success|warning|error|neutral">
  Text
</Badge>
```

## Layout Components

### Card
```tsx
<Card title="Title" 
      description="Description"
      imageSrc={url}
      button={<Button />}
      imagePosition="top|middle|bottom" />
```

### Accordion
```tsx
const items = [
  { title: 'Title', body: 'Content', isOpen: bool }
];

<Accordion items={items} 
           defaultOpenIndex={0}
           onToggle={(index) => {}} />
```

### Tabs
```tsx
const tabs: TabItem[] = [
  { id: '1', label: 'Tab', content: <div />, icon: <Icon /> }
];

<Tabs tabs={tabs} 
      variant="default|pill"
      onTabChange={(id) => {}} />
```

### Divider
```tsx
<Divider type="horizontal|vertical" 
         title="Text"
         showTitle={bool} />
```

## Navigation Components

### Breadcrumb
```tsx
const items = [
  { label: 'Home', href: '/', onClick: () => {} }
];

<Breadcrumb items={items} />
```

### Pagination
```tsx
<Pagination totalPages={100} 
            currentPage={1}
            variant="arrow|compact|short-range|overflow"
            onChange={(page) => {}} />
```

### SideNavBar
```tsx
const menu = [
  { title: 'Group', items: [{ id: '1', label: 'Item' }] }
];

<SideNavBar menu={menu} 
            searchInputProps={{...}}
            position="left|right" />
```

## Input Components

### DatePicker
```tsx
<DatePicker type="simple|range"
            value={date}
            onSet={(date) => {}}
            onClose={() => {}}
            variant="default|year|month" />
```

### SliderInputContinuous
```tsx
<SliderInputContinuous min={0} 
                       max={100}
                       value={50}
                       onChange={(val) => {}} />
```

### OTPInput
```tsx
<OTPInput otpLength={6}
          variant="modal|inline|bottomSheet"
          device="web|mobile"
          inputType="simpleInput|prefilledInput"
          mobileNumber={1234567890}
          onButtonClick={() => {}} />
```

## Display Components

### Avatar
```tsx
<Avatar size={32|40} 
        imageSrc={url}
        text="AB"
        showStatus={bool}
        statusType="online|away|default" />
```

### Chips
```tsx
const items = [
  { label: 'Chip', selected: bool, onClick: () => {} }
];

<Chips items={items} 
       layout="singleRow|multipleRows"
       onChange={(selected) => {}} />
```

### ProgressStepper
```tsx
const steps: Step[] = [
  { id: '1', stepNumber: 1, state: 'active', label: 'Step' }
];

<ProgressStepper steps={steps} 
                 direction="horizontal|vertical"
                 size="small|medium|large" />
```

### StarRating
```tsx
<StarRating rate={4} 
            isInteractive={bool}
            size="Small|Medium|Large"
            onRateChange={(val) => {}} />
```

### LoaderSpinner / LoaderRipple
```tsx
<LoaderSpinner width={40} height={40} />
<LoaderRipple type="primary" size="default" />
```

## Design Tokens

### Colors
```tsx
import { Color, ColorPalette } from '@glide/design-library';

Color.Button.PrimarySurface
Color.Text.Default
ColorPalette.Primary.Burgundy
```

### Spacing & Typography
```tsx
import { Spacing, Padding, Typography, CornerRadius } from '@glide/design-library';

Spacing.Medium[16]  // 16px
Padding.Small[8]    // 8px
Typography.Body.Size.Medium  // 14
CornerRadius[8]     // 8px
```

### Shadows & Gradients
```tsx
import { Shadows, Gradients } from '@glide/design-library';

Shadows.Accent
Gradients.Primary.Yoda
```

## Best Practices

1. **Always use controlled components** - Provide `value` and `onChange`
2. **Use theme tokens** - Never hardcode colors/spacing
3. **Provide accessibility** - Use `ariaLabel` or visible labels
4. **Handle states** - Show `error`, `success`, `disabled`, `loading` states
5. **Consistent sizing** - Use component `size` props
6. **Mobile-first** - Components support responsive design

## Common Patterns

### Form Field
```tsx
<SimpleInput 
  name="email"
  label="Email *"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={!!errors.email}
  hintText={errors.email || "We'll never share your email"}
/>
```

### Controlled Select
```tsx
const [selected, setSelected] = useState<Option | null>(null);

<SelectInput 
  label="Country"
  options={countryOptions}
  value={selected}
  onChange={setSelected}
  error={!selected && submitted}
/>
```

### Toggle with Label
```tsx
<div className="flex items-center gap-3">
  <ToggleSwitch checked={enabled} onChange={setEnabled} />
  <label>Enable notifications</label>
</div>
```

### Radio Group
```tsx
<RadioButtonGroup 
  options={[
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' }
  ]}
  selectedValue={billing}
  onChange={setBilling}
  stacking="horizontal"
/>
```
