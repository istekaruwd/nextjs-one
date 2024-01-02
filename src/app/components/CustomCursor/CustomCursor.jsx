import AnimatedCursor from 'react-animated-cursor';

const CustomCursor = () => {
    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={1.5}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: 'var(--heading-font-color)',
                }}
                outerStyle={{
                    border: '3px solid var(--primary)',
                }}
                showSystemCursor={true}
            />
        </>
    );
};

export default CustomCursor;
