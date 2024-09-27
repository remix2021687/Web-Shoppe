import { MagnifyingGlass } from '@phosphor-icons/react'
import { Select, Slider, Switch, ConfigProvider } from 'antd'
import { useEffect, useState } from 'react'
import { GetProductPriceList, GetShopList } from '../../../../../Axios/AxiosInit'

export const FilterComponent = ({ setParentToChild }) => {
    const [searchData, setSearchData] = useState('')
    const [SliderData, setSliderData] = useState([10, 999]);
    const [ShopByData, setShopByData] = useState('')
    const [SortByData, setSortByData] = useState('')
    const [isSale, setIsSale] = useState(false)
    const [isStock, setIsStock] = useState(false)
    const [MaxPrice, setMaxPrice] = useState([0]);

    const [ShopListData, setShopListData] = useState([]);

    const [filterData, setFilterData] = useState({
        searchData: '',
        ShopBy: '',
        SortBy: '',
        SliderData: [],
        isSale: false,
        isStock: false
    })

    useEffect(() => {
        setFilterData({
            searchData: searchData,
            ShopBy: ShopByData,
            SortBy: SortByData,
            SliderData: SliderData,
            isSale: isSale,
            isStock: isStock
        })

    }, [searchData, SliderData, ShopByData, SortByData, isSale, isStock])

    useEffect(() => {
        setParentToChild(filterData)
    })

    useEffect(() => {
        GetProductPriceList()
        
        .then((res) => {
            const response = res.data;
            let arr = [];

            response.map((data) => {
                arr.push(data.price)

                setSliderData([10, Math.max(...arr)])
                setMaxPrice(Math.max(...arr))
            })
        })

    }, [])

    useEffect(() => {
        GetShopList()
        .then((res) => {
            const response = res.data;

            setShopListData(response)
        })
        .catch((err) => {
            console.warn(err)
        })
    }, [])

    return (
        <section className="FilterComponent">
            <label htmlFor="TextInput" className="FilterComponent_search">
                <input type="text" id="TextInput" name="search" value={searchData} onChange={(e) => {setSearchData(e.target.value)}} placeholder='Search...'/>
                <MagnifyingGlass size={32} color='black' className='SearchIcon'/>
            </label>
            <section className='FilterComponent_Content'>

                <ConfigProvider
                    theme={{
                        components: {
                            Select: {
                                colorPrimary: 'black',
                                colorPrimaryHover: 'black',
                                colorTextPlaceholder: 'black',
                                colorBorder: '#D8D8D8',
                                borderRadius: '8px',
                                fontSize: '16px',

                                optionPadding: '5px 20px',
                            }
                        }
                    }}
                >
                    <Select
                        allowClear={true}
                        style={{ height: '54px' }}
                        placeholder={"Shop By"}
                        onChange={(e) => {setShopByData(e)}}
                    >

                    {
                        ShopListData.map((data, index) => 
                            data ?
                            <Select.Option key={index + 1} value={data.name}>{data.name}</Select.Option>
                            :
                            null
                        )
                    }

                    </Select>
                </ConfigProvider>

                <ConfigProvider
                    theme={{
                        components: {
                            Slider: {
                                handleColor: 'black',
                                handleActiveColor: 'black',
                                handleActiveOutlineColor: 'black',

                                colorPrimaryBorderHover: 'black',
                                trackBg: 'black',
                                trackHoverBg: 'black',

                            }
                        }
                    }}
                >
                    <Slider 
                        min={10}
                        max={MaxPrice}
                        range
                        step={10}
                        value={SliderData}
                        onChange={(e) => {setSliderData(e)}}
                    />

                    <h2 className='FilterComponent_PriceCount'>Price: {SliderData[0].toLocaleString()}$ - {SliderData[1].toLocaleString()}$</h2>
                </ConfigProvider>

                <ConfigProvider
                    theme={{
                        components: {
                            Switch: {
                                colorPrimary: 'black',
                                colorPrimaryHover: 'black',
                                colorPrimaryBorder: 'black',
                            }
                        }
                    }}
                >
                    <section style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '50px'
                    }}>
                        <section className='FilterComponent_Content_Switch'>
                            <h4>On Sale</h4>
                            <Switch value={isSale} onChange={(e) => {setIsSale(e)}} />
                        </section>
                        
                        <section className='FilterComponent_Content_Switch'>
                            <h4>In stock</h4>
                            <Switch value={isStock} onChange={(e) => {setIsStock(e)}} />  
                        </section>
                    </section>
                </ConfigProvider>
            </section>
        </section>
    )
}