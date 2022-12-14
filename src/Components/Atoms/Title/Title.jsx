function Title({ title, textAlign, fontSize, fontWeight, textTransform, marginLeft, marginTop, subTitle }) {
    return (
        <>
            <p
                style={{
                    textAlign: textAlign,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    textTransform: textTransform,
                    marginLeft: marginLeft,
                    marginTop: marginTop
                }}
            >
                {title} <br/>
                {subTitle}
            </p>
        </>
    );
}

export default Title;
