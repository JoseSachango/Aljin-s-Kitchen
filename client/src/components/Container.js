import React from 'react'
import Card from "./card"
import NavBar from "./navbar"

const Container = () => {
    return (
        <>
            <NavBar />
            <div class="container-sm-2">
                <div class="row">
                    <div class="col ml-2">
                        <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search pantry" aria-label="Search"
                                aria-describedby="search-addon" />
                        </div>
                        <br />

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Onion</li>
                            <li class="list-group-item">Pasta</li>
                        </ul>
                    </div>

                    <div class="col-sm-7">
                        <div class="card-columns" display="inline-block">

                            <Card />
                            <Card />
 
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h5>Recipe name</h5>
                                <a href="#" class="card-link">Go to recipe</a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <h5>Recipe name</h5>
                                <a href="#" class="card-link">Go to recipe</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Container

