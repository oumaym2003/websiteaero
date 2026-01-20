import React from 'react'

type Props = { children: React.ReactNode }
type State = { hasError: boolean }

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
    // Log detailed error to help diagnose blank page issues
    console.error('Route render error:', error, errorInfo)
  }

  render() {
    // Do not alter design; render nothing if error occurs
    if (this.state.hasError) {
      return null
    }
    return this.props.children
  }
}
