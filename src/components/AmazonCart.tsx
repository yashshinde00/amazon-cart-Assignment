
interface CartProps{
  title ?: string,
  description ?: string,
  price ?: number,
  image ?: string
}


    export function AmazonCart({title,description,price ,image}: CartProps){
        return <div className="w-72 border rounded-2xl  bg-white shadow-md  p-4 m-4 ">
            <div>
                <img className="w-full h-full  rounded-xl object-contain mx-auto" src={image}  alt={title}/>
            </div>

            <div>
                <p className="font-bold text-sm line-clamp-2">{title}</p>
                <p className="text-gray-600 text-sm">{description}</p>
                <p className="font-bold text-lg text-green-600">₹{price}</p>
                <button className="h-10 w-full cursor-pointer rounded-2xld p-2 bg-amber-300 border hover:bg-amber-400 active:scale-95">Add to cart</button>
            </div>
        </div>
    }

