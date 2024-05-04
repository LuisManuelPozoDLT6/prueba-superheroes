import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus} from '@fortawesome/free-solid-svg-icons';

export const SuperheroeItem = ({ superHeroe }) => {
    const aliasesString = superHeroe.biography.aliases.join(", ");
    return (
        <div className="p-5 w-100 mb-3" >
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                        <img className="my-3"
                            src={superHeroe.images.sm}
                            width="300rem" height="300rem" style={{ objectFit: 'cover' }} />
                        <h2 className="fw-bolder m-0 text-white">{superHeroe.name}</h2>
                        <p className="text-white">{superHeroe.biography.fullName}</p>
                        <div className="px-5 w-100">
                            <div className="progress mb-2" role="progressbar" aria-label="Success example"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success overflow-visible text-dark" style={{ width: `${superHeroe.powerstats.intelligence}%` }}>Intelligence</div>
                            </div>
                            <div className="progress mb-2" role="progressbar" aria-label="Success example"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-primary overflow-visible text-dark" style={{ width: `${superHeroe.powerstats.strength}%` }}>Strength</div>
                            </div>
                            <div className="progress mb-2" role="progressbar" aria-label="Success example"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-danger overflow-visible text-dark" style={{ width: `${superHeroe.powerstats.speed}%` }}>Speed</div>
                            </div>
                            <div className="progress mb-2" role="progressbar" aria-label="Success example"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-warning overflow-visible text-dark" style={{ width: `${superHeroe.powerstats.durability}%` }}>Durability</div>
                            </div>
                            <div className="progress mb-2" role="progressbar" aria-label="Success example"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info  overflow-visible text-dark" style={{ width: `${superHeroe.powerstats.power}%` }}>Power</div>
                            </div>
                            <div className="progress mb-2" role="progressbar" aria-label="Success example"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-dark" style={{ width: `${superHeroe.powerstats.combat}%` }}>Combat</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 pt-3 ">
                        <hr />
                        <div className="">
                            <p className="text-white fw-bold fs-5 text-center">Biography</p>
                            <hr />
                            <p>
                                <span className='fs-5'>Alter egos: </span>
                                <span className='text-white'>{superHeroe.biography.alterEgos}</span>
                            </p>
                            <p>
                                <span className='fs-5'>Aliases: </span>
                                <span className='text-white'>{aliasesString}</span>
                            </p>
                            <p>
                                <span className='fs-5'>Place of birth: </span>
                                <span className='text-white'>{superHeroe.biography.placeOfBirth}</span>
                            </p>
                            <p>
                                <span className='fs-5'>First appearance: </span>
                                <span className='text-white'>{superHeroe.biography.firstAppearance}</span>
                            </p>
                            <p>
                                <span className='fs-5'>Publisher: </span>
                                <span className='text-white'>{superHeroe.biography.publisher}</span>
                            </p>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-white fw-bold fs-5 text-center">Connections</p>
                                <hr />
                                <p>
                                    <span className='fs-5'>Group affiliation: </span>
                                    <span className='text-white'>{superHeroe.connections.groupAffiliation}</span>
                                </p>
                                <p>
                                    <span className='fs-5'>Relatives: </span>
                                    <span className='text-white fs-6'>{superHeroe.connections.relatives}</span>
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-white fw-bold fs-5 text-center">Appearance</p>
                                <hr />
                                <div class="d-flex justify-content-between px-3">
                                    <div className='text-start'>
                                        <h5>Gender</h5>
                                        {
                                            superHeroe.appearance.gender == 'Male'
                                                ? <p className='text-white'><FontAwesomeIcon icon={faMars} /></p>
                                                : <p className='text-white'><FontAwesomeIcon icon={faVenus} /></p>
                                        }

                                    </div>
                                    <div className='text-end'>
                                        <h5>Weight</h5>
                                        <p className='text-white'>{superHeroe.appearance.weight[1]}</p>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between px-3">
                                    <div className='text-start'>
                                        <h5>Race</h5>
                                        <p className='text-white'>{superHeroe.appearance.race}</p>
                                    </div>
                                    <div className='text-end'>
                                        <h5>Eye</h5>
                                        <p className='text-white'>{superHeroe.appearance.eyeColor}</p>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between px-3">
                                    <div className='text-start'>
                                        <h5>Heigh</h5>
                                        <p className='text-white'>{superHeroe.appearance.height[1]}</p>
                                    </div>
                                    <div className='text-end'>
                                        <h5>Hair</h5>
                                        <p className='text-white'>{superHeroe.appearance.hairColor}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
