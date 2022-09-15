import React from "react";
import GirlItem from "../components/DataList/GirlItem";
import GirlList from "../helpers/GirlList";
import "../styles/Girl.css";

function Girl(){
    return (
        <div>
            <h1>Girls</h1>
            <div>
                {GirlList.map((girlItem, key) => {
                    return (
                        <GirlItem 
                            key={key}
                            image={girlItem.image}
                            name={girlItem.name}
                            email={girlItem.email}
                            location={girlItem.location}
                            bio={girlItem.bio}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Girl;