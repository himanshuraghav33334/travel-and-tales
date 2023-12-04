import React from 'react'


export default function Card(props) {
    const CardList = ({ cards }) => (
        <div>
          {cards.map((card) => (
            <Card key={card.id} title={card.title} content={card.content} />
          ))}
        </div>
      );
  return (
    <div>
    <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
        
        <div className="card-body">
            <h5 className="card-title">""</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='container'>
                
                <div className='h-100 d-inline fs-5'>
                    Package Price
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
