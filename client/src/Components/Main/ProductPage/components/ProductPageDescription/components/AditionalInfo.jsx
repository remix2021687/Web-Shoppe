export const AditionalInfo = ({
    Weight,
    Dimentions,
    Colours,
    Material
}) => {
    return (
        <section className="AditionalInfo">
            <h3>Weight: <span>{Weight} kg</span></h3>
            <h3>Dimentions: <span>{Dimentions} cm</span></h3>
            <h3>Colours: <span>{Colours}</span></h3>
            <h3>Material: <span>{Material}</span></h3>
        </section>
    )
}