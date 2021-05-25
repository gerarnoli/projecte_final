# Projecte MERN Stack
![enter image description here](https://static.platzi.com/media/blog/mern-stack-284eedb6-ee6b-4441-b181-5064a453a15a.png)
Projecte final del CFGS Desenvolupament d'Aplicacions Web on posem en pràctica tots els coneixements que hem anat aprenent durant el curs. En el nostre cas hem utilitzat l'stack d'aplicacions MERN que es: MongoDB,
Express JS, React i Node JS.

Especificament el nostre projecte l'executarem a Amazon Web Services
![enter image description here](https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png)
## Instalació
Primer de tot necessitem tindre la nostra Instancia de AWS, nosaltres hem agafat un Ubuntu Server 20.04 LTS.
En el terminal fem: 
Primer de tot actualitzem:

    sudo apt-get update
  
Instalem apache, git, npm i mongodb:

    sudo apt install apache2
    sudo apt install git
    sudo apt install npm
    sudo apt install mongodb
Fem git clone del nostre projecte

    sudo git clone https://github.com/gerarnoli/projecte_final.git
Anem a la carpeta projecte final i fem un npm build

    cd projecte_final
    npm build

Amb la carpeta que hem creat que es diu build fem un move cap a la carpeta Apache
	

    mv build /var/www/html


Ja tenim la web estatica funcionant, ara faltaria fer funcionar la part de backend de base de dades i el crud. Per la part de MongoDB farem dues comandes, wget i mongodb import
	

    wget https://covid-vacuna.app/data/latest.json
    mongoimport --jsonArray --db vacuna --collection docs --file latest.json

Ja tenim la part de la base de dades, faltaria el CRUD i ja estaria que seria anar dintre de la carpeta projecte_final/src/backend:

    node index.js

Ja podriem anar a la noster IP de AWS i la nostre web app estaria en funcionament!

   


