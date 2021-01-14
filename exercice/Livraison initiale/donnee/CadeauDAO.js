class CadeauDAO{
  constructor(){

    this.listeCadeau = [{nom:"Auto téléguidée", marque:"Tesla", description:"Petite voiture pour faire rêver", id:0},
                        {nom:"Montre intelligente", marque:"Neo Pebble", description:"Une vraie montre intelligente open source", id:1},
                        {nom:"Lunette de réalité augmentée", marque:"Seer Glasses", description:"Des lunettes qui me montrent l'invisible", id:2}]

  }

  lister(){

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
  }

}















