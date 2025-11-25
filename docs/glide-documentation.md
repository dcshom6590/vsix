# Glide Design Library Documentation

## Introduction

The Glide Design Library is a comprehensive React component library designed for building modern, accessible, and responsive user interfaces. This documentation provides an overview of the available components and their usage.

## Core Components

### Button

A versatile button component with multiple variants and states.

**Props:**
- `variant`: 'primary' | 'secondary' | 'tertiary' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `loading`: boolean
- `onClick`: () => void

**Example:**
```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Card

A container component for grouping related content.

**Props:**
- `padding`: 'sm' | 'md' | 'lg'
- `shadow`: boolean
- `border`: boolean
- `className`: string

**Example:**
```jsx
<Card padding="md" shadow>
  <CardHeader>Title</CardHeader>
  <CardContent>Content goes here</CardContent>
</Card>
```

### Input

Form input component with validation support.

**Props:**
- `type`: 'text' | 'email' | 'password' | 'number'
- `value`: string
- `onChange`: (value: string) => void
- `placeholder`: string
- `error`: string
- `disabled`: boolean

**Example:**
```jsx
<Input
  type="email"
  value={email}
  onChange={setEmail}
  placeholder="Enter your email"
  error={validationError}
/>
```

### Select

Dropdown selection component.

**Props:**
- `options`: Array<{ label: string; value: string }>
- `value`: string
- `onChange`: (value: string) => void
- `placeholder`: string
- `disabled`: boolean

**Example:**
```jsx
<Select
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
/>
```

### Modal

A modal dialog component for displaying content overlays.

**Props:**
- `isOpen`: boolean
- `onClose`: () => void
- `title`: string
- `size`: 'sm' | 'md' | 'lg' | 'xl'

**Example:**
```jsx
<Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Title">
  <ModalContent>
    Your content here
  </ModalContent>
</Modal>
```

### Typography

Text components with consistent styling.

**Components:**
- `Heading`: H1-H6 headings
- `Text`: Body text
- `Label`: Form labels
- `Caption`: Small text

**Example:**
```jsx
<Heading level={1}>Main Title</Heading>
<Text size="md">Body text content</Text>
<Label>Form Label</Label>
<Caption>Additional info</Caption>
```

### Layout Components

#### Container
Responsive container for page content.

```jsx
<Container maxWidth="lg">
  Your content
</Container>
```

#### Grid
CSS Grid-based layout system.

```jsx
<Grid columns={3} gap="md">
  <GridItem>Item 1</GridItem>
  <GridItem>Item 2</GridItem>
  <GridItem>Item 3</GridItem>
</Grid>
```

#### Flex
Flexbox layout component.

```jsx
<Flex direction="row" justify="between" align="center">
  <FlexItem>Item 1</FlexItem>
  <FlexItem>Item 2</FlexItem>
</Flex>
```

### Navigation Components

#### Navbar
Top navigation bar component.

**Example:**
```jsx
<Navbar>
  <NavbarBrand>Logo</NavbarBrand>
  <NavbarMenu>
    <NavbarItem href="/">Home</NavbarItem>
    <NavbarItem href="/about">About</NavbarItem>
  </NavbarMenu>
</Navbar>
```

#### Sidebar
Side navigation component.

**Example:**
```jsx
<Sidebar>
  <SidebarItem icon={HomeIcon} href="/">Home</SidebarItem>
  <SidebarItem icon={SettingsIcon} href="/settings">Settings</SidebarItem>
</Sidebar>
```

### Feedback Components

#### Alert
Display important messages to users.

**Props:**
- `variant`: 'info' | 'success' | 'warning' | 'error'
- `dismissible`: boolean
- `onDismiss`: () => void

**Example:**
```jsx
<Alert variant="success" dismissible onDismiss={handleDismiss}>
  Operation completed successfully!
</Alert>
```

#### Toast
Temporary notification component.

**Example:**
```jsx
import { toast } from 'glide-design-library';

toast.success('Changes saved!');
toast.error('An error occurred');
```

#### Spinner
Loading indicator component.

**Example:**
```jsx
<Spinner size="md" />
```

## Theming

The Glide Design Library supports theming through CSS variables.

### Color Palette
- `--color-primary`: Main brand color
- `--color-secondary`: Secondary brand color
- `--color-success`: Success states
- `--color-warning`: Warning states
- `--color-error`: Error states
- `--color-neutral`: Neutral/gray colors

### Spacing Scale
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px

### Typography Scale
- `--font-size-xs`: 12px
- `--font-size-sm`: 14px
- `--font-size-md`: 16px
- `--font-size-lg`: 18px
- `--font-size-xl`: 24px

## Accessibility

All Glide components are built with accessibility in mind:
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance (WCAG AA)

## Best Practices

1. **Component Composition**: Combine smaller components to build complex UIs
2. **Prop Consistency**: Use consistent prop naming across similar components
3. **Responsive Design**: Leverage built-in responsive utilities
4. **Performance**: Use React.memo for expensive components
5. **Testing**: Components include data-testid attributes for easy testing

## Installation

```bash
npm install glide-design-library
```

## Usage

```jsx
import { Button, Card, Input } from 'glide-design-library';
import 'glide-design-library/dist/styles.css';

function App() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## Support

For questions or issues, please refer to:
- GitHub Issues: https://github.com/glide-design-library/issues
- Documentation: https://glide-design-library.dev
- Community Discord: https://discord.gg/glide-design
