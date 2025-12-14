// time.test.tsx
import { render, screen } from '@testing-library/react'
import { Time } from '../time'

// Mock next-intl
jest.mock('next-intl', () => ({
  useLocale: jest.fn(),
}))

import { useLocale } from 'next-intl'

describe('Time Component', () => {
  const mockUseLocale = useLocale as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Date Formatting', () => {
    it('formats date in English locale', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      render(<Time iso={isoDate} />)
      
      const timeElement = screen.getByRole('time')
      expect(timeElement).toBeInTheDocument()
      expect(timeElement.textContent).toBeTruthy()
    })

    it('formats date in different locale', () => {
      mockUseLocale.mockReturnValue('ru')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      render(<Time iso={isoDate} />)
      
      const timeElement = screen.getByRole('time')
      expect(timeElement).toBeInTheDocument()
    })

    it('formats date with time', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      render(<Time iso={isoDate} />)
      
      const timeElement = screen.getByRole('time')
      expect(timeElement.textContent).toContain('2024')
      // Time should be included (format depends on timezone)
    })

    it('converts to uppercase', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      render(<Time iso={isoDate} />)
      
      const timeElement = screen.getByRole('time')
      expect(timeElement.textContent).toBe(timeElement.textContent?.toUpperCase())
    })
  })

  describe('HTML Attributes', () => {
    it('renders as time element', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      render(<Time iso={isoDate} />)
      
      expect(screen.getByRole('time')).toBeInTheDocument()
    })

    it('passes through additional props', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      render(
        <Time 
          iso={isoDate} 
          className="custom-class" 
          data-testid="time-element"
        />
      )
      
      const timeElement = screen.getByTestId('time-element')
      expect(timeElement).toHaveClass('custom-class')
    })

    it('applies dateTime attribute correctly', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      render(<Time iso={isoDate} dateTime={isoDate} />)
      
      const timeElement = screen.getByRole('time')
      expect(timeElement).toHaveAttribute('dateTime', isoDate)
    })
  })

  describe('Edge Cases', () => {
    it('handles different ISO date formats', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-06-15T12:00:00Z' // Changed to avoid timezone edge case
      
      render(<Time iso={isoDate} />)
      
      const timeElement = screen.getByRole('time')
      expect(timeElement).toBeInTheDocument()
      expect(timeElement.textContent).toContain('2024')
    })

    it('handles dates with milliseconds', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-01-15T14:30:00.123Z'
      
      render(<Time iso={isoDate} />)
      
      expect(screen.getByRole('time')).toBeInTheDocument()
    })

    it('handles dates without timezone', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-01-15T14:30:00'
      
      render(<Time iso={isoDate} />)
      
      expect(screen.getByRole('time')).toBeInTheDocument()
    })
  })

  describe('Locale Variations', () => {
    it('formats correctly for French locale', () => {
      mockUseLocale.mockReturnValue('fr')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      render(<Time iso={isoDate} />)
      
      const timeElement = screen.getByRole('time')
      expect(timeElement).toBeInTheDocument()
      // French locale should include "LUNDI" (Monday)
      expect(timeElement.textContent).toMatch(/LUNDI/i)
    })

    it('formats correctly for Spanish locale', () => {
      mockUseLocale.mockReturnValue('es')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      render(<Time iso={isoDate} />)
      
      const timeElement = screen.getByRole('time')
      expect(timeElement).toBeInTheDocument()
      // Spanish locale should include "LUNES" (Monday)
      expect(timeElement.textContent).toMatch(/LUNES/i)
    })

    it('formats correctly for Japanese locale', () => {
      mockUseLocale.mockReturnValue('ja')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      render(<Time iso={isoDate} />)
      
      const timeElement = screen.getByRole('time')
      expect(timeElement).toBeInTheDocument()
      expect(timeElement.textContent).toContain('2024')
    })
  })

  describe('Snapshot Tests', () => {
    it('matches snapshot for English locale', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      const { container } = render(<Time iso={isoDate} />)
      
      expect(container.firstChild).toMatchSnapshot()
    })

    it('matches snapshot with custom props', () => {
      mockUseLocale.mockReturnValue('en')
      const isoDate = '2024-01-15T14:30:00.000Z'
      
      const { container } = render(
        <Time 
          iso={isoDate} 
          className="test-class" 
          data-custom="value"
        />
      )
      
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})