# React Finance Dashboard - Development Guidelines

## Build/Configuration Instructions

### Development Setup
- **Build Tool**: Vite 6.3.1 with React plugin
- **Node.js**: Uses ES modules (`"type": "module"` in package.json)
- **React Version**: 19.0.0 with React DOM 19.0.0

### Available Scripts
```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm test         # Run Jest tests
npm run test:coverage  # Run tests with coverage report
```

### Vite Configuration
- HMR overlay enabled for error display
- Info-level logging enabled
- React plugin configured for JSX transformation

### Key Dependencies
- **Styling**: styled-components 6.1.17
- **Charts**: recharts 2.15.3
- **Icons**: react-icons 5.5.0
- **Analytics**: @vercel/analytics 1.5.0

## Testing Information

### Test Framework Setup
- **Test Runner**: Jest 29.7.0 with jsdom environment
- **Testing Library**: @testing-library/react 15.0.0 with jest-dom matchers
- **Babel**: babel-jest for JS/JSX transformation

### Jest Configuration Highlights
```javascript
// jest.config.js
{
  testEnvironment: 'jsdom',
  transform: { '^.+\\.(js|jsx)$': 'babel-jest' },
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/__mocks__/svgMock.js',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/main.jsx']
}
```

### Running Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test -- src/__tests__/example.test.js

# Run with coverage
npm run test:coverage

# Watch mode (add --watch flag)
npm test -- --watch
```

### Test Structure and Patterns

#### Component Testing with Styled Components
```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

// Mock theme for testing
const mockTheme = {
  background: { card: '#ffffff' },
  borderRadius: { md: '8px' },
  text: { primary: '#000000' }
};

// Wrapper for styled components
const renderWithTheme = (ui) => {
  return render(
    <ThemeProvider theme={mockTheme}>
      {ui}
    </ThemeProvider>
  );
};

test('component renders correctly', () => {
  renderWithTheme(<YourComponent />);
  expect(screen.getByText('Expected Text')).toBeInTheDocument();
});
```

#### Testing Utility Functions
```javascript
test('utility function works correctly', () => {
  const result = formatCurrency(1234.56);
  expect(result).toBe('$1,234.56');
});
```

### Test File Organization
- Tests located in `src/__tests__/` directory
- Component tests: `src/__tests__/components/[ComponentName]/[ComponentName].test.jsx`
- Utility tests: `src/__tests__/[filename].test.js`
- Mock files: `src/__mocks__/`

### Adding New Tests
1. Create test file in appropriate `__tests__` subdirectory
2. Import testing utilities: `render`, `screen` from `@testing-library/react`
3. For styled components, use `ThemeProvider` wrapper
4. Use `data-testid` attributes for reliable element selection
5. Test both happy path and edge cases

## Code Style and Development Guidelines

### ESLint Configuration
- **Version**: ESLint 9 with flat config format
- **Parser**: ES2020/latest with JSX support
- **Plugins**: react-hooks, react-refresh

### Key ESLint Rules
```javascript
{
  'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
  'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
}
```

### Component Structure
```javascript
// Standard component structure
import React from 'react';
import styled from 'styled-components';

// Styled components at top
const StyledComponent = styled.div`
  // styles using theme props
  color: ${props => props.theme.text.primary};
`;

// Main component
const ComponentName = ({ prop1, prop2 = 'default' }) => {
  return (
    <StyledComponent>
      {/* JSX content */}
    </StyledComponent>
  );
};

export default ComponentName;
```

### Styled Components Patterns
- Use theme props for consistent styling: `${props => props.theme.spacing.md}`
- Handle prop forwarding with `.attrs()` for DOM attributes
- Use semantic naming for styled components (e.g., `CardContainer`, `CardHeader`)

### File Organization
```
src/
├── components/
│   ├── Cards/           # Card components
│   ├── Charts/          # Chart components
│   └── Dashboard/       # Dashboard components
├── data/                # Mock data and constants
├── __tests__/           # Test files
├── __mocks__/           # Mock files
├── theme.js             # Theme configuration
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

### Development Best Practices
1. **Props Validation**: Handle non-number values gracefully in components
2. **Theme Usage**: Always use theme props for consistent styling
3. **Test Coverage**: Write tests for components, utilities, and edge cases
4. **Error Handling**: Components should handle invalid props gracefully
5. **Performance**: Use React.memo for expensive components if needed

### Common Issues and Solutions
- **Styled Components Props**: Use `.attrs()` to prevent DOM prop warnings
- **Theme Provider**: Always wrap components in ThemeProvider for testing
- **Module Imports**: Use ES6 imports consistently (project uses ES modules)
- **JSX Transform**: Babel handles JSX transformation automatically

### Coverage Thresholds
Currently set to 0% (no minimum requirements), but coverage reports are generated in `coverage/` directory.