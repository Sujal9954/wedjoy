import venue1 from "../../assets/venue1.webp"; 
import venue3 from "../../assets/venue3.webp"; 
import venue4 from "../../assets/venue4.webp"; 
import venue5 from "../../assets/venue5.webp"; 
import venue6 from "../../assets/venue6.webp"; 
import venue7 from "../../assets/venue7.webp"; 
import venue8 from "../../assets/venue8.webp";
import venue2 from "../../assets/venue2.webp";


export default function Venue() {
  const venues = [
    {
      image: venue1, 
      name: "Los Angeles",
      location: "Redmond,",
      guests: "0-50",
      price: "$$",
    },
    {
      image:venue4,
      name: "Boss Angeless",
      location: "Luis Phillipe",
      guests: "400+",
      price: "$$",
    },
    {
      image:  venue3,
      name: "Boss Angeless",
      location: "Prado, NM",
      guests: "0-300",
      price: "$$",
    },
    {
      image: venue5,
      name: "herokasi",
      location: "New York, ",
      guests: "0-150",
      price: "$$$",
    },
    {
      image:  venue6,
      name: "zerokasi",
      location: "Kansas City,",
      guests: "800+",
      price: "$$",
    },
    {
      image:  venue7,
      name: "Riverboat ",
      location: "luis",
      guests: "600+",
      price: "$$$",
    },
    {
      image: venue8,
      name: " One two",
      location: "Chicago",
      guests: "0-300",
      price: "$$",
    },
    {
      image: venue2 ,
      name: "germany",
      location: "Orleans, LA",
      guests: "0-300",
      price: "$$$",
    },
    // {
    //   image:,
    //   name: " Glass House",
    //   location: "France,
    //   guests: "100-500",
    //   price: "$$$",
    // },
    // {
    //   image: ,
    //   name: "Grand House",
    //   location: "Los Angeles,
    //   guests: "1000+",
    //   price: "$$$$",
    // },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Find Your Dream Venue</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {venues.map((venue, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-4">
           
            <img
              src={venue.image}
              alt="Venue Image"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-3">
              <p className="text-sm text-gray-500">{venue.location}</p>
              <h2 className="text-lg font-bold">{venue.name}</h2>
              <p className="text-sm text-gray-600">{venue.guests} Guests • {venue.price}</p>
              <button className="mt-3 w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
