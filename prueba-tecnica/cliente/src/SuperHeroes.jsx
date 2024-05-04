import React, { useState, useEffect } from 'react'
import { SuperheroesCard } from './components/SuperheroesCard'
import { SuperheroeItem } from './components/SuperheroeItem'

export const SuperHeroes = () => {
    const [superHeroList, setSuperHeroList] = useState([])
    const [superHeroe, setSuperHeroe] = useState(null)
    const [superHeroeName, setSuperHeroeName] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingSearch, setisLoadingSearch] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/superheroes`)
                const data = await response.json()
                setSuperHeroList(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);


    const getSuperheroeByName = async () => {
        setisLoadingSearch(true)
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/superheroe/${superHeroeName}`)
            const data = await response.json()
            if (Object.keys(data).length === 0 && data.constructor === Object) {
                setSuperHeroe('')
            } else {
                setSuperHeroe(data);
            }
        } catch (error) {
            setSuperHeroe('')
        } finally {
            const superheroeInfoElement = document.getElementById('superheroeInfo');
            superheroeInfoElement.scrollIntoView({ behavior: 'smooth' });
            setisLoadingSearch(false)
        }
    }

    const handleInputName = (e) => {
        setSuperHeroeName(e.target.value)
    }

    useEffect(() => {
        getSuperheroeByName()
    }, [superHeroeName]);

    return (
        <div className="container">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center" id='superheroeInfo'>
                {superHeroe ? (
                    superHeroe == '' ? <p>No existe el superheroex</p> :
                        <SuperheroeItem superHeroe={superHeroe} ></SuperheroeItem>
                ) : (
                    <p>No existe el superheroe</p>
                )}
                <h1 className="fw-bolder display-1 my-5 text-white">Superheroes</h1>
                <div className="input-group mb-3" style={{ width: '400px' }}>
                    <input type="text" className="form-control" aria-describedby="button-addon2" value={superHeroeName} onChange={handleInputName} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={getSuperheroeByName}>
                        {
                            isLoadingSearch 
                            ? <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                                : 'Buscar'
                        }
                    </button>
                </div>

            </div>

            <div className="row p-5">
                {
                    isLoading
                        ? <div className=' d-flex justify-content-center align-items-center'>
                            <div class="spinner-border text-light tex-center" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        : superHeroList.length > 0 ? (
                            superHeroList.map(superhero => (
                                <SuperheroesCard key={superhero.id} superhero={superhero} setName={setSuperHeroeName} getSuperheroeByName={getSuperheroeByName} />
                            ))
                        ) : (
                            <p>No hay superhéroes disponibles</p>
                        )
                }
            </div>
        </div>
    )
}
