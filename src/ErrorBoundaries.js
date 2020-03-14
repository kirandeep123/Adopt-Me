import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error - Boundary caught error", error, info);
  }

  render() {
    if (this.setState.hasError) {
      return (
        <h1>
          THere was an error with this listing link{" "}
          <Link to="/"> Click here</Link> to go to home page or wait 5 seconds
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
