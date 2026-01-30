import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders title', () => {
    render(<Card title="Test Card">Content</Card>);
    expect(screen.getByText('Test Card')).toBeDefined();
  });

  it('renders children', () => {
    render(<Card title="Title">Card body content</Card>);
    expect(screen.getByText('Card body content')).toBeDefined();
  });
});
