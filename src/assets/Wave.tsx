const Wave = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 112"
            preserveAspectRatio="none"
            {...props}
        >
            <path
                fill="#fff"
                d="M239.43 38.073C126.849 25.88 32.901 32.993 0 38.073V112h1440V3.523c-88.77 17.19-260.19 38.46-387.74 18.22-139.978-22.209-226.895-35.069-461.76 0l-2.053.307C437.785 44.547 379.522 53.247 239.43 38.073z"
            ></path>
        </svg>
    )
}

export default Wave;
