import { Rate } from "antd"
import moment from 'moment'

export const ReviewComment = ({
    FirstName,
    LastName,
    DateCreated,
    CountRate,
    Comment
}) => {
    return (
        <section className="ReviewComment">
            <section className="ReviewComment_header">
                <h3>{LastName} {FirstName} <span>{moment(DateCreated).format("D MMM, YYYY")}</span></h3>
                <Rate style={{color: 'black'}} disabled={true} defaultValue={CountRate} />
            </section>

            <p>{Comment}</p>
        </section>
    )
}