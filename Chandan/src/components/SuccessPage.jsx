import '../styles/successpage.scss'

const SucessPage = () => {
    return (
        <>
        <div className="cross-image"><img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/blackcross.png" alt="" /></div>
        <div className="status-image">
            <div><img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/successicon.png" alt="" /></div>
            <div>Payment successfully completed</div>
            <div><img src="https://imagesdataporter.s3.ap-south-1.amazonaws.com/Eco-Resource/bluearrow.png" alt="" />Go back to home</div>
        </div>
        </>
    )
}

export default SucessPage