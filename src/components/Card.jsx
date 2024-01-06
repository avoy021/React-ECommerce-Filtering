const Card = ({img,title,newPrice}) => {
    return (
        <>
            <div className="shoe mb-8 border-2 border-gray-200 rounded">
                <div className="shoe w-3/5 h-32 md:w-3/4 lg:w-1/3 relative m-auto mb-6">
                    <img src={img} alt="" className="absolute w-full h-full object-contain object-center"/>
                </div>
                <div className="title font-bold">{title}</div>
                <div className="price">Price: {newPrice}$</div>
            </div>

        </>
    )
}

export default Card;