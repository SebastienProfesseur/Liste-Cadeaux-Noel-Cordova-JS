class CadeauDAO{
  constructor(){
    this.listeCadeau = [];
  }

  lister(){
    if(localStorage['cadeau']){
      this.listeCadeau = JSON.parse(localStorage['cadeau']);
    }

    for(let position in this.listeCadeau){
      let cadeau = new Cadeau(this.listeCadeau[position].nom,
                              this.listeCadeau[position].marque,
                              this.listeCadeau[position].description,
                              this.listeCadeau[position].id);

      this.listeCadeau[cadeau.id] = cadeau;
    }

    return this.listeCadeau;
  }

  ajouter(cadeau)
  {
    // il faut ici attribuer un id au cadeau
    if(this.listeCadeau.length > 0)
      cadeau.id = this.listeCadeau[this.listeCadeau.length-1].id + 1;
    else
      cadeau.id = 0;

    this.listeCadeau[cadeau.id] = cadeau;
    localStorage['cadeau'] = JSON.stringify(this.listeCadeau);
    console.log("JSON.stringify(this.listeCadeau) : " + JSON.stringify(this.listeCadeau));

  }

}















