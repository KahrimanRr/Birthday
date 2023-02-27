import React from 'react';



function List({people,setPeople }) {

const handleRemove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
};

    return (
        <>
            {people.map((person) => {
            
                const { id, name, age, image } = person;
                return (
                    <article key={id} className='person'>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                        <button onClick={() => handleRemove(id)}>Remove</button>
                    </article>
                );
            })}
        </>
    );
}

export default List;