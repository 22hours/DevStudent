import React from "react";
import axios from "axios";

const PublicIpGetter = async () => {
    axios
        .get("https://api.ipify.org/?format=json")
        .then((response) => {
            console.log(response.data.ip);
            localStorage.setItem("ip", response.data.ip);
            return response.ip;
        })
        .catch(function (error) {
            console.log(error);
            return null;
        });
};

export default PublicIpGetter;
