import React from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";

export default function HeroDetails() {
     const {state} =  useLocation();

     console.log(state);

        return(
            <div>
                <h2 style={{color:"WHITE"}}>HERO DETAILS PAGE</h2>
            </div>
        )
}