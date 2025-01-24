import * as React from "react";
import type { SVGProps } from "react";

const GitHub = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="logomark"
        width="1em"
        height="1em"
        {...props}
    >
        <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.17c-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.833 2.809 1.303 3.492.997.108-.774.42-1.304.763-1.604-2.666-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.455 11.455 0 0 1 6.002 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.805 5.623-5.475 5.92.43.37.824 1.1.824 2.22v3.293c0 .32.192.694.8.576C20.565 21.797 24 17.302 24 12c0-6.628-5.372-12-12-12z" />
    </svg>
);

export default GitHub;