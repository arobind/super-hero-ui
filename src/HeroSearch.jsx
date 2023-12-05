import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function HeroSearch() {

    const [markupData, setMarkupData] = useState("");
    const [heroList, setHeroList] = useState([]);
    const [loader,setLoader] = useState(false);

    function getData(e) {
        e.preventDefault(e)
        
        var searchMe = document.getElementById('searchMe');
        console.log(`${searchMe.value}`);
        var url = "https://superheroapi.com/api/113326580311248/search/" + searchMe.value;

        setLoader(true);
        setHeroList([]);
        setMarkupData("");  
        axios.get(url, {
            headers: {
                get: { 'Access-Control-Allow-Origin': "*" }
            }
        },
        )
            .then((response) => {
                console.dir(response.data);
                setLoader(false);
                if (response.data.response === "error") {   
                    setMarkupData(response.data.error);
                    setHeroList([]);
                }
                else {
                    setMarkupData("");
                    setHeroList(response.data.results);
                }
            })
            .catch((error) => {
                setLoader(false);
                console.log(error);
                setMarkupData("No Superheroes Found");
                
            });

    }

    function keyDownHandler(e){
        if (e.key === "Enter"){
            getData(e)
        }
    }
    return (
        <div>
            <div className="search-container">
                <div className="form-group">
                    <input type="text" id="searchMe" className="searchbar" onKeyDown={keyDownHandler}/>
                </div>
                <button className="btn btn-search" onClick={e => getData(e)}>SEARCH</button>
            </div>

            <h2 className="header container-header">{markupData}</h2>
            {loader && <h2 className="header container-header">LOADING</h2>}
            <div className="container">
                {   heroList.map(hero => {
                    return (
                        <Card hero={hero} />
                    )
                })}
            </div>
        </div>
    )
}

function Card(props) {

    return (
        <div className="card" style={{ "width": "18rem" }}>
            <img className="card-img-top" style={{ "width": "80%", "height": "80%" }} src={props.hero.image.url} alt={props.hero.name} />
            <div className="card-body">
                <h4 className="card-title">{props.hero.name}</h4>
                <a href="#" className="btn btn-danger card-btn">Know More</a>
            </div>
        </div>)

}