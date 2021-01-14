class Application {
  constructor(window, cadeauDAO, vueListeCadeau, vueAjouterCadeau){

    this.window = window;
    this.cadeauDAO = cadeauDAO;

    this.vueListeCadeau = vueListeCadeau;

    this.vueAjouterCadeau = vueAjouterCadeau;
    // C'est l'équivalent de function(cadeau){this.actionAjouterCadeau(cadeau)}
    this.vueAjouterCadeau.initialiserActionAjouterCadeau(cadeau =>this.actionAjouterCadeau(cadeau));

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListeCadeau.initialiserListeCadeau(this.cadeauDAO.lister());
      this.vueListeCadeau.afficher();

    }else if(hash.match(/^#ajouter-cadeau/)){

      this.vueAjouterCadeau.afficher();

    }
  }

  actionAjouterCadeau(cadeau){
    this.cadeauDAO.ajouter(cadeau);
    this.window.location.hash = "#";

  }

}

new Application(window, new CadeauDAO(), new VueListeCadeau(), new VueAjouterCadeau());

