import { MagnifyingGlass } from '@phosphor-icons/react'
import { Select, Slider, Switch, ConfigProvider } from 'antd'
// import { } from ''
import { useState } from 'react'

export const FilterComponent = () => {
    const [SliderData, setSliderData] = useState([10, 50]);

    const HandelSlider = (event) => {
        setSliderData(event)
    }

    return (
        <section className="FilterComponent">
            <label htmlFor="TextInput" className="FilterComponent_search">
                <input type="text" id="TextInput" name="search" placeholder='Search...'/>
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
                        style={{ height: '54px' }}
                        placeholder={"Shop By"}
                        options={[
                            {value: 'Test_1', label: "Test_1"},
                            {value: 'Test_2', label: "Test_2"},
                            {value: 'Test_3', label: "Test_3"},
                            {value: 'Test_4', label: "Test_4"},
                        ]}
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
                        onChange={HandelSlider}
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
                            <Switch />
                        </section>
                        
                        <section className='FilterComponent_Content_Switch'>
                            <h4>In stock</h4>
                            <Switch />  
                        </section>
                    </section>
                </ConfigProvider>
            </section>
        </section>
    )
}