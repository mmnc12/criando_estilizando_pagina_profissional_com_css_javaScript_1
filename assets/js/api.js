async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/mmnc12/criando_estilizando_pagina_profissional_com_css_javaScript_1/main/data/profile.json';
    

    const fetching = await fetch(url);
    return await fetching.json();
}