import { assets } from "../../../assets/assets"
import { Spin, ConfigProvider } from 'antd'

export const LoadingFullScreen = () => {
    return (
        <section className="LoadingFullScreen">
            <img src={assets.Layout.RootLayout.Header.Logo} alt="Logo" />
            <section className="LoadingFullScreen_content">
                <ConfigProvider theme={{
                    components: {
                        Spin: {
                            colorPrimary: 'black',
                            dotSize: 50
                        }
                    }
                }}>
                    <Spin/>
                </ConfigProvider>
            </section>
        </section>
    )
}