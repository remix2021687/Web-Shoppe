import { useState } from "react"
import { AditionalInfo } from "./components/AditionalInfo"
import { Description } from "./components/Description"
import { Review } from "./components/Review/Review"

export const ProductPageDescription = () => {
    const [ButtonIsActive, setButtonIsActive] = useState({
        DescriptionButton: true,
        AditionalInfoButton: false,
        Reviews: false
    })

    const ButtonSelect = (event) => {
        const ButtonValue = event.target.value 

        switch (ButtonValue) {

            case 'Description':
                setButtonIsActive({
                    DescriptionButton: true,
                    AditionalInfoButton: false,
                    Reviews: false
                })
                break;
            
            case 'Aditional information':
                setButtonIsActive({
                    DescriptionButton: false,
                    AditionalInfoButton: true,
                    Reviews: false
                })
                break;
            
            case 'Reviews':
                setButtonIsActive({
                    DescriptionButton: false,
                    AditionalInfoButton: false,
                    Reviews: true
                })
                break;


            default:
                setButtonIsActive({
                    DescriptionButton: true,
                    AditionalInfoButton: false,
                    Reviews: false
                })
        }
    }

    const ButtonInfo = [
        {
            ClassName: ButtonIsActive.DescriptionButton ? 'active': '',
            onClickFunction: ButtonSelect,
            value: 'Description',
            DisplayValue: 'Description',
        },
        {
            ClassName: ButtonIsActive.AditionalInfoButton ? 'active': '',
            onClickFunction: ButtonSelect,
            value: 'Aditional information',
            DisplayValue: 'Aditional information',
        },
        {
            ClassName: ButtonIsActive.Reviews ? 'active': '',
            onClickFunction: ButtonSelect,
            value: 'Reviews',
            DisplayValue: 'Reviews (0)',
        },

    ]

    return (
        <section className="ProductPage_description">
            <section className="ProductPage_description_header">
                {
                    ButtonInfo.map((data, index) =>
                        <button key={index + 1} onClick={data.onClickFunction} className={data.ClassName} value={data.value}>{data.DisplayValue}</button> 
                    )
                }
            </section>
            {
                ButtonIsActive.DescriptionButton ? 
                <Description />
                :
                null
            }
            {
                ButtonIsActive.AditionalInfoButton ?
                <AditionalInfo />
                :
                null
            }
            {
                ButtonIsActive.Reviews ?
                <Review />
                :
                null
            }
        </section>
    )
}