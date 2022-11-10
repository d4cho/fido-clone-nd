function Title({ title, textAlign, fontSize, fontWeight, textTransform }) {
    return (
        <>
            <p
                style={{
                    textAlign: textAlign,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    textTransform: textTransform,
                }}
            >
                {title}
            </p>
        </>
    );
}

export default Title;
