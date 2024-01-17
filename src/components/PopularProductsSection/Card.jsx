import "./styleCard.css";
import React, { useState } from 'react'
import { FetchData } from './data';
import watch from "./images/images/cat-product-banner-02.webp"

function Card() {
    const [selectedCategory, setSelectedCategory] = useState('Category-1');
    const handleCategoryChange = (categoryKey) => {
        setSelectedCategory(categoryKey);
    }
    return (
        <div className="container">
            <h1>Our Poular Product</h1>
            <div className='Container'>
                <div className='card' id="firstCard">
                    {Object.keys(FetchData).map((categoryKey, index) => {
                        const category = FetchData[categoryKey];
                        return (
                            <div className='item' key={index} onClick={() => handleCategoryChange(categoryKey)}>
                                <img src={watch} alt={category.name} />
                                <p>{category.name}</p>
                            </div>
                        );
                    })}
                </div>
                <div class="card" id="c">
                    <img id="speicalImg" src={watch} alt={FetchData[selectedCategory].name} />
                </div>
                {FetchData[selectedCategory].data.map((card, index) => (
                    <div className='card' key={index}>
                        <img src={card.src} alt={card.title} />
                        <p>{card.title}</p>
                        <p>{card.description}</p>
                        <p style={{ color: "red" }}>{card.price + " $"}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Card;
