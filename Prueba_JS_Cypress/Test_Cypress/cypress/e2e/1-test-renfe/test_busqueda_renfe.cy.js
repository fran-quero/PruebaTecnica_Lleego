describe("Prueba buscador Renfe", () => {
  context("Búsqueda de billetes", () => {
    
    beforeEach(() => {

      // Visita la página antes de cada test
      cy.visit("https://www.renfe.com/es/es"); 

      // Aceptamos las cokies de la pagina
      cy.get("#onetrust-reject-all-handler", { timeout: 10000 }).click({ force: true }); 

      // Espera a que cargue la página
      cy.get("#origin", { timeout: 100000 }).should("be.visible"); 
    });

    it("Búsqueda de billete", () => {
      
      //Utilizamos los datos de nuestro json
      cy.fixture("datos_ejemplo.json").then((datos) => {

        
        
        //Recogemos el campo y le damos el valor desde nuestro json
        cy.get("#origin").type(datos.ejemplo1.origen); 

        // Espera que aparezcan las opciones y seleccionamos el primer elemento
        cy.get("#awesomplete_list_1 li[role='option']").should('be.visible').first().click(); 
        

        cy.wait(500)


        //Recogemos el campo destino y le damos el valor desde nuestro json
        cy.get("#destination").type(datos.ejemplo1.destino);

        //Espera que aparezcan las opciones y seleccionamos el primer elemento
        cy.get("#awesomplete_list_2 li[role='option']").should('be.visible').first().click(); 
        
        cy.wait(500)

        //Abrimos el desplegable del calendario
        cy.get("#first-input").click({force:true});

        //Seleccionamos fecha de ida
        cy.get(`.lightpick__day[data-time="${datos.ejemplo1.fecha_ida}"]`).click(); 


        cy.wait(500)


        //Seleccionar fecha de vuelta
        cy.get(`.lightpick__day[data-time="${datos.ejemplo1.fecha_vuelta}"]`).click(); 

        //Seleccionado el boton de aceptar seleccion
        cy.get(".lightpick__apply-action-sub").click({force:true})

        cy.wait(1000)

        //Asignar pasajeros
        cy.get("#passengersSelection").click({ force: true });

        cy.wait(500)

        //Añadimos uno al adulto
        cy.get('[aria-label="añadir pasajero adulto"] > .rf-passengers-alternative__btn-ico').click();

        cy.wait(500)

        //Recogemos el boton para aceptar los cambios en pasajeros y le damos click
        cy.get("button.rf-passengers-alternative__button-list.rf-passengers-alternative__button-list--primary").click({force:true});

        //Recogemos el boton de buscar billetos y le damos click
        cy.get('#ticketSearchBt').click({forze:true});
        

        // Cambiamos de origen a "https://venta.renfe.com"
        cy.origin('https://venta.renfe.com', () => {

          //Comprobamos que la cargar la pagina se encuentre un campo clave visible
          cy.get("#stv-tab", { timeout: 20000 }).should("be.visible"); 

        });



       
        
        
      });
    });
  });
});
