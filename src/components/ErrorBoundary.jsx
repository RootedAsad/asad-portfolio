import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Portfolio crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen grid place-items-center text-center px-6"
          style={{
            backgroundColor: "var(--color-bg)",
            color: "var(--color-text)",
          }}
        >
          <div>
            <h1
              className="font-display text-2xl font-semibold mb-3"
              style={{
                color: "var(--color-text)",
              }}
            >
              Something went wrong.
            </h1>

            <p
              className="mb-6"
              style={{
                color: "var(--color-muted)",
              }}
            >
              Please refresh the page and try again.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                color: "var(--color-button-text)",
                boxShadow:
                  "0 10px 25px color-mix(in srgb, var(--color-primary) 25%, transparent)",
              }}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}