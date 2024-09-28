import { Rate } from "antd"

export const ReviewComment = () => {
    return (
        <section className="ReviewComment">
            <section className="ReviewComment_header">
                <h3>Scarlet withch <span>6 May, 2020</span></h3>
                <Rate style={{color: 'black'}} disabled={true} defaultValue={3} />
            </section>

            <p>Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        </section>
    )
}