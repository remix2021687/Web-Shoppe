import { useState, useContext, useEffect } from "react"
import { Select, ConfigProvider } from 'antd'
import { AditionalInfo } from "./components/AditionalInfo"
import { Description } from "./components/Description"
import { Review } from "./components/Review/Review"
import { ProductPageDescriptionContext } from "../../ProductPage"

export const ProductPageDescription = () => {
    const ProductDescriptionContext = useContext(ProductPageDescriptionContext)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [data, setData] = useState([]);

    const [ButtonIsActive, setButtonIsActive] = useState({
        DescriptionButton: true,
        AditionalInfoButton: false,
        Reviews: false
    })

    useEffect(() => {
        const handleWidth = () => {setScreenWidth(window.innerWidth)}

        window.addEventListener('resize', handleWidth);

        return () => window.removeEventListener('resize', handleWidth);
    })

    useEffect(() => {
        if (ProductDescriptionContext) {
            setData(ProductDescriptionContext)
        }
    }, [ProductDescriptionContext])


    const ButtonSelect = (event) => {
        const ButtonValue = screenWidth <= 768 ? event : event.target.value;

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
            DisplayValue: `Reviews (${data.reviews ? data.reviews.length: null})`,
        },

    ]

    return (
        <section className="ProductPage_description">
            <section className={screenWidth <= 768 ? 'ProductPage_description_header non_border': 'ProductPage_description_header'}>
                {
                    screenWidth <= 768 ?
                    <ConfigProvider
                        theme={{
                            components: {
                                Select: {
                                    activeBorderColor: 'red'
                                }
                            }
                        }}
                    >
                        <Select onChange={ButtonSelect} defaultValue={'Description'} style={{width: '100%'}}>
                            {
                                ButtonInfo.map((data, index) => 
                                    <Select.Option value={data.value} key={index + 1}>
                                        {data.DisplayValue}
                                    </Select.Option>
                                )
                            }
                        </Select>
                    </ConfigProvider>
                    :
                    ButtonInfo.map((data, index) =>
                        <button key={index + 1} onClick={data.onClickFunction} className={data.ClassName} value={data.value}>{data.DisplayValue}</button> 
                    )
                }
            </section>
            {
                ButtonIsActive.DescriptionButton ? 
                <Description 
                    Text={data.company_description}
                />
                :
                null
            }
            {
                ButtonIsActive.AditionalInfoButton ?
                <AditionalInfo 
                    Weight={data.product_info.weight}
                    Dimentions={data.product_info.dimentions}
                    Colours={data.product_info.colours}
                    Material={data.product_info.material}
                />
                :
                null
            }
            {
                ButtonIsActive.Reviews ?
                <Review 
                    dataReview={data.reviews}
                />
                :
                null
            }
        </section>
    )
}