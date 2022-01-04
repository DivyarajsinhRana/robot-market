import { Category } from "@material-ui/icons"
import { robotType } from "../type"

const Robotcard = ({ image, name, price, stock, createdAt, material }: robotType) => {
    return (
        <>
           
            
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top"  src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{material}</p>
                    <p className="card-text">{price}</p>
                    <p className="card-text">{stock}</p>
                    <p className="card-text">{createdAt}</p>
                    <button>Add to cart</button>
                </div>
            </div>
            </>
        
    )
}
export default Robotcard

