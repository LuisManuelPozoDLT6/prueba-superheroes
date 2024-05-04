import React from 'react'

export const SuperheroesCard = ({superhero, setName, getSuperheroeByName}) => {
    const findByCard = () => {
        setName(superhero.name); 
    };

    return (
        <div className="col-md-2 mb-4" onClick={findByCard}>
            <div className="card card-size">
                <img
                    id="imgSuperhero"
                    src={superhero.images.sm}
                    className="card-img"
                    alt="..."
                />
                <div className="card-img-overlay">
                    <div className="profile-name">{superhero.name}</div>
                </div>
            </div>
        </div>
    );
}
