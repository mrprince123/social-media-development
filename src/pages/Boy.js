import React from "react";
import BoyList from "../helpers/BoyList";
import BoyItem from "../components/DataList/BoyItem";
import "../styles/Boy.css";


function Boy() {
    return (
        <div>
            <h1>Boys</h1>
            <div>
                {BoyList.map((boyItem, key) => {
                    return (
                        <BoyItem
                            key={key}
                            image={boyItem.image}
                            name={boyItem.name}
                            email={boyItem.email}
                            location={boyItem.location}
                            bio={boyItem.bio}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Boy;