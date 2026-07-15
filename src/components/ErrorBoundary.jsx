import { Component } from "react";

import ErrorFallback from "../pages/ErrorFallback";

export default class ErrorBoundary extends Component {

    constructor(props) {

        super(props);

        this.state = {

            hasError: false,

            error: null,

            errorInfo: null

        };

    }

    static getDerivedStateFromError(error) {

        return {

            hasError: true,

            error

        };

    }

    componentDidCatch(error, errorInfo) {

        console.error("Application Error:", error);

        console.error(errorInfo);

        this.setState({

            errorInfo

        });

    }

    handleReload = () => {

        window.location.reload();

    };

    render() {

        if (this.state.hasError) {

            return (

                <ErrorFallback

                    error={this.state.error}

                    reload={this.handleReload}

                />

            );

        }

        return this.props.children;

    }

}