import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import '@testing-library/jest-dom';

describe('Counter Component', () => {
  
  // Test 1: Check initial state
  test('should display initial count as 0', () => {
    render(<Counter />);
    const countElement = screen.getByText(/Count: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  // Test 2: Check increment logic
  test('should increment count by 1 when Increase button is clicked', () => {
    render(<Counter />);
    const increaseBtn = screen.getByText(/Increase/i);
    
    fireEvent.click(increaseBtn); // Simulates a user click
    
    const countElement = screen.getByText(/Count: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  // Test 3: Check decrement logic
  test('should decrement count by 1 when Decrease button is clicked', () => {
    render(<Counter />);
    const decreaseBtn = screen.getByText(/Decrease/i);
    
    fireEvent.click(decreaseBtn);
    
    const countElement = screen.getByText(/Count: -1/i);
    expect(countElement).toBeInTheDocument();
  });

  // Test 4: Check reset logic
  test('should reset count to 0 when Reset button is clicked', () => {
    render(<Counter />);
    const increaseBtn = screen.getByText(/Increase/i);
    const resetBtn = screen.getByText(/Reset/i);
    
    // Increment twice first to reach 2
    fireEvent.click(increaseBtn);
    fireEvent.click(increaseBtn);
    
    // Now click reset
    fireEvent.click(resetBtn);
    
    const countElement = screen.getByText(/Count: 0/i);
    expect(countElement).toBeInTheDocument();
  });

});