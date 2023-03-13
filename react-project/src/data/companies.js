let companies_list = [
    { 
        name: 'Teleperformance', 
        location: '1',
        rating:'3',
        img_src: 'https://lideresmexicanos.com/wp-content/uploads/2021/05/GPTW3.jpg'
    },
    { 
        name: 'Sliders', 
        location: '1',
        rating:'3',
        img_src: 'https://media-cdn.tripadvisor.com/media/photo-s/13/23/91/87/entrada-a-sliders-polanco.jpg'
    },
    { 
        name: 'Secretaria de A.F', 
        location: '1 Review',
        rating:'4',
        img_src: 'https://www.yo-local.com/sites/default/files/imagen_negocio/0dl-012.jpg'
    },
    { 
        name: 'CMF GAM', 
        location: '1',
        rating:'4',
        img_src: 'https://www.elsoldesalamanca.com.mx/local/x3m4vp-clinica-issste-1/ALTERNATES/LANDSCAPE_960/Clinica-issste-1'
    },
    { 
        name: 'Starbucks Centro Historico', 
        location: '1',
        rating:'5',
        img_src: 'https://fastly.4sqi.net/img/general/600x600/Ur8QqZ-wNhOFGSHHMXMh6ID_5UBAq38Rab1h5UuRIKc.jpg'
    },
    { 
        name: 'Hospital Español', 
        location: '1',
        rating:'4',
        img_src: 'https://pbs.twimg.com/ext_tw_video_thumb/1253839851524362240/pu/img/5haBTSw4mrk8hLzA.jpg'
    },
    { 
        name: 'BBVA', 
        location: '1',
        rating:'4',
        img_src: 'https://www.jll.com.co/images/client-stories/am-Mexico-jll-Torre-BBVA-gallery-12.jpg.rendition/cq5dam.web.1280.1280.jpeg'
    },
    { 
        name: 'Banorte', 
        location: '1',
        rating:'4',
        img_src: 'https://www.banorte.com/cms/imagenes/2sep2020.jpg'
    },
    { 
        name: 'Rhenus Torre Mitikah', 
        location: '1',
        rating: '4',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiHb_hHI6LQZVbNf0OyjhJJhOQcS3aQPOwIop3BJQkiYgMjK34wqZvEPGz1T3IMmMfsg&usqp=CAU'
    },
    { 
        name: 'Hospital General de Mexico', 
        location: '1',
        rating: '2',
        img_src: 'https://storage.googleapis.com/www-saludiario-com/wp-content/uploads/2023/02/44e63ee1-hospital-general-de-mexico.jpeg'
    },
    { 
        name: 'Escuela Moderna Americana', 
        location: '1',
        rating: '3',
        img_src: 'https://edutory.mx/wp-content/uploads/2021/05/escuela-moderna-americana.jpeg'
    },
    { 
        name: 'Aeroméxico', 
        location: '1',
        rating: '3',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
    { 
        name: 'Pipiol Camp', 
        location: '1',
        rating: '5',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
    { 
        name: 'INDICE', 
        location: '1',
        rating: '5',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
    { 
        name: 'Millesime', 
        location: '1',
        rating: '4',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
    { 
        name: 'Alsea', 
        location: '1',
        rating: '4',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
    { 
        name: 'AGVM', 
        location: '1',
        rating: '3',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
    { 
        name: 'Medica Mia', 
        location: '1',
        rating:'3',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
    { 
        name: 'Nápoles', 
        location: '1',
        rating:'5',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
    { 
        name: 'Svetia', 
        location: '1',
        rating:'5',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
    { 
        name: 'Instituto Mexicano del Petróleo', 
        location: '1',
        rating:'4',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
    { 
        name: 'deep_dive', 
        location: '1',
        rating:'5',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
    },
  ];

  export default companies_list;