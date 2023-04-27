import React from "react";
import { useActionData } from "react-router-dom";
import { useLoaderData, Link } from "react-router-dom";

const testData = [
  {
	  id : 1,
    titel: "Suunto D5",
    beskrivning:
      "En avancerad dykdator med färgskärm, inbyggd kompass och trådlös anslutning till dykdator och smartphone för att övervaka och logga dina dyk.",
    pris: 4500,
  },
  {
	  id : 2,
    titel: "Scubapro Nova 850R",
    beskrivning:
      "En kraftfull dyklampa med 850 lumen ljusstyrka, flera ljuslägen och en brinntid på upp till 12 timmar. Perfekt för att utforska mörka undervattensmiljöer.",
    pris: 2300,
  },
  {
	  id : 3,
    titel: "Mares Force Nano Plus",
    beskrivning:
      "En kompakt dykkniv med ett rostfritt stålblad och ett ergonomiskt handtag för enkel hantering under vatten. Levereras med en nylonfodral för säker förvaring.",
    pris: 900,
  },
  {
	  id : 4,
    titel: "Cressi Gara Modular LD",
    beskrivning:
      "En högpresterande dykfena med löstagbara blad för enkel anpassning och transport. Tillverkad i ett lättviktsmaterial för effektivt och bekvämt dykande.",
    pris: 1800,
  },
  {
	  id : 5,
    titel: "Aqua Lung Reveal X1",
    beskrivning:
      "En kvalitetsdykmask med vid synvinkel och en ergonomisk passform för optimal komfort. Utrustad med tempererat glas och enkel justering för att passa olika ansiktsformer.",
    pris: 700,
  },
];

export const loader = () => testData;

const Products = () => {
	
	const productData = useLoaderData()
  return (
	<>	
	<section>
	  <h2>Products</h2>
	 <ul>
		{productData.map(({ id, titel, beskrivning, pris}) => (
			<div key={id}>
				<h3><Link to= {'/details/' + id}>{titel}</Link></h3>
				<p>{beskrivning}</p>
				<p>{pris}kr</p>
			</div>

		))}
	 </ul>
	</section>
	</>
  );
};

export default Products;


//  <section>
//       <h2>Products</h2>
// 	<div className="product-body">
// 	{products.map((product, index) => (
// 			<div className="container">
// 		  <div className="card" key={index}>
// 				<h3>{product.titel}</h3>
// 				<img className="product-pic" src="https://images.unsplash.com/photo-1592859632074-cf5cfb714552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="Bild på produkt" />
// 				<p className="">{product.beskrivning}</p>
// 				<p>Pris: {product.pris} kr</p>
// 			</div>
//         </div>
//       ))}
// 	</div>
//     </section>