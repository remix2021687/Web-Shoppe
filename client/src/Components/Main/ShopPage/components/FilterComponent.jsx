import { MagnifyingGlass } from '@phosphor-icons/react'
import { Select, Slider, Switch, ConfigProvider } from 'antd'
import { useEffect, useState } from 'react'

export const FilterComponent = ({ setParentToChild }) => {
    const [searchData, setSearchData] = useState('')
    const [SliderData, setSliderData] = useState([10, 50]);
    const [ShopByData, setShopByData] = useState('')
    const [SortByData, setSortByData] = useState('')
    const [isSale, setIsSale] = useState(false)
    const [isStock, setIsStock] = useState(false)

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
                        title='test'
                        style={{ height: '54px' }}
                        placeholder={"Shop By"}
                        options={[
                            {value: 'Test_1', label: "Test_1"},
                            {value: 'Test_2', label: "Test_2"},
                            {value: 'Test_3', label: "Test_3"},
                            {value: 'Test_4', label: "Test_4"},
                        ]}
                        onChange={(e) => {setShopByData(e)}}
                    />

                    <Select
                        style={{ height: '54px' }}
                        placeholder={"Sort By"}
                        options={[
                            {value: 'Test_1', label: "Test_1"},
                            {value: 'Test_2', label: "Test_2"},
                            {value: 'Test_3', label: "Test_3"},
                            {value: 'Test_4', label: "Test_4"},
                        ]}
                        onChange={(e) => {setSortByData(e)}}
                    />
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
                        min={1}
                        max={999}
                        range
                        defaultValue={[10, 50]}
                        value={SliderData}
                        onChange={(e) => {setSliderData(e)}}
                    />

                    <h2>Price: {SliderData[0]}$ - {SliderData[1]}$</h2>
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