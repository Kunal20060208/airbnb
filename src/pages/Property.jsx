import {
useParams
} from "react-router-dom";


import properties from "../data/properties";


function Property(){


const {id}=useParams();


const property =
properties.find(
p=>p.id==id
);



return(

<div className="p-10">


<img

src={property.image}

className="
rounded-xl
w-full
h-96
object-cover
"

/>


<h1 className="text-3xl font-bold">

{property.title}

</h1>


<p>

₹{property.price} per night

</p>


<button

className="
bg-red-500
text-white
px-6
py-3
rounded-xl
"

>

Reserve

</button>


</div>

)

}


export default Property;