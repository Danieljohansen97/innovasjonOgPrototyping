const hutMainContainer = document.querySelector('#hutMainContainer');

const modalContent = document.querySelector('#modalContent');
const modalTitle = document.querySelector('#exampleModalCenterTitle');

const hut1 = {
    title: "Høystandard hytte med 20 sengeplasser og jacuzzi",
    rooms: 8,
    ppw: "17 000kr - 29 000kr",
    facilities: "Boblebad, Husdyr tillat, Oppvaskmaskin, Peis, TV, Tørketrommel og vaskemaskin",
    near: "Alpinanlegg, vann",
    location: "Lampeland",
    info: "Stor høystandard hytte med fantastisk utsikt og fine sol forhold. Området er åpent og luftig med storslått natur. Skiløype rett utenfor med kort vei inn på fjellet og med flotte terreng både sommer som vinter.",
    img: "./src/img/hut1.jpg" 
}
const hut2 = {
    title: "Flott familiehytte",
    rooms: 3,
    ppw: "6000kr - 22 000kr",
    facilities: "balkong, internett, Oppvaskmaskin, peis, TV, tørketrommel og vaskemaskin",
    near: "Alpinanlegg, vann, golf, jaktterreng, turterreng",
    location: "Hafjell",
    info: "Pen og moderne hytte med 3 soverom, koselig åpen kjøkken-stue med peisovn. Perfekt kombinasjon av tradisjonelle kvaliteter og moderne hyttekomfort. Langrennsløyper går rett utenfor.",
    img: "./src/img/hut2.jpg" 
}
const hut3 = {
    title: "Koselig hytte på Talgje",
    rooms: 4,
    ppw: "4500kr - 6500kr",
    facilities: "Båtplass, hagemøbler, oppvasmaskin",
    near: "Turterreng",
    location: "Stavanger",
    info: "Fin hytte på Talgje, en flott øy i Ryfylke i Rogaland med fastlandsforbindele. Kort vei til sjøen, med egen båtplass. Ypperlig for bading, grilling og fiske.",
    img: "./src/img/hut3.jpg" 
}
const hut4 = {
    title: "Nyere og luksuriøs hytte",
    rooms: 4,
    ppw: "20 000kr - 50 000kr",
    facilities: "Boblebad, Oppvaskmaskin, peis, TV, tørketrommel og vaskemaskin, garasje, rullestolvennlig",
    near: "Alpinanlegg, vann, jaktterreng, Offentlig transport, turterreng.",
    location: "Myrkdalen",
    info: "Ski-inn ski-out familiehytte I landlige omgivelser I Myrkdalen Fjellandsby med flott utsikt. Kort avstand til flotte turområder.",
    img: "./src/img/hut4.jpg" 
}
const hut5 = {
    title: "Koselig liten og primitiv hytte",
    rooms: 1,
    ppw: "3000kr - 6000kr",
    facilities: "Husdyr tillat, peis, båtplass",
    near: "Alpinanlegg, vann",
    location: "Voss",
    info: "Liten hytte med sengeplass til 2. Det er ikke innlagt vann, men den har strøm. Perfekt for de som liker golf og fiske. Hytten har en liten robåt og ligger rett ved golfparken. Stor og fin terrasse hvor du kan nyte sommerkveldene.",
    img: "./src/img/hut5.jpg" 
}
const hut6 = {
    title: "Flott sørlandshytte til leie ved sjøen",
    rooms: 3,
    ppw: "7000kr - 9000kr",
    facilities: "Oppvaskmaskin, peis, TV, tørketrommel, vaskemaskin, grill",
    near: "Sjø, fiskemulighet, svømmehall, turterreng",
    location: "Sørlandet",
    info: "Ny flott hytte bygget i 2015. Koselig med 3 soverom, to bad, kjøkken og stue. Ca 30 meter til sjøen. Liten og flott strand med skjellsand rett nedenfor hytten. Båten ligger fortøyd i brygge rett nedenfor. Gode fiskemuligheter og turmuligheter.",
    img: "./src/img/hut6.jpg" 
}



function moreInfo(hut) {
    modalTitle.innerHTML = "";
    modalContent.innerHTML = "";
    let html = `
        <img style="max-width: 100%;" src="${hut.img}">
        <p>Pris per uke: ${hut.ppw}</p>
        <p>Soverom: ${hut.ppw}</p>
        <p>Beliggenhet: ${hut.location}</p>
        <p>I nærheten av: ${hut.near}</p>
        <p>Fasiliteter: ${hut.facilities}</p>
        <p>Info: ${hut.info}</p>
    `;

    modalTitle.innerHTML = hut.title;
    modalContent.innerHTML = html;
    $('#exampleModalCenter').modal('show');
}