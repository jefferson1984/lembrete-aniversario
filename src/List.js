import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person)=>{
         
        const {id,name,image,age}=person

        return (
          <article className="person" key={id}>
          
             <img src={image} alt={name}/>
             <div>
              <h3>{name}</h3>
              <p>{age} anos</p>
             </div>
          
          </article>
        )

      })}
    </>
  );
};

export default List;
